"use client";

import Date from "@/lib/components/helpers/date";
import PageBadge from "../../badges/pageBadge";
import { TAG_ROUTE } from "@/lib/utils/constants";
import { useAuthContext } from "@/lib/context/authContext";

export default function PostHeadContent({
  title,
  excerpt,
  created_at,
  reading_time,
  primary_tag,
}: {
  title: string;
  excerpt: string;
  created_at: string;
  reading_time: number;
  primary_tag: {
    id: string;
    name: string;
    slug: string;
  };
}) {
  const { user } = useAuthContext();

  let name: string = "";
  if (user?.displayName) name = user.displayName;
  if (user?.username) name = user.username;

  return (
    <div className="article_head_content">
      <PageBadge
        links={[
          {
            slug: `${TAG_ROUTE}/${primary_tag.slug}`,
            title: primary_tag.name,
          },
        ]}
      />
      <h1>{title}</h1>
      <p className="article_head_content--meta">
        <Date dateString={created_at} />
        {` | ${reading_time} Minute Read`}
      </p>
      {user ? `Hello, ${name}` : "Not Signed In"}
    </div>
  );
}
