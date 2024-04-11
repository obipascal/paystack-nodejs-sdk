import HttpRequest, { HttpRequestEndpoints } from "../config/request";
export default class TransactionSplit {
    httpClient;
    /**
     * The Transaction Splits API enables merchants split the settlement for a transaction across their payout account, and one or more subaccounts.
     * @param apiKey Paystack API key
     */
    constructor(apiKey) {
        this.httpClient = HttpRequest(apiKey);
    }
    /**
     * Create a split payment on your integration
     * @param data Transaction split data
     */
    async create(data) {
        return await this.httpClient.post(HttpRequestEndpoints.transactionSplit.create, data);
    }
    /**
     * List the transaction splits available on your integration
     */
    async list() {
        return await this.httpClient.get(HttpRequestEndpoints.transactionSplit.list);
    }
    /**
     * Get details of a split on your integration
     * @param id Transaction split ID
     */
    async fetch(id) {
        return await this.httpClient.get(HttpRequestEndpoints.transactionSplit.fetch.replace(":id", id));
    }
    /**
     * Update a transaction split details on your integration
     * @param id Transaction split ID
     * @param data Transaction split data
     */
    async update(id, data) {
        return await this.httpClient.put(HttpRequestEndpoints.transactionSplit.update.replace(":id", id), data);
    }
    /**
     * Add a Subaccount to a Transaction Split, or update the share of an existing Subaccount in a Transaction Split
     * @param id Transaction split ID
     * @param data Split subaccount data
     */
    async addOrUpdateSplitSubaccount(id, data) {
        return await this.httpClient.post(HttpRequestEndpoints.transactionSplit.addOrUpdateSplitSubaccount.replace(":id", id), data);
    }
    /**
     * Remove a subaccount from a transaction split
     * @param id Transaction split ID
     * @param subaccount Subaccount code
     */
    async removeSplitSubaccount(id, data) {
        return await this.httpClient.post(HttpRequestEndpoints.transactionSplit.removeSplitSubaccount.replace(":id", id), data);
    }
}
