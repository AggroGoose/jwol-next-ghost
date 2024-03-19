"use client";

import { Menu } from "@headlessui/react";
import { UserAvatar } from "./userAvatar";
import { User } from "next-auth";
import Link from "next/link";

export default function UserMenu({ user }: { user: User }) {
  return (
    <Menu as="div" className="relative ml-auto flex items-center">
      <Menu.Button className="aspect-square relative rounded-full w-9 md:w-11 hover:border-[3px] hover:border-accent-500">
        <UserAvatar
          imgSrc={user!.image || "/images/Sarcastonaut Fallback.png"}
        />
      </Menu.Button>
      <Menu.Items className="absolute right-0 top-[100%] z-10 bg-primary-900 py-4 min-w-[180px] secondary-font tracking-wider flex flex-col items-center">
        <Menu.Item
          as="button"
          className={`font-semibold text-always-light px-6 text-sm leading-none text-left transition-color duration-300 ui-active:text-accent-500`}
        >
          <Link href="/api/auth/signout">Sign Out</Link>
        </Menu.Item>
      </Menu.Items>
    </Menu>
  );
}
