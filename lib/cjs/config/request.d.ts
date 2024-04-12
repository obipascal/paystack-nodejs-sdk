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
    /** The Dedicated Virtual Account API enables Nigerian merchants to manage unique payment accounts of their customers. */
    dedicatedVirtualAccount: {
        createDedicatedVirtualAccount: string;
        assignDedicatedVirtualAccount: string;
        listDedicatedVirtualAccount: string;
        fetchDedicatedVirtualAccount: string;
        queryVirtualAccount: string;
        deactivateDedicatedVirtualAccount: string;
        splitDedicatedVirtualAccount: string;
        removeSplitDedicatedVirtualAccount: string;
        fetchBankProviders: string;
    };
    /** The Apple Pay API allows you register your application's top-level domain or subdomain. */
    applePay: {
        registerDomain: string;
        listDomains: string;
        unregisterDomain: string;
    };
    /** The Subaccounts API allows you create and manage subaccounts on your integration. Subaccounts can be used to split payment between two accounts (your main account and a sub account). */
    subaccount: {
        create: string;
        list: string;
        fetch: string;
        update: string;
    };
    /** The Plans API allows you create and manage installment payment options on your integration. */
    plans: {
        create: string;
        list: string;
        fetch: string;
        update: string;
    };
    /** The Subscriptions API allows you create and manage recurring payment on your integration. */
    subscription: {
        create: string;
        list: string;
        fetch: string;
        enable: string;
        disable: string;
        generateUpdateSubLink: string;
        sendUpdateSubLink: string;
    };
    /** The Products API allows you create and manage inventories on your integration. */
    product: {
        create: string;
        list: string;
        fetch: string;
        update: string;
    };
    /** Update a payment page details on your integration */
    paymentPage: {
        create: string;
        list: string;
        fetch: string;
        update: string;
        checkSlugAvailability: string;
        addProduct: string;
    };
    /** The Payment Requests API allows you manage requests for payment of goods and services. */
    paymentRequest: {
        create: string;
        list: string;
        fetch: string;
        update: string;
        verify: string;
        sendNotification: string;
        total: string;
        finalize: string;
        archive: string;
    };
    /** The Settlements API allows you gain insights into payouts made by Paystack to your bank account. */
    settlement: {
        list: string;
        listTransactions: string;
    };
    /** The Transfer Recipients API allows you create and manage beneficiaries that you send money to. */
    transferRecipient: {
        create: string;
        createBulk: string;
        list: string;
        fetch: string;
        update: string;
        delete: string;
    };
    /** The Transfers API allows you automate sending money to your customers. */
    transfer: {
        initiate: string;
        list: string;
        fetch: string;
        finalize: string;
        bulk: string;
        verify: string;
        checkBalance: string;
        ledger: string;
        resendOtp: string;
        disableOtp: string;
        disableOtpFinalize: string;
        enableOtp: string;
    };
    /** The Bulk Charges API allows you create and manage multiple recurring payments from your customers. */
    bulkCharge: {
        create: string;
        list: string;
        fetch: string;
        fetchBatch: string;
        pause: string;
        resume: string;
    };
    /** The Charge API allows you to configure payment channel of your choice when initiating a payment. */
    charge: {
        initialize: string;
        submitPin: string;
        submitOtp: string;
        submitPhone: string;
        submitBirthday: string;
        submitAddress: string;
        checkPendingCharge: string;
    };
    /** The Disputes API allows you manage transaction disputes on your integration. */
    dispute: {
        list: string;
        fetch: string;
        listTransactionDispute: string;
        update: string;
        addEvidence: string;
        fetchUploadUrl: string;
        resolve: string;
        export: string;
    };
    /** The Refunds API allows you create and manage transaction refunds. */
    refund: {
        create: string;
        list: string;
        fetch: string;
    };
    /** The Verification API allows you perform KYC processes. */
    verification: {
        resolveAccount: string;
        validateBank: string;
        resolveCard: string;
    };
    /** The Miscellaneous API are supporting APIs that can be used to provide more details to other APIs. */
    miscellaneous: {
        listBanks: string;
    };
};
/**
 * Create and return an axios instance
 * @param apiKey Paystack API key
 */
export default function HttpRequest(apiKey: string): import("axios").AxiosInstance;
