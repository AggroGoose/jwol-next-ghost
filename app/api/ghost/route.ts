import { NextResponse } from "next/server";
import ghostAdmin from "@/lib/api/ghostAdmin";
import { parseMD } from "@/lib/scripts/parseMobiledoc";

export async function GET() {
  // const post = (await ghostAdmin.posts.read({
  //   slug: "feature-test",
  // })) as GhostAdminPost;

  // const mobiledocObj = (await JSON.parse(post.mobiledoc)) as MDObject;
  // const content = parseMD(mobiledocObj);

  return NextResponse.json("Well hello there");
}
