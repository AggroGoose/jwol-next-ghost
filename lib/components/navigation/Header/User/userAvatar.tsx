"use client";

export function UserAvatar({ imgSrc }: { imgSrc: string }) {
  return (
    <img
      src={imgSrc}
      height={56}
      width={56}
      className={"rounded-full w-[32px] h-[32px] md:h-[42px] md:w-[42px]"}
      alt={"User Profile Picture"}
    />
  );
}
