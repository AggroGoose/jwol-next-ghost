import Link from "next/link";

export default function NavMenu() {
  return (
    <nav className="side_nav_main" id="menu">
      <ul className="side_nav_main--category">
        <li>
          <Link href="/journal">Read</Link>
        </li>
      </ul>
      <ul className="side_nav_main--submenu">
        <li>
          <Link href="/journal/tag/mental-health">Mental Health</Link>
        </li>
        <li>
          <Link href="/journal/tag/travel">Travel</Link>
        </li>
        <li>
          <a href="#">Food</a>
        </li>
        <li>
          <a href="#">Stories</a>
        </li>
      </ul>
      <ul className="side_nav_main--category">
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
      <ul className="side_nav_main--submenu">
        <li>
          <Link href="/info/cookies">Cookie Policy</Link>
        </li>
        <li>
          <Link href="/info/privacy-policy">Privacy Policy</Link>
        </li>
        <li>
          <Link href="/info/disclaimer">Disclaimer</Link>
        </li>
        <li>
          <Link href="/info/terms-and-conditions">Terms and Conditions</Link>
        </li>
      </ul>
    </nav>
  );
}
