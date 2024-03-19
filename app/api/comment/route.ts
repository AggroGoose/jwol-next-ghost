import { db } from "@/lib/api/drizzle";
import { comments, replies, users } from "@/lib/api/drizzle/schema";
import { eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const type = searchParams.get("type");
  const id = searchParams.get("id");
  const page = Number(searchParams.get("page") || 1);
  const limit = Number(searchParams.get("limit") || 5);
  const offset = (page - 1) * limit;

  if (!type || !id)
    return NextResponse.json({ error: "Missing type or id." }, { status: 500 });

  if (type === "comments") {
    const res = await db
      .select()
      .from(comments)
      .where(eq(comments.postId, id))
      .limit(limit)
      .offset(offset)
      .innerJoin(users, eq(comments.userId, users.id));

    return NextResponse.json(res);
  }

  if (type === "replies") {
    const commentId = Number(id);
    const res = await db
      .select()
      .from(replies)
      .where(eq(replies.commentId, commentId))
      .limit(limit)
      .offset(offset)
      .innerJoin(users, eq(replies.userId, users.id));

    return NextResponse.json(res);
  }
}
