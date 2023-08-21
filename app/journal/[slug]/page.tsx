import PostHead from "@/lib/components/article/heading/postHead";
import PostTags from "@/lib/components/article/main/postTags";
import ArticleReactions from "@/lib/components/article/main/articleReactions";

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
import TableofContents from "@/lib/components/blocks/tableOfContents";
import { BLOG_URL } from "@/lib/utils/constants";

export const revalidate = 600;

export async function generateMetadata({
  params: { slug },
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const meta = await ghostMetaSingle(slug);

  return {
    title: meta.meta_title,
    description: meta.meta_description,
    openGraph: {
      siteName: "No Leave Society",
      type: "article",
      title: meta.og_title,
      description: meta.og_description,
      images: meta.og_image,
      url: BLOG_URL + slug,
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
  const posts = await ghostRouteParams("post");
  return posts.map((post: { slug: string }) => ({
    slug: post.slug,
  }));
}

export default async function PostPage({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const post = await ghostGetSinglePost(slug);
  const morePosts = await ghostLatestFiveGeneral(slug);
  const tagPosts = await ghostLatestFiveforTag(post.primary_tag.slug, slug);

  const { content, toc } = post.content;

  return (
    <>
      <>
        {/* <ArticleReactions /> */}
        <div className="content-grid flex flex-col gap-6 px-3 lg:px-0">
          <PostHead
            title={post.title}
            feature_image={post.feature_image}
            feature_image_alt={post.feature_image_alt}
            feature_image_caption={post.feature_image_caption}
            created_at={post.created_at}
            updated_at={post.updated_at}
            excerpt={post.excerpt}
            primary_tag={post.primary_tag}
            reading_time={post.reading_time}
          />
          <PostTags tags={post.tags} />
          <TableofContents toc={toc} />
          <div className="grid grid-cols-blockGrid gap-6 self-center w-[var(--blog-width)]">
            <BlockContent content={content} dropCap={true} />
          </div>
          {morePosts.length > 0 && <MorePagePosts posts={morePosts} />}
          {tagPosts.length > 0 && (
            <MorePagePosts
              posts={tagPosts}
              tagPost={true}
              tag={post.primary_tag}
            />
          )}
        </div>
      </>
    </>
  );
}
