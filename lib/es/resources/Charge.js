import HttpRequest, { HttpRequestEndpoints } from "../config/request";
export default class Charges {
    httpClient;
    /**
     * The Charge API allows you to configure payment channel of your choice when initiating a payment.
     * @param apiKey Paystack API key
     */
    constructor(apiKey) {
        this.httpClient = HttpRequest(apiKey);
    }
    /**
     * Initialize a charge
     * @param data Charge details
     */
    async initialize(data) {
        return await this.httpClient.post(HttpRequestEndpoints.charge.initialize, data);
    }
    /**
     * Submit a PIN
     * @param data Charge details
     */
    async submitPin(data) {
        return await this.httpClient.post(HttpRequestEndpoints.charge.submitPin, data);
    }
    /**
     * Submit an OTP
     * @param data Charge details
     */
    async submitOtp(data) {
        return await this.httpClient.post(HttpRequestEndpoints.charge.submitOtp, data);
    }
    /**
     * Submit a phone number
     * @param data Charge details
     */
    async submitPhone(data) {
        return await this.httpClient.post(HttpRequestEndpoints.charge.submitPhone, data);
    }
    /**
     * Submit a birthday
     * @param data Charge details
     */
    async submitBirthday(data) {
        return await this.httpClient.post(HttpRequestEndpoints.charge.submitBirthday, data);
    }
    /**
     * Check pending charge
     * @param reference Charge reference
     */
    async checkPendingCharge(reference) {
        return await this.httpClient.get(HttpRequestEndpoints.charge.checkPendingCharge.replace(":reference", reference));
    }
    /**
     * Submit an address
     * @param data Charge details
     */
    async submitAddress(data) {
        return await this.httpClient.post(HttpRequestEndpoints.charge.submitAddress, data);
    }
}
