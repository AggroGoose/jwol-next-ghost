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
    <div className="flex flex-wrap gap-4 justify-center items-center secondary-font">
      {tags.map((tag) => (
        <Link
          key={tag.slug}
          href={`${TAG_ROUTE}/${tag.slug}`}
          className="text-always-light bg-primary-600 font-semibold tracking-wider hover:bg-primary-500 px-3 py-2 rounded-full leading-none"
        >
          {tag.name}
        </Link>
      ))}
    </div>
  );
}
