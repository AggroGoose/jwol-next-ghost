import { TAG_ROUTE } from "@/lib/utils/constants";
import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  revalidatePath(TAG_ROUTE);
  revalidatePath(TAG_ROUTE + "/[tag]");

  return NextResponse.json({ post: "Well Hello There" });
}
