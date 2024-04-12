import { AssignDedicatedVirtualAccountBody, CreateDedicatedVirtualAccountBody, DedicatedVirtualAccountSplitTransactionBody, DedicatedVirtualAccountQueryParams, RemoveSplitDedicatedVirtualAccountBody } from "../types/dedicatedVirtualAccount";
export default class DedicatedVirtualAccounts {
    private httpClient;
    /**
     * The Dedicated Virtual Account API enables Nigerian merchants to manage unique payment accounts of their customers.
     * @param apiKey Paystack API key
     */
    constructor(apiKey: string);
    /**
     * Create a dedicated virtual account
     * @param data Account data
     */
    create(data: CreateDedicatedVirtualAccountBody): Promise<import("axios").AxiosResponse<any, any>>;
    /**
     * Assign a dedicated virtual account to a customer
     * @param data Account data
     */
    assign(data: AssignDedicatedVirtualAccountBody): Promise<import("axios").AxiosResponse<any, any>>;
    /**
     * List dedicated virtual accounts available on your integration.
     */
    list(): Promise<import("axios").AxiosResponse<any, any>>;
    /**
     * Get details of a dedicated virtual account on your integration.
     * @param dedicated_account_id Dedicated virtual account ID
     */
    fetch(dedicated_account_id: string): Promise<import("axios").AxiosResponse<any, any>>;
    /**
     * Requery Dedicated Virtual Account for new transactions
     * @param data Query data
     */
    query(data: DedicatedVirtualAccountQueryParams): Promise<import("axios").AxiosResponse<any, any>>;
    /**
     * Deactivate a dedicated virtual account on your integration.
     * @param dedicated_account_id Dedicated virtual account ID
     */
    deactivate(dedicated_account_id: string): Promise<import("axios").AxiosResponse<any, any>>;
    /**
     * Split a dedicated virtual account transaction with one or more accounts
     * @param data Transaction data
     */
    split(data: DedicatedVirtualAccountSplitTransactionBody): Promise<import("axios").AxiosResponse<any, any>>;
    /**
     * If you've previously set up split payment for transactions on a dedicated virtual account, you can remove it with this endpoint
     * @param data Transaction data
     */
    removeSplit(data: RemoveSplitDedicatedVirtualAccountBody): Promise<import("axios").AxiosResponse<any, any>>;
    /**
     * Get available bank providers for a dedicated virtual account
     */
    fetchBankProviders(): Promise<import("axios").AxiosResponse<any, any>>;
}
