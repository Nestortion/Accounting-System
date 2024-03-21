import db from "../index.ts";
import crypto from "crypto";
import employees from "../schema/employees.schema.ts";
import { eq } from "drizzle-orm";

export const getAllEmployees = async () => {
  const employees = await db.query.employees.findMany();

  return employees;
};

export const addEmployee = async (input: {
  empName: string;
  empContactInfo: string;
  empAddress: string;
  empEmail: string;
  empBirthdate: Date;
  empDateHired: Date;
  empDateTerminated: Date;
  empSalary: number;
}) => {
  const newEmployeeId = `empId ${crypto.randomUUID()}`;

  await db.insert(employees).values({ ...input, empId: newEmployeeId });

  const newEmployee = await db.query.employees.findFirst({
    where: (employee) => eq(employee.empId, newEmployeeId),
  });

  return newEmployee;
};

export const editEmployee = async (input: {
  empId: string;
  newData: {
    empName?: string;
    empContactInfo?: string;
    empAddress?: string;
    empEmail?: string;
    empBirthdate?: Date;
    empDateHired?: Date;
    empDateTerminated?: Date;
    empSalary?: number;
  };
}) => {
  await db
    .update(employees)
    .set(input.newData)
    .where(eq(employees.empId, input.empId));

  const editedEmployee = await db.query.employees.findFirst({
    where: (emp) => eq(emp.empId, input.empId),
  });

  return editedEmployee;
};

export const fireEmployee = async (input: { empId: string }) => {
  await db
    .update(employees)
    .set({ empDateTerminated: new Date() })
    .where(eq(employees.empId, input.empId));

  const firedEmployee = await db.query.employees.findFirst({
    where: (emp) => eq(emp.empId, input.empId),
  });

  return firedEmployee;
};
