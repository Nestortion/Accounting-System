import { date, int, mysqlTable, varchar } from "drizzle-orm/mysql-core";

const employees = mysqlTable("employees", {
  empId: varchar("emp_id", { length: 60 }).primaryKey(),
  empAddress: varchar("emp_address", { length: 50 }).notNull(),
  empContactInfo: int("emp_contact_info").notNull(),
  empEmail: varchar("emp_email", { length: 50 }).notNull().unique(),
  empBirthdate: date("emp_birthdate").notNull(),
  empDateHired: date("emp_date_hired").notNull(),
  empDateTerminated: date("emp_date_terminated").notNull(),
  empSalary: int("emp_salary").notNull(),
});

export default employees;
