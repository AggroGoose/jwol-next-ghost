"use client";
import { MenuButton, Menu, MenuItems, MenuItem } from "@headlessui/react";
import MenuIcon from "./menuIcon";
import Link from "next/link";
import { ABOUT_ROUTE, POLICY_ROUTE, TAG_ROUTE } from "@/lib/utils/constants";
import CloseIcon from "../../SVG/closeIcon";

export default function DropMenu() {
  return (
    <Menu
      as="div"
      className="h-full relative flex items-center outline-none border-none"
    >
      <MenuButton className="data-[active]:rotate-90 transition-transform duration-300 ease-in-out">
        <MenuIcon className="aspect-square h-[40px] md:h-[48px] fill-always-light hover:fill-accent-500" />
      </MenuButton>
      <MenuItems className="bg-primary-900 fixed top-0 right-0 w-[350px] max-w-[100vw] px-12 py-8 h-screen flex flex-col gap-8 z-10 overflow-y-auto no-scrollbar text-head4 text-always-light font-head tracking-wider items-center">
        <MenuItem as="button" className="self-start">
          <CloseIcon className="w-8 fill-always-light hover:fill-accent-500" />
        </MenuItem>
        <MenuItem>
          <Link className="hover:text-accent-500" href="/level-up">
            #Level Up
          </Link>
        </MenuItem>
        <MenuItem>
          <Link className="hover:text-accent-500" href="/flavorverse">
            #Flavorverse
          </Link>
        </MenuItem>
        <MenuItem>
          <Link className="hover:text-accent-500" href="/travel-fever">
            #Travel Fever
          </Link>
        </MenuItem>
        <MenuItem>
          <Link className="hover:text-accent-500" href="/human-orbit">
            #Human Orbit
          </Link>
        </MenuItem>
        <MenuItem>
          <Link className="hover:text-accent-500" href="/tech-hole">
            #Tech Hole
          </Link>
        </MenuItem>
        <MenuItem>
          <Link className="hover:text-accent-500" href="/mission-control">
            #Mission Control
          </Link>
        </MenuItem>
        <MenuItem>
          <Link className="hover:text-accent-500" href={ABOUT_ROUTE}>
            About Us
          </Link>
        </MenuItem>
        <MenuItem>
          <Link className="hover:text-accent-500" href={POLICY_ROUTE}>
            Policies
          </Link>
        </MenuItem>
      </MenuItems>
    </Menu>
  );
}
