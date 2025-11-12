import { AxiosInstance, AxiosResponse } from "axios";
import { Currencies } from "./const";

export type TransferRecipientBody = {
    /** Recipient Type. It could be one of: nuban, ghipss, mobile_money or basa */
    type: "nuban" | "ghipss" | "mobile_money" | "basa";
    /** The recipient's name according to their account registration. */
    name: string;
    /** Required for all recipient types except authorization */
    account_number: string;
    /** Required for all recipient types except authorization. You can get the list of Bank Codes by calling the List Banks endpoint. */
    bank_code: string;
    //   --------- [ Optionals ] ---------
    /** A description for this recipient */
    description?: string;
    /** Currency for the account receiving the transfer */
    currency?: Currencies;
    /** An authorization code from a previous transaction */
    authorization_code?: string;
    /** Store additional information about your recipient in a structured format, JSON */
    metadata?: Record<string, any>;
};

export type BatchRecipientBody = {
    /** A list of transfer recipient object. Each object should contain type, name, and bank_code. Any Create Transfer Recipient param can also be passed. */
    batch: Array<TransferRecipientBody>;
};

export type UpdateRecipientBody = {
    /** A name for the recipient */
    name: string;
    /** Email address of the recipient */
    email?: string;
};

// Response interfaces for TransferRecipients API
export interface RecipientDetails {
    authorization_code?: string;
    account_number?: string;
    account_name: string | null;
    bank_code?: string;
    bank_name?: string;
}

export interface RecipientData {
    active: boolean;
    createdAt: string;
    currency: string;
    domain: string;
    id: number;
    integration: number;
    name: string;
    recipient_code: string;
    type: string;
    updatedAt: string;
    is_deleted: boolean;
    details: RecipientDetails;
    metadata: Record<string, any> | null;
    description?: string;
    email?: string;
}

export interface TransferRecipientCreateResponse extends AxiosResponse {
    message: string;
    data: RecipientData;
}

export interface BulkRecipientSuccess extends RecipientData {}

export interface BulkRecipientError {
    account_number: string;
    name: string;
    bank_code: string;
    message: string;
}

export interface BulkRecipientData {
    success: BulkRecipientSuccess[];
    errors: BulkRecipientError[];
}

export interface TransferRecipientBulkResponse extends AxiosResponse {
    message: string;
    data: BulkRecipientData;
}

export interface TransferRecipientListResponse extends AxiosResponse {
    message: string;
    data: RecipientData[];
    meta: {
        total: number;
        skipped: number;
        perPage: number;
        page: number;
        pageCount: number;
    };
}

export interface TransferRecipientFetchResponse extends AxiosResponse {
    message: string;
    data: RecipientData;
}

export interface TransferRecipientUpdateResponse extends AxiosResponse {
    message: string;
    data: RecipientData;
}

export interface TransferRecipientDeleteResponse extends AxiosResponse {
    message: string;
}

export declare class TransferRecipients {
    readonly httpClient: AxiosInstance;

    /**
     * The Transfer Recipients API allows you create and manage beneficiaries that you send money to.
     * @param apiKey Paystack API key
     */
    constructor(apiKey: string);

    /**
     * Creates a new recipient. A duplicate account number will lead to the retrieval of the existing record.
     * @param data Transfer recipient details
     */
    create(
        data: TransferRecipientBody
    ): Promise<TransferRecipientCreateResponse>;

    /**
     * Create multiple transfer recipients in batches. A duplicate account number will lead to the retrieval of the existing record.
     * @param data List of transfer recipient details
     */
    createBulk(
        data: BatchRecipientBody
    ): Promise<TransferRecipientBulkResponse>;

    /**
     * List transfer recipients available on your integration
     */
    list(): Promise<TransferRecipientListResponse>;

    /**
     * Fetch the details of a transfer recipient
     * @param id_or_code Transfer recipient ID or code
     */
    fetch(id_or_code: string): Promise<TransferRecipientFetchResponse>;

    /**
     * Update transfer recipients available on your integration
     * @param id_or_code Transfer recipient ID or code
     * @param data Updated transfer recipient details
     */
    update(
        id_or_code: string,
        data: TransferRecipientBody
    ): Promise<TransferRecipientUpdateResponse>;

    /**
     * Delete a transfer recipient (sets the transfer recipient to inactive)
     * @param id_or_code Transfer recipient ID or code
     */
    delete(id_or_code: string): Promise<TransferRecipientDeleteResponse>;
}
