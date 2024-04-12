import { AxiosInstance } from "axios";
import HttpRequest, { HttpRequestEndpoints } from "../config/request";
import { BulkChargeBody } from "../types/charge";
import { PaginationParams } from "../types/const";

export class BulkCharges {
    private httpClient: AxiosInstance;

    /**
     * The Bulk Charges API allows you create and manage multiple recurring payments from your customers.
     * @param apiKey Paystack API key
     */
    constructor(apiKey: string) {
        this.httpClient = HttpRequest(apiKey);
    }

    /**
     * Send an array of objects with authorization codes and amount, using the supported currency format, so we can process transactions as a batch.
     * @param data Bulk charge details
     */
    async create(data: Record<string, BulkChargeBody[]>) {
        return await this.httpClient.post(
            HttpRequestEndpoints.bulkCharge.create,
            data
        );
    }

    /**
     * This lists all bulk charge batches created by the integration. Statuses can be active, paused, or complete
     */
    async list(params?: PaginationParams) {
        return await this.httpClient.get(HttpRequestEndpoints.bulkCharge.list, {
            params,
        });
    }

    /**
     * This endpoint retrieves a specific batch code. It also returns useful information on its progress by way of the total_charges and pending_charges attributes.
     * @param id_or_code Bulk charge ID or code
     */
    async fetch(id_or_code: string) {
        return await this.httpClient.get(
            HttpRequestEndpoints.bulkCharge.fetch.replace(
                ":id_or_code",
                id_or_code
            )
        );
    }

    /**
     * This endpoint retrieves the charges associated with a specified batch code. Pagination parameters are available. You can also filter by status. Charge statuses can be pending, success or failed.
     * @param id_or_code Bulk charge ID or code
     */
    async fetchBatch(id_or_code: string, params?: PaginationParams) {
        return await this.httpClient.get(
            HttpRequestEndpoints.bulkCharge.fetchBatch.replace(
                ":id_or_code",
                id_or_code
            ),
            { params }
        );
    }

    /**
     * Use this endpoint to pause processing a batch
     * @param batch_code Batch code of the bulk charge
     */
    async pause(batch_code: string) {
        return await this.httpClient.post(
            HttpRequestEndpoints.bulkCharge.pause.replace(
                ":batch_code",
                batch_code
            )
        );
    }

    /**
     * Use this endpoint to resume processing a batch
     * @param batch_code Batch code of the bulk charge
     */
    async resume(batch_code: string) {
        return await this.httpClient.post(
            HttpRequestEndpoints.bulkCharge.resume.replace(
                ":batch_code",
                batch_code
            )
        );
    }
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
    create(data: Record<string, BulkChargeBody[]>): Promise<any>; // Replace "any" with the actual response type

    /**
     * This lists all bulk charge batches created by the integration. Statuses can be active, paused, or complete
     * @param params Pagination parameters (optional)
     */
    list(params?: PaginationParams): Promise<any>; // Replace "any" with the actual response type

    /**
     * This endpoint retrieves a specific batch code. It also returns useful information on its progress by way of the total_charges and pending_charges attributes.
     * @param id_or_code Bulk charge ID or code
     */
    fetch(id_or_code: string): Promise<any>; // Replace "any" with the actual response type

    /**
     * This endpoint retrieves the charges associated with a specified batch code. Pagination parameters are available. You can also filter by status. Charge statuses can be pending, success or failed.
     * @param id_or_code Bulk charge ID or code
     * @param params Pagination parameters (optional)
     */
    fetchBatch(id_or_code: string, params?: PaginationParams): Promise<any>; // Replace "any" with the actual response type

    /**
     * Use this endpoint to pause processing a batch
     * @param batch_code Batch code of the bulk charge
     */
    pause(batch_code: string): Promise<any>; // Replace "any" with the actual response type

    /**
     * Use this endpoint to resume processing a batch
     * @param batch_code Batch code of the bulk charge
     */
    resume(batch_code: string): Promise<any>; // Replace "any" with the actual response type
}
