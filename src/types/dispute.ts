import { PagerParams } from "./const"

export interface DisputeParams extends PagerParams {
  /** Transaction Id */
  transaction?: string
  /** Dispute Status. Acceptable values: { awaiting-merchant-feedback | awaiting-bank-feedback | pending | resolved } */
  status?: "awaiting-merchant-feedback" | "awaiting-bank-feedback" | "pending" | "resolved"
}

export type UpdateDisputeBody = {
  /** The amount to refund, in the subunit of the supported currency */
  refund_amount: number
  /** filename of attachment returned via response from upload url(GET /dispute/:id/upload_url) */
  uploaded_filename?: string
}

export type AddEvidenceBody = {
  /** Customer email */
  customer_email: string
  /** Customer name */
  customer_name: string
  /** Customer phone */
  customer_phone: string
  /** Details of service involved */
  service_details: string
  /** Delivery Address */
  delivery_address?: string
  /** ISO 8601 representation of delivery date (YYYY-MM-DD) */
  delivery_date?: string
}

export type GetUploadUrlParams = {
  /** The file name, with its extension, that you want to upload. e.g filename.pdf */
  upload_filename: string
}

export type ResolveDisputeBody = {
  /** Dispute resolution. Accepted values: { merchant-accepted | declined }. */
  resolution: "merchant-accepted" | "declined"
  /** Reason for resolving */
  message: string
  /** the amount to refund, in the subunit of the supported currency */
  refund_amount: number
  /** filename of attachment returned via response from upload url(GET /dispute/:id/upload_url) */
  uploaded_filename: string
  /** Evidence Id for fraud claims */
  evidence?: number
}
