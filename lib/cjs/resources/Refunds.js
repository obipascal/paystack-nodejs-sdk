"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const request_1 = require("../config/request");
class Refunds {
    httpClient;
    /**
     * The Refunds API allows you create and manage transaction refunds.
     * @param apiKey Paystack API key
     */
    constructor(apiKey) {
        this.httpClient = (0, request_1.default)(apiKey);
    }
    /**
     * Create a refund
     * @param data Refund details
     */
    async create(data) {
        return await this.httpClient.post(request_1.HttpRequestEndpoints.refund.create, data);
    }
    /**
     * List refunds
     */
    async list() {
        return await this.httpClient.get(request_1.HttpRequestEndpoints.refund.list);
    }
    /**
     * Fetch a refund
     * @param id Refund ID
     */
    async fetch(id) {
        return await this.httpClient.get(request_1.HttpRequestEndpoints.refund.fetch.replace(":id", id));
    }
}
exports.default = Refunds;
