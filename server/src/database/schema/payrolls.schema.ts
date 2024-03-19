import {  AnyMySqlColumn, date, int, mysqlTable, varchar } from "drizzle-orm/mysql-core";
import employees from "./employees.schema.ts";

const payrolls = mysqlTable('payrolls',{
    prId: varchar('pr_id',{length: 40}).primaryKey(),
    prEmployeeId: varchar('pr_employee_id',{length:40}).references(():AnyMySqlColumn=>employees.empId).notNull(),
    prTotalDeduction: int('pr_total_deduction').notNull(),
    prDateFrom: date('pr_date_from').notNull(),
    prDateTo: date('pr_date_to').notNull(),
    prFinalAmount: int('pr_final_amount').notNull()

    })

export default payrolls