"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Plans = void 0;
const request_1 = require("../config/request");
class Plans {
    httpClient;
    /**
     * The Plans API allows you create and manage installment payment options on your integration.
     * @param apiKey Paystack API key
     */
    constructor(apiKey) {
        this.httpClient = (0, request_1.default)(apiKey);
    }
    /**
     * Create a plan on your integration
     * @param data request body
     */
    async create(data) {
        return await this.httpClient.post(request_1.HttpRequestEndpoints.plans.create, data);
    }
    /**
     * List plans available on your integration
     */
    async list() {
        return await this.httpClient.get(request_1.HttpRequestEndpoints.plans.list);
    }
    /**
     * Get details of a plan on your integration
     * @param id_or_code Plan ID or Code
     */
    async fetch(id_or_code) {
        return await this.httpClient.get(request_1.HttpRequestEndpoints.plans.fetch.replace(":id_or_code", id_or_code));
    }
    /**
     * Update a plan details on your integration
     * @param id_or_code Plan ID or Code
     * @param data request body
     */
    async update(id_or_code, data) {
        return await this.httpClient.put(request_1.HttpRequestEndpoints.plans.update.replace(":id_or_code", id_or_code), data);
    }
}
exports.Plans = Plans;
