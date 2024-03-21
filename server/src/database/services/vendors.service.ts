import db from "../index.ts";
import crypto from "crypto";
import vendors from "../schema/vendors.schema.ts";
import { eq, not } from "drizzle-orm";

export const getAllVendors = async () => {
  const vendors = await db.query.vendors.findMany();

  return vendors;
};

export const addVendor = async (input: {
  vdName: string;
  vdContactInfo: string;
  vdAddress: string;
  vdEmail: string;
}) => {
  const newVendorId = `vdId ${crypto.randomUUID()}`;

  await db.insert(vendors).values({ ...input, vdId: newVendorId });

  const newVendor = await db.query.vendors.findFirst({
    where: (vendor) => eq(vendor.vdId, newVendorId),
  });

  return newVendor;
};

export const editVendor = async (input: {
  vdId: string;
  newData: {
    vdName?: string;
    vdContactInfo?: string;
    vdAddress?: string;
    vdEmail?: string;
  };
}) => {
  await db
    .update(vendors)
    .set(input.newData)
    .where(eq(vendors.vdId, input.vdId));

  const editedVd = await db.query.vendors.findFirst({
    where: (vd) => eq(vd.vdId, input.vdId),
  });

  return editedVd;
};

export const toggleIsActive = async (input: { vdId: string }) => {
  await db
    .update(vendors)
    .set({ vdIsActive: not(vendors.vdIsActive) })
    .where(eq(vendors.vdId, input.vdId));

  const updatedVd = await db.query.vendors.findFirst({
    where: (vd) => eq(vd.vdId, input.vdId),
  });

  return updatedVd;
};
