import "dotenv/config";
import { migrate } from "drizzle-orm/mysql2/migrator";
import db, { connection } from "./src/database/index";

// This will run migrations on the database, skipping the ones already applied

const main = async () => {
  await migrate(db, { migrationsFolder: "src/database/drizzle" });
  await connection.end();
};

main();
