import { BulkChargeBody } from "../types/charge";
import { PaginationParams } from "../types/const";
export default class BulkCharges {
    private httpClient;
    /**
     * The Bulk Charges API allows you create and manage multiple recurring payments from your customers.
     * @param apiKey Paystack API key
     */
    constructor(apiKey: string);
    /**
     * Send an array of objects with authorization codes and amount, using the supported currency format, so we can process transactions as a batch.
     * @param data Bulk charge details
     */
    create(data: Record<string, BulkChargeBody[]>): Promise<import("axios").AxiosResponse<any, any>>;
    /**
     * This lists all bulk charge batches created by the integration. Statuses can be active, paused, or complete
     */
    list(params?: PaginationParams): Promise<import("axios").AxiosResponse<any, any>>;
    /**
     * This endpoint retrieves a specific batch code. It also returns useful information on its progress by way of the total_charges and pending_charges attributes.
     * @param id_or_code Bulk charge ID or code
     */
    fetch(id_or_code: string): Promise<import("axios").AxiosResponse<any, any>>;
    /**
     * This endpoint retrieves the charges associated with a specified batch code. Pagination parameters are available. You can also filter by status. Charge statuses can be pending, success or failed.
     * @param id_or_code Bulk charge ID or code
     */
    fetchBatch(id_or_code: string, params?: PaginationParams): Promise<import("axios").AxiosResponse<any, any>>;
    /**
     * Use this endpoint to pause processing a batch
     * @param batch_code Batch code of the bulk charge
     */
    pause(batch_code: string): Promise<import("axios").AxiosResponse<any, any>>;
    /**
     * Use this endpoint to resume processing a batch
     * @param batch_code Batch code of the bulk charge
     */
    resume(batch_code: string): Promise<import("axios").AxiosResponse<any, any>>;
}
export interface BulkChargesApi {
    /**
     * The Bulk Charges API allows you create and manage multiple recurring payments from your customers.
     * @param apiKey Paystack API key
     */
    constructor(apiKey: string): BulkChargesApi;
    /**
     * Send an array of objects with authorization codes and amount, using the supported currency format, so we can process transactions as a batch.
     * @param data Bulk charge details
     */
    create(data: Record<string, BulkChargeBody[]>): Promise<any>;
    /**
     * This lists all bulk charge batches created by the integration. Statuses can be active, paused, or complete
     * @param params Pagination parameters (optional)
     */
    list(params?: PaginationParams): Promise<any>;
    /**
     * This endpoint retrieves a specific batch code. It also returns useful information on its progress by way of the total_charges and pending_charges attributes.
     * @param id_or_code Bulk charge ID or code
     */
    fetch(id_or_code: string): Promise<any>;
    /**
     * This endpoint retrieves the charges associated with a specified batch code. Pagination parameters are available. You can also filter by status. Charge statuses can be pending, success or failed.
     * @param id_or_code Bulk charge ID or code
     * @param params Pagination parameters (optional)
     */
    fetchBatch(id_or_code: string, params?: PaginationParams): Promise<any>;
    /**
     * Use this endpoint to pause processing a batch
     * @param batch_code Batch code of the bulk charge
     */
    pause(batch_code: string): Promise<any>;
    /**
     * Use this endpoint to resume processing a batch
     * @param batch_code Batch code of the bulk charge
     */
    resume(batch_code: string): Promise<any>;
}
