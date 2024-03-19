import db from '../index.ts'
import crypto from 'crypto'
import inventory from '../schema/inventory.schema.ts'
import { eq } from 'drizzle-orm'

const INVENTORY_STATUS = {
    GOOD: 'GOOD',
    WARNING: 'WARNING',
    DEPLETED: 'DEPLETED'
} as const

type ObjectTypes<T> = T[keyof T]

type InventoryStatus = ObjectTypes<typeof INVENTORY_STATUS>


export const getAllInventorys = async () => {

    const inventorys = await db.query.inventory.findMany()

    return inventorys

}

export const addInventory = async (input: {
    invAssetName: string,
    invStatus: InventoryStatus,
    invStocks: number,

}) => {

    const newInventoryId = `invId ${crypto.randomUUID()}`;

    await db.insert(inventory).values({ ...input, invId: newInventoryId })

    const newInventory = await db.query.inventory.findFirst({ where: (inventory) => eq(inventory.invId, newInventoryId) })

    return newInventory
}

export const updateInventory = async (input: {
    invId: string,
    newData: {
        invAssetName?: string,
        invStatus?: InventoryStatus,
        invStocks?: number,

    }
}) => {
    await db.update(inventory).set(input.newData).where(eq(inventory.invId, input.invId))

    const updatedInv = await db.query.inventory.findFirst({ where: (inv) => eq(inv.invId, input.invId) })

    return updatedInv

}
