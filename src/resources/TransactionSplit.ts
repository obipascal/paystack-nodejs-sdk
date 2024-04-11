import { AxiosInstance } from "axios"
import HttpRequest, { HttpRequestEndpoints } from "../config/request"
import { RemoveSubaccountFromSplitBody, SplitSubaccountBody, TransactionSplitBody, UpdateSplitTransnactionBody } from "../types/transactions"

export default class TransactionSplit {
  private httpClient: AxiosInstance

  /**
   * The Transaction Splits API enables merchants split the settlement for a transaction across their payout account, and one or more subaccounts.
   * @param apiKey Paystack API key
   */
  constructor(apiKey: string) {
    this.httpClient = HttpRequest(apiKey)
  }

  /**
   * Create a split payment on your integration
   * @param data Transaction split data
   */
  async create(data: TransactionSplitBody) {
    return await this.httpClient.post(HttpRequestEndpoints.transactionSplit.create, data)
  }

  /**
   * List the transaction splits available on your integration
   */
  async list() {
    return await this.httpClient.get(HttpRequestEndpoints.transactionSplit.list)
  }

  /**
   * Get details of a split on your integration
   * @param id Transaction split ID
   */
  async fetch(id: string) {
    return await this.httpClient.get(HttpRequestEndpoints.transactionSplit.fetch.replace(":id", id))
  }

  /**
   * Update a transaction split details on your integration
   * @param id Transaction split ID
   * @param data Transaction split data
   */
  async update(id: string, data: UpdateSplitTransnactionBody) {
    return await this.httpClient.put(HttpRequestEndpoints.transactionSplit.update.replace(":id", id), data)
  }

  /**
   * Add a Subaccount to a Transaction Split, or update the share of an existing Subaccount in a Transaction Split
   * @param id Transaction split ID
   * @param data Split subaccount data
   */
  async addOrUpdateSplitSubaccount(id: string, data: SplitSubaccountBody) {
    return await this.httpClient.post(HttpRequestEndpoints.transactionSplit.addOrUpdateSplitSubaccount.replace(":id", id), data)
  }

  /**
   * Remove a subaccount from a transaction split
   * @param id Transaction split ID
   * @param subaccount Subaccount code
   */
  async removeSplitSubaccount(id: string, data: RemoveSubaccountFromSplitBody) {
    return await this.httpClient.post(HttpRequestEndpoints.transactionSplit.removeSplitSubaccount.replace(":id", id), data)
  }
}
