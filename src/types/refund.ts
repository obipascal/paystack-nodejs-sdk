import { AxiosInstance, AxiosResponse } from "axios";
import { Currencies } from "./const";

export type RefundBody = {
    /** Transaction reference or id */
    transaction: string;
    /** Amount, in the subunit of the supported currency, to be refunded to the customer. Amount is optional(defaults to original transaction amount) and cannot be more than the original transaction amount. */
    amount?: number;
    /** Any of the supported currency */
    currency?: Currencies;
    /** Customer reason */
    customer_note?: string;
    /** Merchant reason */
    merchant_note?: string;
};

// Response interfaces for Refunds API
export interface RefundTransactionData {
    id: number;
    domain: string;
    reference: string;
    amount: number;
    paid_at: string;
    channel: string;
    currency: string;
    authorization: {
        exp_month: string | null;
        exp_year: string | null;
        account_name: string | null;
    };
    customer: {
        international_format_phone: string | null;
    };
}

export interface RefundData {
    id: number;
    integration: number;
    domain: string;
    transaction: number | RefundTransactionData;
    dispute: number | null;
    settlement: number | null;
    amount: number;
    deducted_amount?: number;
    currency: string;
    channel: string;
    fully_deducted?: boolean | number;
    status: string;
    refunded_by: string;
    refunded_at: string;
    expected_at: string;
    customer_note?: string | null;
    merchant_note?: string | null;
    createdAt: string;
    updatedAt: string;
}

export interface RefundCreateResponse extends AxiosResponse {
    message: string;
    data: RefundData;
}

export interface RefundListResponse extends AxiosResponse {
    message: string;
    data: RefundData[];
    meta: {
        total: number;
        skipped: number;
        perPage: number;
        page: number;
        pageCount: number;
    };
}

export interface RefundFetchResponse extends AxiosResponse {
    message: string;
    data: RefundData;
}

export declare class Refunds {
    readonly httpClient: AxiosInstance;

    /**
     * The Refunds API allows you create and manage transaction refunds.
     * @param apiKey Paystack API key
     */
    constructor(apiKey: string);

    /**
     * Create a refund
     * @param data Refund details
     */
    create(data: RefundBody): Promise<RefundCreateResponse>;

    /**
     * List refunds
     */
    list(): Promise<RefundListResponse>;

    /**
     * Fetch a refund
     * @param id Refund ID
     */
    fetch(id: string): Promise<RefundFetchResponse>;
}
