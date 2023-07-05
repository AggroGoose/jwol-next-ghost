import { NextResponse } from "next/server";
import ghost from "@/lib/api/ghost";
import parseHTML from "@/lib/html/parseHTML";

export async function GET() {
  const post = (await ghost.posts
    .read({ slug: "small-feature-test" })
    .catch((err) => {
      console.error(err);
    })) as GhostPost;

  return NextResponse.json({ post });
}
