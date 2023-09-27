"use client";
import { Menu } from "@headlessui/react";
import MenuIcon from "./menuIcon";
import DarkModeToggle from "../Addl/darkModeToggle";
import MenuItems from "./menuItems";

export default function DropMenu() {
  return (
    <Menu
      as="div"
      className="col-start-1 col-end-2 ml-4 h-full relative flex items-center md:ml-[40px] xl:hidden outline-none border-none"
    >
      <Menu.Button>
        <MenuIcon className="aspect-square h-[28px] md:h-[44px] fill-always-light hover:fill-base-accent transition-transform duration-300 ease-in-out ui-not-open:rotate-0 ui-open:rotate-90" />
      </Menu.Button>
      <Menu.Items className="bg-always-dark fixed top-under-head left-0 px-6 py-6 min-h-under-head flex flex-col gap-6">
        <Menu.Item as="div" className="flex gap-4 items-center self-center">
          <p className="text-always-light text-lg font-bold">
            {"Color Theme:"}
          </p>
          <DarkModeToggle />
        </Menu.Item>
        <Menu.Item as="div">
          <MenuItems />
        </Menu.Item>
      </Menu.Items>
    </Menu>
  );
}
