import axios from "axios";
const baseURL = "https://api.paystack.co";
export const HttpRequestEndpoints = {
    /** The Transactions API allows you create and manage payments on your integration. */
    transaction: {
        initialize: "/transaction/initialize",
        verify: "/transaction/verify/:reference",
        list: "/transaction",
        single: "/transaction/:id",
        chargeAuthorization: "/transaction/charge_authorization",
        timeline: "/transaction/timeline/:id_or_reference",
        total: "/transaction/totals",
        export: "/transaction/export",
        partialDebit: "/transaction/partial_debit",
        checkAuthorization: "/transaction/check_authorization",
    },
    /** The Transaction Splits API enables merchants split the settlement for a transaction across their payout account, and one or more subaccounts. */
    transactionSplit: {
        create: "/split",
        list: "/split",
        fetch: "/split/:id",
        update: "/split/:id",
        addOrUpdateSplitSubaccount: "/split/:id/subaccount/add",
        removeSplitSubaccount: "/split/:id/subaccount/remove",
    },
    /** Create a customer on your integration */
    customer: {
        create: "/customer",
        list: "/customer",
        fetch: "/customer/:email_or_code",
        update: "/customer/:code",
        validate: "/customer/:code/identification",
        blacklistOrWhitelistCustomer: "/customer/set_risk_action",
        deactivateAuthorization: "/customer/deactivate_authorization",
    },
};
/**
 * Create and return an axios instance
 * @param apiKey Paystack API key
 */
export default function HttpRequest(apiKey) {
    // Set the request headers
    const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
    };
    //   Create an axios instance
    const instance = axios.create({
        baseURL: baseURL,
        headers: headers,
    });
    return instance;
}
