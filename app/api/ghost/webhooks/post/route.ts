import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  if (request.ip !== process.env.WEBHOOK_URL) {
    console.error("Invalid IP Address on Revalidate: " + request.ip);
    return NextResponse.error();
  }

  console.log("Revalidating Home");
  revalidatePath("/");
  console.log("Revalidating Journal");
  revalidatePath("/journal");
  console.log("Revalidating Journal Slug");
  revalidatePath("/journal/[slug]");
  console.log("Revalidating Journal Tag");
  revalidatePath("/journal/tag/[tag]");

  return NextResponse.json({ post: "Well Hello There" });
}
