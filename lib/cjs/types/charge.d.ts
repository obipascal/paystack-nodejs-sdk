import { AxiosResponse } from "axios";
import { PaginationParams } from "./const";
export type BulkChargeBody = {
    /** Transaction authorization reusable code */
    authorization: string;
    /** The charge amount */
    amount: number;
    /** The transaction reference */
    reference: string;
};
export type ChargeBody = {
    /** Customer's email address */
    email: string;
    /** Amount in subunit of the supported currency */
    amount: number;
    /** Bank account to charge (don't send if charging an authorization code) */
    bank?: {
        code: string;
        account_number: string;
    };
    /** Takes the settings for the Pay with Transfer (PwT) channel. Pass in the account_expires_at param to set the expiry time. */
    bank_transfer?: {
        account_expires_at: string;
    };
    /** Takes a provider object with the either of the following values: scan-to-pay, visa */
    qr?: {
        provider: "visa" | "scan-to-pay";
    };
    /** An authorization code to charge (don't send if charging a bank account) */
    authorization_code?: string;
    /** 4-digit PIN (send with a non-reusable authorization code) */
    pin?: string;
    /** A JSON object */
    metadata?: Record<string, any>;
    /** Unique transaction reference. Only -, .`, = and alphanumeric characters allowed. */
    reference?: string;
    /** USSD type to charge (don't send if charging an authorization code, bank or card) */
    ussd?: {
        /** Guaranty Trust Bank	737
        United Bank of Africa	919
        Sterling Bank	822
        Zenith Bank	966 */
        type: "737" | "919" | "822" | "966";
    };
    /** Plan code  */
    plan?: string;
    /**
     * Mobile details (don't send if charging an authorization code, bank or card)
     * _______________________________________________________________
     * This feature is only available to businesses in Ghana and Kenya.
     */
    mobile_money?: {
        phone: string;
        /** MTN	mtn	Ghana
        AirtelTigo	atl	Ghana
        Vodafone	vod	Ghana
        M-Pesa	mpesa	Kenya */
        provider: "mtn" | "atl" | "vod" | "mpesa";
    };
    /** This is the unique identifier of the device a user uses in making payment. Only -, .`, = and alphanumeric characters allowed. */
    device_id?: string;
    /** Fully qualified url, e.g. https://example.com/ . Use this to override the callback url provided on the dashboard for this transaction */
    callback_url?: string;
    /** The transaction currency. Defaults to your integration currency. */
    currency?: string;
    /** Number of times to charge customer during subscription to plan */
    invoice_limit?: number;
    /** An array of payment channels to control what channels you want to make available to the user to make a payment with. Available channels include: ["card", "bank", "apple_pay", "ussd", "qr", "mobile_money", "bank_transfer", "eft"] */
    channels?: Array<string>;
    /** The split code of the transaction split. e.g. SPL_98WF13Eb3w */
    split_code?: string;
    /** The code for the subaccount that owns the payment. e.g. ACCT_8f4s1eq7ml6rlzj */
    subaccount?: string;
    /** An amount used to override the split configuration for a single split payment. If set, the amount specified goes to the main account regardless of the split configuration. */
    transaction_charge?: number;
    /** Use this param to indicate who bears the transaction charges. Allowed values are: account or subaccount (defaults to account). */
    bearer?: "account" | "subaccount" | string;
};
export type SubmitPINBody = {
    /** PIN submitted by user */
    pin: string;
    /** Reference for transaction that requested pin */
    reference: string;
};
export type SubmitOtpBody = {
    /** OTP submitted by user */
    otp: string;
    /** Reference for ongoing transaction */
    reference: string;
};
export type SubmitPhoneBody = {
    /** Phone number submitted by user */
    phone: string;
    /** Reference for ongoing transaction */
    reference: string;
};
export type SubmitBirthdayBody = {
    /** Birthday submitted by user */
    birthday: string;
    /** Reference for ongoing transaction */
    reference: string;
};
export type SubmitAddressBody = {
    /** Address submitted by user */
    address: string;
    /** Reference for ongoing transaction */
    reference: string;
    /** City submitted by user */
    city: string;
    /** State submitted by user */
    state: string;
    /** Zipcode submitted by user */
    zipcode: string;
};
export interface ChargeResponse extends AxiosResponse {
    message: string;
    data: {
        id?: number;
        domain: string;
        status: string;
        reference: string;
        amount: number;
        message?: string;
        gateway_response?: string;
        paid_at?: string;
        created_at: string;
        channel: string;
        currency: string;
        ip_address?: string;
        metadata?: Record<string, any>;
        fees?: number;
        customer?: Record<string, any>;
        authorization?: Record<string, any>;
        plan?: any;
        transaction_date?: string;
        requested_amount?: number;
    };
}
export interface BulkChargeInitiateResponse extends AxiosResponse {
    message: string;
    data: {
        batch_code: string;
        reference: string;
        id: number;
        integration: number;
        domain: string;
        status: string;
        total_charges: number;
        pending_charges: number;
        createdAt: string;
        updatedAt: string;
    };
}
export interface BulkChargeListResponse extends AxiosResponse {
    message: string;
    data: Array<{
        domain: string;
        batch_code: string;
        status: string;
        id: number;
        total_charges?: number;
        pending_charges?: number;
        createdAt: string;
        updatedAt: string;
    }>;
    meta: {
        total: number;
        skipped: number;
        perPage: number;
        page: number;
        pageCount: number;
    };
}
export interface BulkChargeFetchResponse extends AxiosResponse {
    message: string;
    data: {
        domain: string;
        batch_code: string;
        status: string;
        id: number;
        total_charges: number;
        pending_charges: number;
        createdAt: string;
        updatedAt: string;
    };
}
export interface BulkChargeFetchBatchResponse extends AxiosResponse {
    message: string;
    data: Array<{
        integration: number;
        bulkcharge: number;
        customer: Record<string, any>;
        authorization: Record<string, any>;
        transaction: Record<string, any>;
        domain: string;
        amount: number;
        currency: string;
        status: string;
        id: number;
        createdAt: string;
        updatedAt: string;
    }>;
    meta?: {
        total: number;
        skipped: number;
        perPage: number;
        page: number;
        pageCount: number;
    };
}
export interface BulkChargePauseResumeResponse extends AxiosResponse {
    message: string;
}
export declare class BulkCharges {
    /**
     * The Bulk Charges API allows you create and manage multiple recurring payments from your customers.
     * @param apiKey Paystack API key
     */
    constructor(apiKey: string);
    /**
     * Send an array of objects with authorization codes and amount, using the supported currency format, so we can process transactions as a batch.
     * @param data Bulk charge details
     */
    create(data: Record<string, BulkChargeBody[]>): Promise<BulkChargeInitiateResponse>;
    /**
     * This lists all bulk charge batches created by the integration. Statuses can be active, paused, or complete
     * @param params Pagination parameters (optional)
     */
    list(params?: PaginationParams): Promise<BulkChargeListResponse>;
    /**
     * This endpoint retrieves a specific batch code. It also returns useful information on its progress by way of the total_charges and pending_charges attributes.
     * @param id_or_code Bulk charge ID or code
     */
    fetch(id_or_code: string): Promise<BulkChargeFetchResponse>;
    /**
     * This endpoint retrieves the charges associated with a specified batch code. Pagination parameters are available. You can also filter by status. Charge statuses can be pending, success or failed.
     * @param id_or_code Bulk charge ID or code
     * @param params Pagination parameters (optional)
     */
    fetchBatch(id_or_code: string, params?: PaginationParams): Promise<BulkChargeFetchBatchResponse>;
    /**
     * Use this endpoint to pause processing a batch
     * @param batch_code Batch code of the bulk charge
     */
    pause(batch_code: string): Promise<BulkChargePauseResumeResponse>;
    /**
     * Use this endpoint to resume processing a batch
     * @param batch_code Batch code of the bulk charge
     */
    resume(batch_code: string): Promise<BulkChargePauseResumeResponse>;
}
export declare class Charge {
    /**
     * The Charge API allows you to configure payment channel of your choice when initiating a payment.
     * @param apiKey Paystack API key
     */
    constructor(apiKey: string);
    /**
     * Initialize a charge
     * @param data Charge details
     */
    initialize(data: ChargeBody): Promise<ChargeResponse>;
    /**
     * Submit a PIN
     * @param data Charge details
     */
    submitPin(data: SubmitPINBody): Promise<ChargeResponse>;
    /**
     * Submit an OTP
     * @param data Charge details
     */
    submitOtp(data: SubmitOtpBody): Promise<ChargeResponse>;
    /**
     * Submit a phone number
     * @param data Charge details
     */
    submitPhone(data: SubmitPhoneBody): Promise<ChargeResponse>;
    /**
     * Submit a birthday
     * @param data Charge details
     */
    submitBirthday(data: SubmitBirthdayBody): Promise<ChargeResponse>;
    /**
     * Check pending charge
     * @param reference Charge reference
     */
    checkPendingCharge(reference: string): Promise<ChargeResponse>;
    /**
     * Submit an address
     * @param data Charge details
     */
    submitAddress(data: SubmitAddressBody): Promise<ChargeResponse>;
}
