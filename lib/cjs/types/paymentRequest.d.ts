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
