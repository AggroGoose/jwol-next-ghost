import PostHead from "@/lib/components/article/heading/postHead";
import PostSide from "@/lib/components/article/side/postSide";
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

export async function generateMetadata({
  params: { slug, tag },
}: {
  params: { slug: string; tag: string };
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
      images: [{ url: meta.og_image }],
      url: `https://www.noleavesociety.com/journal/${tag}/${slug}`,
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

export const dynamicParams = false;

export async function generateStaticParams() {
  const posts = await ghostRouteParams("post");
  return posts.map((post: { slug: string; tag: string }) => ({
    slug: post.slug,
    tag: post.tag,
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

  return (
    <>
      <div className="post-side-grid">
        {/* <ArticleReactions /> */}
        <PostSide morePosts={morePosts} />

        <div className="article__main">
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
          <div className="article__content post-grid">
            <BlockContent content={post.content} />
          </div>
          {morePosts.length > 0 && (
            <MorePagePosts posts={morePosts} badge={true} />
          )}
          {tagPosts.length > 0 && (
            <MorePagePosts
              posts={tagPosts}
              tagPost={true}
              tag={post.primary_tag}
            />
          )}
        </div>
      </div>
    </>
  );
}
