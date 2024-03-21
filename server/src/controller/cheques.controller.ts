import { Request, Response } from "express";
import {
  addCheque,
  editCheque,
  getAllCheques,
} from "../database/services/cheques.service";
import { createValidator, updateValidator } from "../utils/cheque.validator";

export const getCheques = async (req: Request, res: Response) => {
  try {
    const cheques = await getAllCheques();
    return res.status(200).send({ cheques });
  } catch (error) {
    return res.status(500).send({ error: "Server error" });
  }
};
export const createCheque = async (req: Request, res: Response) => {
  const input = createValidator.safeParse(req.body);

  if (!input.success) return res.status(400).send({ error: "invalid inputs" });

  try {
    const newChqId = `chqId ${crypto.randomUUID()}`;

    const newCheque = await addCheque({ ...input.data, chqId: newChqId });

    return res.status(200).send({ cheque: newCheque });
  } catch (error) {
    return res.status(500).send({ error: "Server error" });
  }
};
export const updateCheque = async (req: Request, res: Response) => {
  const input = updateValidator.safeParse(req.body);

  if (!input.success) return res.status(400).send({ error: "invalid inputs" });

  try {
    const updatedChq = await editCheque({
      chqId: input.data.chqId,
      newData: input.data.newData,
    });

    return res.status(200).send({ cheque: updatedChq });
  } catch (error) {
    return res.status(500).send({ error: "Server error" });
  }
};
