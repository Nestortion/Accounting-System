// import "dotenv/config";
import type { Config } from "drizzle-kit";
import "dotenv";

export default {
  schema: "./src/database/schema/*",

  out: "./src/database/drizzle",
  driver: "mysql2", // 'pg' | 'mysql2' | 'better-sqlite' | 'libsql' | 'turso'
  dbCredentials: {
    host: process.env.DB_HOST as string,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME as string,
  },
} satisfies Config;
