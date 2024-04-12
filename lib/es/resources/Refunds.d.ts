import { RefundBody } from "../types/refund";
export declare class Refunds {
    private httpClient;
    /**
     * The Refunds API allows you create and manage transaction refunds.
     * @param apiKey Paystack API key
     */
    constructor(apiKey: string);
    /**
     * Create a refund
     * @param data Refund details
     */
    create(data: RefundBody): Promise<import("axios").AxiosResponse<any, any>>;
    /**
     * List refunds
     */
    list(): Promise<import("axios").AxiosResponse<any, any>>;
    /**
     * Fetch a refund
     * @param id Refund ID
     */
    fetch(id: string): Promise<import("axios").AxiosResponse<any, any>>;
}
