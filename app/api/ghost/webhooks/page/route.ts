import { ABOUT_ROUTE } from "@/lib/utils/constants";
import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  if (request.ip !== process.env.WEBHOOK_URL) {
    return NextResponse.error();
  }
  const data = await request.json();

  console.log(data.page || "No such object - Page");

  if (data.page.slug === "about") revalidatePath(ABOUT_ROUTE);

  return NextResponse.json({ post: "Well Hello There" });
}
