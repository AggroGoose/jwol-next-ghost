import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";

const sql = neon(process.env.NEON_DATABASE_URL!);

//@ts-expect-error
export const db = drizzle(sql);
