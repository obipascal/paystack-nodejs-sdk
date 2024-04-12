import { BatchRecipientBody, TransferRecipientBody } from "../types/transferRecipient";
export declare class TransferRecipients {
    private httpClient;
    /**
     * The Transfer Recipients API allows you create and manage beneficiaries that you send money to.
     * @param apiKey Paystack API key
     */
    constructor(apiKey: string);
    /**
     * Creates a new recipient. A duplicate account number will lead to the retrieval of the existing record.
     * @param data Transfer recipient details
     */
    create(data: TransferRecipientBody): Promise<import("axios").AxiosResponse<any, any>>;
    /**
     * Create multiple transfer recipients in batches. A duplicate account number will lead to the retrieval of the existing record.
     * @param data List of transfer recipient details
     */
    createBulk(data: BatchRecipientBody): Promise<import("axios").AxiosResponse<any, any>>;
    /**
     * List transfer recipients available on your integration
     */
    list(): Promise<import("axios").AxiosResponse<any, any>>;
    /**
     * Fetch the details of a transfer recipient
     * @param id_or_code Transfer recipient ID or code
     */
    fetch(id_or_code: string): Promise<import("axios").AxiosResponse<any, any>>;
    /**
     * Update transfer recipients available on your integration
     * @param id_or_code Transfer recipient ID or code
     * @param data Updated transfer recipient details
     */
    update(id_or_code: string, data: TransferRecipientBody): Promise<import("axios").AxiosResponse<any, any>>;
    /**
     * Delete a transfer recipient (sets the transfer recipient to inactive)
     * @param id_or_code Transfer recipient ID or code
     */
    delete(id_or_code: string): Promise<import("axios").AxiosResponse<any, any>>;
}
