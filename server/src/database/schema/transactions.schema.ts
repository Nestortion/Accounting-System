import {
  AnyMySqlColumn,
  datetime,
  mysqlTable,
  text,
  varchar,
} from "drizzle-orm/mysql-core";
import employees from "./employees.schema.ts";
import accounts from "./accounts.schema.ts";
import vendors from "./vendors.schema.ts";
import customers from "./customers.schema.ts";
import { decimal } from "drizzle-orm/mysql-core";

const transactions = mysqlTable("transactions", {
  tranId: varchar("tran_id", { length: 60 }).primaryKey(),
  tranAccId: varchar("tran_account_id", { length: 60 })
    .references((): AnyMySqlColumn => accounts.accId, { onDelete: "cascade" })
    .notNull(),
  tranDescription: text("tran_description").notNull(),
  tranAmount: decimal("tran_amount").notNull(),
  tranEmpId: varchar("tran_employee_id", { length: 60 }).references(
    (): AnyMySqlColumn => employees.empId,
    { onDelete: "cascade" }
  ),
  tranVdId: varchar("tran_vendor_id", { length: 60 }).references(
    (): AnyMySqlColumn => vendors.vdId,
    { onDelete: "cascade" }
  ),
  tranCustId: varchar("tran_customer_id", { length: 60 }).references(
    (): AnyMySqlColumn => customers.custId,
    { onDelete: "cascade" }
  ),
  tranTransactionDate: datetime("tran_transaction_date").notNull(),
  tranCreatedAt: datetime("tran_created_at").notNull().default(new Date()),
  tranUpdatedAt: datetime("tran_updated_at").notNull().default(new Date()),
});

export default transactions;
