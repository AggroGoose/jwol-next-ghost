import { useModalContext } from "@/lib/context/modalContext";
import { Menu } from "@headlessui/react";
import { UserAvatar } from "./userAvatar";

export default function UserMenu({ imgSrc }: { imgSrc: string }) {
  const { openSignOut } = useModalContext()!;
  return (
    <Menu as="div" className="relative ml-auto flex items-center">
      <Menu.Button className="rounded-full hover:border-[3px] hover:border-base-accent hover:-m-[3px] focus:border-[3px] focus:border-base-accent focus:-m-[3px]">
        <UserAvatar imgSrc={imgSrc} />
      </Menu.Button>
      <Menu.Items className="absolute right-0 z-10 bg-primary-1000 border border-primary-700 py-2 rounded-lg min-w-[204px]">
        <Menu.Item
          as="button"
          className={`w-full font-semibold text-always-light px-6 py-2 text-sm leading-none text-left transition-color duration-300 ui-active:bg-base-primary`}
          onClick={openSignOut}
        >
          Sign Out
        </Menu.Item>
      </Menu.Items>
    </Menu>
  );
}
