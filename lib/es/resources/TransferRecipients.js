import HttpRequest, { HttpRequestEndpoints } from "../config/request";
export class TransferRecipients {
    httpClient;
    /**
     * The Transfer Recipients API allows you create and manage beneficiaries that you send money to.
     * @param apiKey Paystack API key
     */
    constructor(apiKey) {
        this.httpClient = HttpRequest(apiKey);
    }
    /**
     * Creates a new recipient. A duplicate account number will lead to the retrieval of the existing record.
     * @param data Transfer recipient details
     */
    async create(data) {
        return await this.httpClient.post(HttpRequestEndpoints.transferRecipient.create, data);
    }
    /**
     * Create multiple transfer recipients in batches. A duplicate account number will lead to the retrieval of the existing record.
     * @param data List of transfer recipient details
     */
    async createBulk(data) {
        return await this.httpClient.post(HttpRequestEndpoints.transferRecipient.createBulk, data);
    }
    /**
     * List transfer recipients available on your integration
     */
    async list() {
        return await this.httpClient.get(HttpRequestEndpoints.transferRecipient.list);
    }
    /**
     * Fetch the details of a transfer recipient
     * @param id_or_code Transfer recipient ID or code
     */
    async fetch(id_or_code) {
        return await this.httpClient.get(HttpRequestEndpoints.transferRecipient.fetch.replace(":id_or_code", id_or_code));
    }
    /**
     * Update transfer recipients available on your integration
     * @param id_or_code Transfer recipient ID or code
     * @param data Updated transfer recipient details
     */
    async update(id_or_code, data) {
        return await this.httpClient.put(HttpRequestEndpoints.transferRecipient.update.replace(":id_or_code", id_or_code), data);
    }
    /**
     * Delete a transfer recipient (sets the transfer recipient to inactive)
     * @param id_or_code Transfer recipient ID or code
     */
    async delete(id_or_code) {
        return await this.httpClient.delete(HttpRequestEndpoints.transferRecipient.delete.replace(":id_or_code", id_or_code));
    }
}
