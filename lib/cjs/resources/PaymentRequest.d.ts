import { PaymentRequestBody, SendNotificationBody } from "../types/paymentRequest";
export default class PaymentRequest {
    private httpClient;
    /**
     * The Payment Requests API allows you manage requests for payment of goods and services.
     * @param apiKey Paystack API key
     */
    constructor(apiKey: string);
    /**
     * Create a payment request for a transaction on your integration
     * @param data request body
     */
    create(data: PaymentRequestBody): Promise<import("axios").AxiosResponse<any, any>>;
    /**
     * List the payment requests available on your integration
     */
    list(): Promise<import("axios").AxiosResponse<any, any>>;
    /**
     * Get details of a payment request on your integration
     * @param id Payment Request ID
     */
    fetch(id: string): Promise<import("axios").AxiosResponse<any, any>>;
    /**
     * Update a payment request details on your integration
     * @param id Payment Request ID
     * @param data request body
     */
    update(id: string, data: PaymentRequestBody): Promise<import("axios").AxiosResponse<any, any>>;
    /**
     * Verify details of a payment request on your integration
     * @param code Payment Request code
     */
    verify(code: string): Promise<import("axios").AxiosResponse<any, any>>;
    /**
     * Send notification of a payment request to your customers
     * @param code Payment Request code
     */
    sendNotification(code: string, data: SendNotificationBody): Promise<import("axios").AxiosResponse<any, any>>;
    /**
     * Get payment requests metric
     */
    total(): Promise<import("axios").AxiosResponse<any, any>>;
    /**
     * Finalize a draft payment request
     * @param code Payment Request code
     */
    finalize(code: string): Promise<import("axios").AxiosResponse<any, any>>;
    /**
     * Used to archive a payment request. A payment request will no longer be fetched on list or returned on verify
     * @param code Payment Request code
     */
    archive(code: string): Promise<import("axios").AxiosResponse<any, any>>;
}
