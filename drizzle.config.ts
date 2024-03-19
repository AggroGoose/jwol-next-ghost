import type { Config } from "drizzle-kit";
import * as dotenv from "dotenv";

const dbURL = process.env.MIGRATION_DATABASE_URL || "";

dotenv.config({
  path: ".env",
});

export default {
  schema: "./lib/api/drizzle/schema.ts",
  out: "./drizzle",
  driver: "pg",
  dbCredentials: {
    connectionString: dbURL,
  },
} satisfies Config;
