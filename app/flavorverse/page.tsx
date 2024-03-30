import {
  ghostGetTag,
  ghostMetaTag,
  ghostPostsforIndex,
} from "@/lib/api/server/ghostServer";
import TagPostIndex from "@/lib/components/pages/tagPostIndex";
import { SITE_URL } from "@/lib/utils/constants";
import { Metadata } from "next";

const tag = "flavorverse";

export async function generateMetadata(): Promise<Metadata> {
  const meta = await ghostMetaTag(tag);

  return {
    metadataBase: new URL(SITE_URL + tag),
    title: meta.meta_title,
    description: meta.meta_description,
    openGraph: {
      siteName: "Sarcastonaut",
      type: "website",
      title: meta.og_title,
      description: meta.og_description,
      images: [
        {
          url: "https://ghost.jakosbalay.com/content/images/2024/03/Sarcastonaut-Social-Media.png",
          width: 1600,
          height: 800,
          alt: "Letter S logo overlaying a planet floating in space.",
        },
      ],
      url: SITE_URL + tag,
    },
    twitter: {
      card: "summary_large_image",
      title: meta.twitter_title,
      description: meta.twitter_description,
      images: [
        {
          url: "https://ghost.jakosbalay.com/content/images/2024/03/Sarcastonaut-Social-Media.png",
          width: 1600,
          height: 800,
          alt: "Letter S logo overlaying a planet floating in space.",
        },
      ],
      creator: "@CompletelyJWOL",
    },
  };
}

export const revalidate = 600;

export default async function TagPage({
  searchParams,
}: {
  searchParams?: {
    page?: string;
  };
}) {
  const currentPage = Number(searchParams?.page) || 1;
  const indexPosts = await ghostPostsforIndex(currentPage, 15, tag);
  const tagObj = await ghostGetTag(tag);
  const { posts } = indexPosts;
  let meta: ghostPostMetaData = {
    limit: 0,
    next: null,
    prev: null,
    page: 1,
    pages: 1,
    total: 0,
  };

  if (indexPosts.meta) meta = indexPosts.meta;

  return (
    <div className="content-grid row-start-2 bg-always-dark">
      <TagPostIndex posts={posts} meta={meta} tag={tagObj} />
    </div>
  );
}
