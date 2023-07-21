"use client";

import { useState } from "react";
import MenuIcon from "./menuIcon";
import DropMenu from "./dropMenu";

export default function MenuNav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="main-nav-toggle">
      <button onClick={handleMenu}>
        <MenuIcon />
      </button>
      {menuOpen && <DropMenu />}
    </div>
  );
}
