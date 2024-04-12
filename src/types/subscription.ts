import { AxiosInstance, AxiosResponse } from "axios";

export type SubscriptionBody = {
    /** Customer's email address or customer code */
    customer: string;
    /** Plan code */
    plan: string;
    /** If customer has multiple authorizations, you can set the desired authorization you wish to use for this subscription here. If this is not supplied, the customer's most recent authorization would be used */
    authorization: string;
    // ----------- Optional fields ------------
    /** Set the date for the first debit. (ISO 8601 format) e.g. 2017-05-16T00:30:13+01:00 */
    start_date?: string;
};

export type EnableSubscriptBody = {
    /** Subscription code */
    code: string;
    /** Email token */
    token: string;
};

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
    create(data: SubscriptionBody): Promise<AxiosResponse<any, any>>;

    /**
     * List all subscriptions on your integration
     */
    list(): Promise<AxiosResponse<any, any>>;

    /**
     * Fetch a subscription
     * @param id_or_code Subscription ID or Code
     */
    fetch(id_or_code: string): Promise<AxiosResponse<any, any>>;

    /**
     * Enable a subscription
     * @param data request body
     */
    enable(data: EnableSubscriptBody): Promise<AxiosResponse<any, any>>;

    /**
     * Disable a subscription
     * @param data request body
     */
    disable(data: EnableSubscriptBody): Promise<AxiosResponse<any, any>>;

    /**
     * Generate a subscription update link
     * @param code Subscription code
     */
    generateUpdateSubLink(code: string): Promise<AxiosResponse<any, any>>;

    /**
     * Send a subscription update link
     * @param code Subscription code
     */
    sendUpdateSubLink(code: string): Promise<AxiosResponse<any, any>>;
}
