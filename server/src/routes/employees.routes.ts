import { Router } from "express";
import {
  createEmployee,
  getEmployees,
  updateEmployee,
  terminateEmployee,
} from "../controller/employees.controller.ts";

const employeesRouter = Router();

//get all employees
employeesRouter.get("/", getEmployees);

//create an employees entry
employeesRouter.post("/", createEmployee);

//update an employees
employeesRouter.put("/", updateEmployee);

//delete but update employees isactive instead
employeesRouter.put("/:empId", terminateEmployee);

export default employeesRouter;
