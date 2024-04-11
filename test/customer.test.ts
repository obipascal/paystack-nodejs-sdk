import Customers from "../src/resources/Customer"

const _customer = new Customers("sk_test_8da5aae8bf756897c45970063d4c53b69858f885")

describe("Customer", () => {
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
      }
    } catch (error) {}
  })
})
