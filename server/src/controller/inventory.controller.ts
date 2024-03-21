import { Request, Response } from "express";
import {
  addInventory,
  editInventory,
  getAllInventories,
} from "../database/services/inventory.service";
import {
  createValidator,
  updateValidator,
} from "../utils/validators/inventory.validator";

export const getInventories = async (req: Request, res: Response) => {
  try {
    const inventories = await getAllInventories();
    return res.status(200).send({ inventories });
  } catch (error) {
    return res.status(400).send({
      error: "invalid inputs",
    });
  }
};
export const createInventory = async (req: Request, res: Response) => {
  const input = createValidator.safeParse(req.body);

  if (!input.success) return res.status(400).send({ error: "Invalid inputs" });

  try {
    const newInventory = await addInventory(input.data);
    return res.status(200).send({ inventory: newInventory });
  } catch (error) {
    return res.status(500).send({ error: "Server error" });
  }
};
export const updateInventory = async (req: Request, res: Response) => {
  const input = updateValidator.safeParse(req.body);

  if (!input.success)
    return res.status(400).send({
      error: input.error.errors[0].message,
    });

  try {
    const updatedInventory = await editInventory(input.data);
    return res.status(200).send({ inventory: updatedInventory });
  } catch (error) {
    return res.status(500).send({ error: "Server error" });
  }
};
