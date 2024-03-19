"use client";
import { Menu } from "@headlessui/react";
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
      <Menu.Button>
        <MenuIcon className="aspect-square h-[40px] md:h-[48px] fill-always-light hover:fill-accent-500 transition-transform duration-300 ease-in-out ui-not-open:rotate-0 ui-open:rotate-90" />
      </Menu.Button>
      <Menu.Items className="bg-primary-900 fixed top-0 right-0 w-[350px] max-w-[100vw] px-12 py-8 h-screen flex flex-col gap-8 z-10 overflow-y-auto no-scrollbar text-head4 text-always-light font-head tracking-wider items-center">
        <Menu.Button as="button" className="self-start">
          <CloseIcon className="w-8 fill-always-light hover:fill-accent-500" />
        </Menu.Button>
        <Menu.Item as="button" className="hover:text-accent-500">
          {({ close }) => (
            <Link onClick={close} href="/brain-zone">
              #Brain Zone
            </Link>
          )}
        </Menu.Item>
        <Menu.Item as="button" className="hover:text-accent-500">
          {({ close }) => (
            <Link onClick={close} href="/flavorverse">
              #Flavorverse
            </Link>
          )}
        </Menu.Item>
        <Menu.Item as="button" className="hover:text-accent-500">
          {({ close }) => (
            <Link onClick={close} href="/travel-fever">
              #Travel Fever
            </Link>
          )}
        </Menu.Item>
        <Menu.Item as="button" className="hover:text-accent-500">
          {({ close }) => (
            <Link onClick={close} href="/level-up">
              #Level Up
            </Link>
          )}
        </Menu.Item>
        <Menu.Item as="button" className="hover:text-accent-500">
          {({ close }) => (
            <Link onClick={close} href="/human-orbit">
              #Human Orbit
            </Link>
          )}
        </Menu.Item>
        <Menu.Item as="button" className="hover:text-accent-500">
          {({ close }) => (
            <Link onClick={close} href="/tech-hole">
              #Tech Hole
            </Link>
          )}
        </Menu.Item>
        <Menu.Item as="button" className="hover:text-accent-500">
          {({ close }) => (
            <Link onClick={close} href={ABOUT_ROUTE}>
              About Us
            </Link>
          )}
        </Menu.Item>
        <Menu.Item as="button" className="hover:text-accent-500">
          {({ close }) => (
            <Link onClick={close} href={POLICY_ROUTE}>
              Policies
            </Link>
          )}
        </Menu.Item>
      </Menu.Items>
    </Menu>
  );
}
