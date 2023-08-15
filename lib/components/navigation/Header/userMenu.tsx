"use client";
import { auth } from "@/lib/api/firebase";
import { signOut } from "firebase/auth";
import Image from "next/image";

export function UserMenu({ imgSrc }: { imgSrc: string | null | undefined }) {
  return (
    <button className="main-usernav--button" onClick={() => signOut(auth)}>
      <Image
        src={imgSrc ?? "/images/NoLeaveFallback.png"}
        height={56}
        width={56}
        className={"main-usernav--img"}
        alt={"User Profile Picture"}
      />
    </button>
  );
}
