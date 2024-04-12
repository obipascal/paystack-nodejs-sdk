import { AxiosInstance } from "axios";
import HttpRequest, { HttpRequestEndpoints } from "../config/request";
import { ValidateAccountBody, VerificationParams } from "../types/verification";

export class Verification {
    private httpClient: AxiosInstance;

    /**
     * The Verification API allows you perform KYC processes.
     * @param apiKey Paystack API key
     */
    constructor(apiKey: string) {
        this.httpClient = HttpRequest(apiKey);
    }

    /**
     * Resolve account number
     * _________________________________________________________
     * Confirm an account belongs to the right customer
     * @param accountNumber Account number
     * @param bankCode Bank code
     */
    async resolveAccount(params: VerificationParams) {
        return await this.httpClient.get(
            HttpRequestEndpoints.verification.resolveAccount,
            { params }
        );
    }

    /**
     * Validate bank account
     * _________________________________________________________
     * Confirm the authenticity of a customer's account number before sending money
     * @param accountNumber Account number
     * @param bankCode Bank code
     */
    async validateBank(data: ValidateAccountBody) {
        return await this.httpClient.post(
            HttpRequestEndpoints.verification.validateBank,
            data
        );
    }

    /**
     * Resolve card BIN. Get more information about a customer's card
     * @param bin Card BIN
     */
    async resolveCard(bin: string) {
        return await this.httpClient.get(
            HttpRequestEndpoints.verification.resolveCard.replace(":bin", bin)
        );
    }
}
