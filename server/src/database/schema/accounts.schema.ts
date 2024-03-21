import { decimal } from "drizzle-orm/mysql-core";
import {
  boolean,
  datetime,
  mysqlEnum,
  mysqlTable,
  text,
  varchar,
} from "drizzle-orm/mysql-core";

const accounts = mysqlTable("accounts", {
  accId: varchar("acc_id", { length: 60 }).primaryKey(),
  accType: mysqlEnum("acc_type", [
    "PAYABLE",
    "RECEIVABLE",
    "REVENUE",
    "EXPENSE",
  ]).notNull(),
  accAmount: decimal("acc_amount").$type<number>().notNull(),
  accDescription: text("acc_description").notNull(),
  accIsActive: boolean("acc_is_active").notNull().default(true),
  accCreatedAt: datetime("acc_created_at").notNull().default(new Date()),
  accUpdatedAt: datetime("acc_updated_at").notNull().default(new Date()),
});

export default accounts;
