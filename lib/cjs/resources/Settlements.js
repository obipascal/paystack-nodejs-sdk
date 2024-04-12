"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Settlements = void 0;
const request_1 = require("../config/request");
class Settlements {
    httpClient;
    /**
     * The Settlements API allows you manage settlements on your integration.
     * @param apiKey Paystack API key
     */
    constructor(apiKey) {
        this.httpClient = (0, request_1.default)(apiKey);
    }
    /**
     * List all settlements on your integration
     */
    async list() {
        return await this.httpClient.get(request_1.HttpRequestEndpoints.settlement.list);
    }
    /**
     * Get the transactions that make up a particular settlement
     * _________________________________________________________
     * If you plan to store or make use of the the transaction ID, you should represent it as a unsigned 64-bit integer. To learn more, check out our changelog.
     * @param id Settlement ID
     */
    async fetch(id) {
        return await this.httpClient.get(request_1.HttpRequestEndpoints.settlement.listTransactions.replace(":id", id));
    }
}
exports.Settlements = Settlements;
