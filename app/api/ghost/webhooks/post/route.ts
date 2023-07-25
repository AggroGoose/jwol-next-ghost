import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  if (request.ip !== process.env.WEBHOOK_URL) {
    return NextResponse.error();
  }
  revalidatePath("/");
  revalidatePath("/journal");
  revalidatePath("/journal/[tag]");
  revalidatePath("/journal/[tag]/[slug]");

  return NextResponse.json({ post: "Well Hello There" });
}
