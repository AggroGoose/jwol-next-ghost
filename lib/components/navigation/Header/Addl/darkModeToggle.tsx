"use client";

import { useEffect, useState } from "react";
import MoonIcon from "./svg/moonIcon";
import SunIcon from "./svg/sunIcon";
import { getLocalStorage, setLocalStorage } from "@/lib/utils/storageHelper";

export default function DarkModeToggle({ className }: { className?: string }) {
  const [colorTheme, setColorTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const storedColorTheme = getLocalStorage("color_preference", "dark");

    document.body.dataset.colorTheme = storedColorTheme;
    setColorTheme(storedColorTheme);
  }, [setColorTheme]);

  const toggleHandle = () => {
    if (colorTheme === "dark") {
      document.body.dataset.colorTheme = "light";
      setColorTheme("light");
      setLocalStorage("color_preference", "light");
    } else {
      document.body.dataset.colorTheme = "dark";
      setColorTheme("dark");
      setLocalStorage("color_preference", "dark");
    }
  };

  return (
    <button onClick={toggleHandle} className={className}>
      {colorTheme === "dark" ? (
        <MoonIcon className="h-8 w-8 text-primary-200 xl:h-7 xl:w-7" />
      ) : (
        <SunIcon className="h-8 w-8 text-accent-200 xl:h-7 xl:w-7" />
      )}
    </button>
  );
}
