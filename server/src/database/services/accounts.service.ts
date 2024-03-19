import db from '../index.ts'
import crypto from 'crypto'
import accounts from '../schema/accounts.schema.ts'
import { eq } from 'drizzle-orm'

export const getAllAccounts = async () => {

    const accounts = await db.query.accounts.findMany()

    return accounts

}

export const addAccount = async (input: {
    accType: string,
    accDescription: string,
}) => {

    const newAccountId = `accId ${crypto.randomUUID()}`;

    await db.insert(accounts).values({ ...input, accId: newAccountId })

    const newAccount = await db.query.accounts.findFirst({ where: (account) => eq(account.accId, newAccountId) })

    return newAccount
}

export const updateAccount = async (input: {
    accId: string,
    newData: {
        accType?: string,
        accDescription?: string
    }
}) => {
    await db.update(accounts).set(input.newData).where(eq(accounts.accId,input.accId))

    const updatedAcc = await db.query.accounts.findFirst({where:(acc)=>eq(acc.accId,input.accId)})

    return updatedAcc

}

export const toggleAccountIsActive = async (input: {
    accId: string
}) =>{

    await db.update(accounts).set({accIsActive: !accounts.accIsActive}).where(eq(accounts.accId,input.accId))

    const updatedAcc = await db.query.accounts.findFirst({where:(acc)=>eq(acc.accId,input.accId)})

    return updatedAcc

}
