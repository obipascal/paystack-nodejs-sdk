## Paystack API SDK For NodeJS

A Node.js package that facilitates type checking and offers compatibility with both CommonJS and ES6 environments within TypeScript. This package utilizes Axios as its HTTP client for seamless communication with the Paystack backend.

### Paystack Resource Available

-   ApplePay
-   Charge
-   Const
-   Customer
-   DedicatedVirtualAccount
-   Dispute
-   Miscellaneous
-   Page
-   PaymentRequest
-   Plans
-   Product
-   Refund
-   Subaccounts
-   Subscription
-   Transactions
-   Transfer
-   TransferRecipient
-   Verification

### Installation

```
npm install paystack-sdk
```

or

```
yarn add paystack-sdk
```

### Usage

```js
// import the resource you want to consume
import { Customers } from "@obipascal/paystack-sdk";

// initialize the resouce with your paystack secret key
const customersResource = Customers(process.env.YOUR_PAYSTACK_SECRET_KEY);

// Now create your first customer
const createNewCustomer = async () => {
    try {
        const customer = await customersResource.create({
            email: "example@gmail.com",
            first_name: "John",
            last_name: "Doe",
            phone: "+2348123456789",
        });

        if (customer?.status) {
            expect(customer?.data?.email).toBe("example@gmail.com");
        } else {
            throw new Error("An error occurred while creating a new customer");
        }
    } catch (error) {
        throw new Error("An error occurred while creating a new customer");
    }
};
```

### Contributing

-   To ensure consistent code style, please follow the in .editorconfig

### Tests

To run tests, add your Paystack test secret key to `jest.env.js` if the file doesn't exist create one in your root directory and add the following content:

```js
process.env.PAYSTACK_KEY = "YOUR_PAYSTACK_TEST_KEY";
```

. Now run:

```
npm test
```

If you are contributing to the repo, kindly update the necessary test file in `/test` or add a new one and ensure all tests are passed before sending a PR.

### Todo

-   Add types support for respones.
