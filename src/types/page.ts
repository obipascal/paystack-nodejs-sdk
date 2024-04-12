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
    create(data: PageBody): Promise<AxiosResponse<any, any>>;

    /**
     * List payment pages available on your integration
     */
    list(): Promise<AxiosResponse<any, any>>;

    /**
     * Get details of a payment page on your integration
     * @param id_or_slug Page ID or Slug
     */
    fetch(id_or_slug: string): Promise<AxiosResponse<any, any>>;

    /**
     * Update a payment page details on your integration
     * @param id_or_slug Page ID or Slug
     * @param data request body
     */
    update(
        id_or_slug: string,
        data: UpdatePageBody
    ): Promise<AxiosResponse<any, any>>;

    /**
     * Check the availability of a slug for a payment page
     * @param slug Page slug
     */
    checkSlugAvailability(slug: string): Promise<AxiosResponse<any, any>>;

    /**
     * Add products to a payment page
     * @param id Page ID
     * @param data request body
     */
    addProduct(
        id: string,
        data: AddProductBody
    ): Promise<AxiosResponse<any, any>>;
}
