export type VerificationParams = {
    /** Account Number */
    account_number: string;
    /** You can get the list of bank codes by calling the List Banks endpoint */
    bank_code: string;
};
export type ValidateAccountBody = {
    account_name: string;
    account_number: string;
    /**  */
    account_type: "personal" | "business";
    /** The bank code of the customer’s bank. You can fetch the bank codes by using our List Banks endpoint */
    bank_code: string;
    /** Customer’s mode of identity. This could be one of: [ identityNumber, passportNumber, businessRegistrationNumber ] */
    document_type: "identityNumber" | "passportNumber" | "businessRegistrationNumber";
    /** Customer’s mode of identity number */
    document_number: string;
};
