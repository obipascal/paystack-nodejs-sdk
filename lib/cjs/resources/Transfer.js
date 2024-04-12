"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const request_1 = require("../config/request");
class Transfer {
    httpClient;
    /**
     * The Transfers API allows you automate sending money to your customers.
     * @param apiKey Paystack API key
     */
    constructor(apiKey) {
        this.httpClient = (0, request_1.default)(apiKey);
    }
    /**
     * Send money to your customers.
     * _________________________________________________________
     * Send money to your customers. Status of transfer object returned will be pending if OTP is disabled. In the event that an OTP is required, status will read otp.
     * @param data Transfer details
     */
    async initiate(data) {
        return await this.httpClient.post(request_1.HttpRequestEndpoints.transfer.initiate, data);
    }
    /**
     * List the transfers made on your integration.
     */
    async list() {
        return await this.httpClient.get(request_1.HttpRequestEndpoints.transfer.list);
    }
    /**
     * Get details of a transfer on your integration.
     * @param id_or_code Transfer ID or code
     */
    async fetch(id_or_code) {
        return await this.httpClient.get(request_1.HttpRequestEndpoints.transfer.fetch.replace(":id_or_code", id_or_code));
    }
    /**
     * Finalize an initiated transfer
     * @param data Transfer details
     */
    async finalize(data) {
        return await this.httpClient.post(request_1.HttpRequestEndpoints.transfer.finalize, data);
    }
    /**
     * Batch multiple transfers in a single request. You need to disable the Transfers OTP requirement to use this endpoint.
     * @param data Transfer details
     */
    async bulk(data) {
        return await this.httpClient.post(request_1.HttpRequestEndpoints.transfer.bulk, data);
    }
    /**
     * Verify the status of a transfer on your integration.
     * @param reference Transfer reference
     */
    async verify(reference) {
        return await this.httpClient.get(request_1.HttpRequestEndpoints.transfer.verify.replace(":reference", reference));
    }
    /**
     * Fetch the available balance on your integration
     */
    async checkBalance() {
        return await this.httpClient.get(request_1.HttpRequestEndpoints.transfer.checkBalance);
    }
    /**
     * Fetch all pay-ins and pay-outs that occured on your integration
     */
    async ledger() {
        return await this.httpClient.get(request_1.HttpRequestEndpoints.transfer.ledger);
    }
    /**
     * Generates a new OTP and sends to customer in the event they are having trouble receiving one.
     * @param data Transfer details
     */
    async resendOtp(data) {
        return await this.httpClient.post(request_1.HttpRequestEndpoints.transfer.resendOtp, data);
    }
    /**
     * This is used in the event that you want to be able to complete transfers programmatically without use of OTPs. No arguments required. You will get an OTP to complete the request.
     */
    async disableOtp() {
        return await this.httpClient.post(request_1.HttpRequestEndpoints.transfer.disableOtp);
    }
    /**
     * Finalize the request to disable OTP on your transfers.
     * @param data Transfer details
     */
    async disableOtpFinalize(data) {
        return await this.httpClient.post(request_1.HttpRequestEndpoints.transfer.disableOtpFinalize, data);
    }
    /**
     * In the event that a customer wants to stop being able to complete transfers programmatically, this endpoint helps turn OTP requirement back on. No arguments required.
     */
    async enableOtp() {
        return await this.httpClient.post(request_1.HttpRequestEndpoints.transfer.enableOtp);
    }
}
exports.default = Transfer;
