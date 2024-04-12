import { AxiosInstance } from "axios";
import HttpRequest, { HttpRequestEndpoints } from "../config/request";
import { ProductBody } from "../types/product";

export class Products {
    private httpClient: AxiosInstance;

    /**
     * The Products API allows you create and manage inventories on your integration.
     * @param apiKey Paystack API key
     */
    constructor(apiKey: string) {
        this.httpClient = HttpRequest(apiKey);
    }

    /**
     * Create a product
     * @param data request body
     */
    async create(data: ProductBody) {
        return await this.httpClient.post(
            HttpRequestEndpoints.product.create,
            data
        );
    }

    /**
     * List all products on your integration
     */
    async list() {
        return await this.httpClient.get(HttpRequestEndpoints.product.list);
    }

    /**
     * Fetch a product
     * @param id Product ID
     */
    async fetch(id: string) {
        return await this.httpClient.get(
            HttpRequestEndpoints.product.fetch.replace(":id", id)
        );
    }

    /**
     * Update a product
     * @param id Product ID
     * @param data request body
     */
    async update(id: string, data: ProductBody) {
        return await this.httpClient.put(
            HttpRequestEndpoints.product.update.replace(":id", id),
            data
        );
    }
}
