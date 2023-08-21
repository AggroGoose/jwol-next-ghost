import {
  ghostGetTag,
  ghostMetaTag,
  ghostPostsforIndex,
  ghostRouteParams,
} from "@/lib/api/server/ghostServer";
import PostIndex from "@/lib/components/pages/postIndex";
import { TAG_URL } from "@/lib/utils/constants";
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
      images: meta.og_image,
      url: TAG_URL + tag,
    },
    twitter: {
      card: "summary_large_image",
      title: meta.twitter_title,
      description: meta.twitter_description,
      images: meta.twitter_image,
      creator: "@CompletelyJWOL",
    },
  };
}

export const revalidate = 600;

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
  const indexPosts = await ghostPostsforIndex(tag);
  const tagObj = await ghostGetTag(tag);
  const links = [{ title: "Posts", slug: "/journal" }];

  return (
    <div className="post-index content-grid flex flex-col gap-6 px-3 lg:px-0">
      <PostIndex
        posts={indexPosts}
        title={`Here Are the Latest Posts from ${tagObj.name}`}
        links={links}
      />
    </div>
  );
}
