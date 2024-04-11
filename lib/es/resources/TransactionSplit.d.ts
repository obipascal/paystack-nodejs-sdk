import { RemoveSubaccountFromSplitBody, SplitSubaccountBody, TransactionSplitBody, UpdateSplitTransnactionBody } from "../types/transactions";
export default class TransactionSplit {
    private httpClient;
    /**
     * The Transaction Splits API enables merchants split the settlement for a transaction across their payout account, and one or more subaccounts.
     * @param apiKey Paystack API key
     */
    constructor(apiKey: string);
    /**
     * Create a split payment on your integration
     * @param data Transaction split data
     */
    create(data: TransactionSplitBody): Promise<import("axios").AxiosResponse<any, any>>;
    /**
     * List the transaction splits available on your integration
     */
    list(): Promise<import("axios").AxiosResponse<any, any>>;
    /**
     * Get details of a split on your integration
     * @param id Transaction split ID
     */
    fetch(id: string): Promise<import("axios").AxiosResponse<any, any>>;
    /**
     * Update a transaction split details on your integration
     * @param id Transaction split ID
     * @param data Transaction split data
     */
    update(id: string, data: UpdateSplitTransnactionBody): Promise<import("axios").AxiosResponse<any, any>>;
    /**
     * Add a Subaccount to a Transaction Split, or update the share of an existing Subaccount in a Transaction Split
     * @param id Transaction split ID
     * @param data Split subaccount data
     */
    addOrUpdateSplitSubaccount(id: string, data: SplitSubaccountBody): Promise<import("axios").AxiosResponse<any, any>>;
    /**
     * Remove a subaccount from a transaction split
     * @param id Transaction split ID
     * @param subaccount Subaccount code
     */
    removeSplitSubaccount(id: string, data: RemoveSubaccountFromSplitBody): Promise<import("axios").AxiosResponse<any, any>>;
}
