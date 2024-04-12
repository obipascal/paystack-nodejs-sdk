import { AxiosInstance } from "axios";
import HttpRequest, { HttpRequestEndpoints } from "../config/request";
import {
    CreateSubaccountBody,
    UpdateSubaccountBody,
} from "../types/subaccounts";

export class Subaccounts {
    private httpClient: AxiosInstance;

    /**
     * The Subaccounts API allows you create and manage subaccounts on your integration. Subaccounts can be used to split payment between two accounts (your main account and a sub account).
     * @param apiKey Paystack API key
     */
    constructor(apiKey: string) {
        this.httpClient = HttpRequest(apiKey);
    }

    /**
     * Create a new subaccount
     * @param data request body
     */
    async create(data: CreateSubaccountBody) {
        return await this.httpClient.post(
            HttpRequestEndpoints.subaccount.create,
            data
        );
    }

    /**
     * List all subaccounts on your integration
     */
    async list() {
        return await this.httpClient.get(HttpRequestEndpoints.subaccount.list);
    }

    /**
     * Fetch a subaccount
     * @param id_or_code Subaccount ID or Code
     */
    async fetch(id_or_code: string) {
        return await this.httpClient.get(
            HttpRequestEndpoints.subaccount.fetch.replace(
                ":id_or_code",
                id_or_code
            )
        );
    }

    /**
     * Update a subaccount
     * @param id_or_code Subaccount ID or Code
     * @param data request body
     */
    async update(id_or_code: string, data: UpdateSubaccountBody) {
        return await this.httpClient.put(
            HttpRequestEndpoints.subaccount.update.replace(
                ":id_or_code",
                id_or_code
            ),
            data
        );
    }
}
