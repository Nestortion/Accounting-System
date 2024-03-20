import {
  boolean,
  mysqlEnum,
  mysqlTable,
  varchar,
} from "drizzle-orm/mysql-core";

const users = mysqlTable("users", {
  userId: varchar("user_id", { length: 60 }).primaryKey(),
  userType: mysqlEnum("user_type", ["FINANCE", "HIGHER_DEPARTMENT"]),
  userUsername: varchar("user_username", { length: 16 }).notNull(),
  userPassword: varchar("user_password", { length: 16 }).notNull(),
  userIsActive: boolean("user_is_active").notNull().default(true),
});

export default users;
