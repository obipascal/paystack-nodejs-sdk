import { ApplePayBody } from "../types/applepay";
export default class ApplePay {
    private httpClient;
    /**
     * The Apple Pay API allows you register your application's top-level domain or subdomain.
     * @param apiKey Paystack API key
     */
    constructor(apiKey: string);
    /**
     * Register a top-level domain or subdomain for your Apple Pay integration.
     * @param domainName Domain name to be registered
     */
    registerDomain(data: ApplePayBody): Promise<import("axios").AxiosResponse<any, any>>;
    /**
     * Lists all registered domains on your integration. Returns an empty array if no domains have been added.
     */
    listDomains(): Promise<import("axios").AxiosResponse<any, any>>;
    /**
     * Unregister a top-level domain or subdomain previously used for your Apple Pay integration.
     * @param data request body
     */
    unregisterDomain(data: ApplePayBody): Promise<import("axios").AxiosResponse<any, any>>;
}
