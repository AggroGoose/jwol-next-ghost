import Link from "next/link";
import RightNav from "./Header/rightNav";
import MenuNav from "./Header/menuNav";
import NoLeaveSociety from "@/lib/resources/svg/NoLeaveSociety";

export default function TopNav() {
  return (
    <div className="w-screen z-10 h-[var(--header-height)] sticky top-0 bg-neutral xl:bg-transparent xl:col-span-3 xl:w-full">
      <div className="grid grid-cols-3 h-full items-center">
        <MenuNav />
        <button className="col-start-2 col-end-3 justify-self-center h-full xl:hidden">
          <Link href="/" className="flex">
            <NoLeaveSociety className="aspect-[2/1] h-[40px] md:h-[60px] fill-base-100" />
          </Link>
        </button>
        <RightNav />
      </div>
    </div>
  );
}
