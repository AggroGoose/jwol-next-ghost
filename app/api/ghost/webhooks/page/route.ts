import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  if (request.ip !== process.env.WEBHOOK_URL) {
    return NextResponse.error();
  }
  const data = await request.json();

  if (data.page.slug === "about") revalidatePath("/about");

  return NextResponse.json({ post: "Well Hello There" });
}
