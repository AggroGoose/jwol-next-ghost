import { revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function POST(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  revalidateTag(params.id);

  return NextResponse.json({ message: `${params.id} revalidated` });
}
