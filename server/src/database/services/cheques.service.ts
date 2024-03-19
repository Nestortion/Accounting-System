import db from '../index.ts'
import crypto from 'crypto'
import cheques from '../schema/cheques.schema.ts'
import { eq } from 'drizzle-orm'

const CHEQUE_STATUS = {
    PENDING: 'PENDING',
    APPROVED: 'APPROVED',
    REJECTED: 'REJECTED'
} as const

type ObjectTypes<T> = T[keyof T]

type ChequeStatus = ObjectTypes<typeof CHEQUE_STATUS>


export const getAllCheques = async () => {

    const cheques = await db.query.cheques.findMany()

    return cheques

}

export const addCheque = async (input: {
    chqPayeeName: string,
    chqAmount: number,
    chqIssueDate: Date,
    chqDescription: string,
    chqStatus: ChequeStatus,
    chqAccId: string,
    chqCreatedAt: Date,
    chqUpdatedAt: Date
}) => {

    const newChequeId = `chqId ${crypto.randomUUID()}`;

    await db.insert(cheques).values({ ...input, chqId: newChequeId })

    const newCheque = await db.query.cheques.findFirst({ where: (cheque) => eq(cheque.chqId, newChequeId) })

    return newCheque
}

export const updateCheque = async (input: {
    chqId: string,
    newData: {
        chqPayeeName?: string,
        chqAmount?: number,
        chqIssueDate?: Date,
        chqDescription?: string,
        chqStatus?: ChequeStatus,
        chqAccId?: string,
        chqCreatedAt?: Date,
        chqUpdatedAt?: Date
    }
}) => {
    await db.update(cheques).set(input.newData).where(eq(cheques.chqId, input.chqId))

    const updatedChq = await db.query.cheques.findFirst({ where: (chq) => eq(chq.chqId, input.chqId) })

    return updatedChq

}
