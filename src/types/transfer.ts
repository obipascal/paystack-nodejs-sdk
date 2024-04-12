import { Currencies } from "./const"

export type TransferBody = {
  /** Where should we transfer from? Only balance for now */
  source: "balance" | string
  /** Amount to transfer in kobo if currency is NGN and pesewas if currency is GHS. */
  amount: number
  /** Code for transfer recipient */
  recipient: string
  // --------- [ Optionals] ---------
  /** The reason for the transfer */
  reason?: string
  /** Specify the currency of the transfer. Defaults to NGN */
  currency?: Currencies
  /** If specified, the field should be a unique identifier (in lowercase) for the object. Only -,_ and alphanumeric characters allowed. */
  reference?: string
}

export type FinalizeTransferBody = {
  /** The transfer code you want to finalize */
  transfer_code: string
  /** OTP sent to business phone to verify transfer */
  otp: string
}

export type BulkTransferBody = {
  /** Where should we transfer from? Only balance for now */
  source: "balance" | string
  /** A list of transfer object. Each object should contain amount, recipient, and reference */
  transfers: Array<TransferBody>
}

export type ResendTranasferCodeBody = {
  /** Transfer code */
  transfer_code: string
  /** Either resend_otp or transfer */
  reason: "resend_otp" | "transfer"
}

export type FinalizeDisableOTPBody = {
  /** OTP sent to business phone to verify transfer */
  otp: string
}
