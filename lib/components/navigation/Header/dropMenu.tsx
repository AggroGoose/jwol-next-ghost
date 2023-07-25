import { useOutsideClick } from "@/lib/hooks/useOutsideClick";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";

export default function DropMenu({
  setMenuOpen,
}: {
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
}) {
  function closeMenu() {
    setMenuOpen(false);
  }
  const ref = useOutsideClick(closeMenu);

  return (
    <div ref={ref} className="main-nav-drop">
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
