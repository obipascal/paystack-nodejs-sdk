"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DedicatedVirtualAccounts = void 0;
const request_1 = require("../config/request");
class DedicatedVirtualAccounts {
    httpClient;
    /**
     * The Dedicated Virtual Account API enables Nigerian merchants to manage unique payment accounts of their customers.
     * @param apiKey Paystack API key
     */
    constructor(apiKey) {
        this.httpClient = (0, request_1.default)(apiKey);
    }
    /**
     * Create a dedicated virtual account
     * @param data Account data
     */
    async create(data) {
        return await this.httpClient.post(request_1.HttpRequestEndpoints.dedicatedVirtualAccount
            .createDedicatedVirtualAccount, data);
    }
    /**
     * Assign a dedicated virtual account to a customer
     * @param data Account data
     */
    async assign(data) {
        return await this.httpClient.post(request_1.HttpRequestEndpoints.dedicatedVirtualAccount
            .assignDedicatedVirtualAccount, data);
    }
    /**
     * List dedicated virtual accounts available on your integration.
     */
    async list() {
        return await this.httpClient.get(request_1.HttpRequestEndpoints.dedicatedVirtualAccount
            .listDedicatedVirtualAccount);
    }
    /**
     * Get details of a dedicated virtual account on your integration.
     * @param dedicated_account_id Dedicated virtual account ID
     */
    async fetch(dedicated_account_id) {
        return await this.httpClient.get(request_1.HttpRequestEndpoints.dedicatedVirtualAccount.fetchDedicatedVirtualAccount.replace(":dedicated_account_id", dedicated_account_id));
    }
    /**
     * Requery Dedicated Virtual Account for new transactions
     * @param data Query data
     */
    async query(data) {
        return await this.httpClient.get(request_1.HttpRequestEndpoints.dedicatedVirtualAccount.queryVirtualAccount, { params: data });
    }
    /**
     * Deactivate a dedicated virtual account on your integration.
     * @param dedicated_account_id Dedicated virtual account ID
     */
    async deactivate(dedicated_account_id) {
        return await this.httpClient.delete(request_1.HttpRequestEndpoints.dedicatedVirtualAccount.deactivateDedicatedVirtualAccount.replace(":dedicated_account_id", dedicated_account_id));
    }
    /**
     * Split a dedicated virtual account transaction with one or more accounts
     * @param data Transaction data
     */
    async split(data) {
        return await this.httpClient.post(request_1.HttpRequestEndpoints.dedicatedVirtualAccount
            .splitDedicatedVirtualAccount, data);
    }
    /**
     * If you've previously set up split payment for transactions on a dedicated virtual account, you can remove it with this endpoint
     * @param data Transaction data
     */
    async removeSplit(data) {
        return await this.httpClient.delete(request_1.HttpRequestEndpoints.dedicatedVirtualAccount
            .removeSplitDedicatedVirtualAccount, { data });
    }
    /**
     * Get available bank providers for a dedicated virtual account
     */
    async fetchBankProviders() {
        return await this.httpClient.get(request_1.HttpRequestEndpoints.dedicatedVirtualAccount.fetchBankProviders);
    }
}
exports.DedicatedVirtualAccounts = DedicatedVirtualAccounts;
