import db from "../index.ts";
import accounts from "../schema/accounts.schema.ts";
import { eq, not } from "drizzle-orm";

const ACCOUNT_TYPE = {
  RECEIVABLE: "RECEIVABLE",
  PAYABLE: "PAYABLE",
  REVENUE: "REVENUE",
  EXPENSE: "EXPENSE",
} as const;

type ObjectTypes<T> = T[keyof T];

type AccountType = ObjectTypes<typeof ACCOUNT_TYPE>;

export const getAllAccounts = async () => {
  const accounts = await db.query.accounts.findMany();

  return accounts;
};

export const getAccountByID = async (accId: string) => {
  const account = await db.query.accounts.findFirst({
    where: (account) => eq(account.accId, accId),
  });

  return account;
};

export const addAccount = async (input: {
  accId: string;
  accType: AccountType;
  accDescription: string;
  accAmount: number;
}) => {
  await db.insert(accounts).values(input);

  const newAccount = await db.query.accounts.findFirst({
    where: (account) => eq(account.accId, input.accId),
  });

  return newAccount;
};

export const editAccount = async (input: {
  accId: string;
  newData: {
    accType?: AccountType;
    accDescription?: string;
    accAmount?: number;
  };
}) => {
  await db
    .update(accounts)
    .set({ ...input.newData, accUpdatedAt: new Date() })
    .where(eq(accounts.accId, input.accId));

  const updatedAcc = await db.query.accounts.findFirst({
    where: (acc) => eq(acc.accId, input.accId),
  });

  return updatedAcc;
};

export const updateAccountIsActive = async (input: { accId: string }) => {
  await db
    .update(accounts)
    .set({
      accIsActive: not(accounts.accIsActive),
    })
    .where(eq(accounts.accId, input.accId));

  const updatedAcc = await db.query.accounts.findFirst({
    where: (acc) => eq(acc.accId, input.accId),
  });

  return updatedAcc;
};
