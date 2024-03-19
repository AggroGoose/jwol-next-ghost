import { auth } from "@/lib/api/auth";
import { db } from "@/lib/api/drizzle";
import { comments, replies } from "@/lib/api/drizzle/schema";
import { eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const data: GansoCommentRequest | null = await request.json();
  const session = await auth();

  if (!data) {
    return NextResponse.json({ error: "No Data Added" }, { status: 500 });
  }

  if (!data.type || !data.method || !data.uid || !data.content) {
    return NextResponse.json(
      { error: "Invalid data on request." },
      { status: 500 }
    );
  }

  if (!session?.user) {
    return NextResponse.json({ error: "User not signed in." }, { status: 403 });
  }

  if (data.uid !== session.user.id) {
    return NextResponse.json(
      { error: "Logged UserID doesn't match id on request." },
      { status: 401 }
    );
  }

  if (data.type === "comment") {
    if (data.method === "create") {
      const content = data.content as GansoCreateComment;
      const res = await db
        .insert(comments)
        .values({
          postId: content.post_id,
          userId: content.user_id,
          content: content.content,
        })
        .returning();

      const comment = res[0];
      return NextResponse.json(comment);
    }
    if (data.method === "edit") {
      const content = data.content as GansoEditComRep;
      const res = await db
        .update(comments)
        .set({ content: content.content, edited: true })
        .where(eq(comments.id, content.id))
        .returning();
      return NextResponse.json(res);
    }
    if (data.method === "delete") {
      const content = data.content as { id: number };
      await db.delete(comments).where(eq(comments.id, content.id));
      return NextResponse.json({ message: "Deleted Successfully" });
    }
  }
  if (data.type === "reply") {
    if (data.method === "create") {
      const content = data.content as GansoCreateReply;
      const res = await db
        .insert(replies)
        .values({
          commentId: content.comment_id,
          userId: content.user_id,
          content: content.content,
        })
        .returning();

      const reply = res[0];
      return NextResponse.json(reply);
    }
    if (data.method === "edit") {
      const content = data.content as GansoEditComRep;
      const res = await db
        .update(replies)
        .set({ content: content.content, edited: true })
        .where(eq(replies.id, content.id))
        .returning();
      return NextResponse.json(res);
    }
    if (data.method === "delete") {
      const content = data.content as { id: number };
      await db.delete(replies).where(eq(replies.id, content.id));
      return NextResponse.json({ message: "Deleted Successfully" });
    }
  }
}
