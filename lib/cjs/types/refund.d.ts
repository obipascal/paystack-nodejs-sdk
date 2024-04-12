import { Currencies } from "./const";
export type RefundBody = {
    /** Transaction reference or id */
    transaction: string;
    /** Amount, in the subunit of the supported currency, to be refunded to the customer. Amount is optional(defaults to original transaction amount) and cannot be more than the original transaction amount. */
    amount?: number;
    /** Any of the supported currency */
    currency?: Currencies;
    /** Customer reason */
    customer_note?: string;
    /** Merchant reason */
    merchant_note?: string;
};
