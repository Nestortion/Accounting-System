import { Router } from "express";
import {
  createTransaction,
  getTransactions,
  updateTransaction,
} from "../controller/transactions.controller.ts";

const transactionRouter = Router();

//get all transaction
transactionRouter.get("/", getTransactions);

//create an transaction entry
transactionRouter.post("/", createTransaction);

//update an transaction
transactionRouter.put("/", updateTransaction);

export default transactionRouter;
