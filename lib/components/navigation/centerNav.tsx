import Link from "next/link";

export default function CenterNav() {
  return (
    <nav className="main-nav_center">
      <ul>
        <button className="main-nav_button">
          <Link href="/journal">
            <p>Journal</p>
          </Link>
        </button>

        <button className="main-nav_button main-nav_coming">
          <a href="#">
            <p>Stories</p>
          </a>
          <p className="main-nav_coming--hovertext">Coming Soon</p>
        </button>

        <button className="main-nav_button main-nav_coming">
          <a href="#">
            <p>Food</p>
          </a>
          <p className="main-nav_coming--hovertext">Coming Soon</p>
        </button>

        <button className="main-nav_button">
          <Link href="/about">
            <p>About</p>
          </Link>
        </button>

        <button className="main-nav_button">
          <Link href="/contact">
            <p>Contact</p>
          </Link>
        </button>
      </ul>
    </nav>
  );
}
