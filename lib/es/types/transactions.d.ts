import { AxiosInstance, AxiosResponse } from "axios";
export type InitializeTransactionBody = {
    /** Amount should be in the subunit of the supported currency */
    amount: string;
    /** Customer's email address */
    email: string;
    /** The transaction currency. Defaults to your integration currency. */
    currency?: "NGN" | "USD" | "GHS" | "ZAR" | "KES";
    /** Unique transaction reference. Only -, ., = and alphanumeric characters allowed. */
    reference?: string;
    /** Fully qualified url, e.g. https://example.com/ . Use this to override the callback url provided on the dashboard for this transaction */
    callback_url?: string;
    /** If transaction is to create a subscription to a predefined plan, provide plan code here. This would invalidate the value provided in amount */
    plan?: string;
    /** Number of times to charge customer during subscription to plan */
    invoice_limit?: number;
    /** Stringified JSON object. Add a custom_fields attribute which has an array of objects if you would like the fields to be added to your transaction when displayed on the dashboard. Sample: {"custom_fields":[{"display_name":"Cart ID","variable_name": "cart_id","value": "8393"}]} */
    metadata?: Record<string, any>;
    /** An array of payment channels to control what channels you want to make available to the user to make a payment with. Available channels include: ["card", "bank", "ussd", "qr", "mobile_money", "bank_transfer", "eft"] */
    channels?: ("card" | "bank" | "ussd" | "qr" | "mobile_money" | "bank_transfer" | "eft")[];
    /** The split code of the transaction split. e.g. SPL_98WF13Eb3w */
    split_code?: string;
    /** The code for the subaccount that owns the payment. e.g. ACCT_8f4s1eq7ml6rlzj */
    subaccount?: string;
    /** An amount used to override the split configuration for a single split payment. If set, the amount specified goes to the main account regardless of the split configuration. */
    transaction_charge?: number;
    /** Who bears Paystack charges? account or subaccount (defaults to account). */
    bearer?: "account" | "subaccount";
};
export type ChargeAuthorizationBody = {
    /** Amount should be in the subunit of the supported currency */
    amount: number;
    /** Customer's email address */
    email: string;
    /** Valid authorization code to charge */
    authorization_code: string;
    /** Unique transaction reference. Only -, ., = and alphanumeric characters allowed. */
    reference?: string;
    /** Currency in which amount should be charged. */
    currency?: "NGN" | "USD" | "GHS" | "ZAR" | "KES";
    /** Stringified JSON object. Add a custom_fields attribute which has an array of objects if you would like the fields to be added to your transaction when displayed on the dashboard. Sample: {"custom_fields":[{"display_name":"Cart ID","variable_name": "cart_id","value": "8393"}]} */
    metadata?: Record<string, any>;
    /**Send us 'card' or 'bank' or 'card','bank' as an array to specify what options to show the user paying */
    channels?: ("card" | "bank")[];
    /**The code for the subaccount that owns the payment. e.g. ACCT_8f4s1eq7ml6rlzj */
    subaccount?: string;
    /** A flat fee to charge the subaccount for this transaction in the subunit of the supported currency. This overrides the split percentage set when the subaccount was created. Ideally, you will need to use this if you are splitting in flat rates (since subaccount creation only allows for percentage split). */
    transaction_charge?: number;
    /** Who bears Paystack charges? account or subaccount (defaults to account). */
    bearer?: "account" | "subaccount";
    /** If you are making a scheduled charge call, it is a good idea to queue them so the processing system does not get overloaded causing transaction processing errors. Send queue:true to take advantage of our queued charging. */
    queue?: boolean;
};
export type PartialDebitBody = {
    /**Authorization Code */
    authorization_code: string;
    /** Specify the currency you want to debit. Allowed values are NGN or GHS. */
    currency: "NGN" | "USD" | "GHS" | "ZAR" | "KES";
    /** Amount should be in the subunit of the supported currency */
    amount: number;
    /** Customer's email address (attached to the authorization code) */
    email: string;
    /** Unique transaction reference. Only -, ., = and alphanumeric characters allowed. */
    reference?: string;
    /** Minimum amount to charge */
    at_least?: number;
};
export type TransactionSplitBody = {
    /** Name of the transaction split */
    name: string;
    /** The type of transaction split you want to create. You can use one of the following: percentage | flat */
    type: string;
    /** Any of the supported currency */
    currency: PartialDebitBody["currency"];
    /** A list of object containing subaccount code and number of shares: [{subaccount: ‘ACT_xxxxxxxxxx’, share: xxx},{...}] */
    subaccounts: Array<string>;
    /** Any of subaccount | account | all-proportional | all */
    bearer_type: string;
    /** Subaccount code */
    bearer_subaccount: string;
};
export type UpdateSplitTransnactionBody = {
    /** Name of the transaction split */
    name: string;
    /** True or False */
    active: boolean;
    /** Any of the following values: subaccount | account | all-proportional | all */
    bearer_type?: string;
    /** Subaccount code of a subaccount in the split group. This should be specified only if the bearer_type is subaccount */
    bearer_subaccount?: string;
};
export type SplitSubaccountBody = {
    /** This is the sub account code */
    subaccount: string;
    /** This is the transaction share for the subaccount */
    share: number;
};
export type RemoveSubaccountFromSplitBody = {
    /** This is the sub account code */
    subaccount: string;
};
export declare class Transactions {
    readonly httpClient: AxiosInstance;
    /**
     * The Transactions API allows you create and manage payments on your integration.
     * @param apiKey Paystack API key
     */
    constructor(apiKey: string);
    /**
     * Initialize a transaction from your backend
     * @param data Transaction initialization data
     */
    initialize(data: InitializeTransactionBody): Promise<AxiosResponse<any, any>>;
    /**
     * Confirm the status of a transaction
     * @param reference Transaction reference
     */
    verify(reference: string): Promise<AxiosResponse<any, any>>;
    /**
     * List transactions carried out on your integration
     */
    list(): Promise<AxiosResponse<any, any>>;
    /**
     * Get details of a transaction carried out on your integration
     * @param id Transaction ID
     */
    single(id: string): Promise<AxiosResponse<any, any>>;
    /**
     * All authorizations marked as reusable can be charged with this endpoint whenever you need to receive payments
     * @param data Charge authorization data
     */
    chargeAuthorization(data: ChargeAuthorizationBody): Promise<AxiosResponse<any, any>>;
    /**
     * View the timeline of a transaction
     * @param id_or_reference Transaction ID or reference
     */
    timeline(id_or_reference: string): Promise<AxiosResponse<any, any>>;
    /**
     * Total amount received on your account
     */
    total(): Promise<AxiosResponse<any, any>>;
    /**
     * Export a list of transactions carried out on your integration
     */
    export(): Promise<AxiosResponse<any, any>>;
    /**
     * Retrieve part of a payment from a customer
     */
    partialDebit(data: PartialDebitBody): Promise<AxiosResponse<any, any>>;
}
export declare class TransactionSplit {
    readonly httpClient: AxiosInstance;
    /**
     * The Transaction Splits API enables merchants split the settlement for a transaction across their payout account, and one or more subaccounts.
     * @param apiKey Paystack API key
     */
    constructor(apiKey: string);
    /**
     * Create a split payment on your integration
     * @param data Transaction split data
     */
    create(data: TransactionSplitBody): Promise<AxiosResponse<any, any>>;
    /**
     * List the transaction splits available on your integration
     */
    list(): Promise<AxiosResponse<any, any>>;
    /**
     * Get details of a split on your integration
     * @param id Transaction split ID
     */
    fetch(id: string): Promise<AxiosResponse<any, any>>;
    /**
     * Update a transaction split details on your integration
     * @param id Transaction split ID
     * @param data Transaction split data
     */
    update(id: string, data: UpdateSplitTransnactionBody): Promise<AxiosResponse<any, any>>;
    /**
     * Add a Subaccount to a Transaction Split, or update the share of an existing Subaccount in a Transaction Split
     * @param id Transaction split ID
     * @param data Split subaccount data
     */
    addOrUpdateSplitSubaccount(id: string, data: SplitSubaccountBody): Promise<AxiosResponse<any, any>>;
    /**
     * Remove a subaccount from a transaction split
     * @param id Transaction split ID
     * @param subaccount Subaccount code
     */
    removeSplitSubaccount(id: string, data: RemoveSubaccountFromSplitBody): Promise<AxiosResponse<any, any>>;
}
