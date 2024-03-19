import { boolean, int, mysqlTable, varchar } from "drizzle-orm/mysql-core";


const customers = mysqlTable('customers',{
    custId: varchar('cust_id',{length: 40}).primaryKey(),
    custName: varchar('cust_name',{length:50}).notNull(),
    custAddress: varchar('cust_address',{length:50}).notNull(),    
    custContactInfo: int('cust_contact_info').notNull(),
    custEmail: varchar('cust_email',{length:50}).notNull().unique(),
    custIsActive: boolean('cust_is_active').notNull().default(true)
    })

export default customers