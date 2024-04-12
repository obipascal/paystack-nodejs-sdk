"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Customer_1 = require("./resources/Customer");
const Transactions_1 = require("./resources/Transactions");
const Transfer_1 = require("./resources/Transfer");
const TransferRecipients_1 = require("./resources/TransferRecipients");
const DedicatedVirtualAccount_1 = require("./resources/DedicatedVirtualAccount");
const ApplePay_1 = require("./resources/ApplePay");
const Page_1 = require("./resources/Page");
const PaymentRequest_1 = require("./resources/PaymentRequest");
const Plans_1 = require("./resources/Plans");
const Products_1 = require("./resources/Products");
const Settlements_1 = require("./resources/Settlements");
const Subaccounts_1 = require("./resources/Subaccounts");
const Subscription_1 = require("./resources/Subscription");
const BulkCharges_1 = require("./resources/BulkCharges");
const Charge_1 = require("./resources/Charge");
const Disputes_1 = require("./resources/Disputes");
const Refunds_1 = require("./resources/Refunds");
const Verification_1 = require("./resources/Verification");
const Miscellaneous_1 = require("./resources/Miscellaneous");
exports.default = {
    Customers: Customer_1.default,
    Transaction: Transactions_1.default,
    Transfer: Transfer_1.default,
    TransferRecipient: TransferRecipients_1.default,
    VirtualAccount: DedicatedVirtualAccount_1.default,
    ApplePay: ApplePay_1.default,
    Page: Page_1.default,
    PaymentRequest: PaymentRequest_1.default,
    Plans: Plans_1.default,
    Products: Products_1.default,
    Settlements: Settlements_1.default,
    Subaccounts: Subaccounts_1.default,
    Subscription: Subscription_1.default,
    BulkCharges: BulkCharges_1.default,
    Charges: Charge_1.default,
    Disputes: Disputes_1.default,
    Refunds: Refunds_1.default,
    Verification: Verification_1.default,
    Miscellaneous: Miscellaneous_1.default,
};
