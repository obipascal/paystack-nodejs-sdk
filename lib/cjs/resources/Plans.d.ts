import { CreatePlanBody } from "../types/plans";
export declare class Plans {
    private httpClient;
    /**
     * The Plans API allows you create and manage installment payment options on your integration.
     * @param apiKey Paystack API key
     */
    constructor(apiKey: string);
    /**
     * Create a plan on your integration
     * @param data request body
     */
    create(data: CreatePlanBody): Promise<import("axios").AxiosResponse<any, any>>;
    /**
     * List plans available on your integration
     */
    list(): Promise<import("axios").AxiosResponse<any, any>>;
    /**
     * Get details of a plan on your integration
     * @param id_or_code Plan ID or Code
     */
    fetch(id_or_code: string): Promise<import("axios").AxiosResponse<any, any>>;
    /**
     * Update a plan details on your integration
     * @param id_or_code Plan ID or Code
     * @param data request body
     */
    update(id_or_code: string, data: CreatePlanBody): Promise<import("axios").AxiosResponse<any, any>>;
}
