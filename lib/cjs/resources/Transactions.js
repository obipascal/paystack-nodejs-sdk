"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transactions = void 0;
const request_1 = require("../config/request");
class Transactions {
    httpClient;
    /**
     * The Transactions API allows you create and manage payments on your integration.
     * @param apiKey Paystack API key
     */
    constructor(apiKey) {
        this.httpClient = (0, request_1.default)(apiKey);
    }
    /**
     * Initialize a transaction from your backend
     * @param data Transaction initialization data
     */
    async initialize(data) {
        return await this.httpClient.post(request_1.HttpRequestEndpoints.transaction.initialize, data);
    }
    /**
     * Confirm the status of a transaction
     * @param reference Transaction reference
     */
    async verify(reference) {
        return await this.httpClient.get(request_1.HttpRequestEndpoints.transaction.verify.replace(":reference", reference));
    }
    /**
     * List transactions carried out on your integration
     */
    async list() {
        return await this.httpClient.get(request_1.HttpRequestEndpoints.transaction.list);
    }
    /**
     * Get details of a transaction carried out on your integration
     * @param id Transaction ID
     */
    async single(id) {
        return await this.httpClient.get(request_1.HttpRequestEndpoints.transaction.single.replace(":id", id));
    }
    /**
     * All authorizations marked as reusable can be charged with this endpoint whenever you need to receive payments
     * @param data Charge authorization data
     */
    async chargeAuthorization(data) {
        return await this.httpClient.post(request_1.HttpRequestEndpoints.transaction.chargeAuthorization, data);
    }
    /**
     * View the timeline of a transaction
     * @param id_or_reference Transaction ID or reference
     */
    async timeline(id_or_reference) {
        return await this.httpClient.get(request_1.HttpRequestEndpoints.transaction.timeline.replace(":id_or_reference", id_or_reference));
    }
    /**
     * Total amount received on your account
     */
    async total() {
        return await this.httpClient.get(request_1.HttpRequestEndpoints.transaction.total);
    }
    /**
     * Export a list of transactions carried out on your integration
     */
    async export() {
        return await this.httpClient.get(request_1.HttpRequestEndpoints.transaction.export);
    }
    /**
     * Retrieve part of a payment from a customer
     */
    async partialDebit(data) {
        return await this.httpClient.post(request_1.HttpRequestEndpoints.transaction.partialDebit, data);
    }
}
exports.Transactions = Transactions;
