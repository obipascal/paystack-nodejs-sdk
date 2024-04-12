import { AxiosInstance } from "axios";
import HttpRequest, { HttpRequestEndpoints } from "../config/request";
import { MiscellaneousParams } from "../types/miscellaneous";

export class Miscellaneous {
    private httpClient: AxiosInstance;

    /**
     * The Miscellaneous API allows you perform miscellaneous operations.
     * @param apiKey Paystack API key
     */
    constructor(apiKey: string) {
        this.httpClient = HttpRequest(apiKey);
    }

    /**
     * List all supported banks
     * _________________________________________________________
     * Get a list of all supported banks and their properties
     * @param accountNumber Account number
     * @param bankCode Bank code
     */
    async banks(params?: MiscellaneousParams) {
        return await this.httpClient.get(
            HttpRequestEndpoints.miscellaneous.listBanks,
            { params }
        );
    }
}
