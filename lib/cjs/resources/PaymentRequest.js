"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentRequest = void 0;
const request_1 = require("../config/request");
class PaymentRequest {
    httpClient;
    /**
     * The Payment Requests API allows you manage requests for payment of goods and services.
     * @param apiKey Paystack API key
     */
    constructor(apiKey) {
        this.httpClient = (0, request_1.default)(apiKey);
    }
    /**
     * Create a payment request for a transaction on your integration
     * @param data request body
     */
    async create(data) {
        return await this.httpClient.post(request_1.HttpRequestEndpoints.paymentRequest.create, data);
    }
    /**
     * List the payment requests available on your integration
     */
    async list() {
        return await this.httpClient.get(request_1.HttpRequestEndpoints.paymentRequest.list);
    }
    /**
     * Get details of a payment request on your integration
     * @param id Payment Request ID
     */
    async fetch(id) {
        return await this.httpClient.get(request_1.HttpRequestEndpoints.paymentRequest.fetch.replace(":id", id));
    }
    /**
     * Update a payment request details on your integration
     * @param id Payment Request ID
     * @param data request body
     */
    async update(id, data) {
        return await this.httpClient.put(request_1.HttpRequestEndpoints.paymentRequest.update.replace(":id", id), data);
    }
    /**
     * Verify details of a payment request on your integration
     * @param code Payment Request code
     */
    async verify(code) {
        return await this.httpClient.get(request_1.HttpRequestEndpoints.paymentRequest.verify.replace(":code", code));
    }
    /**
     * Send notification of a payment request to your customers
     * @param code Payment Request code
     */
    async sendNotification(code, data) {
        return await this.httpClient.post(request_1.HttpRequestEndpoints.paymentRequest.sendNotification.replace(":code", code), data);
    }
    /**
     * Get payment requests metric
     */
    async total() {
        return await this.httpClient.get(request_1.HttpRequestEndpoints.paymentRequest.total);
    }
    /**
     * Finalize a draft payment request
     * @param code Payment Request code
     */
    async finalize(code) {
        return await this.httpClient.post(request_1.HttpRequestEndpoints.paymentRequest.finalize.replace(":code", code));
    }
    /**
     * Used to archive a payment request. A payment request will no longer be fetched on list or returned on verify
     * @param code Payment Request code
     */
    async archive(code) {
        return await this.httpClient.post(request_1.HttpRequestEndpoints.paymentRequest.archive.replace(":code", code));
    }
}
exports.PaymentRequest = PaymentRequest;
