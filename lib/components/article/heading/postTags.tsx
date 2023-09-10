import React from "react";
import Link from "next/link";
import { TAG_ROUTE } from "@/lib/utils/constants";

export default function PostTags({
  tags,
}: {
  tags: Array<{
    id: string;
    name: string;
    slug: string;
  }>;
}) {
  return (
    <div className="flex flex-wrap gap-4 justify-center items-center">
      {tags.map((tag) => (
        <Link
          key={tag.slug}
          href={`${TAG_ROUTE}/${tag.slug}`}
          className="text-always-light bg-base-primary font-bold tracking-widest hover:bg-hover-primary px-2.5 py-1.5 rounded-full leading-none"
        >
          {tag.name}
        </Link>
      ))}
    </div>
  );
}
