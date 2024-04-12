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

    //   -------------------- [ Optional Params] --------------------

    /** Customer's middle name */
    middle_name?: string;
};

export type BlacklistOrWhitelistCustomerBody = {
    /** Customer's code, or email address */
    customer: string;

    // -------------------- [ Optional Params] --------------------

    /** One of the possible risk actions [ default, allow, deny ]. allow to whitelist. deny to blacklist. Customers start with a default risk action. */
    risk_action?: "default" | "allow" | "deny";
};

export type DeactivateAuthorizationBody = {
    /** Authorization code to be deactivated */
    authorization_code: string;
};

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
    create(data: CreateCustomerBody): Promise<AxiosResponse<any, any>>; // Replace "any" with actual error type

    /**
     * List customers available on your integration.
     */
    list(): Promise<AxiosResponse<any, any>>; // Replace "any" with actual error type

    /**
     * Get details of a customer on your integration.
     * @param email_or_code Customer's email or code
     */
    fetch(email_or_code: string): Promise<AxiosResponse<any, any>>; // Replace "any" with actual error type

    /**
     * Update a customer's details on your integration
     * @param code Customer's code
     * @param data Customer data
     */
    update(
        code: string,
        data: UpdateCustomerBody
    ): Promise<AxiosResponse<any, any>>; // Replace "any" with actual error type

    /**
     * Validate a customer's identity
     * @param code Customer's code
     * @param data Customer identification data
     */
    validate(code: string, data: any): Promise<AxiosResponse<any, any>>; // Likely doesn't have a specific response structure

    /**
     * Whitelist or blacklist a customer on your integration
     * @param data Customer risk action data
     */
    blacklistOrWhitelistCustomer(
        data: BlacklistOrWhitelistCustomerBody
    ): Promise<AxiosResponse<any, any>>; // Likely doesn't have a specific response structure

    /**
     * Deactivate an authorization
     * @param data Authorization deactivation data
     */
    deactivateAuthorization(
        data: DeactivateAuthorizationBody
    ): Promise<AxiosResponse<any, any>>; // Likely doesn't have a specific response structure
}
