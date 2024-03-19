"use client";

import { SITE_URI, SITE_URL } from "@/lib/utils/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SignIn() {
  const path = usePathname();

  return (
    <button className="secondary-font tracking-wider cursor-pointer hover:text-accent-500 leading-none">
      <Link href={`/api/auth/signin?callbackUrl=${SITE_URI + path}`}>
        Sign In
      </Link>
    </button>
  );
}
