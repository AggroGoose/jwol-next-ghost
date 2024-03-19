import PostHead from "@/lib/components/article/heading/postHead";

import {
  ghostGetSinglePost,
  ghostLatestFiveGeneral,
  ghostLatestFiveforTag,
  ghostMetaSingle,
  ghostRouteParams,
} from "@/lib/api/server/ghostServer";

import MorePagePosts from "@/lib/components/article/main/morePagePosts";
import BlockContent from "@/lib/components/blocks/blockContent";
import { Metadata } from "next";
import { BLOG_URL, SITE_SERVER, SITE_URL } from "@/lib/utils/constants";
import PostComments from "@/lib/components/article/comments/postComments";
import PostTags from "@/lib/components/article/heading/postTags";
import TagPagePosts from "@/lib/components/article/main/tagPagePosts";
import { auth } from "@/lib/api/auth";
import { db } from "@/lib/api/drizzle";
import { posts } from "@/lib/api/drizzle/schema";

const tag = "level-up";

export const revalidate = 600;
export const dynamicParams = false;

export async function generateMetadata({
  params: { slug },
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const meta = await ghostMetaSingle(slug);

  return {
    metadataBase: new URL(SITE_URL + tag + slug),
    title: meta.meta_title,
    description: meta.meta_description,
    openGraph: {
      siteName: "Sarcastonaut",
      type: "article",
      title: meta.og_title,
      description: meta.og_description,
      images: meta.og_image,
      url: SITE_URL + tag + slug,
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

export async function generateStaticParams() {
  const posts = await ghostRouteParams("post", tag);
  return posts.map((post: { slug: string }) => ({
    slug: post.slug,
  }));
}

const API_KEY = process.env.GANSO_TOKEN || "";

export default async function PostPage({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const post = await ghostGetSinglePost(slug);
  await db
    .insert(posts)
    .values({ id: post.id, slug: post.slug })
    .onConflictDoNothing();
  const morePosts = await ghostLatestFiveGeneral(slug);
  const tagPosts = await ghostLatestFiveforTag(post.primary_tag.slug, slug);

  const session = await auth();

  const user = session?.user;

  const { content } = post;
  const url = BLOG_URL + slug;

  return (
    <div className="pb-8 flex flex-col gap-8 max-w-[100vw] bg-always-dark">
      <article className="flex flex-col gap-8">
        <PostHead
          title={post.title}
          feature_image={post.feature_image}
          feature_image_alt={post.feature_image_alt}
          feature_image_caption={post.feature_image_caption}
          published_at={post.published_at}
          updated_at={post.updated_at}
          excerpt={post.excerpt}
          primary_tag={post.primary_tag}
          url={url}
        />
        <div className="w-full grid block-grid gap-y-8 self-center py-8 bg-always-light rounded-2xl">
          <BlockContent content={content} dropCap={true} />
        </div>
      </article>
      <PostTags tags={post.tags} />
      <PostComments postId={post.id} user={user} />
      {tagPosts.length > 0 && (
        <TagPagePosts posts={tagPosts} tag={post.primary_tag} />
      )}
      {morePosts.length > 0 && <MorePagePosts posts={morePosts} />}
    </div>
  );
}
