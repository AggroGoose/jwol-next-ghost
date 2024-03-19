"use client";

export function UserAvatar({ imgSrc }: { imgSrc: string }) {
  return (
    <img
      src={imgSrc}
      height={56}
      width={56}
      className={"rounded-full object-cover"}
      alt={"User Profile Picture"}
    />
  );
}
