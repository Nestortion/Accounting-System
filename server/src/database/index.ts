import "dotenv/config";
import { MySqlTable } from "drizzle-orm/mysql-core";
import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";
import accounts from "./schema/accounts.schema.ts";
import cheques from "./schema/cheques.schema.ts";
import customers from "./schema/customers.schema.ts";
import employees from "./schema/employees.schema.ts";
import inventory from "./schema/inventory.schema.ts";
import payrolls from "./schema/payrolls.schema.ts";
import transactions from "./schema/transactions.schema.ts";
import users from "./schema/users.schema.ts";
import vendors from "./schema/vendors.schema.ts";

type DBSchema = {
  accounts: MySqlTable;
  users: MySqlTable;
  employees: MySqlTable;
  cheques: MySqlTable;
  vendors: MySqlTable;
  customers: MySqlTable;
  inventory: MySqlTable;
  transactions: MySqlTable;
  payrolls: MySqlTable;
};

export const connection = mysql.createPool({
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT as string),
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

const db = drizzle(connection, {
  schema: {
    accounts,
    users,
    employees,
    cheques,
    vendors,
    customers,
    transactions,
    inventory,
    payrolls,
  } as DBSchema,
  mode: "default",
});

export default db;
