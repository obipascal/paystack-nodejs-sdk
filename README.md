## Paystack API SDK For NodeJS

A Node.js package that facilitates type checking and offers compatibility with both CommonJS and ES6 environments within TypeScript. This package utilizes Axios as its HTTP client for seamless communication with the Paystack backend.

### Paystack Resource Available

- ApplePay
- Charge
- Const
- Customer
- DedicatedVirtualAccount
- Dispute
- Miscellaneous
- Page
- PaymentRequest
- Plans
- Product
- Refund
- Subaccounts
- Subscription
- Transactions
- Transfer
- TransferRecipient
- Verification

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
import { CustomersApi } from "paystack-sdk"

// initialize the resouce with you paystack secret key
const customersResource = CustomersApi(process.env.YOUR_PAYSTACK_SECRET_KEY)

// Now create your first customer
try {
  const customer = await _customer.create({
    email: "example@gmail.com",
    first_name: "John",
    last_name: "Doe",
    phone: "+2348123456789",
  })

  if (customer?.status) {
    expect(customer?.data?.email).toBe("example@gmail.com")
  } else {
    throw new Error("An error occurred while creating a new customer")
  }
} catch (error) {
  throw new Error("An error occurred while creating a new customer")
}
```
