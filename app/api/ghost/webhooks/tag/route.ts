import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  if (request.ip !== process.env.WEBHOOK_URL) {
    return NextResponse.error();
  }
  revalidatePath("/journal");
  revalidatePath("/journal/tag/[tag]");

  return NextResponse.json({ post: "Well Hello There" });
}
