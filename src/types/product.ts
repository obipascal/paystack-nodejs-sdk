import { AxiosInstance, AxiosResponse } from "axios";
import { Currencies } from "./const";

export type ProductBody = {
    /** Name of product */
    name: string;
    /** A description for this product */
    description: string;
    /** Price should be in the subunit of the supported currency */
    price: number;
    /** Currency in which price is set */
    currency: Currencies;
    // ---------------- [ Optional ] ----------------
    /** Set to true if the product has unlimited stock. Leave as false if the product has limited stock */
    unlimited?: boolean;
    /** Number of products in stock. Use if unlimited is false */
    quantity?: number;
};

export declare class Products {
    readonly httpClient: AxiosInstance;

    /**
     * The Products API allows you create and manage inventories on your integration.
     * @param apiKey Paystack API key
     */
    constructor(apiKey: string);

    /**
     * Create a product
     * @param data request body
     */
    create(data: ProductBody): Promise<AxiosResponse<any, any>>;

    /**
     * List all products on your integration
     */
    list(): Promise<AxiosResponse<any, any>>;

    /**
     * Fetch a product
     * @param id Product ID
     */
    fetch(id: string): Promise<AxiosResponse<any, any>>;

    /**
     * Update a product
     * @param id Product ID
     * @param data request body
     */
    update(id: string, data: ProductBody): Promise<AxiosResponse<any, any>>;
}
