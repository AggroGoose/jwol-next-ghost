import { NextResponse } from "next/server";
import ghost from "@/lib/api/ghost";

export async function GET() {
  const tags = await ghost.tags.browse();

  return NextResponse.json(tags);
}
