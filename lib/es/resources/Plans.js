import HttpRequest, { HttpRequestEndpoints } from "../config/request";
export class Plans {
    httpClient;
    /**
     * The Plans API allows you create and manage installment payment options on your integration.
     * @param apiKey Paystack API key
     */
    constructor(apiKey) {
        this.httpClient = HttpRequest(apiKey);
    }
    /**
     * Create a plan on your integration
     * @param data request body
     */
    async create(data) {
        return await this.httpClient.post(HttpRequestEndpoints.plans.create, data);
    }
    /**
     * List plans available on your integration
     */
    async list() {
        return await this.httpClient.get(HttpRequestEndpoints.plans.list);
    }
    /**
     * Get details of a plan on your integration
     * @param id_or_code Plan ID or Code
     */
    async fetch(id_or_code) {
        return await this.httpClient.get(HttpRequestEndpoints.plans.fetch.replace(":id_or_code", id_or_code));
    }
    /**
     * Update a plan details on your integration
     * @param id_or_code Plan ID or Code
     * @param data request body
     */
    async update(id_or_code, data) {
        return await this.httpClient.put(HttpRequestEndpoints.plans.update.replace(":id_or_code", id_or_code), data);
    }
}
