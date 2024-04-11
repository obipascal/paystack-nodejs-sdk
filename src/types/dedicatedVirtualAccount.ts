export type CreateDedicatedVirtualAccountBody = {
  /** Customer ID or code */
  customer: string
  // ---------------- [ Optional Params] ----------------
  /** The bank slug for preferred bank. To get a list of available banks, use the List Banks endpoint, passing pay_with_bank_transfer=true query parameter */
  preferred_bank?: string
  /** Subaccount code of the account you want to split the transaction with */
  subaccount?: string
  /** Split code consisting of the lists of accounts you want to split the transaction with */
  split_code?: string
  /** Customer's first name */
  first_name?: string
  /** Customer's last name */
  last_name?: string
  /** Customer's phone number */
  phone?: string
}

export type AssignDedicatedVirtualAccountBody = {
  /** Customer email address */
  email: string
  /** Customer's first name */
  first_name: string
  /** Customer's last name */
  last_name: string
  /** Customer's phone number */
  phone: string
  /** The bank slug for preferred bank. To get a list of available banks, use the List Banks endpoint, passing pay_with_bank_transfer=true query parameter */
  preferred_bank: string
  /** Currently accepts NG only */
  country: string

  // ------------- [ Optional Params] -------------
  /** Customer's account number */
  account_number?: string
  /** Customer's Bank Verification Number */
  bvn?: string
  /** Customer's bank code */
  bank_code?: string
  /** Subaccount code of the account you want to split the transaction with */
  subaccount?: string
  /** Split code consisting of the lists of accounts you want to split the transaction with */
  split_code?: string
}

export type DedicatedVirtualAccountQueryParams = {
  /** Virtual account number to requery */
  account_number: string
  /** The bank's slug in lowercase, without spaces e.g. wema-bank */
  provider_slug: string

  // ------------- [ Optional Params] -------------
  /** The day the transfer was made in YYYY-MM-DD format */
  date?: string
}

export type DedicatedVirtualAccountSplitTransactionBody = {
  /** Customer ID or code */
  customer: string
  // ------------ [ Optional Params] ------------
  /** Subaccount code of the account you want to split the transaction with */
  subaccount?: string
  /** Split code consisting of the lists of accounts you want to split the transaction with */
  split_code?: string
  /** The bank slug for preferred bank. To get a list of available banks, use the List Providers endpoint */
  preferred_bank?: string
}

export type RemoveSplitDedicatedVirtualAccountBody = {
  /** Dedicated virtual account number */
  account_number: string
}
