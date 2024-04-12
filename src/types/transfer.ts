import { AxiosInstance, AxiosResponse } from "axios";
import { Currencies } from "./const";

export type TransferBody = {
    /** Where should we transfer from? Only balance for now */
    source: "balance" | string;
    /** Amount to transfer in kobo if currency is NGN and pesewas if currency is GHS. */
    amount: number;
    /** Code for transfer recipient */
    recipient: string;
    // --------- [ Optionals] ---------
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
    initiate(data: TransferBody): Promise<AxiosResponse<any, any>>;

    /**
     * List the transfers made on your integration.
     */
    list(): Promise<AxiosResponse<any, any>>;

    /**
     * Get details of a transfer on your integration.
     * @param id_or_code Transfer ID or code
     */
    fetch(id_or_code: string): Promise<AxiosResponse<any, any>>;

    /**
     * Finalize an initiated transfer
     * @param data Transfer details
     */
    finalize(data: FinalizeTransferBody): Promise<AxiosResponse<any, any>>;

    /**
     * Batch multiple transfers in a single request. You need to disable the Transfers OTP requirement to use this endpoint.
     * @param data Transfer details
     */
    bulk(data: BulkTransferBody): Promise<AxiosResponse<any, any>>;

    /**
     * Verify the status of a transfer on your integration.
     * @param reference Transfer reference
     */
    verify(reference: string): Promise<AxiosResponse<any, any>>;

    /**
     * Fetch the available balance on your integration
     */
    checkBalance(): Promise<AxiosResponse<any, any>>;

    /**
     * Fetch all pay-ins and pay-outs that occured on your integration
     */
    ledger(): Promise<AxiosResponse<any, any>>;

    /**
     * Generates a new OTP and sends to customer in the event they are having trouble receiving one.
     * @param data Transfer details
     */
    resendOtp(data: ResendTranasferCodeBody): Promise<AxiosResponse<any, any>>;

    /**
     * This is used in the event that you want to be able to complete transfers programmatically without use of OTPs. No arguments required. You will get an OTP to complete the request.
     */
    disableOtp(): Promise<AxiosResponse<any, any>>;

    /**
     * Finalize the request to disable OTP on your transfers.
     * @param data Transfer details
     */
    disableOtpFinalize(
        data: FinalizeTransferBody
    ): Promise<AxiosResponse<any, any>>;

    /**
     * In the event that a customer wants to stop being able to complete transfers programmatically, this endpoint helps turn OTP requirement back on. No arguments required.
     */
    enableOtp(): Promise<AxiosResponse<any, any>>;
}
