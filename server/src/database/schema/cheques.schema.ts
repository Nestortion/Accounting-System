import {
  date,
  datetime,
  mysqlEnum,
  mysqlTable,
  text,
  varchar,
} from "drizzle-orm/mysql-core";
import accounts from "./accounts.schema.ts";
import { relations } from "drizzle-orm";
import { decimal } from "drizzle-orm/mysql-core";

const cheques = mysqlTable("cheques", {
  chqId: varchar("chq_id", { length: 60 }).primaryKey(),
  chqPayeeName: varchar("chq_payee_name", { length: 50 }).notNull(),
  chqAmount: decimal("chq_amount").notNull(),
  chqIssueDate: date("chq_issue_date").notNull(),
  chqDescription: text("chq_description").notNull(),
  chqStatus: mysqlEnum("chq_status", ["APPROVED", "PENDING", "REJECTED"]),
  chqAccId: varchar("chq_account_id", { length: 60 }).references(
    () => accounts.accId,
    { onDelete: "cascade" }
  ),
  chqCreatedAt: datetime("chq_created_at").notNull().default(new Date()),
  chqUpdatedAt: datetime("chq_updated_at").notNull().default(new Date()),
});

export const chequesRelations = relations(cheques, ({ one }) => ({
  account: one(accounts, {
    fields: [cheques.chqAccId],
    references: [accounts.accId],
  }),
}));

export default cheques;
