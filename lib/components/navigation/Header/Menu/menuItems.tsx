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
      className="px-2 lg:px-5 flex flex-col gap-2 overflow-scroll no-scrollbar"
      id="menu"
    >
      <ul className="text-head3 text-always-light font-head tracking-wider">
        <li className="hover:text-accent-600 focus:text-accent-600">
          <Link href={BLOG_ROUTE}>Read</Link>
        </li>
      </ul>
      <ul className="leading-tight text-sm flex flex-col gap-4 mb-4 pl-2 text-always-light">
        <li className="hover:text-accent-600 focus:text-accent-600">
          <Link href={TAG_ROUTE + "/going-mental"}>Going Mental</Link>
        </li>
        <li className="hover:text-accent-600 focus:text-accent-600">
          <Link href={TAG_ROUTE + "/culinary-chronicles"}>
            Culinary Chronicles
          </Link>
        </li>
        <li className="hover:text-accent-600 focus:text-accent-600">
          <Link href={TAG_ROUTE + "/travel-logbook"}>Travel Logbook</Link>
        </li>
        <li className="hover:text-accent-600 focus:text-accent-600">
          <Link href={TAG_ROUTE + "/ponder-corner"}>Ponder Corner</Link>
        </li>
        <li className="hover:text-accent-600 focus:text-accent-600">
          <Link href={TAG_ROUTE + "/hacking-life"}>Hacking Life</Link>
        </li>
        <li className="hover:text-accent-600 focus:text-accent-600">
          <Link href={TAG_ROUTE + "/eye-on-society"}>Eye on Society</Link>
        </li>
        <li className="hover:text-accent-600 focus:text-accent-600">
          <Link href={TAG_ROUTE + "/popping-culture"}>Popping Culture</Link>
        </li>
        <li className="hover:text-accent-600 focus:text-accent-600">
          <Link href={TAG_ROUTE + "/tech-quandaries"}>Tech Quandaries</Link>
        </li>
      </ul>
      <ul className="text-head3 text-always-light font-head tracking-wider">
        <li className="hover:text-accent-600 focus:text-accent-600">
          <Link href={ABOUT_ROUTE}>About</Link>
        </li>
      </ul>
      <ul className="text-head3 text-always-light font-head tracking-wider">
        <li className="hover:text-accent-600 focus:text-accent-600">
          <Link href={POLICY_ROUTE}>Policies</Link>
        </li>
      </ul>
      <ul className="leading-tight text-sm flex flex-col gap-4 mb-4 pl-2 text-always-light">
        <li className="hover:text-accent-600 focus:text-accent-600">
          <Link href={POLICY_ROUTE + "/cookies"}>Cookie Policy</Link>
        </li>
        <li className="hover:text-accent-600 focus:text-accent-600">
          <Link href={POLICY_ROUTE + "/privacy-policy"}>Privacy Policy</Link>
        </li>
        <li className="hover:text-accent-600 focus:text-accent-600">
          <Link href={POLICY_ROUTE + "/disclaimer"}>Disclaimer</Link>
        </li>
        <li className="hover:text-accent-600 focus:text-accent-600">
          <Link href={POLICY_ROUTE + "/terms-and-conditions"}>
            Terms and Conditions
          </Link>
        </li>
      </ul>
    </nav>
  );
}
