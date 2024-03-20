import { Router } from "express";
import {
  createCustomer,
  getCustomers,
  toggleCustomerIsActive,
  updateCustomer,
} from "../controller/customers.controller.ts";

const customerRouter = Router();

//get all customer
customerRouter.get("/", getCustomers);

//create an customer entry
customerRouter.post("/", createCustomer);

//update an customer
customerRouter.put("/", updateCustomer);

//Toggle customer is active for soft deletion
customerRouter.put("/:custId", toggleCustomerIsActive);

export default customerRouter;
