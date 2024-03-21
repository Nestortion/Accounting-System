import { boolean, mysqlTable, varchar } from "drizzle-orm/mysql-core";

const customers = mysqlTable("customers", {
  custId: varchar("cust_id", { length: 60 }).primaryKey(),
  custName: varchar("cust_name", { length: 50 }).notNull(),
  custAddress: varchar("cust_address", { length: 50 }).notNull(),
  custContactInfo: varchar("cust_contact_info", { length: 15 }).notNull(),
  custEmail: varchar("cust_email", { length: 50 }).notNull().unique(),
  custIsActive: boolean("cust_is_active").notNull().default(true),
});

export default customers;
