import { Request, Response } from "express";
import {
  addPayroll,
  editPayroll,
  getAllPayrolls,
} from "../database/services/payroll.service";
import {
  createValidator,
  updateValidator,
} from "../utils/validators/payrolls.validator";

export const getPayrolls = async (req: Request, res: Response) => {
  try {
    const payrolls = await getAllPayrolls();
    return res.status(200).send({
      payrolls,
    });
  } catch (error) {
    return res.status(500).send({ error: "Server error" });
  }
};
export const createPayroll = async (req: Request, res: Response) => {
  const input = createValidator.safeParse(req.body);

  if (!input.success) return res.status(400).send({ error: "Invalid inputs" });

  try {
    const newPayroll = await addPayroll(input.data);
    return res.status(200).send({ payroll: newPayroll });
  } catch (error) {
    return res.status(500).send({ error: "Server error" });
  }
};
export const updatePayroll = async (req: Request, res: Response) => {
  const input = updateValidator.safeParse(req.body);

  if (!input.success)
    return res.status(400).send({ error: input.error.errors[0].message });

  try {
    const updatedPayroll = await editPayroll(input.data);
    return res.status(200).send({ payroll: updatedPayroll });
  } catch (error) {
    return res.status(500).send({ error: "Server error" });
  }
};
