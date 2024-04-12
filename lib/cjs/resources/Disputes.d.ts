import { AddEvidenceBody, DisputeParams, UpdateDisputeBody } from "../types/dispute";
export declare class Disputes {
    private httpClient;
    /**
     * The Disputes API allows you manage transaction disputes on your integration.
     * @param apiKey Paystack API key
     */
    constructor(apiKey: string);
    /**
     * List disputes
     * @param params Filter options
     */
    list(params: DisputeParams): Promise<import("axios").AxiosResponse<any, any>>;
    /**
     * Fetch a dispute
     * @param id Dispute ID
     */
    fetch(id: string): Promise<import("axios").AxiosResponse<any, any>>;
    /**
     * List disputes for a transaction
     * @param id Transaction ID
     */
    listTransactionDispute(id: string): Promise<import("axios").AxiosResponse<any, any>>;
    /**
     * Update a dispute
     * @param id Dispute ID
     * @param data Dispute details
     */
    update(id: string, data: UpdateDisputeBody): Promise<import("axios").AxiosResponse<any, any>>;
    /**
     * Add evidence to a dispute
     * @param id Dispute ID
     * @param data Evidence details
     */
    addEvidence(id: string, data: AddEvidenceBody): Promise<import("axios").AxiosResponse<any, any>>;
    /**
     * Fetch upload url
     * @param id Dispute ID
     * @param params Upload options
     */
    fetchUploadUrl(id: string, params: {
        upload_filename: string;
    }): Promise<import("axios").AxiosResponse<any, any>>;
    /**
     * Resolve a dispute
     * @param id Dispute ID
     * @param data Resolution details
     */
    resolve(id: string, data: any): Promise<import("axios").AxiosResponse<any, any>>;
    /**
     * Export disputes
     */
    export(params: DisputeParams): Promise<import("axios").AxiosResponse<any, any>>;
}
