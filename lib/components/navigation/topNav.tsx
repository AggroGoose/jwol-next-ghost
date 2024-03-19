"use server";

import Link from "next/link";
import RightNav from "./Header/rightNav";
import Sarcastonaut from "@/lib/resources/svg/Sarcastonaut";
import CategoryNav from "./categoryNav";

export default async function TopNav() {
  return (
    <div className={`bg-always-dark`}>
      <div className="w-full max-w-[--body-size] mx-auto grid grid-cols-2 lg:grid-cols-nav h-full items-center">
        <div className="col-span-1 col-start-1 flex gap-4 items-center">
          <button className="h-max ml-4 md:ml-[40px] xl:ml-0">
            <Link href="/" className="flex">
              <Sarcastonaut className="aspect-[3/2] h-[40px] my-3 md:h-[52px] fill-accent-500 hover:fill-accent-400" />
            </Link>
          </button>
        </div>
        <CategoryNav />

        <RightNav />
      </div>
    </div>
  );
}
