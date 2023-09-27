import { NextResponse } from "next/server";
import ghostAdmin from "@/lib/api/server/ghostAdmin";
import { parseMD } from "@/lib/utils/scripts/parseMobiledoc";

export async function GET() {
  const post = (await ghostAdmin.posts.read({
    slug: "fall-seasonal-affective-disorder",
  })) as GhostAdminPost;

  const mobiledocObj = (await JSON.parse(post.mobiledoc)) as MDObject;
  const content = parseMD(mobiledocObj);

  return NextResponse.json({ mobiledocObj, content });
}
