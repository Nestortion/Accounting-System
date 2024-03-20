import { boolean, int, mysqlTable, varchar } from "drizzle-orm/mysql-core";

const vendors = mysqlTable("vendors", {
  vdId: varchar("vd_id", { length: 60 }).primaryKey(),
  vdName: varchar("vd_name", { length: 50 }).notNull(),
  vdAddress: varchar("vd_address", { length: 50 }).notNull(),
  vdContactInfo: int("vd_contact_info").notNull(),
  vdEmail: varchar("vd_email", { length: 50 }).notNull().unique(),
  vdIsActive: boolean("vd_is_active").notNull().default(true),
});

export default vendors;
