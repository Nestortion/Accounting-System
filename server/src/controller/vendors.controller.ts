import { Request, Response } from "express";
import {
  addVendor,
  editVendor,
  getAllVendors,
  toggleIsActive,
} from "../database/services/vendors.service";
import {
  createValidator,
  toggleIsActiveValidator,
  updateValidator,
} from "../utils/validators/vendors.validator";

export const getVendors = async (req: Request, res: Response) => {
  try {
    const vendors = await getAllVendors();
    return res.status(200).send({
      vendors,
    });
  } catch (error) {
    return res.status(500).send({ error: "Server error" });
  }
};
export const createVendor = async (req: Request, res: Response) => {
  const input = createValidator.safeParse(req.body);

  if (!input.success)
    return res.status(400).send({
      error: "Invalid inputs",
    });
  try {
    const newVendor = await addVendor(input.data);
    return res.status(200).send({ vendor: newVendor });
  } catch (error) {
    return res.status(500).send({ error: "Server error" });
  }
};
export const updateVendor = async (req: Request, res: Response) => {
  const input = updateValidator.safeParse(req.body);

  if (!input.success)
    return res.status(400).send({ error: input.error.errors[0].message });

  try {
    const updatedVendor = await editVendor(input.data);
    return res.status(200).send({ vendor: updatedVendor });
  } catch (error) {
    return res.status(500).send({ error: "Server error" });
  }
};
export const toggleVendorIsActive = async (req: Request, res: Response) => {
  const input = toggleIsActiveValidator.safeParse(req.params);

  if (!input.success)
    return res.status(400).send({ error: input.error.errors[0].message });

  try {
    const updatedVendor = await toggleIsActive(input.data);
    return res.status(200).send({ vendor: updatedVendor });
  } catch (error) {
    return res.status(500).send({ error: "Server error" });
  }
};
