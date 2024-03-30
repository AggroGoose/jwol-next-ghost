import { NextResponse } from "next/server";
import ghostAdmin from "@/lib/api/server/ghostAdmin";

export async function GET() {
  const res = await ghostAdmin.tags.brows().catch((err: Error) => {
    console.error(err);
  });

  return NextResponse.json(res);
}
