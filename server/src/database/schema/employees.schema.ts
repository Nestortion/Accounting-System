import { date, decimal, mysqlTable, varchar } from "drizzle-orm/mysql-core";

const employees = mysqlTable("employees", {
  empId: varchar("emp_id", { length: 60 }).primaryKey(),
  empName: varchar("emp_name", { length: 50 }),
  empAddress: varchar("emp_address", { length: 50 }).notNull(),
  empContactInfo: varchar("emp_contact_info", { length: 15 }).notNull(),
  empEmail: varchar("emp_email", { length: 50 }).notNull().unique(),
  empBirthdate: date("emp_birthdate").notNull(),
  empDateHired: date("emp_date_hired").notNull(),
  empDateTerminated: date("emp_date_terminated").notNull(),
  empSalary: decimal("emp_salary", { precision: 13, scale: 2 })
    .$type<number>()
    .notNull(),
});

export default employees;
