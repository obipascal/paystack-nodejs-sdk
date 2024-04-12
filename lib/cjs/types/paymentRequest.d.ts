import { AxiosInstance, AxiosResponse } from "axios";
import { Currencies } from "./const";
export type PaymentRequestBody = {
    /** Customer id or code */
    customer: string;
    /** Payment request amount. It should be used when line items and tax values aren't specified. */
    amount: number;
    /** ISO 8601 representation of request due date */
    due_date?: string;
    /** A short description of the payment request */
    description?: string;
    /** Array of line items int the format [{"name":"item 1", "amount":2000, "quantity": 1}] */
    line_items?: Array<Record<string, any>>;
    /** Array of taxes to be charged in the format [{"name":"VAT", "amount":2000}] */
    tax?: Array<Record<string, any>>;
    /** Specify the currency of the payment request. Defaults to NGN. */
    currency?: Currencies;
    /** Indicates whether Paystack sends an email notification to customer. Defaults to true */
    send_notification?: boolean;
    /** Indicate if request should be saved as draft. Defaults to false and overrides send_notification */
    draft?: boolean;
    /** Set to true to create a draft payment request (adds an auto incrementing payment request number if none is provided) even if there are no line_items or tax passed */
    has_invoice?: boolean;
    /** Numeric value of the payment request. Payment Requests will start from 1 and auto increment from there. This field is to help override whatever value Paystack decides. Auto increment for subsequent payment requests continue from this point. */
    invoice_number?: number;
    /** The split code of the transaction split. e.g. SPL_98WF13Eb3w */
    split_code?: string;
};
export type SendNotificationBody = {
    /** Indicates whether Paystack sends an email notification to customer. Defaults to true */
    send_notification: boolean;
};
export declare class PaymentRequest {
    readonly httpClient: AxiosInstance;
    /**
     * The Payment Requests API allows you manage requests for payment of goods and services.
     * @param apiKey Paystack API key
     */
    constructor(apiKey: string);
    /**
     * Create a payment request for a transaction on your integration
     * @param data request body
     */
    create(data: PaymentRequestBody): Promise<AxiosResponse<any, any>>;
    /**
     * List the payment requests available on your integration
     */
    list(): Promise<AxiosResponse<any, any>>;
    /**
     * Get details of a payment request on your integration
     * @param id Payment Request ID
     */
    fetch(id: string): Promise<AxiosResponse<any, any>>;
    /**
     * Update a payment request details on your integration
     * @param id Payment Request ID
     * @param data request body
     */
    update(id: string, data: PaymentRequestBody): Promise<AxiosResponse<any, any>>;
    /**
     * Verify details of a payment request on your integration
     * @param code Payment Request code
     */
    verify(code: string): Promise<AxiosResponse<any, any>>;
    /**
     * Send notification of a payment request to your customers
     * @param code Payment Request code
     * @param data request body
     */
    sendNotification(code: string, data: SendNotificationBody): Promise<AxiosResponse<any, any>>;
    /**
     * Get payment requests metric
     */
    total(): Promise<AxiosResponse<any, any>>;
    /**
     * Finalize a draft payment request
     * @param code Payment Request code
     */
    finalize(code: string): Promise<AxiosResponse<any, any>>;
    /**
     * Used to archive a payment request. A payment request will no longer be fetched on list or returned on verify
     * @param code Payment Request code
     */
    archive(code: string): Promise<AxiosResponse<any, any>>;
}
