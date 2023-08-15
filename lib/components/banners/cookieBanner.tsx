"use client";

import Link from "next/link";
import { getLocalStorage, setLocalStorage } from "@/lib/utils/storageHelper";
import { useState, useEffect } from "react";
import { POLICY_ROUTE } from "@/lib/utils/constants";

export default function CookieBanner() {
  const [cookieConsent, setCookieConsent] = useState(false);

  useEffect(() => {
    const storedCookieConsent = getLocalStorage("cookie_consent", null);

    setCookieConsent(storedCookieConsent);
  }, [setCookieConsent]);

  useEffect(() => {
    const newValue = cookieConsent ? "granted" : "denied";

    window.gtag("consent", "update", {
      analytics_storage: newValue,
    });

    setLocalStorage("cookie_consent", cookieConsent);

    //For Testing
    console.log("Cookie Consent: ", cookieConsent);
  }, [cookieConsent]);

  return (
    <div
      className={`banner_cookie${
        cookieConsent != null ? " banner_cookie_hide" : ""
      }`}
    >
      <div className="banner_cookie_text">
        We use <Link href={POLICY_ROUTE + "/cookies"}>cookies</Link> to enhance
        your browsing experience, serve personalized ads or content, and analyze
        our traffic. By clicking "Allow", you consent to our use of cookies.{" "}
        <Link href={POLICY_ROUTE + "/cookies"}>Cookie Policy</Link>
      </div>
      <div className="banner_cookie_buttons">
        <button
          className="banner_cookie_buttons--decline"
          onClick={() => setCookieConsent(false)}
        >
          Decline
        </button>
        <button
          className="banner_cookie_buttons--allow"
          onClick={() => setCookieConsent(true)}
        >
          Allow
        </button>
      </div>
    </div>
  );
}
