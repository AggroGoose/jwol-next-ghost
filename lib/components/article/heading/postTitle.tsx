"use client";

import { TAG_ROUTE } from "@/lib/utils/constants";
import Link from "next/link";

export default function PostTitle({
  title,
  primary_tag,
  className,
}: {
  title: string;
  primary_tag: {
    id: string;
    name: string;
    slug: string;
  };
  className: string;
}) {
  return (
    <div className={className}>
      <Link
        href={"/" + primary_tag.slug}
        className="w-max text-head4 tracking-wider text-accent-500 font-bold font-secondary leading-primary hover:text-accent-300 transition-colors self-center"
      >
        {"#" + primary_tag.name}
      </Link>
      <h1 className="text-primary-50 text-center">{title}</h1>
    </div>
  );
}
