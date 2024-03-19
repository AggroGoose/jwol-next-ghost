import NextAuth from "next-auth";
import Google from "next-auth/providers/Google";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { db } from "./drizzle/";

const GOOGLE_CLIENT_ID = process.env.AUTH_GOOGLE_CLIENT_ID || "";
const GOOGLE_CLIENT_SECRET = process.env.AUTH_GOOGLE_CLIENT_SECRET || "";

export const { handlers, auth, signOut } = NextAuth({
  adapter: DrizzleAdapter(db),
  providers: [
    Google({ clientId: GOOGLE_CLIENT_ID, clientSecret: GOOGLE_CLIENT_SECRET }),
  ],
});
