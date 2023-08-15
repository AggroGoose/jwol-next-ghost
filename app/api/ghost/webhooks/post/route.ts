import { BLOG_ROUTE, TAG_ROUTE } from "@/lib/utils/constants";
import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const req = await request.json();

  console.log("Revalidating Home");
  revalidatePath("/");
  console.log("Revalidating Journal");
  revalidatePath(BLOG_ROUTE);
  console.log("Revalidating Journal Slug");
  revalidatePath(BLOG_ROUTE + "/[slug]");
  console.log("Revalidating Journal Tag");
  revalidatePath(TAG_ROUTE + "/[tag]");

  return NextResponse.json({ post: "Well Hello There" });
}
