import db from '../index.ts'
import crypto from 'crypto'
import customers from '../schema/customers.schema.ts'
import { eq } from 'drizzle-orm'

export const getAllCustomers = async () => {

    const customers = await db.query.customers.findMany()

    return customers

}

export const addCustomer = async (input: {
    custName: string,
    custContactInfo: number,
    custAddress: string,
    custEmail: string,
    custIsActive: boolean
}) => {

    const newCustomerId = `custId ${crypto.randomUUID()}`;

    await db.insert(customers).values({ ...input, custId: newCustomerId })

    const newCustomer = await db.query.customers.findFirst({ where: (customer) => eq(customer.custId, newCustomerId) })

    return newCustomer
}

export const updateCustomer = async (input: {
    custId: string,
    newData: {
        custName?: string,
        custContactInfo?: number,
        custAddress?: string,
        custEmail?: string,
        custIsActive?: boolean
    }
}) => {
    await db.update(customers).set(input.newData).where(eq(customers.custId, input.custId))

    const updatedCust = await db.query.customers.findFirst({ where: (cust) => eq(cust.custId, input.custId) })

    return updatedCust

}

export const toggleCustomerIsActive = async (input: {
    custId: string
}) => {

    await db.update(customers).set({ custIsActive: !customers.custIsActive }).where(eq(customers.custId, input.custId))

    const updatedCust = await db.query.customers.findFirst({ where: (cust) => eq(cust.custId, input.custId) })

    return updatedCust

}
