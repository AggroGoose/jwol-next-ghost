import { useOutsideClick } from "@/lib/hooks/useOutsideClick";
import Link from "next/link";
import { Dispatch, SetStateAction, useEffect, useRef } from "react";
import NavMenu from "./navMenu";
import { usePathname } from "next/navigation";

export default function DropMenu({
  setMenuOpen,
}: {
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
}) {
  function closeMenu() {
    setMenuOpen(false);
  }
  const isInitialMount = useRef(true);
  const ref = useOutsideClick(closeMenu);
  const pathname = usePathname();

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      console.log("Is Initial Mount");
    } else {
      closeMenu();
    }
  }, [pathname, closeMenu]);

  return (
    <div ref={ref} className="top_nav-drop">
      <NavMenu />
    </div>
  );
}
