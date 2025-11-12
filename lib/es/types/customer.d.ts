import { AxiosResponse } from "axios";
export type CreateCustomerBody = {
    /** Customer's email address */
    email: string;
    /** Customer's first name */
    first_name: string;
    /** Customer's last name */
    last_name: string;
    /** Customer's phone number */
    phone?: string;
    /**A set of key/value pairs that you can attach to the customer. It can be used to store additional information in a structured format. */
    metadata?: Record<string, any>;
};
export type UpdateCustomerBody = {
    /** Customer's first name */
    first_name: string;
    /** Customer's last name */
    last_name: string;
    /** Customer's phone number */
    phone?: string;
    /**A set of key/value pairs that you can attach to the customer. It can be used to store additional information in a structured format. */
    metadata?: Record<string, any>;
};
export type ValidateCustomerBody = {
    /** Customer's first name */
    first_name: string;
    /** Customer's last name */
    last_name: string;
    /** Predefined types of identification. Only bank_account is supported at the moment */
    type: "bank_account";
    /** Customer's identification number */
    value: string;
    /** 2 letter country code of identification issuer */
    country: "NG" | string;
    /** Customer's Bank Verification Number */
    bvn: string;
    /** You can get the list of Bank Codes by calling the List Banks endpoint. (required if type is bank_account) */
    bank_code: string;
    /** Customer's bank account number. (required if type is bank_account) */
    account_number: string;
    /** Customer's middle name */
    middle_name?: string;
};
export type BlacklistOrWhitelistCustomerBody = {
    /** Customer's code, or email address */
    customer: string;
    /** One of the possible risk actions [ default, allow, deny ]. allow to whitelist. deny to blacklist. Customers start with a default risk action. */
    risk_action?: "default" | "allow" | "deny";
};
export type DeactivateAuthorizationBody = {
    /** Authorization code to be deactivated */
    authorization_code: string;
};
export interface CustomerData {
    integration?: number;
    first_name: string | null;
    last_name: string | null;
    email: string;
    phone: string | null;
    metadata: Record<string, any> | null;
    domain: string;
    customer_code: string;
    risk_action: string;
    id: number;
    createdAt: string;
    updatedAt: string;
    identified?: boolean;
    identifications?: any;
    transactions?: any[];
    subscriptions?: any[];
    authorizations?: any[];
    total_transactions?: number;
    total_transaction_value?: any[];
    dedicated_account?: any;
}
export interface CustomerCreateResponse extends AxiosResponse {
    message: string;
    data: CustomerData;
}
export interface CustomerListResponse extends AxiosResponse {
    message: string;
    data: CustomerData[];
    meta?: {
        total: number;
        skipped: number;
        perPage: number;
        page: number;
        pageCount: number;
    };
}
export interface CustomerFetchResponse extends AxiosResponse {
    message: string;
    data: CustomerData;
}
export interface CustomerUpdateResponse extends AxiosResponse {
    message: string;
    data: CustomerData;
}
export interface CustomerValidateResponse extends AxiosResponse {
    message: string;
}
export interface CustomerRiskActionResponse extends AxiosResponse {
    message: string;
    data: CustomerData;
}
export interface CustomerDeactivateAuthorizationResponse extends AxiosResponse {
    message: string;
}
export declare class Customers {
    /**
     * The Customers API allows you create and manage customers on your integration.
     * @param apiKey Paystack API key
     */
    constructor(apiKey: string);
    /**
     * Create a customer on your integration.
     * ___
     * The first_name, last_name and phone are optional parameters. However, when creating a customer that would be assigned a Dedicated Virtual Account and your business catgeory falls under Betting, Financial services, and General Service, then these parameters become compulsory.
     * @param data Customer data
     */
    create(data: CreateCustomerBody): Promise<CustomerCreateResponse>;
    /**
     * List customers available on your integration.
     */
    list(): Promise<CustomerListResponse>;
    /**
     * Get details of a customer on your integration.
     * @param email_or_code Customer's email or code
     */
    fetch(email_or_code: string): Promise<CustomerFetchResponse>;
    /**
     * Update a customer's details on your integration
     * @param code Customer's code
     * @param data Customer data
     */
    update(code: string, data: UpdateCustomerBody): Promise<CustomerUpdateResponse>;
    /**
     * Validate a customer's identity
     * @param code Customer's code
     * @param data Customer identification data
     */
    validate(code: string, data: ValidateCustomerBody): Promise<CustomerValidateResponse>;
    /**
     * Whitelist or blacklist a customer on your integration
     * @param data Customer risk action data
     */
    blacklistOrWhitelistCustomer(data: BlacklistOrWhitelistCustomerBody): Promise<CustomerRiskActionResponse>;
    /**
     * Deactivate an authorization
     * @param data Authorization deactivation data
     */
    deactivateAuthorization(data: DeactivateAuthorizationBody): Promise<CustomerDeactivateAuthorizationResponse>;
}
