import {
  AnyMySqlColumn,
  date,
  mysqlTable,
  varchar,
} from "drizzle-orm/mysql-core";
import employees from "./employees.schema.ts";
import { decimal } from "drizzle-orm/mysql-core";

const payrolls = mysqlTable("payrolls", {
  prId: varchar("pr_id", { length: 60 }).primaryKey(),
  prEmployeeId: varchar("pr_employee_id", { length: 60 })
    .references((): AnyMySqlColumn => employees.empId, { onDelete: "cascade" })
    .notNull(),
  prTotalDeduction: decimal("pr_total_deduction").notNull(),
  prDateFrom: date("pr_date_from").notNull(),
  prDateTo: date("pr_date_to").notNull(),
  prFinalAmount: decimal("pr_final_amount").notNull(),
});

export default payrolls;
