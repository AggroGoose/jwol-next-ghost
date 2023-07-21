import Link from "next/link";

export default function DropMenu() {
  return (
    <div className="main-nav-drop">
      <ul>
        <button className="main-nav-drop--button">
          <Link href="/journal">
            <p>Journal</p>
          </Link>
        </button>

        <button className="main-nav-drop--button">
          <a href="#">
            <p>Stories</p>
          </a>
          <p className="main-nav-drop--text">Coming Soon</p>
        </button>

        <button className="main-nav-drop--button">
          <a href="#">
            <p>Food</p>
          </a>
          <p className="main-nav-drop--text">Coming Soon</p>
        </button>

        <button className="main-nav-drop--button">
          <Link href="/about">
            <p>About</p>
          </Link>
        </button>
      </ul>
    </div>
  );
}
