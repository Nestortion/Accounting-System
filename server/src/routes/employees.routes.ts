import { Router } from "express";
import { createEmployee, getEmployees, updateEmployee,toggleEmployeeIsActive } from "../controller/employees.controller";

const employeesRouter = Router()

//get all employees
employeesRouter.get('/', getEmployees)

//create an employees entry
employeesRouter.post('/',createEmployee)

//update an employees
employeesRouter.put('/',updateEmployee)

//delete but update employees isactive instead
employeesRouter.put('/:employeesID',toggleEmployeeIsActive)

export default employeesRouter