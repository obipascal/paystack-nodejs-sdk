import { AxiosInstance } from "axios";
import HttpRequest, { HttpRequestEndpoints } from "../config/request";

export class Settlements {
    private httpClient: AxiosInstance;

    /**
     * The Settlements API allows you manage settlements on your integration.
     * @param apiKey Paystack API key
     */
    constructor(apiKey: string) {
        this.httpClient = HttpRequest(apiKey);
    }

    /**
     * List all settlements on your integration
     */
    async list() {
        return await this.httpClient.get(HttpRequestEndpoints.settlement.list);
    }

    /**
     * Get the transactions that make up a particular settlement
     * _________________________________________________________
     * If you plan to store or make use of the the transaction ID, you should represent it as a unsigned 64-bit integer. To learn more, check out our changelog.
     * @param id Settlement ID
     */
    async fetch(id: string) {
        return await this.httpClient.get(
            HttpRequestEndpoints.settlement.listTransactions.replace(":id", id)
        );
    }
}
