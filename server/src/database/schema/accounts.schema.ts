import { boolean, datetime, mysqlTable, text, varchar } from "drizzle-orm/mysql-core";


const accounts = mysqlTable('accounts',{
    accId: varchar('acc_id',{length: 40}).primaryKey(),
    accType: varchar('acc_type', {length: 20}).notNull(),
    accDescription: text('acc_description').notNull(),
    accIsActive: boolean('acc_is_active').notNull().default(true),
    accCreatedAt: datetime('acc_created_at').notNull().default(new Date()),
    accUpdatedAt: datetime('acc_updated_at').notNull().default(new Date())
})

export default accounts