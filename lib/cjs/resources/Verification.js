"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Verification = void 0;
const request_1 = require("../config/request");
class Verification {
    httpClient;
    /**
     * The Verification API allows you perform KYC processes.
     * @param apiKey Paystack API key
     */
    constructor(apiKey) {
        this.httpClient = (0, request_1.default)(apiKey);
    }
    /**
     * Resolve account number
     * _________________________________________________________
     * Confirm an account belongs to the right customer
     * @param accountNumber Account number
     * @param bankCode Bank code
     */
    async resolveAccount(params) {
        return await this.httpClient.get(request_1.HttpRequestEndpoints.verification.resolveAccount, { params });
    }
    /**
     * Validate bank account
     * _________________________________________________________
     * Confirm the authenticity of a customer's account number before sending money
     * @param accountNumber Account number
     * @param bankCode Bank code
     */
    async validateBank(data) {
        return await this.httpClient.post(request_1.HttpRequestEndpoints.verification.validateBank, data);
    }
    /**
     * Resolve card BIN. Get more information about a customer's card
     * @param bin Card BIN
     */
    async resolveCard(bin) {
        return await this.httpClient.get(request_1.HttpRequestEndpoints.verification.resolveCard.replace(":bin", bin));
    }
}
exports.Verification = Verification;
