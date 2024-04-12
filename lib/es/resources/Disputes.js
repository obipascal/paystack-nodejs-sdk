import HttpRequest, { HttpRequestEndpoints } from "../config/request";
export default class Disputes {
    httpClient;
    /**
     * The Disputes API allows you manage transaction disputes on your integration.
     * @param apiKey Paystack API key
     */
    constructor(apiKey) {
        this.httpClient = HttpRequest(apiKey);
    }
    /**
     * List disputes
     * @param params Filter options
     */
    async list(params) {
        return await this.httpClient.get(HttpRequestEndpoints.dispute.list, { params });
    }
    /**
     * Fetch a dispute
     * @param id Dispute ID
     */
    async fetch(id) {
        return await this.httpClient.get(HttpRequestEndpoints.dispute.fetch.replace(":id", id));
    }
    /**
     * List disputes for a transaction
     * @param id Transaction ID
     */
    async listTransactionDispute(id) {
        return await this.httpClient.get(HttpRequestEndpoints.dispute.listTransactionDispute.replace(":id", id));
    }
    /**
     * Update a dispute
     * @param id Dispute ID
     * @param data Dispute details
     */
    async update(id, data) {
        return await this.httpClient.put(HttpRequestEndpoints.dispute.update.replace(":id", id), data);
    }
    /**
     * Add evidence to a dispute
     * @param id Dispute ID
     * @param data Evidence details
     */
    async addEvidence(id, data) {
        return await this.httpClient.post(HttpRequestEndpoints.dispute.addEvidence.replace(":id", id), data);
    }
    /**
     * Fetch upload url
     * @param id Dispute ID
     * @param params Upload options
     */
    async fetchUploadUrl(id, params) {
        return await this.httpClient.get(HttpRequestEndpoints.dispute.fetchUploadUrl.replace(":id", id), { params });
    }
    /**
     * Resolve a dispute
     * @param id Dispute ID
     * @param data Resolution details
     */
    async resolve(id, data) {
        return await this.httpClient.post(HttpRequestEndpoints.dispute.resolve.replace(":id", id), data);
    }
    /**
     * Export disputes
     */
    async export(params) {
        return await this.httpClient.get(HttpRequestEndpoints.dispute.export, { params });
    }
}
