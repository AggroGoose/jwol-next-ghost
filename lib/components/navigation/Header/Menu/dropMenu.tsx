import { useOutsideClick } from "@/lib/utils/hooks/useOutsideClick";
import { Dispatch, SetStateAction, useEffect, useRef } from "react";
import NavMenu from "./menuItems";
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
    } else {
      closeMenu();
    }
  }, [pathname, closeMenu]);

  return (
    <div
      ref={ref}
      className="bg-neutral fixed top-under-head left-0 px-6 py-12 min-h-under-head overflow-auto"
    >
      <NavMenu />
    </div>
  );
}
