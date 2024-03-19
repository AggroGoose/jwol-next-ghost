import { db } from "@/lib/api/drizzle";
import { comments, replies } from "@/lib/api/drizzle/schema";
import { eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const type = searchParams.get("type");
  const id = searchParams.get("id");

  if (!type || !id)
    return NextResponse.json({ error: "Missing type or id." }, { status: 500 });

  if (type === "comments") {
    const res = await db
      .select({ id: comments.id })
      .from(comments)
      .where(eq(comments.postId, id));

    const count = res.length;

    return NextResponse.json(count);
  }

  if (type === "replies") {
    const commentId = Number(id);

    const res = await db
      .select({ id: replies.id })
      .from(replies)
      .where(eq(replies.commentId, commentId));

    const count = res.length;
    return NextResponse.json(count);
  }
}
