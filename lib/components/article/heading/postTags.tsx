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
    <div className="max-w-[--blog-width] flex flex-wrap gap-4 justify-center font-bold secondary-font self-center max-xl:px-3">
      {tags.map((tag) => (
        <Link
          key={tag.slug}
          href={`${TAG_ROUTE}/${tag.slug}`}
          className="text-xl text-accent-500 hover:text-accent-300 transition-colors"
        >
          {"#" + tag.name}
        </Link>
      ))}
    </div>
  );
}
