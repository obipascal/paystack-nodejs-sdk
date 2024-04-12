export type CreatePlanBody = {
    /** Name of plan */
    name: string;
    /** Amount should be in the subunit of the supported currency */
    amount: number;
    /** Interval in words. Valid intervals are: daily, weekly, monthly,quarterly, biannually (every 6 months), annually. */
    interval: "daily" | "weekly" | "monthly" | "quarterly" | "biannually" | "annually";
    /** A description for this plan */
    description?: string;
    /** Set to false if you don't want invoices to be sent to your customers */
    send_invoices?: boolean;
    /** Set to false if you don't want text messages to be sent to your customers */
    send_sms?: boolean;
    /** Currency in which amount is set */
    currency?: string;
    /** Number of invoices to raise during subscription to this plan. Can be overridden by specifying an invoice_limit while subscribing. */
    invoice_limit?: number;
};
