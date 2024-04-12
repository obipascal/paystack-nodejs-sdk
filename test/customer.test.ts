import { CustomersApi } from "../src"

const _customer = new CustomersApi("sk_test_8da5aae8bf756897c45970063d4c53b69858f885")

describe("Customer", () => {
  // Test for creating a new customer
  it("should create a new customer", async () => {
    try {
      const customer = await _customer.create({
        email: "pascalobi83@gmail.com",
        first_name: "John",
        last_name: "Doe",
        phone: "+2348123456789",
      })

      if (customer?.status) {
        expect(customer?.data?.email).toBe("pascalobi83@gmail.com")
      } else {
        throw new Error("An error occurred while creating a new customer")
      }
    } catch (error) {
      throw new Error("An error occurred while creating a new customer")
    }
  })

  // Test for listing customers
  it("should list customers", async () => {
    try {
      const customers = await _customer.list()

      if (customers?.status) {
        expect(customers?.data).toBeInstanceOf(Array)
      } else {
        throw new Error("An error occurred while listing customers")
      }
    } catch (error) {
      throw new Error("An error occurred while listing customers")
    }
  })

  // Test for fetching a customer
  it("should fetch a customer", async () => {
    try {
      const customers = await _customer.list()

      if (customers?.status) {
        const customer = await _customer.fetch(customers?.data[0]?.customer_code)

        if (customer?.status) {
          expect(customer?.data?.email).toBe(customers?.data[0]?.email)
        } else {
          throw new Error("An error occurred while fetching a customer")
        }
      } else {
        throw new Error("An error occurred while listing customers")
      }
    } catch (error) {
      throw new Error("An error occurred while fetching a customer")
    }
  })
})
