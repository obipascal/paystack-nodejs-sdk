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
    create(data: Record<string, BulkChargeBody[]>): Promise<AxiosResponse<any, any>>;
    /**
     * This lists all bulk charge batches created by the integration. Statuses can be active, paused, or complete
     * @param params Pagination parameters (optional)
     */
    list(params?: PaginationParams): Promise<AxiosResponse<any, any>>;
    /**
     * This endpoint retrieves a specific batch code. It also returns useful information on its progress by way of the total_charges and pending_charges attributes.
     * @param id_or_code Bulk charge ID or code
     */
    fetch(id_or_code: string): Promise<AxiosResponse<any, any>>;
    /**
     * This endpoint retrieves the charges associated with a specified batch code. Pagination parameters are available. You can also filter by status. Charge statuses can be pending, success or failed.
     * @param id_or_code Bulk charge ID or code
     * @param params Pagination parameters (optional)
     */
    fetchBatch(id_or_code: string, params?: PaginationParams): Promise<AxiosResponse<any, any>>;
    /**
     * Use this endpoint to pause processing a batch
     * @param batch_code Batch code of the bulk charge
     */
    pause(batch_code: string): Promise<AxiosResponse<any, any>>;
    /**
     * Use this endpoint to resume processing a batch
     * @param batch_code Batch code of the bulk charge
     */
    resume(batch_code: string): Promise<AxiosResponse<any, any>>;
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
    initialize(data: ChargeBody): Promise<AxiosResponse<any, any>>;
    /**
     * Submit a PIN
     * @param data Charge details
     */
    submitPin(data: SubmitPINBody): Promise<AxiosResponse<any, any>>;
    /**
     * Submit an OTP
     * @param data Charge details
     */
    submitOtp(data: SubmitOtpBody): Promise<AxiosResponse<any, any>>;
    /**
     * Submit a phone number
     * @param data Charge details
     */
    submitPhone(data: SubmitPhoneBody): Promise<AxiosResponse<any, any>>;
    /**
     * Submit a birthday
     * @param data Charge details
     */
    submitBirthday(data: SubmitBirthdayBody): Promise<AxiosResponse<any, any>>;
    /**
     * Check pending charge
     * @param reference Charge reference
     */
    checkPendingCharge(reference: string): Promise<AxiosResponse<any, any>>;
    /**
     * Submit an address
     * @param data Charge details
     */
    submitAddress(data: SubmitAddressBody): Promise<AxiosResponse<any, any>>;
}
