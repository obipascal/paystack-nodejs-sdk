import { AxiosInstance, AxiosResponse } from "axios";
export type SubscriptionBody = {
    /** Customer's email address or customer code */
    customer: string;
    /** Plan code */
    plan: string;
    /** If customer has multiple authorizations, you can set the desired authorization you wish to use for this subscription here. If this is not supplied, the customer's most recent authorization would be used */
    authorization: string;
    /** Set the date for the first debit. (ISO 8601 format) e.g. 2017-05-16T00:30:13+01:00 */
    start_date?: string;
};
export type EnableSubscriptBody = {
    /** Subscription code */
    code: string;
    /** Email token */
    token: string;
};
export interface SubscriptionAuthorization {
    authorization_code: string;
    bin: string;
    last4: string;
    exp_month: string;
    exp_year: string;
    channel: string;
    card_type: string;
    bank: string;
    country_code: string;
    brand: string;
    reusable: boolean;
    signature: string;
    account_name: string | null;
}
export interface SubscriptionCustomer {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    customer_code: string;
    phone: string | null;
    metadata: Record<string, any> | null;
    risk_action: string;
    international_format_phone: string | null;
}
export interface SubscriptionPlan {
    id: number;
    name: string;
    plan_code: string;
    description: string | null;
    amount: number;
    interval: string;
    send_invoices: boolean;
    send_sms: boolean;
    currency: string;
}
export interface SubscriptionData {
    customer: number | SubscriptionCustomer;
    plan: number | SubscriptionPlan;
    integration: number;
    domain: string;
    start: number;
    status: string;
    quantity: number;
    amount: number;
    subscription_code: string;
    email_token: string;
    authorization: SubscriptionAuthorization;
    easy_cron_id: string | null;
    cron_expression: string;
    next_payment_date: string;
    open_invoice: string | null;
    id: number;
    createdAt: string;
    updatedAt: string;
    invoices?: any[];
    invoices_history?: any[];
    most_recent_invoice?: any;
}
export interface SubscriptionCreateResponse extends AxiosResponse {
    message: string;
    data: SubscriptionData;
}
export interface SubscriptionListResponse extends AxiosResponse {
    message: string;
    data: SubscriptionData[];
    meta: {
        total: number;
        skipped: number;
        perPage: number;
        page: number;
        pageCount: number;
    };
}
export interface SubscriptionFetchResponse extends AxiosResponse {
    message: string;
    data: SubscriptionData;
}
export interface SubscriptionEnableResponse extends AxiosResponse {
    message: string;
}
export interface SubscriptionDisableResponse extends AxiosResponse {
    message: string;
}
export interface SubscriptionLinkData {
    link: string;
}
export interface SubscriptionGenerateLinkResponse extends AxiosResponse {
    message: string;
    data: SubscriptionLinkData;
}
export interface SubscriptionSendLinkResponse extends AxiosResponse {
    message: string;
}
export declare class Subscription {
    readonly httpClient: AxiosInstance;
    /**
     * The Subscriptions API allows you create and manage recurring payment on your integration.
     * @param apiKey Paystack API key
     */
    constructor(apiKey: string);
    /**
     * Create a subscription
     * @param data request body
     */
    create(data: SubscriptionBody): Promise<SubscriptionCreateResponse>;
    /**
     * List all subscriptions on your integration
     */
    list(): Promise<SubscriptionListResponse>;
    /**
     * Fetch a subscription
     * @param id_or_code Subscription ID or Code
     */
    fetch(id_or_code: string): Promise<SubscriptionFetchResponse>;
    /**
     * Enable a subscription
     * @param data request body
     */
    enable(data: EnableSubscriptBody): Promise<SubscriptionEnableResponse>;
    /**
     * Disable a subscription
     * @param data request body
     */
    disable(data: EnableSubscriptBody): Promise<SubscriptionDisableResponse>;
    /**
     * Generate a subscription update link
     * @param code Subscription code
     */
    generateUpdateSubLink(code: string): Promise<SubscriptionGenerateLinkResponse>;
    /**
     * Send a subscription update link
     * @param code Subscription code
     */
    sendUpdateSubLink(code: string): Promise<SubscriptionSendLinkResponse>;
}
