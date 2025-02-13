import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import Nodemailer from "next-auth/providers/nodemailer";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { db } from "./drizzle/";

const GOOGLE_CLIENT_ID = process.env.AUTH_GOOGLE_CLIENT_ID || "";
const GOOGLE_CLIENT_SECRET = process.env.AUTH_GOOGLE_CLIENT_SECRET || "";

export const { handlers, auth, signOut } = NextAuth({
  adapter: DrizzleAdapter(db),
  providers: [
    Google({ clientId: GOOGLE_CLIENT_ID, clientSecret: GOOGLE_CLIENT_SECRET }),
    Nodemailer({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: process.env.EMAIL_SERVER_PORT,
        auth: {
          type: "OAuth2",
          user: process.env.EMAIL_SERVER_USER,
          serviceClient: process.env.EMAIL_SERVER_CLIENT,
          privateKey: process.env.EMAIL_SERVER_PRIVATE_KEY,
        },
      },
      from: process.env.EMAIL_FROM,
    }),
  ],
});
