import { Request, Response } from "express";
import z from "zod";
import {
  addAccount,
  editAccount,
  getAccountByID,
  getAllAccounts,
  updateAccountIsActive,
} from "../database/services/accounts.service";

export const getAccounts = async (req: Request, res: Response) => {
  try {
    const accounts = await getAllAccounts();

    return res.status(200).send({
      accounts,
    });
  } catch (error) {
    return res.status(500).send({ error: "Server error" });
  }
};
export const createAccount = async (req: Request, res: Response) => {
  const inputSchema = z.object({
    accType: z.enum(["PAYABLE", "RECEIVABLE", "EXPENSE", "REVENUE"]),
    accDescription: z.string(),
    accAmount: z.number(),
  });

  const input = inputSchema.safeParse(req.body);

  if (!input.success) return res.status(400).send({ error: "invalid input" });

  try {
    const newAccountId = `accId ${crypto.randomUUID()}`;

    await addAccount({ ...input.data, accId: newAccountId });

    const newAccount = await getAccountByID(newAccountId);

    return res.status(200).send({ account: newAccount });
  } catch (error) {
    return res.status(500).send({ error: "Server error" });
  }
};

export const updateAccount = async (req: Request, res: Response) => {
  const inputSchema = z.object({
    accId: z.string().superRefine((val, ctx) => {
      if (val.split(" ")[0] !== "accId") {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: `Not an account id.`,
        });
      }
      if (!z.string().uuid().safeParse(val.split(" ")[1]).success) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: `Not valid uuid.`,
        });
      }
    }),
    newData: z.object({
      accType: z.optional(
        z.enum(["PAYABLE", "RECEIVABLE", "EXPENSE", "REVENUE"])
      ),
      accDescription: z.optional(z.string()),
      accAmount: z.optional(z.number()),
    }),
  });

  const input = inputSchema.safeParse(req.body);

  if (!input.success)
    return res.status(400).send({
      error: input.error.errors[0].message,
    });

  try {
    await editAccount(input.data);

    const editedAccount = await getAccountByID(input.data.accId);

    return res.status(200).send({ account: editedAccount });
  } catch (error) {
    return res.status(500).send({ error: "Server error" });
  }
};
export const toggleAccountIsActive = async (req: Request, res: Response) => {
  const inputSchema = z.object({
    accId: z.string().superRefine((val, ctx) => {
      if (val.split(" ")[0] !== "accId") {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: `Not an account id.`,
        });
      }
      if (!z.string().uuid().safeParse(val.split(" ")[1]).success) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: `Not valid uuid.`,
        });
      }
    }),
  });

  const input = inputSchema.safeParse(req.params);

  if (!input.success)
    return res.status(400).send({
      error: input.error.errors[0].message,
    });

  await updateAccountIsActive({ ...input.data });

  const editedAccount = await getAccountByID(input.data.accId);

  return res.status(200).send({
    account: editedAccount,
  });
};
