import type { Config } from "drizzle-kit";
import * as dotenv from "dotenv";

const dbURL = process.env.MIGRATION_DATABASE_URL || "";

dotenv.config({
  path: ".env",
});

export default {
  schema: "./lib/api/drizzle/schema.ts",
  out: "./drizzle",
  dialect: "postgresql",
  driver: "pglite",
  dbCredentials: {
    url: dbURL,
  },
} satisfies Config;
