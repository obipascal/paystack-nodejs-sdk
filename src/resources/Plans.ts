import { AxiosInstance } from "axios";
import HttpRequest, { HttpRequestEndpoints } from "../config/request";
import { CreatePlanBody } from "../types/plans";

export class Plans {
    private httpClient: AxiosInstance;

    /**
     * The Plans API allows you create and manage installment payment options on your integration.
     * @param apiKey Paystack API key
     */
    constructor(apiKey: string) {
        this.httpClient = HttpRequest(apiKey);
    }

    /**
     * Create a plan on your integration
     * @param data request body
     */
    async create(data: CreatePlanBody) {
        return await this.httpClient.post(
            HttpRequestEndpoints.plans.create,
            data
        );
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
    async fetch(id_or_code: string) {
        return await this.httpClient.get(
            HttpRequestEndpoints.plans.fetch.replace(":id_or_code", id_or_code)
        );
    }

    /**
     * Update a plan details on your integration
     * @param id_or_code Plan ID or Code
     * @param data request body
     */
    async update(id_or_code: string, data: CreatePlanBody) {
        return await this.httpClient.put(
            HttpRequestEndpoints.plans.update.replace(
                ":id_or_code",
                id_or_code
            ),
            data
        );
    }
}
