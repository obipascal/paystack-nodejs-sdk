"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const request_1 = require("../config/request");
class Products {
    httpClient;
    /**
     * The Products API allows you create and manage inventories on your integration.
     * @param apiKey Paystack API key
     */
    constructor(apiKey) {
        this.httpClient = (0, request_1.default)(apiKey);
    }
    /**
     * Create a product
     * @param data request body
     */
    async create(data) {
        return await this.httpClient.post(request_1.HttpRequestEndpoints.product.create, data);
    }
    /**
     * List all products on your integration
     */
    async list() {
        return await this.httpClient.get(request_1.HttpRequestEndpoints.product.list);
    }
    /**
     * Fetch a product
     * @param id Product ID
     */
    async fetch(id) {
        return await this.httpClient.get(request_1.HttpRequestEndpoints.product.fetch.replace(":id", id));
    }
    /**
     * Update a product
     * @param id Product ID
     * @param data request body
     */
    async update(id, data) {
        return await this.httpClient.put(request_1.HttpRequestEndpoints.product.update.replace(":id", id), data);
    }
}
exports.default = Products;
