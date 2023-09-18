import { adminAuth } from "@/lib/api/server/firebaseAdmin";
import { SITE_SERVER } from "@/lib/utils/constants";
import { NextRequest, NextResponse } from "next/server";

const API_KEY = process.env.GANSO_TOKEN || "";

export async function POST(request: NextRequest) {
  const data: GansoCommentRequest | null = await request.json();
  const sessionCookie = request.cookies.get("__session");
  if (!data) {
    return NextResponse.json({ error: "No Data Added" }, { status: 500 });
  }

  if (!data.type || !data.method || !data.uid || !data.content) {
    return NextResponse.json(
      { error: "Invalid data on request." },
      { status: 500 }
    );
  }

  if (!sessionCookie) {
    return NextResponse.json(
      { error: "User not signed in or not recently signed in." },
      { status: 403 }
    );
  }

  const decodedSession = await adminAuth
    .verifySessionCookie(sessionCookie.value)
    .catch((err) => console.error(err));

  if (!decodedSession) {
    return NextResponse.json(
      { error: "Error validating login token, please sign in again." },
      { status: 500 }
    );
  }

  const sessionUID = decodedSession.uid;

  if (data.uid !== sessionUID) {
    return NextResponse.json(
      { error: "Logged UserID doesn't match id on request." },
      { status: 401 }
    );
  }

  if (data.type === "comment") {
    if (data.method === "create") {
      const content = data.content as GansoCreateComment;
      const res = await fetch(SITE_SERVER + "comment/CreateComment", {
        headers: {
          "X-API-Key": API_KEY,
        },
        method: "POST",
        body: JSON.stringify(content),
      }).then((response) => response.json());
      return NextResponse.json(res);
    }
    if (data.method === "edit") {
      const content = data.content as GansoEditComRep;
      const res = await fetch(SITE_SERVER + "comment/EditComment", {
        headers: {
          "X-API-Key": API_KEY,
        },
        method: "PUT",
        body: JSON.stringify(content),
      }).then((response) => response.json());
      return NextResponse.json(res);
    }
    if (data.method === "delete") {
      const content = data.content as { id: number };
      await fetch(SITE_SERVER + "comment/DeleteComment", {
        headers: {
          "X-API-Key": API_KEY,
        },
        method: "DELETE",
        body: JSON.stringify({ id: content.id }),
      });
      return NextResponse.json({ message: "Deleted Successfully" });
    }
  }
  if (data.type === "reply") {
    if (data.method === "create") {
      const content = data.content as GansoCreateReply;
      const res = await fetch(SITE_SERVER + "comment/CreateReply", {
        headers: {
          "X-API-Key": API_KEY,
        },
        method: "POST",
        body: JSON.stringify(content),
      }).then((response) => response.json());
      return NextResponse.json(res);
    }
    if (data.method === "edit") {
      const content = data.content as GansoEditComRep;
      const res = await fetch(SITE_SERVER + "comment/EditReply", {
        headers: {
          "X-API-Key": API_KEY,
        },
        method: "PUT",
        body: JSON.stringify(content),
      }).then((response) => response.json());
      return NextResponse.json(res);
    }
    if (data.method === "delete") {
      const content = data.content as { id: number };
      await fetch(SITE_SERVER + "comment/DeleteReply", {
        headers: {
          "X-API-Key": API_KEY,
        },
        method: "DELETE",
        body: JSON.stringify({ id: content.id }),
      });
      return NextResponse.json({ message: "Deleted Successfully" });
    }
  }
}
