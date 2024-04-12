import {
    ChargeAuthorizationBody,
    InitializeTransactionBody,
    PartialDebitBody,
} from "../types/transactions";
export class Transactions {
    private httpClient;
    /**
     * The Transactions API allows you create and manage payments on your integration.
     * @param apiKey Paystack API key
     */
    constructor(apiKey: string);
    /**
     * Initialize a transaction from your backend
     * @param data Transaction initialization data
     */
    initialize(
        data: InitializeTransactionBody
    ): Promise<import("axios").AxiosResponse<any, any>>;
    /**
     * Confirm the status of a transaction
     * @param reference Transaction reference
     */
    verify(reference: string): Promise<import("axios").AxiosResponse<any, any>>;
    /**
     * List transactions carried out on your integration
     */
    list(): Promise<import("axios").AxiosResponse<any, any>>;
    /**
     * Get details of a transaction carried out on your integration
     * @param id Transaction ID
     */
    single(id: string): Promise<import("axios").AxiosResponse<any, any>>;
    /**
     * All authorizations marked as reusable can be charged with this endpoint whenever you need to receive payments
     * @param data Charge authorization data
     */
    chargeAuthorization(
        data: ChargeAuthorizationBody
    ): Promise<import("axios").AxiosResponse<any, any>>;
    /**
     * View the timeline of a transaction
     * @param id_or_reference Transaction ID or reference
     */
    timeline(
        id_or_reference: string
    ): Promise<import("axios").AxiosResponse<any, any>>;
    /**
     * Total amount received on your account
     */
    total(): Promise<import("axios").AxiosResponse<any, any>>;
    /**
     * Export a list of transactions carried out on your integration
     */
    export(): Promise<import("axios").AxiosResponse<any, any>>;
    /**
     * Retrieve part of a payment from a customer
     */
    partialDebit(
        data: PartialDebitBody
    ): Promise<import("axios").AxiosResponse<any, any>>;
}

