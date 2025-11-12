import { AxiosInstance, AxiosResponse } from "axios";
export interface SettlementData {
    id: number;
    domain: string;
    status: string;
    currency: string;
    integration: number;
    total_amount: number;
    effective_amount: number;
    total_fees: number;
    total_processed: number;
    deductions: any | null;
    settlement_date: string;
    settled_by: string | null;
    createdAt: string;
    updatedAt: string;
}
export interface SettlementListResponse extends AxiosResponse {
    message: string;
    data: SettlementData[];
    meta: {
        total: number;
        skipped: number;
        perPage: number;
        page: number;
        pageCount: number;
    };
}
export interface SettlementTransactionData {
    id: number;
    domain: string;
    status: string;
    reference: string;
    amount: number;
    message: string | null;
    gateway_response: string;
    paid_at: string;
    created_at: string;
    channel: string;
    currency: string;
    ip_address: string;
    metadata: Record<string, any> | null;
    log: any | null;
    fees: number;
    fees_split: any | null;
    authorization: any;
    customer: any;
    plan: any;
    order_id: string | null;
    paidAt: string;
    createdAt: string;
    requested_amount: number;
    transaction_date: string;
    plan_object: any;
    subaccount: any;
}
export interface SettlementTransactionsResponse extends AxiosResponse {
    message: string;
    data: SettlementTransactionData[];
    meta: {
        total: number;
        skipped: number;
        perPage: number;
        page: number;
        pageCount: number;
    };
}
export declare class Settlements {
    readonly httpClient: AxiosInstance;
    /**
     * The Settlements API allows you manage settlements on your integration.
     * @param apiKey Paystack API key
     */
    constructor(apiKey: string);
    /**
     * List all settlements on your integration
     */
    list(): Promise<SettlementListResponse>;
    /**
     * Get the transactions that make up a particular settlement
     * _________________________________________________________
     * If you plan to store or make use of the the transaction ID, you should represent it as a unsigned 64-bit integer. To learn more, check out our changelog.
     * @param id Settlement ID
     */
    fetch(id: string): Promise<SettlementTransactionsResponse>;
}
