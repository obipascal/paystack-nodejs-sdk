"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const request_1 = require("../config/request");
class BulkCharges {
    httpClient;
    /**
     * The Bulk Charges API allows you create and manage multiple recurring payments from your customers.
     * @param apiKey Paystack API key
     */
    constructor(apiKey) {
        this.httpClient = (0, request_1.default)(apiKey);
    }
    /**
     * Send an array of objects with authorization codes and amount, using the supported currency format, so we can process transactions as a batch.
     * @param data Bulk charge details
     */
    async create(data) {
        return await this.httpClient.post(request_1.HttpRequestEndpoints.bulkCharge.create, data);
    }
    /**
     * This lists all bulk charge batches created by the integration. Statuses can be active, paused, or complete
     */
    async list(params) {
        return await this.httpClient.get(request_1.HttpRequestEndpoints.bulkCharge.list, {
            params,
        });
    }
    /**
     * This endpoint retrieves a specific batch code. It also returns useful information on its progress by way of the total_charges and pending_charges attributes.
     * @param id_or_code Bulk charge ID or code
     */
    async fetch(id_or_code) {
        return await this.httpClient.get(request_1.HttpRequestEndpoints.bulkCharge.fetch.replace(":id_or_code", id_or_code));
    }
    /**
     * This endpoint retrieves the charges associated with a specified batch code. Pagination parameters are available. You can also filter by status. Charge statuses can be pending, success or failed.
     * @param id_or_code Bulk charge ID or code
     */
    async fetchBatch(id_or_code, params) {
        return await this.httpClient.get(request_1.HttpRequestEndpoints.bulkCharge.fetchBatch.replace(":id_or_code", id_or_code), { params });
    }
    /**
     * Use this endpoint to pause processing a batch
     * @param batch_code Batch code of the bulk charge
     */
    async pause(batch_code) {
        return await this.httpClient.post(request_1.HttpRequestEndpoints.bulkCharge.pause.replace(":batch_code", batch_code));
    }
    /**
     * Use this endpoint to resume processing a batch
     * @param batch_code Batch code of the bulk charge
     */
    async resume(batch_code) {
        return await this.httpClient.post(request_1.HttpRequestEndpoints.bulkCharge.resume.replace(":batch_code", batch_code));
    }
}
exports.default = BulkCharges;
