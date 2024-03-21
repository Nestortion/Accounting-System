import { Request, Response } from "express";
import {
  addCustomer,
  editCustomer,
  getAllCustomers,
  updateCustomerIsActive,
} from "../database/services/customers.service";
import {
  createValidator,
  toggleIsActiveValidator,
  updateValidator,
} from "../utils/validators/customers.validator";

export const getCustomers = async (req: Request, res: Response) => {
  try {
    const customers = await getAllCustomers();

    return res.status(200).send({
      customers,
    });
  } catch (error) {
    return res.status(500).send({ error: "Server error" });
  }
};
export const createCustomer = async (req: Request, res: Response) => {
  const input = createValidator.safeParse(req.body);

  if (!input.success) return res.status(400).send({ error: "invalid input" });

  try {
    const newCustomer = await addCustomer(input.data);

    return res.status(200).send({ customer: newCustomer });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ error: "Server error" });
  }
};

export const updateCustomer = async (req: Request, res: Response) => {
  const input = updateValidator.safeParse(req.body);

  if (!input.success)
    return res.status(400).send({
      error: input.error.errors[0].message,
    });

  try {
    const editedCustomer = await editCustomer(input.data);

    return res.status(200).send({ customer: editedCustomer });
  } catch (error) {
    return res.status(500).send({ error: "Server error" });
  }
};
export const toggleCustomerIsActive = async (req: Request, res: Response) => {
  const input = toggleIsActiveValidator.safeParse(req.params);

  if (!input.success)
    return res.status(400).send({
      error: input.error.errors[0].message,
    });

  const editedCustomer = await updateCustomerIsActive(input.data);

  return res.status(200).send({
    customer: editedCustomer,
  });
};
