import { NextResponse } from "next/server";
import ghost from "@/lib/api/ghost";
import parseHTML from "@/lib/html/parseHTML";
import prisma from "@/lib/api/prisma";

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const slug = params.slug;
  const post = (await ghost.posts
    .read({ slug }, { include: "tags" })
    .catch((err) => {
      console.error(err);
    })) as GhostPost;

  const parsePost = parseHTML(post.html);
  const primTag: ResponseTag = {
    id: post.primary_tag.id,
    name: post.primary_tag.name,
    slug: post.primary_tag.slug,
  };

  const tagArr: ResponseTag[] = [];
  post.tags.forEach((tag, i) => {
    if (i > 0) {
      const newTag: ResponseTag = {
        id: tag.id,
        name: tag.name,
        slug: tag.slug,
      };

      tagArr.push(newTag);
    }
  });

  const dbPost = await prisma.post.upsert({
    where: { slug: post.slug },
    update: {},
    create: {
      id: post.id,
      slug: post.slug,
    },
  });

  const postData: ResponsePost = {
    slug: post.slug,
    id: post.id,
    title: post.title,
    feature_image: post.feature_image,
    feature_image_alt: post.feature_image_alt || "Post feature image",
    feature_image_caption: post.feature_image_caption,
    audio_url: dbPost.audioURL,
    likes: dbPost.likeCount,
    saves: dbPost.saveCount,
    created_at: post.created_at,
    updated_at: post.updated_at,
    excerpt: post.excerpt,
    reading_time: post.reading_time,
    og_image: post.og_image || post.feature_image || "",
    og_description:
      post.og_description || post.meta_description || post.excerpt,
    og_title: post.og_title || post.title,
    meta_description: post.meta_description || post.excerpt,
    meta_title: post.meta_title || post.excerpt,
    twitter_image: post.twitter_image || post.feature_image || "",
    twitter_title: post.twitter_title || post.title,
    primary_tag: primTag,
    tags: tagArr,
    content: parsePost,
  };

  return NextResponse.json(postData);
}
