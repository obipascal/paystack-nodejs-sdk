> ⚠️ **DEPRECATED PACKAGE**
>
> This package has been **deprecated** and is no longer actively maintained.
>
> Please migrate to the new and actively maintained package:
>
> 👉 **@obipascal/paystack-sdk**  
> 🔗 https://www.npmjs.com/package/@obipascal/paystack-sdk
>
> The new package provides improved type safety, better API coverage, and ongoing updates.

# Paystack API SDK For NodeJS

A comprehensive Node.js/TypeScript SDK for the Paystack API. This package provides full type safety, supports both CommonJS and ES6 environments, and uses Axios as its HTTP client for seamless communication with the Paystack backend.

## Features

-   ✅ Full TypeScript support with comprehensive type definitions
-   ✅ Support for both CommonJS and ES6 modules
-   ✅ Promise-based API using Axios
-   ✅ Covers all Paystack API resources
-   ✅ Type-safe request and response handling
-   ✅ Built-in error handling

## Installation

```bash
npm install @obipascal/paystack-sdk
```

or

```bash
yarn add @obipascal/paystack-sdk
```

## Quick Start

```typescript
import { Customers } from "@obipascal/paystack-sdk";

// Initialize with your Paystack secret key
const customers = Customers(process.env.PAYSTACK_SECRET_KEY);

// Create a customer
const response = await customers.create({
    email: "customer@example.com",
    first_name: "John",
    last_name: "Doe",
    phone: "+2348123456789",
});

console.log(response.data);
```

## API Resources

### 1. Apple Pay

Register domains for Apple Pay transactions.

```typescript
import { ApplePay } from "@obipascal/paystack-sdk";

const applePay = ApplePay("YOUR_SECRET_KEY");

// Register a domain
const register = await applePay.registerDomain({ domainName: "example.com" });

// List registered domains
const domains = await applePay.listDomains();

// Unregister a domain
const unregister = await applePay.unregisterDomain({
    domainName: "example.com",
});
```

### 2. Bulk Charges

Create and manage bulk charge batches.

```typescript
import { BulkCharges } from "@obipascal/paystack-sdk";

const bulkCharges = BulkCharges("YOUR_SECRET_KEY");

// Initiate bulk charge
const batch = await bulkCharges.initiate({
    body: [
        {
            authorization: "AUTH_CODE",
            amount: 50000,
            reference: "ref_001",
        },
    ],
});

// List bulk charge batches
const batches = await bulkCharges.list({ perPage: 50, page: 1 });

// Fetch a specific batch
const details = await bulkCharges.fetch({ idOrCode: "BATCH_CODE" });

// Fetch charges in a batch
const charges = await bulkCharges.fetchChargesInBatch({
    idOrCode: "BATCH_CODE",
    status: "success",
});

// Pause a batch
const pause = await bulkCharges.pause({ batch_code: "BATCH_CODE" });

// Resume a batch
const resume = await bulkCharges.resume({ batch_code: "BATCH_CODE" });
```

### 3. Charge

Charge customers directly using various payment methods.

```typescript
import { Charge } from "@obipascal/paystack-sdk";

const charge = Charge("YOUR_SECRET_KEY");

// Create a charge
const newCharge = await charge.charge({
    email: "customer@example.com",
    amount: 50000,
    bank: {
        code: "057",
        account_number: "0000000000",
    },
});

// Submit PIN
const submitPin = await charge.submitPIN({
    pin: "1234",
    reference: "CHARGE_REF",
});

// Submit OTP
const submitOtp = await charge.submitOtp({
    otp: "123456",
    reference: "CHARGE_REF",
});

// Submit phone number
const submitPhone = await charge.submitPhone({
    phone: "+2348123456789",
    reference: "CHARGE_REF",
});

// Submit birthday
const submitBirthday = await charge.submitBirthday({
    birthday: "1990-01-01",
    reference: "CHARGE_REF",
});

// Submit address
const submitAddress = await charge.submitAddress({
    address: "123 Main St",
    city: "Lagos",
    state: "Lagos",
    zipcode: "100001",
    reference: "CHARGE_REF",
});

// Check pending charge
const pending = await charge.checkPendingCharge({ reference: "CHARGE_REF" });
```

### 4. Customers

Manage customer records and validation.

```typescript
import { Customers } from "@obipascal/paystack-sdk";

const customers = Customers("YOUR_SECRET_KEY");

// Create a customer
const newCustomer = await customers.create({
    email: "customer@example.com",
    first_name: "John",
    last_name: "Doe",
    phone: "+2348123456789",
});

// List customers
const customerList = await customers.list({
    perPage: 50,
    page: 1,
});

// Fetch a customer
const customer = await customers.fetch({ email_or_code: "CUS_xxxxx" });

// Update customer
const updated = await customers.update({
    code: "CUS_xxxxx",
    first_name: "Jane",
});

// Validate customer
const validation = await customers.validate({
    code: "CUS_xxxxx",
    first_name: "John",
    last_name: "Doe",
    type: "bank_account",
    value: "0123456789",
    country: "NG",
    bvn: "20012345678",
    bank_code: "007",
    account_number: "0123456789",
});

// Flag customer (whitelist/blacklist)
const flagged = await customers.flag({
    customer: "CUS_xxxxx",
    risk_action: "deny",
});

// Deactivate authorization
const deactivated = await customers.deactivateAuthorization({
    authorization_code: "AUTH_xxxxx",
});
```

### 5. Dedicated Virtual Accounts

Create and manage dedicated virtual accounts for customers.

```typescript
import { DedicatedVirtualAccount } from "@obipascal/paystack-sdk";

const dva = DedicatedVirtualAccount("YOUR_SECRET_KEY");

// Create dedicated account
const account = await dva.create({
    customer: "CUS_xxxxx",
    preferred_bank: "wema-bank",
});

// Assign dedicated account
const assigned = await dva.assign({
    email: "customer@example.com",
    first_name: "John",
    last_name: "Doe",
    phone: "+2348123456789",
    preferred_bank: "wema-bank",
    country: "NG",
});

// List dedicated accounts
const accounts = await dva.list({
    active: true,
    currency: "NGN",
});

// Fetch dedicated account
const details = await dva.fetch({ dedicated_account_id: 123 });

// Requery dedicated account
const requery = await dva.requery({
    account_number: "0123456789",
    provider_slug: "wema-bank",
});

// Deactivate account
const deactivated = await dva.deactivate({ dedicated_account_id: 123 });

// Split dedicated account transaction
const split = await dva.split({
    customer: "CUS_xxxxx",
    preferred_bank: "wema-bank",
    subaccount: "ACCT_xxxxx",
    split_code: "SPL_xxxxx",
});

// Remove split
const removed = await dva.removeSplit({ account_number: "0123456789" });

// Fetch bank providers
const providers = await dva.fetchBankProviders();
```

### 6. Disputes

Handle transaction disputes and provide evidence.

```typescript
import { Disputes } from "@obipascal/paystack-sdk";

const disputes = Disputes("YOUR_SECRET_KEY");

// List disputes
const disputeList = await disputes.list({
    perPage: 50,
    page: 1,
    status: "pending",
});

// Fetch dispute
const dispute = await disputes.fetch({ id: "DSP_xxxxx" });

// List transaction disputes
const txDisputes = await disputes.listTransactionDisputes({ id: "TRX_xxxxx" });

// Update dispute
const updated = await disputes.update({
    id: "DSP_xxxxx",
    refund_amount: 50000,
});

// Add evidence
const evidence = await disputes.addEvidence({
    id: "DSP_xxxxx",
    customer_email: "customer@example.com",
    customer_name: "John Doe",
    customer_phone: "+2348123456789",
    service_details: "Product delivered",
});

// Get upload URL
const uploadUrl = await disputes.getUploadUrl({
    id: "DSP_xxxxx",
    upload_filename: "evidence.pdf",
});

// Resolve dispute
const resolved = await disputes.resolve({
    id: "DSP_xxxxx",
    resolution: "merchant-accepted",
    message: "Accepted dispute",
    refund_amount: 50000,
    uploaded_filename: "evidence.pdf",
});

// Export disputes
const exported = await disputes.export({
    perPage: 50,
    page: 1,
    status: "resolved",
});
```

### 7. Miscellaneous

Get supporting data like banks list.

```typescript
import { Miscellaneous } from "@obipascal/paystack-sdk";

const misc = Miscellaneous("YOUR_SECRET_KEY");

// List supported banks
const banks = await misc.banks({
    country: "nigeria",
    use_cursor: false,
    perPage: 50,
});
```

### 8. Payment Pages

Create and manage payment pages for accepting payments.

```typescript
import { Page } from "@obipascal/paystack-sdk";

const pages = Page("YOUR_SECRET_KEY");

// Create payment page
const page = await pages.create({
    name: "Product Payment",
    description: "Payment for products",
    amount: 50000,
});

// List payment pages
const pageList = await pages.list({
    perPage: 50,
    page: 1,
});

// Fetch payment page
const details = await pages.fetch({ idOrSlug: "product-payment" });

// Update payment page
const updated = await pages.update({
    idOrSlug: "product-payment",
    name: "Updated Product Payment",
    amount: 75000,
});

// Check slug availability
const available = await pages.checkSlugAvailability({ slug: "new-product" });

// Add products to page
const products = await pages.addProducts({
    id: 123,
    product: [456, 789],
});
```

### 9. Payment Requests

Create and manage payment requests for invoicing.

```typescript
import { PaymentRequest } from "@obipascal/paystack-sdk";

const paymentRequests = PaymentRequest("YOUR_SECRET_KEY");

// Create payment request
const request = await paymentRequests.create({
    customer: "CUS_xxxxx",
    amount: 50000,
    description: "Invoice for services",
});

// List payment requests
const requests = await paymentRequests.list({
    perPage: 50,
    page: 1,
});

// Fetch payment request
const details = await paymentRequests.fetch({ idOrCode: "PRQ_xxxxx" });

// Verify payment request
const verified = await paymentRequests.verify({ code: "PRQ_xxxxx" });

// Send notification
const notified = await paymentRequests.sendNotification({ code: "PRQ_xxxxx" });

// Get payment request total
const total = await paymentRequests.total();

// Finalize payment request
const finalized = await paymentRequests.finalize({ code: "PRQ_xxxxx" });

// Update payment request
const updated = await paymentRequests.update({
    idOrCode: "PRQ_xxxxx",
    description: "Updated invoice",
});

// Archive payment request
const archived = await paymentRequests.archive({ code: "PRQ_xxxxx" });
```

### 10. Plans

Create subscription plans for recurring payments.

```typescript
import { Plans } from "@obipascal/paystack-sdk";

const plans = Plans("YOUR_SECRET_KEY");

// Create plan
const plan = await plans.create({
    name: "Monthly Subscription",
    interval: "monthly",
    amount: 50000,
});

// List plans
const planList = await plans.list({
    perPage: 50,
    page: 1,
});

// Fetch plan
const details = await plans.fetch({ idOrCode: "PLN_xxxxx" });

// Update plan
const updated = await plans.update({
    idOrCode: "PLN_xxxxx",
    name: "Updated Monthly Plan",
    amount: 60000,
});
```

### 11. Products

Manage products for payment pages.

```typescript
import { Products } from "@obipascal/paystack-sdk";

const products = Products("YOUR_SECRET_KEY");

// Create product
const product = await products.create({
    name: "Product Name",
    description: "Product description",
    price: 50000,
    currency: "NGN",
});

// List products
const productList = await products.list({
    perPage: 50,
    page: 1,
});

// Fetch product
const details = await products.fetch({ id: 123 });

// Update product
const updated = await products.update({
    id: 123,
    name: "Updated Product",
    price: 60000,
});
```

### 12. Refunds

Process refunds for transactions.

```typescript
import { Refunds } from "@obipascal/paystack-sdk";

const refunds = Refunds("YOUR_SECRET_KEY");

// Create refund
const refund = await refunds.create({
    transaction: "TRX_xxxxx",
    amount: 50000,
});

// List refunds
const refundList = await refunds.list({
    perPage: 50,
    page: 1,
});

// Fetch refund
const details = await refunds.fetch({ reference: "REF_xxxxx" });
```

### 13. Settlements

Track settlements to your bank account.

```typescript
import { Settlements } from "@obipascal/paystack-sdk";

const settlements = Settlements("YOUR_SECRET_KEY");

// Fetch settlements
const settlementList = await settlements.fetch({
    perPage: 50,
    page: 1,
});

// Fetch settlement transactions
const transactions = await settlements.fetchSettlementTransactions({
    id: "STL_xxxxx",
    perPage: 50,
    page: 1,
});
```

### 14. Subaccounts

Create subaccounts for split payments.

```typescript
import { Subaccounts } from "@obipascal/paystack-sdk";

const subaccounts = Subaccounts("YOUR_SECRET_KEY");

// Create subaccount
const subaccount = await subaccounts.create({
    business_name: "Business Name",
    settlement_bank: "057",
    account_number: "0123456789",
    percentage_charge: 10,
});

// List subaccounts
const list = await subaccounts.list({
    perPage: 50,
    page: 1,
});

// Fetch subaccount
const details = await subaccounts.fetch({ idOrCode: "ACCT_xxxxx" });

// Update subaccount
const updated = await subaccounts.update({
    idOrCode: "ACCT_xxxxx",
    business_name: "Updated Business Name",
});
```

### 15. Subscriptions

Manage customer subscriptions to plans.

```typescript
import { Subscription } from "@obipascal/paystack-sdk";

const subscriptions = Subscription("YOUR_SECRET_KEY");

// Create subscription
const subscription = await subscriptions.create({
    customer: "CUS_xxxxx",
    plan: "PLN_xxxxx",
    authorization: "AUTH_xxxxx",
});

// List subscriptions
const list = await subscriptions.list({
    perPage: 50,
    page: 1,
});

// Fetch subscription
const details = await subscriptions.fetch({ idOrCode: "SUB_xxxxx" });

// Enable subscription
const enabled = await subscriptions.enable({
    code: "SUB_xxxxx",
    token: "TOKEN_xxxxx",
});

// Disable subscription
const disabled = await subscriptions.disable({
    code: "SUB_xxxxx",
    token: "TOKEN_xxxxx",
});

// Generate update subscription link
const updateLink = await subscriptions.generateUpdateSubLink({
    code: "SUB_xxxxx",
});

// Send update subscription link
const sentLink = await subscriptions.sendUpdateSubLink({ code: "SUB_xxxxx" });
```

### 16. Transactions

Initialize and manage transactions.

```typescript
import { Transactions } from "@obipascal/paystack-sdk";

const transactions = Transactions("YOUR_SECRET_KEY");

// Initialize transaction
const init = await transactions.initialize({
    email: "customer@example.com",
    amount: 50000,
    callback_url: "https://example.com/callback",
});

// Verify transaction
const verified = await transactions.verify({ reference: "TRX_xxxxx" });

// List transactions
const list = await transactions.list({
    perPage: 50,
    page: 1,
});

// Fetch transaction
const details = await transactions.fetch({ id: 123 });

// Charge authorization
const charged = await transactions.chargeAuthorization({
    authorization_code: "AUTH_xxxxx",
    email: "customer@example.com",
    amount: 50000,
});

// View transaction timeline
const timeline = await transactions.timeline({ idOrReference: "TRX_xxxxx" });

// Get transaction totals
const totals = await transactions.totals();

// Export transactions
const exported = await transactions.export({
    perPage: 50,
    page: 1,
});

// Partial debit
const debit = await transactions.partialDebit({
    authorization_code: "AUTH_xxxxx",
    currency: "NGN",
    amount: 50000,
    email: "customer@example.com",
});
```

### 17. Transaction Split

Configure payment splitting between multiple accounts.

```typescript
import { TransactionSplit } from "@obipascal/paystack-sdk";

const splits = TransactionSplit("YOUR_SECRET_KEY");

// Create split
const split = await splits.create({
    name: "Split Name",
    type: "percentage",
    currency: "NGN",
    subaccounts: [
        { subaccount: "ACCT_xxxxx", share: 50 },
        { subaccount: "ACCT_yyyyy", share: 50 },
    ],
    bearer_type: "all",
    bearer_subaccount: "ACCT_xxxxx",
});

// List splits
const list = await splits.list({
    perPage: 50,
    page: 1,
});

// Fetch split
const details = await splits.fetch({ id: "SPL_xxxxx" });

// Update split
const updated = await splits.update({
    id: "SPL_xxxxx",
    name: "Updated Split Name",
    active: true,
});

// Add subaccount to split
const added = await splits.addSubaccount({
    id: "SPL_xxxxx",
    subaccount: "ACCT_xxxxx",
    share: 30,
});

// Remove subaccount from split
const removed = await splits.removeSubaccount({
    id: "SPL_xxxxx",
    subaccount: "ACCT_xxxxx",
});
```

### 18. Transfers

Transfer funds to customer accounts.

```typescript
import { Transfer } from "@obipascal/paystack-sdk";

const transfers = Transfer("YOUR_SECRET_KEY");

// Initiate transfer
const transfer = await transfers.initiate({
    source: "balance",
    amount: 50000,
    recipient: "RCP_xxxxx",
    reason: "Payment for services",
});

// Finalize transfer (with OTP)
const finalized = await transfers.finalize({
    transfer_code: "TRF_xxxxx",
    otp: "123456",
});

// Initiate bulk transfer
const bulk = await transfers.initiateBulkTransfer({
    source: "balance",
    transfers: [
        { amount: 50000, recipient: "RCP_xxxxx" },
        { amount: 30000, recipient: "RCP_yyyyy" },
    ],
});

// List transfers
const list = await transfers.list({
    perPage: 50,
    page: 1,
});

// Fetch transfer
const details = await transfers.fetch({ idOrCode: "TRF_xxxxx" });

// Verify transfer
const verified = await transfers.verify({ reference: "TRF_xxxxx" });

// Check balance
const balance = await transfers.checkBalance();

// Fetch balance ledger
const ledger = await transfers.fetchBalanceLedger();

// Resend OTP
const resent = await transfers.resendOtp({
    transfer_code: "TRF_xxxxx",
    reason: "resend_otp",
});

// Disable OTP
const disabled = await transfers.disableOtp();

// Finalize disable OTP
const finalizeDisable = await transfers.disableOtpFinalize({ otp: "123456" });

// Enable OTP
const enabled = await transfers.enableOtp();
```

### 19. Transfer Recipients

Manage transfer recipient accounts.

```typescript
import { TransferRecipients } from "@obipascal/paystack-sdk";

const recipients = TransferRecipients("YOUR_SECRET_KEY");

// Create recipient
const recipient = await recipients.create({
    type: "nuban",
    name: "Customer Name",
    account_number: "0123456789",
    bank_code: "057",
    currency: "NGN",
});

// Bulk create recipients
const bulk = await recipients.bulkCreate({
    batch: [
        {
            type: "nuban",
            name: "Customer 1",
            account_number: "0123456789",
            bank_code: "057",
        },
        {
            type: "nuban",
            name: "Customer 2",
            account_number: "9876543210",
            bank_code: "058",
        },
    ],
});

// List recipients
const list = await recipients.list({
    perPage: 50,
    page: 1,
});

// Fetch recipient
const details = await recipients.fetch({ idOrCode: "RCP_xxxxx" });

// Update recipient
const updated = await recipients.update({
    idOrCode: "RCP_xxxxx",
    name: "Updated Customer Name",
});

// Delete recipient
const deleted = await recipients.delete({ idOrCode: "RCP_xxxxx" });
```

### 20. Verification

Verify customer account details before transfers.

```typescript
import { Verification } from "@obipascal/paystack-sdk";

const verification = Verification("YOUR_SECRET_KEY");

// Resolve account number
const account = await verification.resolveAccountNumber({
    account_number: "0123456789",
    bank_code: "057",
});

// Validate account
const validated = await verification.validateAccount({
    account_name: "Customer Name",
    account_number: "0123456789",
    account_type: "personal",
    bank_code: "057",
    country_code: "NG",
    document_type: "identityNumber",
    document_number: "1234567890",
});

// Resolve card BIN
const card = await verification.resolveCardBin({ bin: "539983" });
```

## Error Handling

All methods return Axios responses and will throw errors for failed requests. Handle errors appropriately:

```typescript
try {
    const customer = await customers.create({
        email: "customer@example.com",
        first_name: "John",
        last_name: "Doe",
    });

    if (customer.status) {
        console.log("Success:", customer.data);
    }
} catch (error) {
    if (error.response) {
        // Request made and server responded with error
        console.error("Error:", error.response.data.message);
    } else if (error.request) {
        // Request made but no response received
        console.error("No response received");
    } else {
        // Error setting up the request
        console.error("Error:", error.message);
    }
}
```

## TypeScript Support

This SDK is fully typed. All request parameters and response types are defined:

```typescript
import {
    Customers,
    CustomerCreateBody,
    CustomerCreateResponse,
} from "@obipascal/paystack-sdk";

const customers = Customers("YOUR_SECRET_KEY");

const params: CustomerCreateBody = {
    email: "customer@example.com",
    first_name: "John",
    last_name: "Doe",
};

const response: CustomerCreateResponse = await customers.create(params);
```

## Contributing

To ensure consistent code style, please follow the configuration in `.editorconfig`.

## Tests

To run tests, add your Paystack test secret key to `jest.env.js`. If the file doesn't exist, create one in your root directory:

```javascript
process.env.PAYSTACK_KEY = "YOUR_PAYSTACK_TEST_KEY";
```

Run tests:

```bash
npm test
```

If you are contributing to the repo, kindly update the necessary test file in `/test` or add a new one and ensure all tests pass before sending a PR.

## License

This project is licensed under the MIT License.

## Support

For issues and questions:

-   GitHub Issues: [Create an issue](https://github.com/obipascal/paystack-nodejs-sdk/issues)
-   Paystack Documentation: [https://paystack.com/docs/api/](https://paystack.com/docs/api/)

## Resources

-   [Paystack API Documentation](https://paystack.com/docs/api/)
-   [Paystack Dashboard](https://dashboard.paystack.com/)
-   [Package on NPM](https://www.npmjs.com/package/@obipascal/paystack-sdk)

