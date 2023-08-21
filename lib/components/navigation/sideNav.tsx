import NoLeaveSociety from "@/lib/resources/svg/NoLeaveSociety";
import Link from "next/link";
import MenuItems from "./Header/Menu/menuItems";

export default function SideNav() {
  return (
    <div className="col-start-side w-[var(--sidenav-width)] min-h-screen bg-neutral flex-col gap-6 fixed top-0 left-0 hidden xl:flex">
      <div className="w-full h-min py-6">
        <Link href="/" className="w-full leading-none">
          <NoLeaveSociety className="aspect-[2/1] h-[60px] fill-base-100 m-auto" />
        </Link>
      </div>
      <MenuItems />
    </div>
  );
}
