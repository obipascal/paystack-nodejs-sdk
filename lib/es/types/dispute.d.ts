import { AxiosInstance, AxiosResponse } from "axios";
import { PagerParams } from "./const";
export interface DisputeParams extends PagerParams {
    /** Transaction Id */
    transaction?: string;
    /** Dispute Status. Acceptable values: { awaiting-merchant-feedback | awaiting-bank-feedback | pending | resolved } */
    status?: "awaiting-merchant-feedback" | "awaiting-bank-feedback" | "pending" | "resolved";
}
export type UpdateDisputeBody = {
    /** The amount to refund, in the subunit of the supported currency */
    refund_amount: number;
    /** filename of attachment returned via response from upload url(GET /dispute/:id/upload_url) */
    uploaded_filename?: string;
};
export type AddEvidenceBody = {
    /** Customer email */
    customer_email: string;
    /** Customer name */
    customer_name: string;
    /** Customer phone */
    customer_phone: string;
    /** Details of service involved */
    service_details: string;
    /** Delivery Address */
    delivery_address?: string;
    /** ISO 8601 representation of delivery date (YYYY-MM-DD) */
    delivery_date?: string;
};
export type GetUploadUrlParams = {
    /** The file name, with its extension, that you want to upload. e.g filename.pdf */
    upload_filename: string;
};
export type ResolveDisputeBody = {
    /** Dispute resolution. Accepted values: { merchant-accepted | declined }. */
    resolution: "merchant-accepted" | "declined";
    /** Reason for resolving */
    message: string;
    /** the amount to refund, in the subunit of the supported currency */
    refund_amount: number;
    /** filename of attachment returned via response from upload url(GET /dispute/:id/upload_url) */
    uploaded_filename: string;
    /** Evidence Id for fraud claims */
    evidence?: number;
};
export declare class Disputes {
    readonly httpClient: AxiosInstance;
    /**
     * The Disputes API allows you manage transaction disputes on your integration.
     * @param apiKey Paystack API key
     */
    constructor(apiKey: string);
    /**
     * List disputes
     * @param params Filter options
     */
    list(params: DisputeParams): Promise<AxiosResponse<any, any>>;
    /**
     * Fetch a dispute
     * @param id Dispute ID
     */
    fetch(id: string): Promise<AxiosResponse<any, any>>;
    /**
     * List disputes for a transaction
     * @param id Transaction ID
     */
    listTransactionDispute(id: string): Promise<AxiosResponse<any, any>>;
    /**
     * Update a dispute
     * @param id Dispute ID
     * @param data Dispute details
     */
    update(id: string, data: UpdateDisputeBody): Promise<AxiosResponse<any, any>>;
    /**
     * Add evidence to a dispute
     * @param id Dispute ID
     * @param data Evidence details
     */
    addEvidence(id: string, data: AddEvidenceBody): Promise<AxiosResponse<any, any>>;
    /**
     * Fetch upload url
     * @param id Dispute ID
     * @param params Upload options
     */
    fetchUploadUrl(id: string, params: GetUploadUrlParams): Promise<AxiosResponse<any, any>>;
    /**
     * Resolve a dispute
     * @param id Dispute ID
     * @param data Resolution details
     */
    resolve(id: string, data: any): Promise<AxiosResponse<any, any>>;
    /**
     * Export disputes
     * @param params Filter options
     */
    export(params: DisputeParams): Promise<AxiosResponse<any, any>>;
}
