import { getAuth } from "firebase-admin/auth";
import { AppOptions, getApp, initializeApp } from "firebase-admin/app";
import pkg from "firebase-admin";

const firebaseConfig = {
  projectId: process.env.FB_PROJECT_ID || "",
  clientEmail: process.env.FB_CLIENT_EMAIL || "",
  privateKey: process.env.FB_PRIVATE_KEY || "",
};

const app =
  getApp("admin") ||
  initializeApp(
    {
      credential: pkg.credential.cert(firebaseConfig),
    },
    "admin"
  );

export const adminAuth = getAuth(app);
