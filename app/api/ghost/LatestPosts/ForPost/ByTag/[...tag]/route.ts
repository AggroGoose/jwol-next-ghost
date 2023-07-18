import { NextResponse } from "next/server";
import ghost from "@/lib/api/ghost";

export async function GET(
  request: Request,
  { params }: { params: { tag: Array<string> } }
) {
  const returnPosts: ResponseMore[] = [];

  if (params.tag.length !== 2) {
    return NextResponse.json({ returnPosts });
  }

  const tag = params.tag[0];
  const slug = params.tag[1];

  const res = await ghost.posts
    .browse({
      limit: 6,
      filter: `tag:${tag}`,
      order: "published_at DESC",
      include: "tags",
    })
    .catch((err) => {
      console.error(err);
    });

  let posts = [] as GhostPost[];

  if (res) {
    posts = [...res] as GhostPost[];
  }

  posts.forEach((post) => {
    if (post.slug !== slug && returnPosts.length < 5) {
      const postObj = {
        title: post.title,
        excerpt: post.excerpt,
        slug: post.slug,
        tag: post.primary_tag.name,
        tagSlug: post.primary_tag.slug,
        featureImg: post.feature_image,
        featureImgAlt: post.feature_image_alt || "",
        published: post.created_at,
        readTime: post.reading_time,
      };

      returnPosts.push(postObj);
    }
  });

  return NextResponse.json({ returnPosts });
}
