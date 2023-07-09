import { Backpack, Coffee, Map } from "@/lib/resources/svg/NavSVGs";
import Link from "next/link";

export default function RightNav() {
  return (
    <nav className="main-nav_right">
      <ul>
        <button className="main-nav_button">
          <Link href="/explore">
            <Map />
            <p>Explore</p>
          </Link>
        </button>
        <button className="main-nav_button">
          <Link href="/about">
            <Coffee />
            <p>About</p>
          </Link>
        </button>

        <button className="main-nav_button">
          <Link href="/contact">
            <Backpack />
            <p>Contact</p>
          </Link>
        </button>
      </ul>
    </nav>
  );
}
