import { AxiosInstance } from "axios"
import HttpRequest, { HttpRequestEndpoints } from "../config/request"
import { EnableSubscriptBody, SubscriptionBody } from "../types/subscription"

export default class Subscription {
  private httpClient: AxiosInstance

  /**
   * The Subscriptions API allows you create and manage recurring payment on your integration.
   * @param apiKey Paystack API key
   */
  constructor(apiKey: string) {
    this.httpClient = HttpRequest(apiKey)
  }

  /**
   * Create a subscription
   * @param data request body
   */
  async create(data: SubscriptionBody) {
    return await this.httpClient.post(HttpRequestEndpoints.subaccount.create, data)
  }

  /**
   * List all subscriptions on your integration
   */
  async list() {
    return await this.httpClient.get(HttpRequestEndpoints.subaccount.list)
  }

  /**
   * Fetch a subscription
   * @param id_or_code Subscription ID or Code
   */
  async fetch(id_or_code: string) {
    return await this.httpClient.get(HttpRequestEndpoints.subaccount.fetch.replace(":id_or_code", id_or_code))
  }

  /**
   * Enable a subscription
   * @param data request body
   */
  async enable(data: EnableSubscriptBody) {
    return await this.httpClient.post(HttpRequestEndpoints.subscription.enable, data)
  }

  /**
   * Disable a subscription
   * @param data request body
   */
  async disable(data: EnableSubscriptBody) {
    return await this.httpClient.post(HttpRequestEndpoints.subscription.disable, data)
  }

  /**
   * Generate a subscription update link
   * @param code Subscription code
   */
  async generateUpdateSubLink(code: string) {
    return await this.httpClient.get(HttpRequestEndpoints.subscription.generateUpdateSubLink.replace(":code", code))
  }

  /**
   * Send a subscription update link
   * @param code Subscription code
   */
  async sendUpdateSubLink(code: string) {
    return await this.httpClient.post(HttpRequestEndpoints.subscription.sendUpdateSubLink.replace(":code", code))
  }
}
