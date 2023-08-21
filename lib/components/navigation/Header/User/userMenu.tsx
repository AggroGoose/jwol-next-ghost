"use client";
import { auth } from "@/lib/api/firebase";
import { signOut } from "firebase/auth";
import Image from "next/image";

export function UserMenu({ imgSrc }: { imgSrc: string | null | undefined }) {
  return (
    <button className="rounded-full" onClick={() => signOut(auth)}>
      <Image
        src={imgSrc ?? "/images/NoLeaveFallback.png"}
        height={56}
        width={56}
        className={"rounded-full w-[32px] h-[32px] md:h-[44px] md:w-[44px]"}
        alt={"User Profile Picture"}
      />
    </button>
  );
}
