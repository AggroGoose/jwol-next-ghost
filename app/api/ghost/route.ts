import { NextResponse } from "next/server";
import ghostAdmin from "@/lib/api/server/ghostAdmin";

export async function GET() {
  const post = (await ghostAdmin.posts.read({
    slug: "fall-seasonal-affective-disorder",
  })) as GhostAdminPost;

  const root = await JSON.parse(post.lexical);

  return NextResponse.json(root);
}
