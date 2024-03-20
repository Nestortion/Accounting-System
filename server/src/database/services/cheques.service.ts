import db from "../index.ts";
import cheques from "../schema/cheques.schema.ts";
import { eq } from "drizzle-orm";

const CHEQUE_STATUS = {
  PENDING: "PENDING",
  APPROVED: "APPROVED",
  REJECTED: "REJECTED",
} as const;

type ObjectTypes<T> = T[keyof T];

type ChequeStatus = ObjectTypes<typeof CHEQUE_STATUS>;

export const getAllCheques = async () => {
  const cheques = await db.query.cheques.findMany({ with: { account: true } });

  return cheques;
};

export const getChequeById = async (chqId: string) => {
  const cheque = await db.query.cheques.findFirst({
    where: (cheque) => eq(cheque.chqId, chqId),
  });

  return cheque;
};

export const addCheque = async (input: {
  chqId: string;
  chqPayeeName: string;
  chqAmount: number;
  chqIssueDate: Date;
  chqDescription: string;
  chqStatus: ChequeStatus;
  chqAccId: string;
  chqCreatedAt: Date;
  chqUpdatedAt: Date;
}) => {
  await db.insert(cheques).values({ ...input });

  const newCheque = await db.query.cheques.findFirst({
    where: (cheque) => eq(cheque.chqId, input.chqId),
    with: { account: true },
  });

  return newCheque;
};

export const editCheque = async (input: {
  chqId: string;
  newData: {
    chqPayeeName?: string;
    chqAmount?: number;
    chqIssueDate?: Date;
    chqDescription?: string;
    chqStatus?: ChequeStatus;
    chqAccId?: string;
    chqCreatedAt?: Date;
    chqUpdatedAt?: Date;
  };
}) => {
  await db
    .update(cheques)
    .set(input.newData)
    .where(eq(cheques.chqId, input.chqId));

  const updatedChq = await db.query.cheques.findFirst({
    where: (chq) => eq(chq.chqId, input.chqId),
    with: { account: true },
  });

  return updatedChq;
};
