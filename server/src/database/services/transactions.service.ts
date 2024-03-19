import db from '../index.ts'
import crypto from 'crypto'
import transactions from '../schema/transactions.schema.ts'
import { eq } from 'drizzle-orm'

export const getAllTransactions = async () => {

    const transactions = await db.query.transactions.findMany()

    return transactions

}

export const addTransaction = async (input: {
    tranAccId: string,
    tranDescription: string,
    tranAmount: number,
    tranEmpId?: string,
    tranVdId?: string,
    tranCustId?: string
    tranTransactionDate: Date,
    tranCreatedAt: Date,
    tranUpdated: string
}) => {

    const newTransactionId = `tranId ${crypto.randomUUID()}`;

    await db.insert(transactions).values({ ...input, tranId: newTransactionId })

    const newTransaction = await db.query.transactions.findFirst({ where: (transaction) => eq(transaction.tranId, newTransactionId) })

    return newTransaction
}

export const updateTransaction = async (input: {
    tranId: string,
    newData: {
        tranAccId?: string,
        tranDescription?: string,
        tranAmount?: number,
        tranEmpId?: string,
        tranVdId?: string,
        tranCustId?: string
        tranTransactionDate?: Date,
        tranCreatedAt?: Date,
        tranUpdated?: string
    }
}) => {
    await db.update(transactions).set(input.newData).where(eq(transactions.tranId, input.tranId))

    const updatedTran = await db.query.transactions.findFirst({ where: (tran) => eq(tran.tranId, input.tranId) })

    return updatedTran

}
