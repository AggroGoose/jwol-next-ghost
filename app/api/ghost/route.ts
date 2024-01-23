import { NextResponse } from "next/server";
import ghostAdmin from "@/lib/api/server/ghostAdmin";

export async function GET() {
  const post = (await ghostAdmin.posts.read({
    slug: "fall-seasonal-affective-disorder",
  })) as GhostAdminPost;

  return NextResponse.json(post);
}
