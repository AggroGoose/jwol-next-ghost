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
    <section
      className={
        "fixed z-10 max-w-2xl p-4 mx-10 border md:gap-x-4 right-0 bottom-10 bg-primary-1000 md:items-center border-primary-900 cshadow-flip rounded-2xl" +
        (cookieConsent !== null ? " hidden" : " md:flex")
      }
    >
      <div className="flex items-center gap-x-4">
        <span className="self-start mt-2">
          <svg
            className="w-6 h-6 lg:w-7 lg:h-7 fill-base-accent"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.9803 8.5468C17.5123 8.69458 17.0197 8.7931 16.5271 8.7931C14.2118 8.76847 12.3399 6.89655 12.3153 4.58128C12.3153 4.13793 12.3892 3.69458 12.537 3.27586C11.9951 2.68473 11.6995 1.92118 11.6995 1.13301C11.6995 0.812808 11.7488 0.492611 11.8473 0.172414C11.2315 0.0738918 10.6158 0 10 0C4.48276 0 0 4.48276 0 10C0 15.5172 4.48276 20 10 20C15.5172 20 20 15.5172 20 10C20 9.77833 20 9.55665 19.9754 9.33498C19.2611 9.26108 18.5468 8.99015 17.9803 8.5468ZM4.58128 7.31527C6.30542 7.31527 6.30542 10.0246 4.58128 10.0246C2.85714 10.0246 2.61084 7.31527 4.58128 7.31527ZM6.05912 15.7635C4.08867 15.7635 4.08867 12.8079 6.05912 12.8079C8.02956 12.8079 8.02956 15.7635 6.05912 15.7635ZM9.01478 1.33005C10.7389 1.33005 10.7389 4.28571 9.01478 4.28571C7.29064 4.28571 7.04434 1.33005 9.01478 1.33005ZM10.2463 8.84237C11.7241 8.84237 11.7241 10.8128 10.2463 10.8128C8.76848 10.8128 9.01478 8.84237 10.2463 8.84237ZM11.9704 16.9458C10.4926 16.9458 10.4926 14.9754 11.9704 14.9754C13.4483 14.9754 13.202 16.9458 11.9704 16.9458ZM16.6503 13.1034C15.4187 13.1034 15.4187 11.133 16.6503 11.133C17.8818 11.133 17.8818 13.1034 16.6503 13.1034Z" />
          </svg>
        </span>

        <p className="text-sm text-always-light">
          We use cookies to ensure that we give you the best experience on our
          website.{" "}
          <Link
            href={POLICY_ROUTE + "/cookies"}
            className="text-primary-300 font-bold hover:text-primary-200 hover:underline"
          >
            Read our cookie policy
          </Link>
        </p>
      </div>

      <div className="flex flex-col items-center mt-6 gap-2 shrink-0 lg:mt-0">
        <button
          className="text-sm font-medium bg-base-accent rounded-lg hover:bg-hover-accent text-always-light leading-none px-4 py-2.5 duration-300 transition-colors focus:outline-none"
          onClick={() => setCookieConsent(true)}
        >
          Allow Cookies
        </button>
        <button
          className="text-xs tracking-wider underline transition-colors duration-300 md:w-auto text-always-light hover:text-primary-100 focus:outline-none"
          onClick={() => setCookieConsent(false)}
        >
          Decline Cookies
        </button>
      </div>
    </section>
  );
}
