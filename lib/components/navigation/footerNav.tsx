import { Facebook, Instagram, Pinterest } from "@/lib/resources/svg/social";
import Link from "next/link";

export default function FooterNav() {
  return (
    <div className="mt-6 flex flex-col gap-6 bg-neutral text-base-100 p-8 items-center xl:hidden">
      <div className="flex gap-8">
        <a
          className="leading-0"
          href="https://www.facebook.com/JoshWithoutLeave"
        >
          <Facebook className="h-10 w-10 fill-base-100" />
        </a>
        <a
          className="leading-0"
          href="https://www.instagram.com/joshwithoutleave/"
        >
          <Instagram className="h-10 w-10 fill-base-100" />
        </a>
        <a
          className="leading-0"
          href="https://www.pinterest.com/joshwithoutleave/"
        >
          <Pinterest className="h-10 w-10 fill-base-100" />
        </a>
      </div>
      <nav className="flex flex-wrap items-center justify-center gap-8">
        <Link href="/about">About</Link>
        <Link href="/info/disclaimer">Disclaimer</Link>
        <Link href="/info/cookies">Cookie Policy</Link>
        <Link href="/info/privacy-policy">Privacy Policy</Link>
        <Link href="/info/terms-and-conditions">Terms and Conditions</Link>
      </nav>
      <div className="text-center text-xxs">
        © 2023 JWOL Media LLC. All rights reserved
      </div>
    </div>
  );
}
