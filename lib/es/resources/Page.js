import HttpRequest, { HttpRequestEndpoints } from "../config/request";
export class Pages {
    httpClient;
    /**
     * Update a payment page details on your integration
     * @param apiKey Paystack API key
     */
    constructor(apiKey) {
        this.httpClient = HttpRequest(apiKey);
    }
    /**
     * Create a payment page on your integration
     * @param data request body
     */
    async create(data) {
        return await this.httpClient.post(HttpRequestEndpoints.paymentPage.create, data);
    }
    /**
     * List payment pages available on your integration
     */
    async list() {
        return await this.httpClient.get(HttpRequestEndpoints.paymentPage.list);
    }
    /**
     * Get details of a payment page on your integration
     * @param id_or_slug Page ID or Slug
     */
    async fetch(id_or_slug) {
        return await this.httpClient.get(HttpRequestEndpoints.paymentPage.fetch.replace(":id_or_slug", id_or_slug));
    }
    /**
     * Update a payment page details on your integration
     * @param id_or_slug Page ID or Slug
     * @param data request body
     */
    async update(id_or_slug, data) {
        return await this.httpClient.put(HttpRequestEndpoints.paymentPage.update.replace(":id_or_slug", id_or_slug), data);
    }
    /**
     * Check the availability of a slug for a payment page
     * @param slug Page slug
     */
    async checkSlugAvailability(slug) {
        return await this.httpClient.get(HttpRequestEndpoints.paymentPage.checkSlugAvailability.replace(":slug", slug));
    }
    /**
     * Add products to a payment page
     * @param id Page ID
     * @param data request body
     */
    async addProduct(id, data) {
        return await this.httpClient.post(HttpRequestEndpoints.paymentPage.addProduct.replace(":id", id), data);
    }
}
