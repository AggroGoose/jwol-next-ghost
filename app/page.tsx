import { ghostPostsforIndex } from "@/lib/api/server/ghostServer";
import MainPostIndex from "@/lib/components/pages/mainPostIndex";
import { SITE_URL } from "@/lib/utils/constants";
import { Metadata } from "next";

export const revalidate = 600;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Home | Sarcastonaut",
  description:
    "We're lost in space and it's probably fine. Exploring the meaning of life, the world, and the brain one ship at a time.",
  openGraph: {
    siteName: "Sarcastonaut",
    type: "website",
    title: "Home | Sarcastonaut",
    description:
      "We're lost in space and it's probably fine. Exploring the meaning of life, the world, and the brain one ship at a time.",
    images: [
      {
        url: "https://write.sarcastonaut.com/content/images/2024/03/Sarcastonaut-Social-Media.png",
        width: 1600,
        height: 800,
        alt: "Letter S logo overlaying a planet floating in space.",
      },
    ],
    url: SITE_URL,
  },
  twitter: {
    card: "summary_large_image",
    title: "Home | Sarcastonaut",
    description:
      "We're lost in space and it's probably fine. Exploring the meaning of life, the world, and the brain one ship at a time.",
    images: [
      {
        url: "https://write.sarcastonaut.com/content/images/2024/03/Sarcastonaut-Social-Media.png",
        width: 1600,
        height: 800,
        alt: "Letter S logo overlaying a planet floating in space.",
      },
    ],
    creator: "@CompletelyJWOL",
  },
};

export default async function Home({
  searchParams,
}: {
  searchParams?: {
    page?: string;
  };
}) {
  const currentPage = Number(searchParams?.page) || 1;
  const indexPosts = await ghostPostsforIndex(currentPage, 15);
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
    <div className="pb-8 max-w-[100vw] bg-always-dark">
      <MainPostIndex posts={posts} meta={meta} />
    </div>
  );
}
