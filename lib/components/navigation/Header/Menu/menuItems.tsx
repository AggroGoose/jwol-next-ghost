import Link from "next/link";

export default function MenuItems() {
  return (
    <nav
      className="px-5 flex flex-col gap-2 font-head font-hdw tracking-hs"
      id="menu"
    >
      <ul className="text-head3 text-base-100">
        <li className="hover:bg-primary">
          <Link href="/journal">Read</Link>
        </li>
      </ul>
      <ul className="text-base pl-4 flex flex-col gap-3 mb-3 text-base-100">
        <li className="hover:bg-primary">
          <Link href="/journal/tag/mental-health">Mental Health</Link>
        </li>
        <li className="hover:bg-primary">
          <Link href="/journal/tag/travel">Travel</Link>
        </li>
        <li className="hover:bg-primary">
          <Link href="/journal/tag/food">Food</Link>
        </li>
        <li>
          <a className="text-gray-500 pointer-events-none" href="#">
            Stories (Soon)
          </a>
        </li>
      </ul>
      <ul className="text-head3 font-hdw tracking-hs text-base-100">
        <li className="hover:bg-primary">
          <Link href="/about">About</Link>
        </li>
      </ul>
      <ul className="text-base pl-4 flex flex-col gap-3 mb-3 text-base-100">
        <li className="hover:bg-primary">
          <Link href="/info/cookies">Cookie Policy</Link>
        </li>
        <li className="hover:bg-primary">
          <Link href="/info/privacy-policy">Privacy Policy</Link>
        </li>
        <li className="hover:bg-primary">
          <Link href="/info/disclaimer">Disclaimer</Link>
        </li>
        <li className="hover:bg-primary">
          <Link href="/info/terms-and-conditions">Terms and Conditions</Link>
        </li>
      </ul>
    </nav>
  );
}
