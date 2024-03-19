import {  date, datetime, int, mysqlEnum, mysqlTable, text, varchar } from "drizzle-orm/mysql-core";
import accounts from "./accounts.schema.ts";


const cheques = mysqlTable('cheques',{
    chqId: varchar('chq_id',{length: 40}).primaryKey(),
    chqPayeeName: varchar('chq_payee_name',{length:50}).notNull(),
    chqAmount: int('chq_amount').notNull(),
    chqIssueDate: date('chq_issue_date').notNull(),
    chqDescription: text('chq_description').notNull(),
    chqStatus: mysqlEnum('chq_status',['APPROVED','PENDING','REJECTED']),
    chqAccId: varchar('chq_account_id',{length:40}).references(()=>accounts.accId),
    chqCreatedAt: datetime('chq_created_at').notNull().default(new Date()),
    chqUpdatedAt: datetime('chq_updated_at').notNull().default(new Date())
    })

export default cheques