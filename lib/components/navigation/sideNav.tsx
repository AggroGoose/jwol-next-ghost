import NoLeaveSociety from "@/lib/resources/svg/NoLeaveSociety";
import Link from "next/link";
import MenuItems from "./Header/Menu/menuItems";
import DarkModeToggle from "./Header/Addl/darkModeToggle";

export default function SideNav() {
  return (
    <div className="col-start-side w-[var(--sidenav-width)] min-h-screen bg-always-dark flex-col gap-6 fixed top-0 left-0 hidden xl:flex">
      <div className="w-full h-min py-6">
        <Link href="/" className="w-full leading-none">
          <NoLeaveSociety className="aspect-[2/1] h-[60px] fill-always-light m-auto hover:fill-accent-400" />
        </Link>
      </div>
      <MenuItems />
      <div className="flex gap-3 items-center self-center">
        <p className="text-lg text-always-light font-medium leading-none">
          {"Theme:"}
        </p>
        <DarkModeToggle />
      </div>
    </div>
  );
}
