import { AxiosInstance, AxiosResponse } from "axios";

export type PageBody = {
    /** Name of page */
    name: string;
    // --------- [ Optional] ---------
    /** A description for this page */
    description?: string;
    /** Amount should be in the subunit of the supported currency */
    amount?: number;
    /** The split code of the transaction split. e.g. SPL_98WF13Eb3w */
    split_code?: string;
    /** URL slug you would like to be associated with this page. Page will be accessible at https://paystack.com/pay/[slug] */
    slug?: string;
    /** Extra data to configure the payment page including subaccount, logo image, transaction charge */
    metadata?: Record<string, any>;
    /** If you would like Paystack to redirect someplace upon successful payment, specify the URL here. */
    redirect_url?: string;
    /** If you would like to accept custom fields, specify them here. */
    custom_fields?: Array<Record<string, any>>;
};

export type UpdatePageBody = {
    /** Name of page */
    name: string;
    /** A description for this page */
    description: string;
    // --------- [ Optional ] ---------
    /** Default amount you want to accept using this page. If none is set, customer is free to provide any amount of their choice. The latter scenario is useful for accepting donations */
    amount?: number;
    /** Set to false to deactivate page url */
    active?: boolean;
};

export type AddProductBody = {
    product: Array<string>;
};

// Response interfaces for Pages API
export interface PageProduct {
    product_id: number;
    name: string;
    description: string;
    product_code: string | null;
    page: number;
    price: number;
    currency: string;
    quantity: number;
    type: string;
    features: any | null;
    is_shippable: boolean;
    domain: string;
    integration: number;
    active: boolean;
}

export interface PageData {
    id: number;
    name: string;
    description: string | null;
    amount: number | null;
    split_code: string | null;
    integration: number;
    domain: string;
    slug: string;
    currency: string;
    type: string;
    redirect_url: string | null;
    success_message: string | null;
    collect_phone: boolean;
    active: boolean;
    published: boolean;
    migrate: boolean | null;
    notification_email: string | null;
    metadata: Record<string, any> | null;
    custom_fields: any[];
    plan?: number | null;
    createdAt: string;
    updatedAt: string;
    products?: PageProduct[];
}

export interface PageCreateResponse extends AxiosResponse {
    message: string;
    data: PageData;
}

export interface PageListResponse extends AxiosResponse {
    message: string;
    data: PageData[];
    meta: {
        total: number;
        skipped: number;
        perPage: number;
        page: number;
        pageCount: number;
    };
}

export interface PageFetchResponse extends AxiosResponse {
    message: string;
    data: PageData;
}

export interface PageUpdateResponse extends AxiosResponse {
    message: string;
    data: PageData;
}

export interface PageCheckSlugResponse extends AxiosResponse {
    message: string;
}

export interface PageAddProductResponse extends AxiosResponse {
    message: string;
    data: PageData;
}

export declare class Pages {
    readonly httpClient: AxiosInstance;

    /**
     * Update a payment page details on your integration
     * @param apiKey Paystack API key
     */
    constructor(apiKey: string);

    /**
     * Create a payment page on your integration
     * @param data request body
     */
    create(data: PageBody): Promise<PageCreateResponse>;

    /**
     * List payment pages available on your integration
     */
    list(): Promise<PageListResponse>;

    /**
     * Get details of a payment page on your integration
     * @param id_or_slug Page ID or Slug
     */
    fetch(id_or_slug: string): Promise<PageFetchResponse>;

    /**
     * Update a payment page details on your integration
     * @param id_or_slug Page ID or Slug
     * @param data request body
     */
    update(
        id_or_slug: string,
        data: UpdatePageBody
    ): Promise<PageUpdateResponse>;

    /**
     * Check the availability of a slug for a payment page
     * @param slug Page slug
     */
    checkSlugAvailability(slug: string): Promise<PageCheckSlugResponse>;

    /**
     * Add products to a payment page
     * @param id Page ID
     * @param data request body
     */
    addProduct(
        id: string,
        data: AddProductBody
    ): Promise<PageAddProductResponse>;
}
