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
    /** Set to true if the product has unlimited stock. Leave as false if the product has limited stock */
    unlimited?: boolean;
    /** Number of products in stock. Use if unlimited is false */
    quantity?: number;
};
export interface ProductDigitalAsset {
    id: number;
    product_id: number;
    file_path: string;
    file_name: string;
}
export interface ProductShippingFields {
    delivery_note: string;
}
export interface ProductData {
    id: number;
    name: string;
    description: string;
    product_code: string;
    slug: string;
    currency: string;
    price: number;
    quantity: number;
    quantity_sold: number | null;
    active: boolean;
    domain: string;
    type: string;
    in_stock: boolean;
    unlimited: boolean;
    metadata: Record<string, any> | null;
    files: any | null;
    file_path: string | null;
    is_shippable: boolean;
    shipping_fields?: ProductShippingFields;
    integration: number;
    createdAt: string;
    updatedAt: string;
    digital_assets?: ProductDigitalAsset[];
    image_path?: string;
    minimum_orderable?: number;
    maximum_orderable?: number | null;
    features?: any | null;
    success_message?: string | null;
    notification_emails?: any | null;
    products?: any[];
}
export interface ProductCreateResponse extends AxiosResponse {
    message: string;
    data: ProductData;
}
export interface ProductListResponse extends AxiosResponse {
    message: string;
    data: ProductData[];
    meta: {
        total: number;
        skipped: number;
        perPage: number;
        page: number;
        pageCount: number;
    };
}
export interface ProductFetchResponse extends AxiosResponse {
    message: string;
    data: ProductData;
}
export interface ProductUpdateResponse extends AxiosResponse {
    message: string;
    data: ProductData;
}
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
    create(data: ProductBody): Promise<ProductCreateResponse>;
    /**
     * List all products on your integration
     */
    list(): Promise<ProductListResponse>;
    /**
     * Fetch a product
     * @param id Product ID
     */
    fetch(id: string): Promise<ProductFetchResponse>;
    /**
     * Update a product
     * @param id Product ID
     * @param data request body
     */
    update(id: string, data: ProductBody): Promise<ProductUpdateResponse>;
}
