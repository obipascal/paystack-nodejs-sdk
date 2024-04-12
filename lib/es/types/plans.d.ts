import { AxiosInstance, AxiosResponse } from "axios";
export type CreatePlanBody = {
    /** Name of plan */
    name: string;
    /** Amount should be in the subunit of the supported currency */
    amount: number;
    /** Interval in words. Valid intervals are: daily, weekly, monthly,quarterly, biannually (every 6 months), annually. */
    interval: "daily" | "weekly" | "monthly" | "quarterly" | "biannually" | "annually";
    /** A description for this plan */
    description?: string;
    /** Set to false if you don't want invoices to be sent to your customers */
    send_invoices?: boolean;
    /** Set to false if you don't want text messages to be sent to your customers */
    send_sms?: boolean;
    /** Currency in which amount is set */
    currency?: string;
    /** Number of invoices to raise during subscription to this plan. Can be overridden by specifying an invoice_limit while subscribing. */
    invoice_limit?: number;
};
export declare class Plans {
    readonly httpClient: AxiosInstance;
    /**
     * The Plans API allows you create and manage installment payment options on your integration.
     * @param apiKey Paystack API key
     */
    constructor(apiKey: string);
    /**
     * Create a plan on your integration
     * @param data request body
     */
    create(data: CreatePlanBody): Promise<AxiosResponse<any, any>>;
    /**
     * List plans available on your integration
     */
    list(): Promise<AxiosResponse<any, any>>;
    /**
     * Get details of a plan on your integration
     * @param id_or_code Plan ID or Code
     */
    fetch(id_or_code: string): Promise<AxiosResponse<any, any>>;
    /**
     * Update a plan details on your integration
     * @param id_or_code Plan ID or Code
     * @param data request body
     */
    update(id_or_code: string, data: CreatePlanBody): Promise<AxiosResponse<any, any>>;
}
