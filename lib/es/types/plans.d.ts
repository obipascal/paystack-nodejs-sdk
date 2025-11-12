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
export interface PlanSubscription {
    customer: number;
    plan: number;
    integration: number;
    domain: string;
    start: number;
    status: string;
    quantity: number;
    amount: number;
    subscription_code: string;
    email_token: string;
    authorization: {
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
    };
    easy_cron_id: string | null;
    cron_expression: string;
    next_payment_date: string;
    open_invoice: string | null;
    id: number;
    createdAt: string;
    updatedAt: string;
}
export interface PlanData {
    name: string;
    amount: number;
    interval: string;
    integration: number;
    domain: string;
    currency: string;
    plan_code: string;
    invoice_limit: number | null;
    send_invoices: boolean;
    send_sms: boolean;
    hosted_page: boolean;
    hosted_page_url: string | null;
    hosted_page_summary: string | null;
    description: string | null;
    migrate: boolean | null;
    id: number;
    createdAt: string;
    updatedAt: string;
    subscriptions?: PlanSubscription[];
    total_subscriptions?: number;
    active_subscriptions?: number;
    total_subscriptions_revenue?: number;
}
export interface PlanCreateResponse extends AxiosResponse {
    message: string;
    data: PlanData;
}
export interface PlanListResponse extends AxiosResponse {
    message: string;
    data: PlanData[];
    meta: {
        total: number;
        skipped: number;
        perPage: number;
        page: number;
        pageCount: number;
    };
}
export interface PlanFetchResponse extends AxiosResponse {
    message: string;
    data: PlanData;
}
export interface PlanUpdateResponse extends AxiosResponse {
    message: string;
}
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
    create(data: CreatePlanBody): Promise<PlanCreateResponse>;
    /**
     * List plans available on your integration
     */
    list(): Promise<PlanListResponse>;
    /**
     * Get details of a plan on your integration
     * @param id_or_code Plan ID or Code
     */
    fetch(id_or_code: string): Promise<PlanFetchResponse>;
    /**
     * Update a plan details on your integration
     * @param id_or_code Plan ID or Code
     * @param data request body
     */
    update(id_or_code: string, data: CreatePlanBody): Promise<PlanUpdateResponse>;
}
