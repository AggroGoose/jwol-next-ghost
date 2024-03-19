import { NextResponse } from "next/server";
import ghostAdmin from "@/lib/api/server/ghostAdmin";
import { ghostPostsforIndex } from "@/lib/api/server/ghostServer";

export async function GET() {
  const res = await ghostAdmin.posts
    .browse({
      limit: 15,
      page: 1,
      filter: "status:published+tag:travel-fever",
      order: "published_at DESC",
      include: ["tags", "count.posts"],
    })
    .catch((err: Error) => {
      console.error(err);
    });
  // const post = (await ghostAdmin.posts.read({
  //   slug: "fall-seasonal-affective-disorder",
  // })) as GhostAdminPost;

  // const root = await JSON.parse(post.lexical);

  return NextResponse.json(res);
}
