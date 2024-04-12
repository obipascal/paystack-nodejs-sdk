import { BulkTransferBody, FinalizeTransferBody, ResendTranasferCodeBody, TransferBody } from "../types/transfer";
export declare class Transfer {
    private httpClient;
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
    initiate(data: TransferBody): Promise<import("axios").AxiosResponse<any, any>>;
    /**
     * List the transfers made on your integration.
     */
    list(): Promise<import("axios").AxiosResponse<any, any>>;
    /**
     * Get details of a transfer on your integration.
     * @param id_or_code Transfer ID or code
     */
    fetch(id_or_code: string): Promise<import("axios").AxiosResponse<any, any>>;
    /**
     * Finalize an initiated transfer
     * @param data Transfer details
     */
    finalize(data: FinalizeTransferBody): Promise<import("axios").AxiosResponse<any, any>>;
    /**
     * Batch multiple transfers in a single request. You need to disable the Transfers OTP requirement to use this endpoint.
     * @param data Transfer details
     */
    bulk(data: BulkTransferBody): Promise<import("axios").AxiosResponse<any, any>>;
    /**
     * Verify the status of a transfer on your integration.
     * @param reference Transfer reference
     */
    verify(reference: string): Promise<import("axios").AxiosResponse<any, any>>;
    /**
     * Fetch the available balance on your integration
     */
    checkBalance(): Promise<import("axios").AxiosResponse<any, any>>;
    /**
     * Fetch all pay-ins and pay-outs that occured on your integration
     */
    ledger(): Promise<import("axios").AxiosResponse<any, any>>;
    /**
     * Generates a new OTP and sends to customer in the event they are having trouble receiving one.
     * @param data Transfer details
     */
    resendOtp(data: ResendTranasferCodeBody): Promise<import("axios").AxiosResponse<any, any>>;
    /**
     * This is used in the event that you want to be able to complete transfers programmatically without use of OTPs. No arguments required. You will get an OTP to complete the request.
     */
    disableOtp(): Promise<import("axios").AxiosResponse<any, any>>;
    /**
     * Finalize the request to disable OTP on your transfers.
     * @param data Transfer details
     */
    disableOtpFinalize(data: FinalizeTransferBody): Promise<import("axios").AxiosResponse<any, any>>;
    /**
     * In the event that a customer wants to stop being able to complete transfers programmatically, this endpoint helps turn OTP requirement back on. No arguments required.
     */
    enableOtp(): Promise<import("axios").AxiosResponse<any, any>>;
}
