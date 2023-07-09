import { NextResponse } from "next/server";
import ghost from "@/lib/api/ghost";

export async function GET() {
  const res = await ghost.posts.browse({
    include: "tags",
  });
  const postArr: Array<{ slug: string; tag: string }> = [];

  res.forEach((post) => {
    if (post.primary_tag) {
      const postObj = {
        slug: post.slug,
        tag: post.primary_tag.slug,
      };

      postArr.push(postObj);
    }
  });

  return NextResponse.json(postArr);
}
