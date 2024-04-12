import HttpRequest, { HttpRequestEndpoints } from "../config/request";
export class Refunds {
    httpClient;
    /**
     * The Refunds API allows you create and manage transaction refunds.
     * @param apiKey Paystack API key
     */
    constructor(apiKey) {
        this.httpClient = HttpRequest(apiKey);
    }
    /**
     * Create a refund
     * @param data Refund details
     */
    async create(data) {
        return await this.httpClient.post(HttpRequestEndpoints.refund.create, data);
    }
    /**
     * List refunds
     */
    async list() {
        return await this.httpClient.get(HttpRequestEndpoints.refund.list);
    }
    /**
     * Fetch a refund
     * @param id Refund ID
     */
    async fetch(id) {
        return await this.httpClient.get(HttpRequestEndpoints.refund.fetch.replace(":id", id));
    }
}
