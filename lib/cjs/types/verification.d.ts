import { AxiosInstance, AxiosResponse } from "axios";
export type VerificationParams = {
    /** Account Number */
    account_number: string;
    /** You can get the list of bank codes by calling the List Banks endpoint */
    bank_code: string;
};
export type ValidateAccountBody = {
    account_name: string;
    account_number: string;
    /**  */
    account_type: "personal" | "business";
    /** The bank code of the customer’s bank. You can fetch the bank codes by using our List Banks endpoint */
    bank_code: string;
    /** Customer’s mode of identity. This could be one of: [ identityNumber, passportNumber, businessRegistrationNumber ] */
    document_type: "identityNumber" | "passportNumber" | "businessRegistrationNumber";
    /** Customer’s mode of identity number */
    document_number: string;
};
export declare class Verification {
    readonly httpClient: AxiosInstance;
    /**
     * The Verification API allows you perform KYC processes.
     * @param apiKey Paystack API key
     */
    constructor(apiKey: string);
    /**
     * Resolve account number
     * _________________________________________________________
     * Confirm an account belongs to the right customer
     * @param params Account number and bank code
     */
    resolveAccount(params: VerificationParams): Promise<AxiosResponse<any, any>>;
    /**
     * Validate bank account
     * _________________________________________________________
     * Confirm the authenticity of a customer's account number before sending money
     * @param data Account number and bank code
     */
    validateBank(data: ValidateAccountBody): Promise<AxiosResponse<any, any>>;
    /**
     * Resolve card BIN. Get more information about a customer's card
     * @param bin Card BIN
     */
    resolveCard(bin: string): Promise<AxiosResponse<any, any>>;
}
