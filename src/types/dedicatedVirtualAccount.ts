import { AxiosResponse } from "axios";

export type CreateDedicatedVirtualAccountBody = {
    /** Customer ID or code */
    customer: string;
    // ---------------- [ Optional Params] ----------------
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

    // ------------- [ Optional Params] -------------
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

    // ------------- [ Optional Params] -------------
    /** The day the transfer was made in YYYY-MM-DD format */
    date?: string;
};

export type DedicatedVirtualAccountSplitTransactionBody = {
    /** Customer ID or code */
    customer: string;
    // ------------ [ Optional Params] ------------
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
    create(
        data: CreateDedicatedVirtualAccountBody
    ): Promise<AxiosResponse<any, any>>; // Replace "any" with actual error type

    /**
     * Assign a dedicated virtual account to a customer
     * @param data Account data
     */
    assign(
        data: AssignDedicatedVirtualAccountBody
    ): Promise<AxiosResponse<any, any>>; // Replace "any" with actual error type

    /**
     * List dedicated virtual accounts available on your integration.
     */
    list(): Promise<AxiosResponse<any, any>>; // Replace "any" with actual error type

    /**
     * Get details of a dedicated virtual account on your integration.
     * @param dedicated_account_id Dedicated virtual account ID
     */
    fetch(dedicated_account_id: string): Promise<AxiosResponse<any, any>>; // Replace "any" with actual error type

    /**
     * Requery Dedicated Virtual Account for new transactions
     * @param data Query data
     */
    query(
        data: DedicatedVirtualAccountQueryParams
    ): Promise<AxiosResponse<any, any>>; // Likely doesn't have a specific response structure

    /**
     * Deactivate a dedicated virtual account on your integration.
     * @param dedicated_account_id Dedicated virtual account ID
     */
    deactivate(dedicated_account_id: string): Promise<AxiosResponse<any, any>>; // Likely an empty success response

    /**
     * Split a dedicated virtual account transaction with one or more accounts
     * @param data Transaction data
     */
    split(
        data: DedicatedVirtualAccountSplitTransactionBody
    ): Promise<AxiosResponse<any, any>>; // Replace "any" with actual error type

    /**
     * If you've previously set up split payment for transactions on a dedicated virtual account, you can remove it with this endpoint
     * @param data Transaction data
     */
    removeSplit(
        data: RemoveSplitDedicatedVirtualAccountBody
    ): Promise<AxiosResponse<any, any>>; // Replace "any" with actual error type

    /**
     * Get available bank providers for a dedicated virtual account
     */
    fetchBankProviders(): Promise<AxiosResponse<any[], any>>; // Likely an array of bank provider objects
}
