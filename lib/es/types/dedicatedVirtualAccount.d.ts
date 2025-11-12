import { AxiosResponse } from "axios";
export type CreateDedicatedVirtualAccountBody = {
    /** Customer ID or code */
    customer: string;
    /** The bank slug for preferred bank. To get a list of available banks, use the List Banks endpoint, passing pay_with_bank_transfer=true query parameter */
    preferred_bank?: string;
    /** Subaccount code of the account you want to split the transaction with */
    subaccount?: string;
    /** Split code consisting of the lists of accounts you want to split the transaction with */
    split_code?: string;
    /** Customer's first name */
    first_name?: string;
    /** Customer's last name */
    last_name?: string;
    /** Customer's phone number */
    phone?: string;
};
export type AssignDedicatedVirtualAccountBody = {
    /** Customer email address */
    email: string;
    /** Customer's first name */
    first_name: string;
    /** Customer's last name */
    last_name: string;
    /** Customer's phone number */
    phone: string;
    /** The bank slug for preferred bank. To get a list of available banks, use the List Banks endpoint, passing pay_with_bank_transfer=true query parameter */
    preferred_bank: string;
    /** Currently accepts NG only */
    country: string;
    /** Customer's account number */
    account_number?: string;
    /** Customer's Bank Verification Number */
    bvn?: string;
    /** Customer's bank code */
    bank_code?: string;
    /** Subaccount code of the account you want to split the transaction with */
    subaccount?: string;
    /** Split code consisting of the lists of accounts you want to split the transaction with */
    split_code?: string;
};
export type DedicatedVirtualAccountQueryParams = {
    /** Virtual account number to requery */
    account_number: string;
    /** The bank's slug in lowercase, without spaces e.g. wema-bank */
    provider_slug: string;
    /** The day the transfer was made in YYYY-MM-DD format */
    date?: string;
};
export type DedicatedVirtualAccountSplitTransactionBody = {
    /** Customer ID or code */
    customer: string;
    /** Subaccount code of the account you want to split the transaction with */
    subaccount?: string;
    /** Split code consisting of the lists of accounts you want to split the transaction with */
    split_code?: string;
    /** The bank slug for preferred bank. To get a list of available banks, use the List Providers endpoint */
    preferred_bank?: string;
};
export type RemoveSplitDedicatedVirtualAccountBody = {
    /** Dedicated virtual account number */
    account_number: string;
};
export interface DedicatedAccountBank {
    name: string;
    id: number;
    slug: string;
}
export interface DedicatedAccountCustomer {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    customer_code: string;
    phone: string;
    risk_action: string;
    international_format_phone: string | null;
    metadata?: Record<string, any>;
}
export interface DedicatedAccountData {
    bank: DedicatedAccountBank;
    account_name: string;
    account_number: string;
    assigned: boolean;
    currency: string;
    metadata: any;
    active: boolean;
    id: number;
    created_at: string;
    updated_at: string;
    assignment?: {
        integration: number;
        assignee_id: number;
        assignee_type: string;
        expired: boolean;
        account_type: string;
        assigned_at: string;
    };
    customer?: DedicatedAccountCustomer;
    split_config?: Record<string, any>;
}
export interface BankProvider {
    provider_slug: string;
    bank_id: number;
    bank_name: string;
    id: number;
}
export interface DedicatedAccountCreateResponse extends AxiosResponse {
    message: string;
    data: DedicatedAccountData;
}
export interface DedicatedAccountAssignResponse extends AxiosResponse {
    message: string;
}
export interface DedicatedAccountListResponse extends AxiosResponse {
    message: string;
    data: DedicatedAccountData[];
    meta?: {
        total: number;
        skipped: number;
        perPage: number;
        page: number;
        pageCount: number;
    };
}
export interface DedicatedAccountFetchResponse extends AxiosResponse {
    message: string;
    data: DedicatedAccountData;
}
export interface DedicatedAccountRequeryResponse extends AxiosResponse {
    message: string;
}
export interface DedicatedAccountDeactivateResponse extends AxiosResponse {
    message: string;
    data: DedicatedAccountData;
}
export interface DedicatedAccountSplitResponse extends AxiosResponse {
    message: string;
    data: DedicatedAccountData;
}
export interface DedicatedAccountRemoveSplitResponse extends AxiosResponse {
    message: string;
    data: DedicatedAccountData;
}
export interface DedicatedAccountProvidersResponse extends AxiosResponse {
    message: string;
    data: BankProvider[];
}
export declare class DedicatedVirtualAccounts {
    /**
     * The Dedicated Virtual Account API enables Nigerian merchants to manage unique payment accounts of their customers.
     * @param apiKey Paystack API key
     */
    constructor(apiKey: string);
    /**
     * Create a dedicated virtual account
     * @param data Account data
     */
    create(data: CreateDedicatedVirtualAccountBody): Promise<DedicatedAccountCreateResponse>;
    /**
     * Assign a dedicated virtual account to a customer
     * @param data Account data
     */
    assign(data: AssignDedicatedVirtualAccountBody): Promise<DedicatedAccountAssignResponse>;
    /**
     * List dedicated virtual accounts available on your integration.
     */
    list(): Promise<DedicatedAccountListResponse>;
    /**
     * Get details of a dedicated virtual account on your integration.
     * @param dedicated_account_id Dedicated virtual account ID
     */
    fetch(dedicated_account_id: string): Promise<DedicatedAccountFetchResponse>;
    /**
     * Requery Dedicated Virtual Account for new transactions
     * @param data Query data
     */
    query(data: DedicatedVirtualAccountQueryParams): Promise<DedicatedAccountRequeryResponse>;
    /**
     * Deactivate a dedicated virtual account on your integration.
     * @param dedicated_account_id Dedicated virtual account ID
     */
    deactivate(dedicated_account_id: string): Promise<DedicatedAccountDeactivateResponse>;
    /**
     * Split a dedicated virtual account transaction with one or more accounts
     * @param data Transaction data
     */
    split(data: DedicatedVirtualAccountSplitTransactionBody): Promise<DedicatedAccountSplitResponse>;
    /**
     * If you've previously set up split payment for transactions on a dedicated virtual account, you can remove it with this endpoint
     * @param data Transaction data
     */
    removeSplit(data: RemoveSplitDedicatedVirtualAccountBody): Promise<DedicatedAccountRemoveSplitResponse>;
    /**
     * Get available bank providers for a dedicated virtual account
     */
    fetchBankProviders(): Promise<DedicatedAccountProvidersResponse>;
}
