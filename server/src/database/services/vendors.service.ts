import db from '../index.ts'
import crypto from 'crypto'
import vendors from '../schema/vendors.schema.ts'
import { eq } from 'drizzle-orm'

export const getAllVendors = async () => {

    const vendors = await db.query.vendors.findMany()

    return vendors

}

export const addVendor = async (input: {
    vdName: string,
    vdContactInfo: number,
    vdAddress: string,
    vdEmail: string,
    vdIsActive: boolean
}) => {

    const newVendorId = `vdId ${crypto.randomUUID()}`;

    await db.insert(vendors).values({ ...input, vdId: newVendorId })

    const newVendor = await db.query.vendors.findFirst({ where: (vendor) => eq(vendor.vdId, newVendorId) })

    return newVendor
}

export const updateVendor = async (input: {
    vdId: string,
    newData: {
        vdName?: string,
        vdContactInfo?: number,
        vdAddress?: string,
        vdEmail?: string,
        vdIsActive?: boolean
    }
}) => {
    await db.update(vendors).set(input.newData).where(eq(vendors.vdId, input.vdId))

    const updatedVd = await db.query.vendors.findFirst({ where: (vd) => eq(vd.vdId, input.vdId) })

    return updatedVd

}

export const toggleVendorIsActive = async (input: {
    vdId: string
}) => {

    await db.update(vendors).set({ vdIsActive: !vendors.vdIsActive }).where(eq(vendors.vdId, input.vdId))

    const updatedVd = await db.query.vendors.findFirst({ where: (vd) => eq(vd.vdId, input.vdId) })

    return updatedVd

}
