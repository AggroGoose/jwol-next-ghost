"use client";

import { BLOG_ROUTE, TAG_ROUTE } from "@/lib/utils/constants";
import Link from "next/link";

export default function PostTitle({
  title,
  excerpt,
  primary_tag,
}: {
  title: string;
  excerpt: string;
  primary_tag: {
    id: string;
    name: string;
    slug: string;
  };
}) {
  return (
    <div className="w-full flex flex-col gap-3">
      <div className="text-lg font-bold tracking-wider secondary-font">
        <Link
          href={BLOG_ROUTE}
          className="text-primary-600 hover:text-primary-500 hover:underline"
        >
          Journal
        </Link>
        <span className="text-fcolor-base">{` // `}</span>
        <Link
          href={TAG_ROUTE + "/" + primary_tag.slug}
          className="text-primary-600 hover:text-primary-500 hover:underline"
        >
          {primary_tag.name}
        </Link>
      </div>
      <h1 className="leading-tight">{title}</h1>
      <p className="xl:text-lg">{excerpt}</p>
    </div>
  );
}
