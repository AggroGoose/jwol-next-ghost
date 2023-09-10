"use client";

import { auth } from "@/lib/api/firebase";
import { isSignInWithEmailLink, signInWithEmailLink } from "firebase/auth";
import { redirect, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function Login() {
  const searchParams = useSearchParams();
  useEffect(() => {
    const path = searchParams.get("path") || "/";
    if (isSignInWithEmailLink(auth, window.location.href)) {
      let email = window.localStorage.getItem("emailForSignIn");
      if (!email) {
        email = window.prompt("Please provide your e-mail for confirmation.");
      }
      signInWithEmailLink(auth, email!, window.location.href).then(() => {
        window.localStorage.removeItem("emailForSignIn");
      });
    }
    redirect(path);
  }, []);
  return <></>;
}
