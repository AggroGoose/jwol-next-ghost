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
          <Facebook className="h-10 w-10 fill-always-light hover:fill-accent-400" />
        </a>
        <a
          className="leading-0"
          href="https://www.instagram.com/joshwithoutleave/"
        >
          <Instagram className="h-10 w-10 fill-always-light hover:fill-accent-400" />
        </a>
        <a
          className="leading-0"
          href="https://www.pinterest.com/joshwithoutleave/"
        >
          <Pinterest className="h-10 w-10 fill-always-light hover:fill-accent-400" />
        </a>
      </div>
      <nav className="flex flex-wrap items-center justify-center gap-8">
        <Link href="/about" className="hover:underline hover:text-accent-400">
          About
        </Link>
        <Link
          href={POLICY_ROUTE + "disclaimer"}
          className="hover:underline hover:text-accent-400"
        >
          Disclaimer
        </Link>
        <Link
          href={POLICY_ROUTE + "cookies"}
          className="hover:underline hover:text-accent-400"
        >
          Cookie Policy
        </Link>
        <Link
          href={POLICY_ROUTE + "privacy-policy"}
          className="hover:underline hover:text-accent-400"
        >
          Privacy Policy
        </Link>
        <Link
          href={POLICY_ROUTE + "terms-and-conditions"}
          className="hover:underline hover:text-accent-400"
        >
          Terms and Conditions
        </Link>
      </nav>
      <div className="text-center text-xxs">
        © 2023 JWOL Media LLC. All rights reserved
      </div>
    </div>
  );
}
