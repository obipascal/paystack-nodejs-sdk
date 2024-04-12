import { EnableSubscriptBody, SubscriptionBody } from "../types/subscription";
export default class Subscription {
    private httpClient;
    /**
     * The Subscriptions API allows you create and manage recurring payment on your integration.
     * @param apiKey Paystack API key
     */
    constructor(apiKey: string);
    /**
     * Create a subscription
     * @param data request body
     */
    create(data: SubscriptionBody): Promise<import("axios").AxiosResponse<any, any>>;
    /**
     * List all subscriptions on your integration
     */
    list(): Promise<import("axios").AxiosResponse<any, any>>;
    /**
     * Fetch a subscription
     * @param id_or_code Subscription ID or Code
     */
    fetch(id_or_code: string): Promise<import("axios").AxiosResponse<any, any>>;
    /**
     * Enable a subscription
     * @param data request body
     */
    enable(data: EnableSubscriptBody): Promise<import("axios").AxiosResponse<any, any>>;
    /**
     * Disable a subscription
     * @param data request body
     */
    disable(data: EnableSubscriptBody): Promise<import("axios").AxiosResponse<any, any>>;
    /**
     * Generate a subscription update link
     * @param code Subscription code
     */
    generateUpdateSubLink(code: string): Promise<import("axios").AxiosResponse<any, any>>;
    /**
     * Send a subscription update link
     * @param code Subscription code
     */
    sendUpdateSubLink(code: string): Promise<import("axios").AxiosResponse<any, any>>;
}
