import { CreateSubaccountBody, UpdateSubaccountBody } from "../types/subaccounts";
export default class Subaccounts {
    private httpClient;
    /**
     * The Subaccounts API allows you create and manage subaccounts on your integration. Subaccounts can be used to split payment between two accounts (your main account and a sub account).
     * @param apiKey Paystack API key
     */
    constructor(apiKey: string);
    /**
     * Create a new subaccount
     * @param data request body
     */
    create(data: CreateSubaccountBody): Promise<import("axios").AxiosResponse<any, any>>;
    /**
     * List all subaccounts on your integration
     */
    list(): Promise<import("axios").AxiosResponse<any, any>>;
    /**
     * Fetch a subaccount
     * @param id_or_code Subaccount ID or Code
     */
    fetch(id_or_code: string): Promise<import("axios").AxiosResponse<any, any>>;
    /**
     * Update a subaccount
     * @param id_or_code Subaccount ID or Code
     * @param data request body
     */
    update(id_or_code: string, data: UpdateSubaccountBody): Promise<import("axios").AxiosResponse<any, any>>;
}
