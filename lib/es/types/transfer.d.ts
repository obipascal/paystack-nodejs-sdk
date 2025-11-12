import { AxiosInstance, AxiosResponse } from "axios";
import { Currencies } from "./const";
export type TransferBody = {
    /** Where should we transfer from? Only balance for now */
    source: "balance" | string;
    /** Amount to transfer in kobo if currency is NGN and pesewas if currency is GHS. */
    amount: number;
    /** Code for transfer recipient */
    recipient: string;
    /** The reason for the transfer */
    reason?: string;
    /** Specify the currency of the transfer. Defaults to NGN */
    currency?: Currencies;
    /** If specified, the field should be a unique identifier (in lowercase) for the object. Only -,_ and alphanumeric characters allowed. */
    reference?: string;
};
export type FinalizeTransferBody = {
    /** The transfer code you want to finalize */
    transfer_code: string;
    /** OTP sent to business phone to verify transfer */
    otp: string;
};
export type BulkTransferBody = {
    /** Where should we transfer from? Only balance for now */
    source: "balance" | string;
    /** A list of transfer object. Each object should contain amount, recipient, and reference */
    transfers: Array<TransferBody>;
};
export type ResendTranasferCodeBody = {
    /** Transfer code */
    transfer_code: string;
    /** Either resend_otp or transfer */
    reason: "resend_otp" | "transfer";
};
export type FinalizeDisableOTPBody = {
    /** OTP sent to business phone to verify transfer */
    otp: string;
};
export interface TransferRecipientDetails {
    account_number: string;
    account_name: string | null;
    bank_code: string;
    bank_name: string;
}
export interface TransferRecipient {
    domain: string;
    type: string;
    currency: string;
    name: string;
    details: TransferRecipientDetails;
    description: string;
    metadata: Record<string, any> | null;
    recipient_code: string;
    active: boolean;
    id: number;
    integration: number;
    createdAt: string;
    updatedAt: string;
}
export interface TransferData {
    integration: number;
    domain: string;
    amount: number;
    currency: string;
    source: string;
    reason: string;
    recipient: number | TransferRecipient;
    status: string;
    transfer_code: string;
    id: number;
    createdAt: string;
    updatedAt: string;
    reference: string;
    source_details: any | null;
    failures: any | null;
    titan_code: string | null;
    transferred_at: string | null;
    transfersessionid?: any[];
    transfertrials?: any[];
}
export interface TransferInitiateResponse extends AxiosResponse {
    message: string;
    data: TransferData;
}
export interface TransferListResponse extends AxiosResponse {
    message: string;
    data: TransferData[];
    meta: {
        total: number;
        skipped: number;
        perPage: number;
        page: number;
        pageCount: number;
    };
}
export interface TransferFetchResponse extends AxiosResponse {
    message: string;
    data: TransferData;
}
export interface TransferFinalizeResponse extends AxiosResponse {
    message: string;
    data: TransferData;
}
export interface BulkTransferItem {
    reference: string;
    recipient: string;
    amount: number;
    transfer_code: string;
    currency: string;
    status: string;
}
export interface TransferBulkResponse extends AxiosResponse {
    message: string;
    data: BulkTransferItem[];
}
export interface TransferVerifyResponse extends AxiosResponse {
    message: string;
    data: TransferData;
}
export interface BalanceData {
    currency: string;
    balance: number;
}
export interface TransferBalanceResponse extends AxiosResponse {
    message: string;
    data: BalanceData[];
}
export interface LedgerEntry {
    integration: number;
    domain: string;
    balance: number;
    currency: string;
    difference: number;
    reason: string;
    model_responsible: string;
    model_row: number;
    id: number;
    createdAt: string;
    updatedAt: string;
}
export interface TransferLedgerResponse extends AxiosResponse {
    message: string;
    data: LedgerEntry[];
    meta: {
        total: number;
        skipped: number;
        perPage: number;
        page: number;
        pageCount: number;
    };
}
export interface TransferResendOtpResponse extends AxiosResponse {
    message: string;
    data: string;
}
export interface TransferDisableOtpResponse extends AxiosResponse {
    message: string;
    data: string;
}
export interface TransferDisableOtpFinalizeResponse extends AxiosResponse {
    message: string;
    data: string;
}
export interface TransferEnableOtpResponse extends AxiosResponse {
    message: string;
    data: string;
}
export declare class Transfer {
    readonly httpClient: AxiosInstance;
    /**
     * The Transfers API allows you automate sending money to your customers.
     * @param apiKey Paystack API key
     */
    constructor(apiKey: string);
    /**
     * Send money to your customers.
     * _________________________________________________________
     * Send money to your customers. Status of transfer object returned will be pending if OTP is disabled. In the event that an OTP is required, status will read otp.
     * @param data Transfer details
     */
    initiate(data: TransferBody): Promise<TransferInitiateResponse>;
    /**
     * List the transfers made on your integration.
     */
    list(): Promise<TransferListResponse>;
    /**
     * Get details of a transfer on your integration.
     * @param id_or_code Transfer ID or code
     */
    fetch(id_or_code: string): Promise<TransferFetchResponse>;
    /**
     * Finalize an initiated transfer
     * @param data Transfer details
     */
    finalize(data: FinalizeTransferBody): Promise<TransferFinalizeResponse>;
    /**
     * Batch multiple transfers in a single request. You need to disable the Transfers OTP requirement to use this endpoint.
     * @param data Transfer details
     */
    bulk(data: BulkTransferBody): Promise<TransferBulkResponse>;
    /**
     * Verify the status of a transfer on your integration.
     * @param reference Transfer reference
     */
    verify(reference: string): Promise<TransferVerifyResponse>;
    /**
     * Fetch the available balance on your integration
     */
    checkBalance(): Promise<TransferBalanceResponse>;
    /**
     * Fetch all pay-ins and pay-outs that occured on your integration
     */
    ledger(): Promise<TransferLedgerResponse>;
    /**
     * Generates a new OTP and sends to customer in the event they are having trouble receiving one.
     * @param data Transfer details
     */
    resendOtp(data: ResendTranasferCodeBody): Promise<TransferResendOtpResponse>;
    /**
     * This is used in the event that you want to be able to complete transfers programmatically without use of OTPs. No arguments required. You will get an OTP to complete the request.
     */
    disableOtp(): Promise<TransferDisableOtpResponse>;
    /**
     * Finalize the request to disable OTP on your transfers.
     * @param data Transfer details
     */
    disableOtpFinalize(data: FinalizeTransferBody): Promise<TransferDisableOtpFinalizeResponse>;
    /**
     * In the event that a customer wants to stop being able to complete transfers programmatically, this endpoint helps turn OTP requirement back on. No arguments required.
     */
    enableOtp(): Promise<TransferEnableOtpResponse>;
}
