import { Book, Campfire, Chef } from "@/lib/resources/svg/NavSVGs";
import Link from "next/link";

export default function LeftNav() {
  return (
    <nav className="main-nav_left">
      <ul>
        <button className="main-nav_button">
          <Link href="/journal">
            <Book />
            <p>Journal</p>
          </Link>
        </button>
        <div className="main-nav_coming">
          <button className="main-nav_button">
            <a href="#">
              <Campfire />
              <p>Stories</p>
            </a>
          </button>
          <p className="main-nav_coming--hovertext">Coming Soon</p>
        </div>
        <div className="main-nav_coming">
          <button className="main-nav_button">
            <a href="#">
              <Chef />
              <p>Kitchen</p>
            </a>
          </button>
          <p className="main-nav_coming--hovertext">Coming Soon</p>
        </div>
      </ul>
    </nav>
  );
}
