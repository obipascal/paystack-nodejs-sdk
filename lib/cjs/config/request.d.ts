export declare const HttpRequestEndpoints: {
    /** The Transactions API allows you create and manage payments on your integration. */
    transaction: {
        initialize: string;
        verify: string;
        list: string;
        single: string;
        chargeAuthorization: string;
        timeline: string;
        total: string;
        export: string;
        partialDebit: string;
        checkAuthorization: string;
    };
    /** The Transaction Splits API enables merchants split the settlement for a transaction across their payout account, and one or more subaccounts. */
    transactionSplit: {
        create: string;
        list: string;
        fetch: string;
        update: string;
        addOrUpdateSplitSubaccount: string;
        removeSplitSubaccount: string;
    };
    /** Create a customer on your integration */
    customer: {
        create: string;
        list: string;
        fetch: string;
        update: string;
        validate: string;
        blacklistOrWhitelistCustomer: string;
        deactivateAuthorization: string;
    };
};
/**
 * Create and return an axios instance
 * @param apiKey Paystack API key
 */
export default function HttpRequest(apiKey: string): import("axios").AxiosInstance;
