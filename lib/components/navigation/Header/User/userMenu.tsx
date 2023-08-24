"use client";
import { auth } from "@/lib/api/firebase";
import { useModalContext } from "@/lib/context/modalContext";
import { signOut } from "firebase/auth";
import Image from "next/image";

export function UserMenu({ imgSrc }: { imgSrc: string }) {
  const { openSignOut } = useModalContext()!;

  return (
    <button className="rounded-full" onClick={openSignOut}>
      <Image
        src={imgSrc}
        height={56}
        width={56}
        className={
          "rounded-full w-[32px] h-[32px] md:h-[44px] md:w-[44px] xl:w-[48px] xl:h-[48px]"
        }
        alt={"User Profile Picture"}
      />
    </button>
  );
}
