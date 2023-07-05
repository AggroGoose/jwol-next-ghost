import Link from "next/link";

export default function CenterNav() {
  return (
    <nav className="main-nav_center">
      <ul>
        <button className="main-nav_button">
          <Link href="/">Home</Link>
        </button>
        <button className="main-nav_button">
          <Link href="/journal">Journal</Link>
        </button>
        <div className="main-nav_coming">
          <button className="main-nav_button">Recipes</button>
          <p className="main-nav_coming--hovertext">Coming Soon</p>
        </div>
        <div className="main-nav_coming">
          <button className="main-nav_button">Stories</button>
          <p className="main-nav_coming--hovertext">Coming Soon</p>
        </div>
        <button className="main-nav_button">
          <Link href="/about">About</Link>
        </button>
      </ul>
    </nav>
  );
}
