import { Router } from "express";
import {
  createAccount,
  getAccounts,
  updateAccount,
  toggleAccountIsActive,
} from "../controller/accounts.controller.ts";

const accountRouter = Router();

//get all accounts
accountRouter.get("/", getAccounts);

//create an account entry
accountRouter.post("/", createAccount);

//update an account
accountRouter.put("/", updateAccount);

//delete but update account isactive instead
accountRouter.put("/:accId", toggleAccountIsActive);

export default accountRouter;
