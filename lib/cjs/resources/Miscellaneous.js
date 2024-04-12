"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const request_1 = require("../config/request");
class Miscellaneous {
    httpClient;
    /**
     * The Miscellaneous API allows you perform miscellaneous operations.
     * @param apiKey Paystack API key
     */
    constructor(apiKey) {
        this.httpClient = (0, request_1.default)(apiKey);
    }
    /**
     * List all supported banks
     * _________________________________________________________
     * Get a list of all supported banks and their properties
     * @param accountNumber Account number
     * @param bankCode Bank code
     */
    async banks(params) {
        return await this.httpClient.get(request_1.HttpRequestEndpoints.miscellaneous.listBanks, { params });
    }
}
exports.default = Miscellaneous;
