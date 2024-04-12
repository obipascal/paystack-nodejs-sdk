import { ProductBody } from "../types/product";
export declare class Products {
    private httpClient;
    /**
     * The Products API allows you create and manage inventories on your integration.
     * @param apiKey Paystack API key
     */
    constructor(apiKey: string);
    /**
     * Create a product
     * @param data request body
     */
    create(data: ProductBody): Promise<import("axios").AxiosResponse<any, any>>;
    /**
     * List all products on your integration
     */
    list(): Promise<import("axios").AxiosResponse<any, any>>;
    /**
     * Fetch a product
     * @param id Product ID
     */
    fetch(id: string): Promise<import("axios").AxiosResponse<any, any>>;
    /**
     * Update a product
     * @param id Product ID
     * @param data request body
     */
    update(id: string, data: ProductBody): Promise<import("axios").AxiosResponse<any, any>>;
}
