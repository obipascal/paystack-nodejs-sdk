import HttpRequest, { HttpRequestEndpoints } from "../config/request";
export default class PaymentRequest {
    httpClient;
    /**
     * The Payment Requests API allows you manage requests for payment of goods and services.
     * @param apiKey Paystack API key
     */
    constructor(apiKey) {
        this.httpClient = HttpRequest(apiKey);
    }
    /**
     * Create a payment request for a transaction on your integration
     * @param data request body
     */
    async create(data) {
        return await this.httpClient.post(HttpRequestEndpoints.paymentRequest.create, data);
    }
    /**
     * List the payment requests available on your integration
     */
    async list() {
        return await this.httpClient.get(HttpRequestEndpoints.paymentRequest.list);
    }
    /**
     * Get details of a payment request on your integration
     * @param id Payment Request ID
     */
    async fetch(id) {
        return await this.httpClient.get(HttpRequestEndpoints.paymentRequest.fetch.replace(":id", id));
    }
    /**
     * Update a payment request details on your integration
     * @param id Payment Request ID
     * @param data request body
     */
    async update(id, data) {
        return await this.httpClient.put(HttpRequestEndpoints.paymentRequest.update.replace(":id", id), data);
    }
    /**
     * Verify details of a payment request on your integration
     * @param code Payment Request code
     */
    async verify(code) {
        return await this.httpClient.get(HttpRequestEndpoints.paymentRequest.verify.replace(":code", code));
    }
    /**
     * Send notification of a payment request to your customers
     * @param code Payment Request code
     */
    async sendNotification(code, data) {
        return await this.httpClient.post(HttpRequestEndpoints.paymentRequest.sendNotification.replace(":code", code), data);
    }
    /**
     * Get payment requests metric
     */
    async total() {
        return await this.httpClient.get(HttpRequestEndpoints.paymentRequest.total);
    }
    /**
     * Finalize a draft payment request
     * @param code Payment Request code
     */
    async finalize(code) {
        return await this.httpClient.post(HttpRequestEndpoints.paymentRequest.finalize.replace(":code", code));
    }
    /**
     * Used to archive a payment request. A payment request will no longer be fetched on list or returned on verify
     * @param code Payment Request code
     */
    async archive(code) {
        return await this.httpClient.post(HttpRequestEndpoints.paymentRequest.archive.replace(":code", code));
    }
}
