import { useOutsideClick } from "@/lib/utils/hooks/useOutsideClick";
import { Dispatch, SetStateAction, useEffect, useRef } from "react";
import MenuItems from "./menuItems";
import { usePathname } from "next/navigation";
import DarkModeToggle from "../Addl/darkModeToggle";

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
      className="bg-always-dark fixed top-under-head left-0 px-6 py-6 min-h-under-head flex flex-col gap-6"
    >
      <MenuItems />
      <div className="flex gap-4 items-center self-center">
        <p className="text-always-light text-lg font-bold">{"Color Theme:"}</p>
        <DarkModeToggle />
      </div>
    </div>
  );
}
