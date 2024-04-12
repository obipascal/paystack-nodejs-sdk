import { ChargeBody, SubmitAddressBody, SubmitBirthdayBody, SubmitOtpBody, SubmitPINBody, SubmitPhoneBody } from "../types/charge";
export declare class Charge {
    private httpClient;
    /**
     * The Charge API allows you to configure payment channel of your choice when initiating a payment.
     * @param apiKey Paystack API key
     */
    constructor(apiKey: string);
    /**
     * Initialize a charge
     * @param data Charge details
     */
    initialize(data: ChargeBody): Promise<import("axios").AxiosResponse<any, any>>;
    /**
     * Submit a PIN
     * @param data Charge details
     */
    submitPin(data: SubmitPINBody): Promise<import("axios").AxiosResponse<any, any>>;
    /**
     * Submit an OTP
     * @param data Charge details
     */
    submitOtp(data: SubmitOtpBody): Promise<import("axios").AxiosResponse<any, any>>;
    /**
     * Submit a phone number
     * @param data Charge details
     */
    submitPhone(data: SubmitPhoneBody): Promise<import("axios").AxiosResponse<any, any>>;
    /**
     * Submit a birthday
     * @param data Charge details
     */
    submitBirthday(data: SubmitBirthdayBody): Promise<import("axios").AxiosResponse<any, any>>;
    /**
     * Check pending charge
     * @param reference Charge reference
     */
    checkPendingCharge(reference: string): Promise<import("axios").AxiosResponse<any, any>>;
    /**
     * Submit an address
     * @param data Charge details
     */
    submitAddress(data: SubmitAddressBody): Promise<import("axios").AxiosResponse<any, any>>;
}
