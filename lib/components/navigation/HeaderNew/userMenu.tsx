"use client";
import { signOut } from "next-auth/react";
import Image from "next/image";

export function UserMenu({ imgSrc }: { imgSrc: string | null | undefined }) {
  return (
    <button className="main-usernav--button" onClick={() => signOut()}>
      <Image
        src={imgSrc ?? "/Knuckles.png"}
        height={56}
        width={56}
        className={"main-usernav--img"}
        alt={"User Profile Picture"}
      />
    </button>
  );
}
