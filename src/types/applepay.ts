import { AxiosResponse } from "axios";

export type ApplePayBody = {
    /** Domain name to be registered */
    domainName: string;
};

export declare class ApplePay {
    /**
     * The Apple Pay API allows you register your application's top-level domain or subdomain.
     * @param apiKey Paystack API key
     */
    constructor(apiKey: string);

    /**
     * Register a top-level domain or subdomain for your Apple Pay integration.
     * @param data Domain name to be registered
     */
    registerDomain(data: ApplePayBody): Promise<AxiosResponse<any, any>>; // Replace "any" with the actual response type

    /**
     * Lists all registered domains on your integration. Returns an empty array if no domains have been added.
     */
    listDomains(): Promise<AxiosResponse<any, any>>; // Replace "any" with the actual response type

    /**
     * Unregister a top-level domain or subdomain previously used for your Apple Pay integration.
     * @param data request body
     */
    unregisterDomain(data: ApplePayBody): Promise<AxiosResponse<any, any>>; // Replace "any" with the actual response type
}
