import { Currencies } from "./const"

export type TransferRecipientBody = {
  /** Recipient Type. It could be one of: nuban, ghipss, mobile_money or basa */
  type: "nuban" | "ghipss" | "mobile_money" | "basa"
  /** The recipient's name according to their account registration. */
  name: string
  /** Required for all recipient types except authorization */
  account_number: string
  /** Required for all recipient types except authorization. You can get the list of Bank Codes by calling the List Banks endpoint. */
  bank_code: string
  //   --------- [ Optionals ] ---------
  /** A description for this recipient */
  description?: string
  /** Currency for the account receiving the transfer */
  currency?: Currencies
  /** An authorization code from a previous transaction */
  authorization_code?: string
  /** Store additional information about your recipient in a structured format, JSON */
  metadata?: Record<string, any>
}

export type BatchRecipientBody = {
  /** A list of transfer recipient object. Each object should contain type, name, and bank_code. Any Create Transfer Recipient param can also be passed. */
  batch: Array<TransferRecipientBody>
}

export type UpdateRecipientBody = {
  /** A name for the recipient */
  name: string
  /** Email address of the recipient */
  email?: string
}
