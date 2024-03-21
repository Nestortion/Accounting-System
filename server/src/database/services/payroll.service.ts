import db from "../index.ts";
import crypto from "crypto";
import payrolls from "../schema/payrolls.schema.ts";
import { eq } from "drizzle-orm";

export const getAllPayrolls = async () => {
  const payrolls = await db.query.payrolls.findMany();

  return payrolls;
};

export const addPayroll = async (input: {
  prEmployeeId: string;
  prTotalDeduction: number;
  prDateFrom: Date;
  prDateTo: Date;
  prFinalAmount: number;
}) => {
  const newPayrollId = `prId ${crypto.randomUUID()}`;

  await db.insert(payrolls).values({ ...input, prId: newPayrollId });

  const newPayroll = await db.query.payrolls.findFirst({
    where: (payroll) => eq(payroll.prId, newPayrollId),
  });

  return newPayroll;
};

export const editPayroll = async (input: {
  prId: string;
  newData: {
    prEmployeeId?: string;
    prTotalDeduction?: number;
    prDateFrom?: Date;
    prDateTo?: Date;
    prFinalAmount?: number;
  };
}) => {
  await db
    .update(payrolls)
    .set(input.newData)
    .where(eq(payrolls.prId, input.prId));

  const updatedPr = await db.query.payrolls.findFirst({
    where: (pr) => eq(pr.prId, input.prId),
  });

  return updatedPr;
};
