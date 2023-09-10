import {
  ABOUT_ROUTE,
  BLOG_ROUTE,
  POLICY_ROUTE,
  TAG_ROUTE,
} from "@/lib/utils/constants";
import Link from "next/link";

export default function MenuItems() {
  return (
    <nav
      className="px-5 flex flex-col gap-2 overflow-scroll no-scrollbar"
      id="menu"
    >
      <ul className="text-head3 text-always-light font-head font-hdw tracking-hs">
        <li className="hover:text-accent-500">
          <Link href={BLOG_ROUTE}>Read</Link>
        </li>
      </ul>
      <ul className="text-base pl-4 flex flex-col gap-3 mb-3 text-always-light">
        <li className="hover:text-accent-500">
          <Link href={TAG_ROUTE + "/mental-health"}>Mental Health</Link>
        </li>
        <li className="hover:text-accent-500">
          <Link href={TAG_ROUTE + "/travel"}>Travel</Link>
        </li>
        <li className="hover:text-accent-500">
          <Link href={TAG_ROUTE + "/food"}>Food</Link>
        </li>
        <li>
          <a className="text-slate-500 pointer-events-none" href="#">
            Stories (Soon)
          </a>
        </li>
      </ul>
      <ul className="text-head3 text-always-light font-head font-hdw tracking-hs">
        <li className="hover:text-accent-500">
          <Link href={ABOUT_ROUTE}>About</Link>
        </li>
      </ul>
      <ul className="text-head3 text-always-light font-head font-hdw tracking-hs">
        <li className="hover:text-accent-500">
          <Link href={POLICY_ROUTE}>Policies</Link>
        </li>
      </ul>
      <ul className="text-base pl-4 flex flex-col gap-3 mb-3 text-always-light">
        <li className="hover:text-accent-500">
          <Link href={POLICY_ROUTE + "/cookies"}>Cookie Policy</Link>
        </li>
        <li className="hover:text-accent-500">
          <Link href={POLICY_ROUTE + "/privacy-policy"}>Privacy Policy</Link>
        </li>
        <li className="hover:text-accent-500">
          <Link href={POLICY_ROUTE + "/disclaimer"}>Disclaimer</Link>
        </li>
        <li className="hover:text-accent-500">
          <Link href={POLICY_ROUTE + "/terms-and-conditions"}>
            Terms and Conditions
          </Link>
        </li>
      </ul>
    </nav>
  );
}
