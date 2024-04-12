import { BlacklistOrWhitelistCustomerBody, CreateCustomerBody, DeactivateAuthorizationBody, UpdateCustomerBody } from "../types/customer";
export declare class Customers {
    private httpClient;
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
    create(data: CreateCustomerBody): Promise<import("axios").AxiosResponse<any, any>>;
    /**
     * List customers available on your integration.
     */
    list(): Promise<import("axios").AxiosResponse<any, any>>;
    /**
     * Get details of a customer on your integration.
     * @param email_or_code Customer's email or code
     */
    fetch(email_or_code: string): Promise<import("axios").AxiosResponse<any, any>>;
    /**
     * Update a customer's details on your integration
     * @param code Customer's code
     * @param data Customer data
     */
    update(code: string, data: UpdateCustomerBody): Promise<import("axios").AxiosResponse<any, any>>;
    /**
     * Validate a customer's identity
     * @param code Customer's code
     * @param data Customer identification data
     */
    validate(code: string, data: any): Promise<import("axios").AxiosResponse<any, any>>;
    /**
     * Whitelist or blacklist a customer on your integration
     * @param data Customer risk action data
     */
    blacklistOrWhitelistCustomer(data: BlacklistOrWhitelistCustomerBody): Promise<import("axios").AxiosResponse<any, any>>;
    /**
     * Deactivate an authorization
     * @param data Authorization deactivation data
     */
    deactivateAuthorization(data: DeactivateAuthorizationBody): Promise<import("axios").AxiosResponse<any, any>>;
}
