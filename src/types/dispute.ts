import { AxiosInstance, AxiosResponse } from "axios";
import { PagerParams } from "./const";

export interface DisputeParams extends PagerParams {
    /** Transaction Id */
    transaction?: string;
    /** Dispute Status. Acceptable values: { awaiting-merchant-feedback | awaiting-bank-feedback | pending | resolved } */
    status?:
        | "awaiting-merchant-feedback"
        | "awaiting-bank-feedback"
        | "pending"
        | "resolved";
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

// Dispute data structures
export interface DisputeTransaction {
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
    metadata: any;
    fees: number | null;
    customer: Record<string, any>;
    authorization: Record<string, any>;
    plan: any;
    requested_amount: number;
}

export interface DisputeData {
    id: number;
    refund_amount: number | null;
    currency: string | null;
    status: string;
    resolution: string | null;
    domain: string;
    transaction: DisputeTransaction;
    transaction_reference?: string | null;
    category?: string;
    customer?: Record<string, any>;
    bin?: string | null;
    last4?: string | null;
    dueAt?: string | null;
    resolvedAt?: string | null;
    evidence?: any;
    attachments?: string | null;
    note?: string | null;
    history?: Array<{
        status: string;
        by: string;
        createdAt: string;
    }>;
    messages?: Array<{
        sender: string;
        body: string;
        createdAt: string;
    }>;
    created_at: string;
    updated_at: string;
}

export interface DisputeEvidence {
    customer_email: string;
    customer_name: string;
    customer_phone: string;
    service_details: string;
    delivery_address?: string;
    delivery_date?: string;
    dispute: number;
    id: number;
    createdAt: string;
    updatedAt: string;
}

// Response interfaces for Dispute API
export interface DisputeListResponse extends AxiosResponse {
    message: string;
    data: DisputeData[];
    meta?: {
        total: number;
        skipped: number;
        perPage: number;
        page: number;
        pageCount: number;
    };
}

export interface DisputeFetchResponse extends AxiosResponse {
    message: string;
    data: DisputeData;
}

export interface DisputeTransactionResponse extends AxiosResponse {
    message: string;
    data: {
        history: Array<{
            id: number;
            dispute: number;
            status: string;
            by: string;
            createdAt: string;
            updatedAt: string;
        }>;
        messages: Array<{
            sender: string;
            body: string;
            dispute: number;
            id: number;
            is_deleted: boolean;
            createdAt: string;
            updatedAt: string;
        }>;
        dispute: DisputeData;
    };
}

export interface DisputeUpdateResponse extends AxiosResponse {
    message: string;
    data: DisputeData[];
}

export interface DisputeEvidenceResponse extends AxiosResponse {
    message: string;
    data: DisputeEvidence;
}

export interface DisputeUploadUrlResponse extends AxiosResponse {
    message: string;
    data: {
        signedUrl: string;
        fileName: string;
    };
}

export interface DisputeResolveResponse extends AxiosResponse {
    message: string;
    data: DisputeData;
}

export interface DisputeExportResponse extends AxiosResponse {
    message: string;
    data: {
        path: string;
        expiresAt: string;
    };
}

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
    list(params: DisputeParams): Promise<DisputeListResponse>;

    /**
     * Fetch a dispute
     * @param id Dispute ID
     */
    fetch(id: string): Promise<DisputeFetchResponse>;

    /**
     * List disputes for a transaction
     * @param id Transaction ID
     */
    listTransactionDispute(id: string): Promise<DisputeTransactionResponse>;

    /**
     * Update a dispute
     * @param id Dispute ID
     * @param data Dispute details
     */
    update(id: string, data: UpdateDisputeBody): Promise<DisputeUpdateResponse>;

    /**
     * Add evidence to a dispute
     * @param id Dispute ID
     * @param data Evidence details
     */
    addEvidence(
        id: string,
        data: AddEvidenceBody
    ): Promise<DisputeEvidenceResponse>;

    /**
     * Fetch upload url
     * @param id Dispute ID
     * @param params Upload options
     */
    fetchUploadUrl(
        id: string,
        params: GetUploadUrlParams
    ): Promise<DisputeUploadUrlResponse>;

    /**
     * Resolve a dispute
     * @param id Dispute ID
     * @param data Resolution details
     */
    resolve(
        id: string,
        data: ResolveDisputeBody
    ): Promise<DisputeResolveResponse>;

    /**
     * Export disputes
     * @param params Filter options
     */
    export(params: DisputeParams): Promise<DisputeExportResponse>;
}
