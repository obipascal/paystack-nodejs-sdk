"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Subaccounts = void 0;
const request_1 = require("../config/request");
class Subaccounts {
    httpClient;
    /**
     * The Subaccounts API allows you create and manage subaccounts on your integration. Subaccounts can be used to split payment between two accounts (your main account and a sub account).
     * @param apiKey Paystack API key
     */
    constructor(apiKey) {
        this.httpClient = (0, request_1.default)(apiKey);
    }
    /**
     * Create a new subaccount
     * @param data request body
     */
    async create(data) {
        return await this.httpClient.post(request_1.HttpRequestEndpoints.subaccount.create, data);
    }
    /**
     * List all subaccounts on your integration
     */
    async list() {
        return await this.httpClient.get(request_1.HttpRequestEndpoints.subaccount.list);
    }
    /**
     * Fetch a subaccount
     * @param id_or_code Subaccount ID or Code
     */
    async fetch(id_or_code) {
        return await this.httpClient.get(request_1.HttpRequestEndpoints.subaccount.fetch.replace(":id_or_code", id_or_code));
    }
    /**
     * Update a subaccount
     * @param id_or_code Subaccount ID or Code
     * @param data request body
     */
    async update(id_or_code, data) {
        return await this.httpClient.put(request_1.HttpRequestEndpoints.subaccount.update.replace(":id_or_code", id_or_code), data);
    }
}
exports.Subaccounts = Subaccounts;
