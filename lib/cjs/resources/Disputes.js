"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Disputes = void 0;
const request_1 = require("../config/request");
class Disputes {
    httpClient;
    /**
     * The Disputes API allows you manage transaction disputes on your integration.
     * @param apiKey Paystack API key
     */
    constructor(apiKey) {
        this.httpClient = (0, request_1.default)(apiKey);
    }
    /**
     * List disputes
     * @param params Filter options
     */
    async list(params) {
        return await this.httpClient.get(request_1.HttpRequestEndpoints.dispute.list, {
            params,
        });
    }
    /**
     * Fetch a dispute
     * @param id Dispute ID
     */
    async fetch(id) {
        return await this.httpClient.get(request_1.HttpRequestEndpoints.dispute.fetch.replace(":id", id));
    }
    /**
     * List disputes for a transaction
     * @param id Transaction ID
     */
    async listTransactionDispute(id) {
        return await this.httpClient.get(request_1.HttpRequestEndpoints.dispute.listTransactionDispute.replace(":id", id));
    }
    /**
     * Update a dispute
     * @param id Dispute ID
     * @param data Dispute details
     */
    async update(id, data) {
        return await this.httpClient.put(request_1.HttpRequestEndpoints.dispute.update.replace(":id", id), data);
    }
    /**
     * Add evidence to a dispute
     * @param id Dispute ID
     * @param data Evidence details
     */
    async addEvidence(id, data) {
        return await this.httpClient.post(request_1.HttpRequestEndpoints.dispute.addEvidence.replace(":id", id), data);
    }
    /**
     * Fetch upload url
     * @param id Dispute ID
     * @param params Upload options
     */
    async fetchUploadUrl(id, params) {
        return await this.httpClient.get(request_1.HttpRequestEndpoints.dispute.fetchUploadUrl.replace(":id", id), { params });
    }
    /**
     * Resolve a dispute
     * @param id Dispute ID
     * @param data Resolution details
     */
    async resolve(id, data) {
        return await this.httpClient.post(request_1.HttpRequestEndpoints.dispute.resolve.replace(":id", id), data);
    }
    /**
     * Export disputes
     */
    async export(params) {
        return await this.httpClient.get(request_1.HttpRequestEndpoints.dispute.export, {
            params,
        });
    }
}
exports.Disputes = Disputes;
