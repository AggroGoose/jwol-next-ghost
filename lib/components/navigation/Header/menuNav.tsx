"use client";

import { useState } from "react";
import MenuIcon from "./Menu/menuIcon";
import DropMenu from "./Menu/dropMenu";

export default function MenuNav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="col-start-1 col-end-2 ml-2 h-full relative flex items-center md:ml-[40px] xl:hidden">
      <button onClick={handleMenu}>
        <MenuIcon className="aspect-square h-[28px] md:h-[44px] fill-always-light hover:fill-base-accent" />
      </button>
      {menuOpen && <DropMenu setMenuOpen={setMenuOpen} />}
    </div>
  );
}
