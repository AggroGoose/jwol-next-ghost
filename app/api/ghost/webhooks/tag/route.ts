import { BLOG_ROUTE, TAG_ROUTE } from "@/lib/utils/constants";
import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  if (request.ip !== process.env.WEBHOOK_URL) {
    return NextResponse.error();
  }
  revalidatePath(TAG_ROUTE);
  revalidatePath(TAG_ROUTE + "/[tag]");

  return NextResponse.json({ post: "Well Hello There" });
}
