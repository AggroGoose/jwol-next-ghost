import { NextResponse } from "next/server";

export async function GET() {
  // const post = (await ghost.posts
  //   .read({ slug: "small-feature-test" })
  //   .catch((err) => {
  //     console.error(err);
  //   })) as GhostPost;

  return NextResponse.json({ post: "Well Hello There" });
}
