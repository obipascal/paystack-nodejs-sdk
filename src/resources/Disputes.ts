import { AxiosInstance } from "axios"
import HttpRequest, { HttpRequestEndpoints } from "../config/request"
import { AddEvidenceBody, DisputeParams, UpdateDisputeBody } from "../types/dispute"

export default class Disputes {
  private httpClient: AxiosInstance

  /**
   * The Disputes API allows you manage transaction disputes on your integration.
   * @param apiKey Paystack API key
   */
  constructor(apiKey: string) {
    this.httpClient = HttpRequest(apiKey)
  }

  /**
   * List disputes
   * @param params Filter options
   */
  async list(params: DisputeParams) {
    return await this.httpClient.get(HttpRequestEndpoints.dispute.list, { params })
  }

  /**
   * Fetch a dispute
   * @param id Dispute ID
   */
  async fetch(id: string) {
    return await this.httpClient.get(HttpRequestEndpoints.dispute.fetch.replace(":id", id))
  }

  /**
   * List disputes for a transaction
   * @param id Transaction ID
   */
  async listTransactionDispute(id: string) {
    return await this.httpClient.get(HttpRequestEndpoints.dispute.listTransactionDispute.replace(":id", id))
  }

  /**
   * Update a dispute
   * @param id Dispute ID
   * @param data Dispute details
   */
  async update(id: string, data: UpdateDisputeBody) {
    return await this.httpClient.put(HttpRequestEndpoints.dispute.update.replace(":id", id), data)
  }

  /**
   * Add evidence to a dispute
   * @param id Dispute ID
   * @param data Evidence details
   */
  async addEvidence(id: string, data: AddEvidenceBody) {
    return await this.httpClient.post(HttpRequestEndpoints.dispute.addEvidence.replace(":id", id), data)
  }

  /**
   * Fetch upload url
   * @param id Dispute ID
   * @param params Upload options
   */
  async fetchUploadUrl(id: string, params: { upload_filename: string }) {
    return await this.httpClient.get(HttpRequestEndpoints.dispute.fetchUploadUrl.replace(":id", id), { params })
  }

  /**
   * Resolve a dispute
   * @param id Dispute ID
   * @param data Resolution details
   */
  async resolve(id: string, data: any) {
    return await this.httpClient.post(HttpRequestEndpoints.dispute.resolve.replace(":id", id), data)
  }

  /**
   * Export disputes
   */
  async export(params: DisputeParams) {
    return await this.httpClient.get(HttpRequestEndpoints.dispute.export, { params })
  }
}
