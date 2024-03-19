import { Router } from "express";
import { createAccount, getAccounts, updateAccount,toggleAccountIsActive } from "../controller/accounts.controller";

const accountRouter = Router()

//get all accounts
accountRouter.get('/', getAccounts)

//create an account entry
accountRouter.post('/',createAccount)

//update an account
accountRouter.put('/',updateAccount)

//delete but update account isactive instead
accountRouter.put('/:accountID',toggleAccountIsActive)

export default accountRouter