import PostHead from "@/lib/components/article/heading/postHead";
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
import { BLOG_URL, SITE_SERVER } from "@/lib/utils/constants";

export const revalidate = 600;

export async function generateMetadata({
  params: { slug },
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const meta = await ghostMetaSingle(slug);

  return {
    metadataBase: new URL(BLOG_URL + slug),
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

const API_KEY = process.env.GANSO_TOKEN || "";

export default async function PostPage({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const post = await ghostGetSinglePost(slug);
  const postDb: GansoPostRes = await fetch(
    SITE_SERVER + "post/GetorCreate/" + post.id,
    {
      method: "POST",
      headers: {
        "X-API-Key": API_KEY,
      },
    }
  ).then((res) => res.json());
  const morePosts = await ghostLatestFiveGeneral(slug);
  const tagPosts = await ghostLatestFiveforTag(post.primary_tag.slug, slug);

  const { content, toc } = post.content;

  return (
    <>
      <>
        <div className="content-grid mt-6 pb-6 flex flex-col gap-6 px-3 row-start-2 xl:px-0">
          <PostHead
            title={post.title}
            feature_image={post.feature_image}
            feature_image_alt={post.feature_image_alt}
            feature_image_caption={post.feature_image_caption}
            created_at={post.created_at}
            updated_at={post.updated_at}
            excerpt={post.excerpt}
            primary_tag={post.primary_tag}
            tags={post.tags}
          />
          <div className="w-full flex flex-col gap-6 px-3 xl:px-0 relative">
            <ArticleReactions postId={post.id} />
            <TableofContents toc={toc} react={true} />
            <div className="grid grid-cols-blockGridSm md:grid-cols-blockGrid gap-8 self-center w-[var(--blog-width)] pb-12 lg:pb-6">
              <BlockContent content={content} dropCap={true} />
            </div>
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
