export type CreateCustomerBody = {
  /** Customer's email address */
  email: string
  /** Customer's first name */
  first_name: string
  /** Customer's last name */
  last_name: string
  /** Customer's phone number */
  phone?: string
  /**A set of key/value pairs that you can attach to the customer. It can be used to store additional information in a structured format. */
  metadata?: Record<string, any>
}

export type UpdateCustomerBody = {
  /** Customer's first name */
  first_name: string
  /** Customer's last name */
  last_name: string
  /** Customer's phone number */
  phone?: string
  /**A set of key/value pairs that you can attach to the customer. It can be used to store additional information in a structured format. */
  metadata?: Record<string, any>
}

export type ValidateCustomerBody = {
  /** Customer's first name */
  first_name: string
  /** Customer's last name */
  last_name: string
  /** Predefined types of identification. Only bank_account is supported at the moment */
  type: "bank_account"
  /** Customer's identification number */
  value: string
  /** 2 letter country code of identification issuer */
  country: "NG" | string
  /** Customer's Bank Verification Number */
  bvn: string
  /** You can get the list of Bank Codes by calling the List Banks endpoint. (required if type is bank_account) */
  bank_code: string
  /** Customer's bank account number. (required if type is bank_account) */
  account_number: string

  //   -------------------- [ Optional Params] --------------------

  /** Customer's middle name */
  middle_name?: string
}

export type BlacklistOrWhitelistCustomerBody = {
  /** Customer's code, or email address */
  customer: string

  // -------------------- [ Optional Params] --------------------

  /** One of the possible risk actions [ default, allow, deny ]. allow to whitelist. deny to blacklist. Customers start with a default risk action. */
  risk_action?: "default" | "allow" | "deny"
}

export type DeactivateAuthorizationBody = {
  /** Authorization code to be deactivated */
  authorization_code: string
}
