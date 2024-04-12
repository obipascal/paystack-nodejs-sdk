"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpRequestEndpoints = void 0;
const axios_1 = require("axios");
const baseURL = "https://api.paystack.co";
exports.HttpRequestEndpoints = {
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
    /** The Dedicated Virtual Account API enables Nigerian merchants to manage unique payment accounts of their customers. */
    dedicatedVirtualAccount: {
        createDedicatedVirtualAccount: "/dedicated_account",
        assignDedicatedVirtualAccount: "/dedicated_account/assign",
        listDedicatedVirtualAccount: "/dedicated_account",
        fetchDedicatedVirtualAccount: "/dedicated_account/:dedicated_account_id",
        queryVirtualAccount: "/dedicated_account",
        deactivateDedicatedVirtualAccount: "/dedicated_account/:dedicated_account_id",
        splitDedicatedVirtualAccount: "/dedicated_account/split",
        removeSplitDedicatedVirtualAccount: "/dedicated_account/split",
        fetchBankProviders: "/dedicated_account/available_providers",
    },
    /** The Apple Pay API allows you register your application's top-level domain or subdomain. */
    applePay: {
        registerDomain: "/apple-pay/domain",
        listDomains: "/apple-pay/domain",
        unregisterDomain: "/apple-pay/domain",
    },
    /** The Subaccounts API allows you create and manage subaccounts on your integration. Subaccounts can be used to split payment between two accounts (your main account and a sub account). */
    subaccount: {
        create: "/subaccount",
        list: "/subaccount",
        fetch: "/subaccount/:id_or_code",
        update: "/subaccount/:id_or_code",
    },
    /** The Plans API allows you create and manage installment payment options on your integration. */
    plans: {
        create: "/plan",
        list: "/plan",
        fetch: "/plan/:id_or_code",
        update: "/plan/:id_or_code",
    },
    /** The Subscriptions API allows you create and manage recurring payment on your integration. */
    subscription: {
        create: "/subscription",
        list: "/subscription",
        fetch: "/subscription/:id_or_code",
        enable: "/subscription/enable",
        disable: "/subscription/disable",
        generateUpdateSubLink: "/subscription/:code/manage/link",
        sendUpdateSubLink: "/subscription/:code/manage/email",
    },
    /** The Products API allows you create and manage inventories on your integration. */
    product: {
        create: "/product",
        list: "/product",
        fetch: "/product/:id",
        update: "/product/:id",
    },
    /** Update a payment page details on your integration */
    paymentPage: {
        create: "/page",
        list: "/page",
        fetch: "/page/:id_or_slug",
        update: "/page/:id_or_slug",
        checkSlugAvailability: "/page/check_slug_availability/:slug",
        addProduct: "/page/:id/product",
    },
    /** The Payment Requests API allows you manage requests for payment of goods and services. */
    paymentRequest: {
        create: "/paymentrequest",
        list: "/paymentrequest",
        fetch: "/paymentrequest/:id",
        update: "/paymentrequest/:id",
        verify: "/paymentrequest/verify/:code",
        sendNotification: "/paymentrequest/notify/:code",
        total: "/paymentrequest/totals",
        finalize: "/paymentrequest/finalize/:code",
        archive: "/paymentrequest/archive/:code",
    },
    /** The Settlements API allows you gain insights into payouts made by Paystack to your bank account. */
    settlement: {
        list: "/settlement",
        listTransactions: "/settlement/:id/transactions",
    },
    /** The Transfer Recipients API allows you create and manage beneficiaries that you send money to. */
    transferRecipient: {
        create: "/transferrecipient",
        createBulk: "/transferrecipient/bulk",
        list: "/transferrecipient",
        fetch: "/transferrecipient/:id_or_code",
        update: "/transferrecipient/:id_or_code",
        delete: "/transferrecipient/:id_or_code",
    },
    /** The Transfers API allows you automate sending money to your customers. */
    transfer: {
        initiate: "/transfer",
        list: "/transfer",
        fetch: "/transfer/:id_or_code",
        finalize: "/transfer/finalize_transfer",
        bulk: "/transfer/bulk",
        verify: "/transfer/verify/:reference",
        checkBalance: "/balance",
        ledger: "/balance/ledger",
        resendOtp: "/transfer/resend_otp",
        disableOtp: "/transfer/disable_otp",
        disableOtpFinalize: "/transfer/disable_otp_finalize",
        enableOtp: "/transfer/enable_otp",
    },
    /** The Bulk Charges API allows you create and manage multiple recurring payments from your customers. */
    bulkCharge: {
        create: "/bulkcharge",
        list: "/bulkcharge",
        fetch: "/bulkcharge/:id_or_code",
        fetchBatch: "/bulkcharge/:id_or_code/charges",
        pause: "/bulkcharge/pause/:batch_code",
        resume: "/bulkcharge/resume/:batch_code",
    },
    /** The Charge API allows you to configure payment channel of your choice when initiating a payment. */
    charge: {
        initialize: "/charge",
        submitPin: "/charge/submit_pin",
        submitOtp: "/charge/submit_otp",
        submitPhone: "/charge/submit_phone",
        submitBirthday: "/charge/submit_birthday",
        submitAddress: "/charge/submit_address",
        checkPendingCharge: "/charge/:reference",
    },
    /** The Disputes API allows you manage transaction disputes on your integration. */
    dispute: {
        list: "/dispute",
        fetch: "/dispute/:id",
        listTransactionDispute: "/dispute/transaction/:id",
        update: "/dispute/:id",
        addEvidence: "/dispute/:id/evidence",
        fetchUploadUrl: "/dispute/:id/upload_url",
        resolve: "/dispute/:id/resolve",
        export: "/dispute/export",
    },
    /** The Refunds API allows you create and manage transaction refunds. */
    refund: {
        create: "/refund",
        list: "/refund",
        fetch: "/refund/:id",
    },
    /** The Verification API allows you perform KYC processes. */
    verification: {
        resolveAccount: "/bank/resolve",
        validateBank: "/bank/validate",
        resolveCard: "/decision/bin/:bin",
    },
    /** The Miscellaneous API are supporting APIs that can be used to provide more details to other APIs. */
    miscellaneous: {
        listBanks: "/bank",
    },
};
/**
 * Create and return an axios instance
 * @param apiKey Paystack API key
 */
function HttpRequest(apiKey) {
    // Set the request headers
    const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
    };
    //   Create an axios instance
    const instance = axios_1.default.create({
        baseURL: baseURL,
        headers: headers,
    });
    instance.interceptors.response.use((response) => {
        return Promise.resolve(response?.data);
    }, (error) => {
        return Promise.reject(error?.response?.data);
    });
    return instance;
}
exports.default = HttpRequest;
