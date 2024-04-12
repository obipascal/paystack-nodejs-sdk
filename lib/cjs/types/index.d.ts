import { AxiosResponse } from "axios";
import { ApplePayBody } from "./applepay";
import { PaginationParams } from "./const";
import { BulkChargeBody, ChargeBody, SubmitAddressBody, SubmitBirthdayBody, SubmitOtpBody, SubmitPINBody, SubmitPhoneBody } from "./charge";
import { BlacklistOrWhitelistCustomerBody, CreateCustomerBody, DeactivateAuthorizationBody, UpdateCustomerBody } from "./customer";
import { AssignDedicatedVirtualAccountBody, CreateDedicatedVirtualAccountBody, DedicatedVirtualAccountQueryParams, DedicatedVirtualAccountSplitTransactionBody, RemoveSplitDedicatedVirtualAccountBody } from "./dedicatedVirtualAccount";
export * from "./applepay";
export * from "./charge";
export * from "./const";
export * from "./customer";
export * from "./dedicatedVirtualAccount";
export * from "./dispute";
export * from "./miscellaneous";
export * from "./page";
export * from "./paymentRequest";
export * from "./plans";
export * from "./product";
export * from "./refund";
export * from "./subaccounts";
export * from "./subscription";
export * from "./transactions";
export * from "./transfer";
export * from "./transferRecipient";
export * from "./verification";
export interface ApplePayInterface {
    /**
     * Register a top-level domain or subdomain for your Apple Pay integration.
     * @param data Domain name to be registered
     */
    registerDomain(data: ApplePayBody): Promise<AxiosResponse<any, any>>;
    /**
     * Lists all registered domains on your integration. Returns an empty array if no domains have been added.
     */
    listDomains(): Promise<AxiosResponse<any, any>>;
    /**
     * Unregister a top-level domain or subdomain previously used for your Apple Pay integration.
     * @param data request body
     */
    unregisterDomain(data: ApplePayBody): Promise<AxiosResponse<any, any>>;
}
export interface BulkChargesInterface {
    /**
     * Send an array of objects with authorization codes and amount, using the supported currency format, so we can process transactions as a batch.
     * @param data Bulk charge details
     */
    create(data: Record<string, BulkChargeBody[]>): Promise<AxiosResponse<any, any>>;
    /**
     * This lists all bulk charge batches created by the integration. Statuses can be active, paused, or complete
     * @param params Pagination parameters (optional)
     */
    list(params?: PaginationParams): Promise<AxiosResponse<any, any>>;
    /**
     * This endpoint retrieves a specific batch code. It also returns useful information on its progress by way of the total_charges and pending_charges attributes.
     * @param id_or_code Bulk charge ID or code
     */
    fetch(id_or_code: string): Promise<AxiosResponse<any, any>>;
    /**
     * This endpoint retrieves the charges associated with a specified batch code. Pagination parameters are available. You can also filter by status. Charge statuses can be pending, success or failed.
     * @param id_or_code Bulk charge ID or code
     * @param params Pagination parameters (optional)
     */
    fetchBatch(id_or_code: string, params?: PaginationParams): Promise<AxiosResponse<any, any>>;
    /**
     * Use this endpoint to pause processing a batch
     * @param batch_code Batch code of the bulk charge
     */
    pause(batch_code: string): Promise<AxiosResponse<any, any>>;
    /**
     * Use this endpoint to resume processing a batch
     * @param batch_code Batch code of the bulk charge
     */
    resume(batch_code: string): Promise<AxiosResponse<any, any>>;
}
export interface ChargesInterface {
    /**
     * Initialize a charge
     * @param data Charge details
     */
    initialize(data: ChargeBody): Promise<AxiosResponse<any, any>>;
    /**
     * Submit a PIN
     * @param data Charge details
     */
    submitPin(data: SubmitPINBody): Promise<AxiosResponse<any, any>>;
    /**
     * Submit an OTP
     * @param data Charge details
     */
    submitOtp(data: SubmitOtpBody): Promise<AxiosResponse<any, any>>;
    /**
     * Submit a phone number
     * @param data Charge details
     */
    submitPhone(data: SubmitPhoneBody): Promise<AxiosResponse<any, any>>;
    /**
     * Submit a birthday
     * @param data Charge details
     */
    submitBirthday(data: SubmitBirthdayBody): Promise<AxiosResponse<any, any>>;
    /**
     * Check pending charge
     * @param reference Charge reference
     */
    checkPendingCharge(reference: string): Promise<AxiosResponse<any, any>>;
    /**
     * Submit an address
     * @param data Charge details
     */
    submitAddress(data: SubmitAddressBody): Promise<AxiosResponse<any, any>>;
}
/**
 * The Customers API allows you create and manage customers on your integration.
 * @param apiKey Paystack API key
 */
export interface CustomersInterface {
    /**
     * Create a customer on your integration.
     * ___
     * The first_name, last_name and phone are optional parameters. However, when creating a customer that would be assigned a Dedicated Virtual Account and your business catgeory falls under Betting, Financial services, and General Service, then these parameters become compulsory.
     * @param data Customer data
     */
    create(data: CreateCustomerBody): Promise<AxiosResponse<any, any>>;
    /**
     * List customers available on your integration.
     */
    list(): Promise<AxiosResponse<any, any>>;
    /**
     * Get details of a customer on your integration.
     * @param email_or_code Customer's email or code
     */
    fetch(email_or_code: string): Promise<AxiosResponse<any, any>>;
    /**
     * Update a customer's details on your integration
     * @param code Customer's code
     * @param data Customer data
     */
    update(code: string, data: UpdateCustomerBody): Promise<AxiosResponse<any, any>>;
    /**
     * Validate a customer's identity
     * @param code Customer's code
     * @param data Customer identification data
     */
    validate(code: string, data: any): Promise<AxiosResponse<any, any>>;
    /**
     * Whitelist or blacklist a customer on your integration
     * @param data Customer risk action data
     */
    blacklistOrWhitelistCustomer(data: BlacklistOrWhitelistCustomerBody): Promise<AxiosResponse<any, any>>;
    /**
     * Deactivate an authorization
     * @param data Authorization deactivation data
     */
    deactivateAuthorization(data: DeactivateAuthorizationBody): Promise<AxiosResponse<any, any>>;
}
export interface DedicatedVirtualAccountsInterface {
    /**
     * Create a dedicated virtual account
     * @param data Account data
     */
    create(data: CreateDedicatedVirtualAccountBody): Promise<AxiosResponse<any, any>>;
    /**
     * Assign a dedicated virtual account to a customer
     * @param data Account data
     */
    assign(data: AssignDedicatedVirtualAccountBody): Promise<AxiosResponse<any, any>>;
    /**
     * List dedicated virtual accounts available on your integration.
     */
    list(): Promise<AxiosResponse<any, any>>;
    /**
     * Get details of a dedicated virtual account on your integration.
     * @param dedicated_account_id Dedicated virtual account ID
     */
    fetch(dedicated_account_id: string): Promise<AxiosResponse<any, any>>;
    /**
     * Requery Dedicated Virtual Account for new transactions
     * @param data Query data
     */
    query(data: DedicatedVirtualAccountQueryParams): Promise<AxiosResponse<any, any>>;
    /**
     * Deactivate a dedicated virtual account on your integration.
     * @param dedicated_account_id Dedicated virtual account ID
     */
    deactivate(dedicated_account_id: string): Promise<AxiosResponse<any, any>>;
    /**
     * Split a dedicated virtual account transaction with one or more accounts
     * @param data Transaction data
     */
    split(data: DedicatedVirtualAccountSplitTransactionBody): Promise<AxiosResponse<any, any>>;
    /**
     * If you've previously set up split payment for transactions on a dedicated virtual account, you can remove it with this endpoint
     * @param data Transaction data
     */
    removeSplit(data: RemoveSplitDedicatedVirtualAccountBody): Promise<AxiosResponse<any, any>>;
    /**
     * Get available bank providers for a dedicated virtual account
     */
    fetchBankProviders(): Promise<AxiosResponse<any[], any>>;
}
