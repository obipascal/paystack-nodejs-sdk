import HttpRequest, { HttpRequestEndpoints } from "../config/request";
export default class Miscellaneous {
    httpClient;
    /**
     * The Miscellaneous API allows you perform miscellaneous operations.
     * @param apiKey Paystack API key
     */
    constructor(apiKey) {
        this.httpClient = HttpRequest(apiKey);
    }
    /**
     * List all supported banks
     * _________________________________________________________
     * Get a list of all supported banks and their properties
     * @param accountNumber Account number
     * @param bankCode Bank code
     */
    async banks(params) {
        return await this.httpClient.get(HttpRequestEndpoints.miscellaneous.listBanks, { params });
    }
}
