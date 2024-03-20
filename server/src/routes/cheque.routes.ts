import { Router } from "express";
import {
  createCheque,
  getCheques,
  updateCheque,
} from "../controller/cheques.controller.ts";

const chequeRouter = Router();

//get all cheque
chequeRouter.get("/", getCheques);

//create an cheque entry
chequeRouter.post("/", createCheque);

//update an cheque
chequeRouter.put("/", updateCheque);

export default chequeRouter;
