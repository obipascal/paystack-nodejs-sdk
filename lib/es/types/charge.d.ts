export type BulkChargeBody = {
    /** Transaction authorization reusable code */
    authorization: string;
    /** The charge amount */
    amount: number;
    /** The transaction reference */
    reference: string;
};
export type ChargeBody = {
    /** Customer's email address */
    email: string;
    /** Amount in subunit of the supported currency */
    amount: number;
    /** Bank account to charge (don't send if charging an authorization code) */
    bank?: {
        code: string;
        account_number: string;
    };
    /** Takes the settings for the Pay with Transfer (PwT) channel. Pass in the account_expires_at param to set the expiry time. */
    bank_transfer?: {
        account_expires_at: string;
    };
    /** Takes a provider object with the either of the following values: scan-to-pay, visa */
    qr?: {
        provider: "visa" | "scan-to-pay";
    };
    /** An authorization code to charge (don't send if charging a bank account) */
    authorization_code?: string;
    /** 4-digit PIN (send with a non-reusable authorization code) */
    pin?: string;
    /** A JSON object */
    metadata?: Record<string, any>;
    /** Unique transaction reference. Only -, .`, = and alphanumeric characters allowed. */
    reference?: string;
    /** USSD type to charge (don't send if charging an authorization code, bank or card) */
    ussd?: {
        /** Guaranty Trust Bank	737
            United Bank of Africa	919
            Sterling Bank	822
            Zenith Bank	966 */
        type: "737" | "919" | "822" | "966";
    };
    /**
     * Mobile details (don't send if charging an authorization code, bank or card)
     * _______________________________________________________________
     * This feature is only available to businesses in Ghana and Kenya.
     */
    mobile_money?: {
        phone: string;
        /** MTN	mtn	Ghana
            AirtelTigo	atl	Ghana
            Vodafone	vod	Ghana
            M-Pesa	mpesa	Kenya */
        provider: "mtn" | "atl" | "vod" | "mpesa";
    };
    /** This is the unique identifier of the device a user uses in making payment. Only -, .`, = and alphanumeric characters allowed. */
    device_id?: string;
};
export type SubmitPINBody = {
    /** PIN submitted by user */
    pin: string;
    /** Reference for transaction that requested pin */
    reference: string;
};
export type SubmitOtpBody = {
    /** OTP submitted by user */
    otp: string;
    /** Reference for ongoing transaction */
    reference: string;
};
export type SubmitPhoneBody = {
    /** Phone number submitted by user */
    phone: string;
    /** Reference for ongoing transaction */
    reference: string;
};
export type SubmitBirthdayBody = {
    /** Birthday submitted by user */
    birthday: string;
    /** Reference for ongoing transaction */
    reference: string;
};
export type SubmitAddressBody = {
    /** Address submitted by user */
    address: string;
    /** Reference for ongoing transaction */
    reference: string;
    /** City submitted by user */
    city: string;
    /** State submitted by user */
    state: string;
    /** Zipcode submitted by user */
    zipcode: string;
};
