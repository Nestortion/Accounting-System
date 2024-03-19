import {  AnyMySqlColumn, datetime, int, mysqlTable, text, varchar } from "drizzle-orm/mysql-core";
import employees from "./employees.schema.ts";
import accounts from "./accounts.schema.ts";
import vendors from "./vendors.schema.ts";
import customers from "./customers.schema.ts";

const transactions = mysqlTable('transactions',{
    tranId: varchar('tran_id',{length: 40}).primaryKey(),
    tranAccId: varchar('tran_account_id',{length:40}).references(():AnyMySqlColumn=>accounts.accId).notNull(),
    tranDescription: text('tran_description').notNull(),
    tranAmount: int('tran_amount').notNull(),
    tranEmpId: varchar('tran_employee_id',{length:40}).references(():AnyMySqlColumn=>employees.empId),
    tranVdId: varchar('tran_vendor_id',{length:40}).references(():AnyMySqlColumn=>vendors.vdId),
    tranCustId: varchar('tran_customer_id',{length:40}).references(():AnyMySqlColumn=>customers.custId),
    tranTransactionDate: datetime('tran_transaction_date').notNull(),
    tranCreatedAt: datetime('tran_created_at').notNull().default(new Date()),
    tranUpdatedAt: datetime('tran_updated_at').notNull().default(new Date())
    })

export default transactions