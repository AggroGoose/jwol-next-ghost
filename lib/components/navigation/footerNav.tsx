import { Facebook, Instagram, Pinterest } from "@/lib/resources/svg/social";
import { POLICY_ROUTE } from "@/lib/utils/constants";
import Link from "next/link";

export default function FooterNav() {
  return (
    <div className="flex flex-col gap-6 bg-always-dark text-always-light p-8 items-center">
      <div className="flex gap-8">
        <a
          className="leading-0"
          href="https://www.facebook.com/JoshWithoutLeave"
        >
          <Facebook className="h-10 w-10 fill-always-light hover:fill-accent-500" />
        </a>
        <a
          className="leading-0"
          href="https://www.instagram.com/joshwithoutleave/"
        >
          <Instagram className="h-10 w-10 fill-always-light hover:fill-accent-500" />
        </a>
        <a
          className="leading-0"
          href="https://www.pinterest.com/joshwithoutleave/"
        >
          <Pinterest className="h-10 w-10 fill-always-light hover:fill-accent-500" />
        </a>
      </div>
      <nav className="flex flex-wrap items-center justify-center gap-8 font-secondary tracking-wider">
        <Link href="/about" className="hover:text-accent-500">
          #About
        </Link>
        <Link
          href={POLICY_ROUTE + "/disclaimer"}
          className="hover:text-accent-500"
        >
          #Disclaimer
        </Link>
        <Link
          href={POLICY_ROUTE + "/cookies"}
          className="hover:text-accent-500"
        >
          #Cookie Policy
        </Link>
        <Link
          href={POLICY_ROUTE + "/privacy-policy"}
          className="hover:text-accent-500"
        >
          #Privacy Policy
        </Link>
        <Link
          href={POLICY_ROUTE + "/terms-and-conditions"}
          className="hover:text-accent-500"
        >
          #Terms and Conditions
        </Link>
      </nav>
      <div className="text-center text-xxs">
        © 2024 JWOL Media LLC. All rights reserved
      </div>
    </div>
  );
}
