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
    create(data: RefundBody): Promise<AxiosResponse<any, any>>;
    /**
     * List refunds
     */
    list(): Promise<AxiosResponse<any, any>>;
    /**
     * Fetch a refund
     * @param id Refund ID
     */
    fetch(id: string): Promise<AxiosResponse<any, any>>;
}
