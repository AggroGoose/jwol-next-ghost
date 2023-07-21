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
      <div className="main-footer--links">
        <Link href="/about">About</Link>
        <Link href="/about/contact">Contact</Link>
        <Link href="/info/cookies">Cookie Policy</Link>
      </div>
      <div className="main-footer--cr">
        © 2023 JWOL Media LLC. All rights reserved
      </div>
    </div>
  );
}
