import { NextRequest, NextResponse } from "next/server";
import { adminAuth } from "@/lib/api/server/firebaseAdmin";
import { ResponseCookie } from "next/dist/compiled/@edge-runtime/cookies";

export async function POST(request: NextRequest) {
  const data: null | { idToken?: string } = await request.json();

  if (!data?.idToken) {
    return NextResponse.json({ error: "No ID Token" }, { status: 403 });
  }

  const { idToken } = data;

  const expiresIn = 60 * 60 * 24 * 5 * 1000;

  const decodedIdToken = await adminAuth.verifyIdToken(idToken);

  if (new Date().getTime() / 1000 - decodedIdToken.auth_time < 5 * 60) {
    const cookie = await adminAuth.createSessionCookie(idToken, { expiresIn });

    const options: ResponseCookie = {
      name: "__session",
      value: cookie,
      maxAge: expiresIn,
      httpOnly: true,
      secure: true,
    };

    const response = NextResponse.json({ message: "SignIn Verified" });

    response.cookies.set(options);

    return response;
  } else {
    return NextResponse.json(
      { error: "Recent SignIn required" },
      { status: 401 }
    );
  }
}

export async function DELETE() {
  const response = NextResponse.json({ message: "Signed Out" });
  response.cookies.delete("__session");

  return response;
}
