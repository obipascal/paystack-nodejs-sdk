export declare class Settlements {
    private httpClient;
    /**
     * The Settlements API allows you manage settlements on your integration.
     * @param apiKey Paystack API key
     */
    constructor(apiKey: string);
    /**
     * List all settlements on your integration
     */
    list(): Promise<import("axios").AxiosResponse<any, any>>;
    /**
     * Get the transactions that make up a particular settlement
     * _________________________________________________________
     * If you plan to store or make use of the the transaction ID, you should represent it as a unsigned 64-bit integer. To learn more, check out our changelog.
     * @param id Settlement ID
     */
    fetch(id: string): Promise<import("axios").AxiosResponse<any, any>>;
}
