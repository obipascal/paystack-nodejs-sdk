import { AxiosInstance } from "axios"
import HttpRequest, { HttpRequestEndpoints } from "../config/request"
import { ChargeBody, SubmitAddressBody, SubmitBirthdayBody, SubmitOtpBody, SubmitPINBody, SubmitPhoneBody } from "../types/charge"

export default class Charges {
  private httpClient: AxiosInstance

  /**
   * The Charge API allows you to configure payment channel of your choice when initiating a payment.
   * @param apiKey Paystack API key
   */
  constructor(apiKey: string) {
    this.httpClient = HttpRequest(apiKey)
  }

  /**
   * Initialize a charge
   * @param data Charge details
   */
  async initialize(data: ChargeBody) {
    return await this.httpClient.post(HttpRequestEndpoints.charge.initialize, data)
  }

  /**
   * Submit a PIN
   * @param data Charge details
   */
  async submitPin(data: SubmitPINBody) {
    return await this.httpClient.post(HttpRequestEndpoints.charge.submitPin, data)
  }

  /**
   * Submit an OTP
   * @param data Charge details
   */
  async submitOtp(data: SubmitOtpBody) {
    return await this.httpClient.post(HttpRequestEndpoints.charge.submitOtp, data)
  }

  /**
   * Submit a phone number
   * @param data Charge details
   */
  async submitPhone(data: SubmitPhoneBody) {
    return await this.httpClient.post(HttpRequestEndpoints.charge.submitPhone, data)
  }

  /**
   * Submit a birthday
   * @param data Charge details
   */
  async submitBirthday(data: SubmitBirthdayBody) {
    return await this.httpClient.post(HttpRequestEndpoints.charge.submitBirthday, data)
  }

  /**
   * Check pending charge
   * @param reference Charge reference
   */
  async checkPendingCharge(reference: string) {
    return await this.httpClient.get(HttpRequestEndpoints.charge.checkPendingCharge.replace(":reference", reference))
  }

  /**
   * Submit an address
   * @param data Charge details
   */
  async submitAddress(data: SubmitAddressBody) {
    return await this.httpClient.post(HttpRequestEndpoints.charge.submitAddress, data)
  }
}
