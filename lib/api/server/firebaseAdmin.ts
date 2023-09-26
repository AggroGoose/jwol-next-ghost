import { getAuth } from "firebase-admin/auth";
import { getApps, initializeApp } from "firebase-admin/app";
import pkg from "firebase-admin";

const firebaseConfig = {
  projectId: process.env.FB_PROJECT_ID || "",
  clientEmail: process.env.FB_CLIENT_EMAIL || "",
  privateKey: process.env.FB_PRIVATE_KEY || "",
};

const apps = getApps();

const app =
  apps.length === 0
    ? initializeApp({
        credential: pkg.credential.cert(firebaseConfig),
      })
    : apps[0];

export const adminAuth = getAuth(app);
