import { getAuth } from "firebase-admin/auth";
import { getApp, getApps, initializeApp } from "firebase-admin/app";

const firebaseConfig = {
  projectId: process.env.FB_PROJECT_ID || "",
  clientEmail: process.env.FB_CLIENT_EMAIL || "",
  privateKey: process.env.FB_PRIVATE_KEY || "",
};

const hasActiveApp = () => {
  const apps = getApps();
  if (apps.length === 0) return true;
  if (!apps.find((app) => app.name === "admin")) return true;
  return false;
};

const app = hasActiveApp()
  ? initializeApp(firebaseConfig, "admin")
  : getApp("admin");

export const adminAuth = getAuth(app);
