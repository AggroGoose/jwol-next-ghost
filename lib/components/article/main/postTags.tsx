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
      <p className="font-head font-hdw tracking-hs text-xl leading-none">
        Tags:
      </p>
      {tags.map((tag) => (
        <div className="article_tags--tag">
          <Link
            key={tag.slug}
            href={`${TAG_ROUTE}/${tag.slug}`}
            className="text-primary font-bold hover:underline hover:text-secondary"
          >{`#${tag.name}`}</Link>
        </div>
      ))}
    </div>
  );
}
