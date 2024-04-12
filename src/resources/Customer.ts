import { AxiosInstance } from "axios";
import HttpRequest, { HttpRequestEndpoints } from "../config/request";
import {
    BlacklistOrWhitelistCustomerBody,
    CreateCustomerBody,
    DeactivateAuthorizationBody,
    UpdateCustomerBody,
} from "../types/customer";
import { CustomersInterface } from "../types";

export class Customers implements CustomersInterface {
    private httpClient: AxiosInstance;

    /**
     * The Customers API allows you create and manage customers on your integration.
     * @param apiKey Paystack API key
     */
    constructor(apiKey: string) {
        this.httpClient = HttpRequest(apiKey);
    }

    /**
     * Create a customer on your integration.
     * ___
     * The first_name, last_name and phone are optional parameters. However, when creating a customer that would be assigned a Dedicated Virtual Account and your business catgeory falls under Betting, Financial services, and General Service, then these parameters become compulsory.
     * @param data Customer data
     */
    async create(data: CreateCustomerBody) {
        return await this.httpClient.post(
            HttpRequestEndpoints.customer.create,
            data
        );
    }

    /**
     * List customers available on your integration.
     */
    async list() {
        return await this.httpClient.get(HttpRequestEndpoints.customer.list);
    }

    /**
     * Get details of a customer on your integration.
     * @param email_or_code Customer's email or code
     */
    async fetch(email_or_code: string) {
        return await this.httpClient.get(
            HttpRequestEndpoints.customer.fetch.replace(
                ":email_or_code",
                email_or_code
            )
        );
    }

    /**
     * Update a customer's details on your integration
     * @param code Customer's code
     * @param data Customer data
     */
    async update(code: string, data: UpdateCustomerBody) {
        return await this.httpClient.put(
            HttpRequestEndpoints.customer.update.replace(":code", code),
            data
        );
    }

    /**
     * Validate a customer's identity
     * @param code Customer's code
     * @param data Customer identification data
     */
    async validate(code: string, data: any) {
        return await this.httpClient.post(
            HttpRequestEndpoints.customer.validate.replace(":code", code),
            data
        );
    }

    /**
     * Whitelist or blacklist a customer on your integration
     * @param data Customer risk action data
     */
    async blacklistOrWhitelistCustomer(data: BlacklistOrWhitelistCustomerBody) {
        return await this.httpClient.post(
            HttpRequestEndpoints.customer.blacklistOrWhitelistCustomer,
            data
        );
    }

    /**
     * Deactivate an authorization
     * @param data Authorization deactivation data
     */
    async deactivateAuthorization(data: DeactivateAuthorizationBody) {
        return await this.httpClient.post(
            HttpRequestEndpoints.customer.deactivateAuthorization,
            data
        );
    }
}
