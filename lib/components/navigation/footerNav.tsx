import { Facebook, Instagram, Pinterest } from "@/lib/resources/svg/social";
import Link from "next/link";

export default function FooterNav() {
  return (
    <div className="main-footer">
      <div className="main-footer--social">
        <a href="https://www.facebook.com/JoshWithoutLeave">
          <Facebook />
        </a>
        <a href="https://www.instagram.com/joshwithoutleave/">
          <Instagram />
        </a>
        <a href="https://www.pinterest.com/joshwithoutleave/">
          <Pinterest />
        </a>
      </div>
      <nav className="main-footer--links">
        <Link href="/about">About</Link>
        <Link href="/info/disclaimer">Disclaimer</Link>
        <Link href="/info/cookies">Cookie Policy</Link>
        <Link href="/info/privacy-policy">Privacy Policy</Link>
        <Link href="/info/terms-and-conditions">Terms and Conditions</Link>
      </nav>
      <div className="main-footer--cr">
        © 2023 JWOL Media LLC. All rights reserved
      </div>
    </div>
  );
}
