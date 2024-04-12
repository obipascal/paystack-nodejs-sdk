import { AxiosInstance, AxiosResponse } from "axios";
export type CreateSubaccountBody = {
    /** Name of business for subaccount */
    business_name: string;
    /** Bank Code for the bank. You can get the list of Bank Codes by calling the List Banks endpoint. */
    settlement_bank: string;
    /** Bank Account Number */
    account_number: string;
    /** The percentage the main account receives from each payment made to the subaccount */
    percentage_charge: number;
    /** A description for this subaccount */
    description: string;
    /**A contact email for the subaccount */
    primary_contact_email?: string;
    /** A name for the contact person for this subaccount */
    primary_contact_name?: string;
    /** A phone number to call for this subaccount */
    primary_contact_phone?: string;
    /** Stringified JSON object. Add a custom_fields attribute which has an array of objects if you would like the fields to be added to your transaction when displayed on the dashboard. Sample: {"custom_fields":[{"display_name":"Cart ID","variable_name": "cart_id","value": "8393"}]} */
    metadata?: Record<string, any>;
};
export type UpdateSubaccountBody = {
    /** Name of business for subaccount */
    business_name: string;
    /** Bank Code for the bank. You can get the list of Bank Codes by calling the List Banks endpoint. */
    settlement_bank: string;
    /** Bank Account Number */
    account_number?: string;
    /** Activate or deactivate a subaccount. Set value to true to activate subaccount or false to deactivate the subaccount. */
    active?: boolean;
    /** The default percentage charged when receiving on behalf of this subaccount */
    percentage_charge?: number;
    /** A description for this subaccount */
    description?: string;
    /** A contact email for the subaccount */
    primary_contact_email?: string;
    /** A name for the contact person for this subaccount */
    primary_contact_name?: string;
    /** A phone number to call for this subaccount */
    primary_contact_phone?: string;
    /** Any of auto, weekly, `monthly`, `manual`. Auto means payout is T+1 and manual means payout to the subaccount should only be made when requested. Defaults to auto */
    settlement_schedule?: "auto" | "weekly" | "monthly" | "manual";
    /** Stringified JSON object. Add a custom_fields attribute which has an array of objects if you would like the fields to be added to your transaction when displayed on the dashboard. Sample: {"custom_fields":[{"display_name":"Cart ID","variable_name": "cart_id","value": "8393"}]} */
    metadata?: Record<string, any>;
};
export declare class Subaccounts {
    readonly httpClient: AxiosInstance;
    /**
     * The Subaccounts API allows you create and manage subaccounts on your integration. Subaccounts can be used to split payment between two accounts (your main account and a sub account).
     * @param apiKey Paystack API key
     */
    constructor(apiKey: string);
    /**
     * Create a new subaccount
     * @param data request body
     */
    create(data: CreateSubaccountBody): Promise<AxiosResponse<any, any>>;
    /**
     * List all subaccounts on your integration
     */
    list(): Promise<AxiosResponse<any, any>>;
    /**
     * Fetch a subaccount
     * @param id_or_code Subaccount ID or Code
     */
    fetch(id_or_code: string): Promise<AxiosResponse<any, any>>;
    /**
     * Update a subaccount
     * @param id_or_code Subaccount ID or Code
     * @param data request body
     */
    update(id_or_code: string, data: UpdateSubaccountBody): Promise<AxiosResponse<any, any>>;
}
