import HttpRequest, { HttpRequestEndpoints } from "../config/request";
export class ApplePay {
    httpClient;
    /**
     * The Apple Pay API allows you register your application's top-level domain or subdomain.
     * @param apiKey Paystack API key
     */
    constructor(apiKey) {
        this.httpClient = HttpRequest(apiKey);
    }
    /**
     * Register a top-level domain or subdomain for your Apple Pay integration.
     * @param domainName Domain name to be registered
     */
    async registerDomain(data) {
        return await this.httpClient.post(HttpRequestEndpoints.applePay.registerDomain, data);
    }
    /**
     * Lists all registered domains on your integration. Returns an empty array if no domains have been added.
     */
    async listDomains() {
        return await this.httpClient.get(HttpRequestEndpoints.applePay.listDomains);
    }
    /**
     * Unregister a top-level domain or subdomain previously used for your Apple Pay integration.
     * @param data request body
     */
    async unregisterDomain(data) {
        return await this.httpClient.delete(HttpRequestEndpoints.applePay.unregisterDomain, { data });
    }
}
