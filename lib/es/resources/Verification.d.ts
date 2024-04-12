import { ValidateAccountBody, VerificationParams } from "../types/verification";
export default class Verification {
    private httpClient;
    /**
     * The Verification API allows you perform KYC processes.
     * @param apiKey Paystack API key
     */
    constructor(apiKey: string);
    /**
     * Resolve account number
     * _________________________________________________________
     * Confirm an account belongs to the right customer
     * @param accountNumber Account number
     * @param bankCode Bank code
     */
    resolveAccount(params: VerificationParams): Promise<import("axios").AxiosResponse<any, any>>;
    /**
     * Validate bank account
     * _________________________________________________________
     * Confirm the authenticity of a customer's account number before sending money
     * @param accountNumber Account number
     * @param bankCode Bank code
     */
    validateBank(data: ValidateAccountBody): Promise<import("axios").AxiosResponse<any, any>>;
    /**
     * Resolve card BIN. Get more information about a customer's card
     * @param bin Card BIN
     */
    resolveCard(bin: string): Promise<import("axios").AxiosResponse<any, any>>;
}
