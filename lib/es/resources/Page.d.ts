import { AddProductBody, PageBody, UpdatePageBody } from "../types/page";
export default class Pages {
    private httpClient;
    /**
     * Update a payment page details on your integration
     * @param apiKey Paystack API key
     */
    constructor(apiKey: string);
    /**
     * Create a payment page on your integration
     * @param data request body
     */
    create(data: PageBody): Promise<import("axios").AxiosResponse<any, any>>;
    /**
     * List payment pages available on your integration
     */
    list(): Promise<import("axios").AxiosResponse<any, any>>;
    /**
     * Get details of a payment page on your integration
     * @param id_or_slug Page ID or Slug
     */
    fetch(id_or_slug: string): Promise<import("axios").AxiosResponse<any, any>>;
    /**
     * Update a payment page details on your integration
     * @param id_or_slug Page ID or Slug
     * @param data request body
     */
    update(id_or_slug: string, data: UpdatePageBody): Promise<import("axios").AxiosResponse<any, any>>;
    /**
     * Check the availability of a slug for a payment page
     * @param slug Page slug
     */
    checkSlugAvailability(slug: string): Promise<import("axios").AxiosResponse<any, any>>;
    /**
     * Add products to a payment page
     * @param id Page ID
     * @param data request body
     */
    addProduct(id: string, data: AddProductBody): Promise<import("axios").AxiosResponse<any, any>>;
}
