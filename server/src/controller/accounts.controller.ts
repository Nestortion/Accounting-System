import { Request, Response } from "express";
import {
  addAccount,
  editAccount,
  getAllAccounts,
  updateAccountIsActive,
} from "../database/services/accounts.service";
import {
  createValidator,
  toggleIsActiveValidator,
  updateValidator,
} from "../utils/validators/accounts.validator";

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
  const input = createValidator.safeParse(req.body);

  if (!input.success) return res.status(400).send({ error: "invalid input" });

  try {
    const newAccountId = `accId ${crypto.randomUUID()}`;

    const newAccount = await addAccount({ ...input.data, accId: newAccountId });

    return res.status(200).send({ account: newAccount });
  } catch (error) {
    return res.status(500).send({ error: "Server error" });
  }
};

export const updateAccount = async (req: Request, res: Response) => {
  const input = updateValidator.safeParse(req.body);

  if (!input.success)
    return res.status(400).send({
      error: input.error.errors[0].message,
    });

  try {
    const editedAccount = await editAccount(input.data);

    return res.status(200).send({ account: editedAccount });
  } catch (error) {
    return res.status(500).send({ error: "Server error" });
  }
};
export const toggleAccountIsActive = async (req: Request, res: Response) => {
  const input = toggleIsActiveValidator.safeParse(req.params);

  if (!input.success)
    return res.status(400).send({
      error: input.error.errors[0].message,
    });

  const editedAccount = await updateAccountIsActive({ ...input.data });

  return res.status(200).send({
    account: editedAccount,
  });
};
