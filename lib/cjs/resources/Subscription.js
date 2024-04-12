"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Subscription = void 0;
const request_1 = require("../config/request");
class Subscription {
    httpClient;
    /**
     * The Subscriptions API allows you create and manage recurring payment on your integration.
     * @param apiKey Paystack API key
     */
    constructor(apiKey) {
        this.httpClient = (0, request_1.default)(apiKey);
    }
    /**
     * Create a subscription
     * @param data request body
     */
    async create(data) {
        return await this.httpClient.post(request_1.HttpRequestEndpoints.subaccount.create, data);
    }
    /**
     * List all subscriptions on your integration
     */
    async list() {
        return await this.httpClient.get(request_1.HttpRequestEndpoints.subaccount.list);
    }
    /**
     * Fetch a subscription
     * @param id_or_code Subscription ID or Code
     */
    async fetch(id_or_code) {
        return await this.httpClient.get(request_1.HttpRequestEndpoints.subaccount.fetch.replace(":id_or_code", id_or_code));
    }
    /**
     * Enable a subscription
     * @param data request body
     */
    async enable(data) {
        return await this.httpClient.post(request_1.HttpRequestEndpoints.subscription.enable, data);
    }
    /**
     * Disable a subscription
     * @param data request body
     */
    async disable(data) {
        return await this.httpClient.post(request_1.HttpRequestEndpoints.subscription.disable, data);
    }
    /**
     * Generate a subscription update link
     * @param code Subscription code
     */
    async generateUpdateSubLink(code) {
        return await this.httpClient.get(request_1.HttpRequestEndpoints.subscription.generateUpdateSubLink.replace(":code", code));
    }
    /**
     * Send a subscription update link
     * @param code Subscription code
     */
    async sendUpdateSubLink(code) {
        return await this.httpClient.post(request_1.HttpRequestEndpoints.subscription.sendUpdateSubLink.replace(":code", code));
    }
}
exports.Subscription = Subscription;
