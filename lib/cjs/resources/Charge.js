"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Charges = void 0;
const request_1 = require("../config/request");
class Charges {
    httpClient;
    /**
     * The Charge API allows you to configure payment channel of your choice when initiating a payment.
     * @param apiKey Paystack API key
     */
    constructor(apiKey) {
        this.httpClient = (0, request_1.default)(apiKey);
    }
    /**
     * Initialize a charge
     * @param data Charge details
     */
    async initialize(data) {
        return await this.httpClient.post(request_1.HttpRequestEndpoints.charge.initialize, data);
    }
    /**
     * Submit a PIN
     * @param data Charge details
     */
    async submitPin(data) {
        return await this.httpClient.post(request_1.HttpRequestEndpoints.charge.submitPin, data);
    }
    /**
     * Submit an OTP
     * @param data Charge details
     */
    async submitOtp(data) {
        return await this.httpClient.post(request_1.HttpRequestEndpoints.charge.submitOtp, data);
    }
    /**
     * Submit a phone number
     * @param data Charge details
     */
    async submitPhone(data) {
        return await this.httpClient.post(request_1.HttpRequestEndpoints.charge.submitPhone, data);
    }
    /**
     * Submit a birthday
     * @param data Charge details
     */
    async submitBirthday(data) {
        return await this.httpClient.post(request_1.HttpRequestEndpoints.charge.submitBirthday, data);
    }
    /**
     * Check pending charge
     * @param reference Charge reference
     */
    async checkPendingCharge(reference) {
        return await this.httpClient.get(request_1.HttpRequestEndpoints.charge.checkPendingCharge.replace(":reference", reference));
    }
    /**
     * Submit an address
     * @param data Charge details
     */
    async submitAddress(data) {
        return await this.httpClient.post(request_1.HttpRequestEndpoints.charge.submitAddress, data);
    }
}
exports.Charges = Charges;
