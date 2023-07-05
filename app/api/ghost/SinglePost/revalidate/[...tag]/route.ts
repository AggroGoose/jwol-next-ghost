import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";
export async function GET(
  request: Request,
  { params }: { params: { tag: Array<string> } }
) {
  if (params.tag.length !== 2) {
    return NextResponse.json({ response: "Not Enough Params" });
  }
  const tag = params.tag[0];
  const slug = params.tag[1];

  revalidatePath(`/journal/${tag}/${slug}`);

  return NextResponse.json({ revalidated: true, now: Date.now() });
}
