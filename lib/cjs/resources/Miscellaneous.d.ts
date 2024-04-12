import { MiscellaneousParams } from "../types/miscellaneous";
export declare class Miscellaneous {
    private httpClient;
    /**
     * The Miscellaneous API allows you perform miscellaneous operations.
     * @param apiKey Paystack API key
     */
    constructor(apiKey: string);
    /**
     * List all supported banks
     * _________________________________________________________
     * Get a list of all supported banks and their properties
     * @param accountNumber Account number
     * @param bankCode Bank code
     */
    banks(params?: MiscellaneousParams): Promise<import("axios").AxiosResponse<any, any>>;
}
