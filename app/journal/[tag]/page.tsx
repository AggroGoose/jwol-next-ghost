import {
  ghostLatestFiveGeneral,
  ghostMetaTag,
  ghostPostsforIndex,
  ghostRouteParams,
} from "@/lib/api/server/ghostServer";
import PostSide from "@/lib/components/article/side/postSide";
import PostIndex from "@/lib/components/pages/postIndex/postIndex";
import { Metadata } from "next";

export async function generateMetadata({
  params: { tag },
}: {
  params: { tag: string };
}): Promise<Metadata> {
  const meta = await ghostMetaTag(tag);

  return {
    title: meta.meta_title,
    description: meta.meta_description,
    openGraph: {
      siteName: "No Leave Society",
      type: "article",
      title: meta.og_title,
      description: meta.og_description,
      images: [{ url: meta.og_image }],
      url: `https://www.noleavesociety.com/journal/${tag}`,
    },
    twitter: {
      card: "summary_large_image",
      title: meta.twitter_title,
      description: meta.twitter_description,
      images: [{ url: meta.twitter_image }],
      creator: "@CompletelyJWOL",
    },
  };
}

export async function generateStaticParams() {
  const tags = await ghostRouteParams("tag");

  return tags.map((tag) => {
    tag: tag.slug;
  });
}

export default async function TagPage({
  params: { tag },
}: {
  params: { tag: string };
}) {
  const morePosts = await ghostLatestFiveGeneral();
  const indexPosts = await ghostPostsforIndex(tag);

  return (
    <div className="post_index post-side-grid">
      <PostIndex
        posts={indexPosts}
        title={`Here Are the Latest Posts from ${indexPosts[0].tag}`}
      />
      <PostSide morePosts={morePosts} />
    </div>
  );
}
