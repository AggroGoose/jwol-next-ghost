"use client";

import { auth } from "@/lib/api/firebase";
import { SITE_URL } from "@/lib/utils/constants";
import { isSignInWithEmailLink, signInWithEmailLink } from "firebase/auth";
import { redirect, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function Login() {
  const searchParams = useSearchParams();

  const signInHandler = async (email: string) => {
    const credential = await signInWithEmailLink(
      auth,
      email!,
      window.location.href
    );
    const idToken = await credential.user.getIdToken();
    window.localStorage.removeItem("emailForSignIn");
    await fetch(`${SITE_URL}api/signin`, {
      method: "POST",
      body: JSON.stringify({ idToken }),
    });
  };

  useEffect(() => {
    const path = searchParams.get("path") || "/";
    if (isSignInWithEmailLink(auth, window.location.href)) {
      let email = window.localStorage.getItem("emailForSignIn");
      if (!email) {
        email = window.prompt("Please provide your e-mail for confirmation.");
      }
      signInHandler(email!);
    }
    redirect(path);
  }, []);
  return <></>;
}
