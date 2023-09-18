import { NextResponse } from "next/server";
import { SITE_SERVER } from "@/lib/utils/constants";

const API_KEY = process.env.GANSO_TOKEN || "";

const headers = {
  "X-API-Key": API_KEY,
};

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const res = await fetch(`${SITE_SERVER}user/GetorCreate/${params.id}`, {
    method: "POST",
    headers,
    next: { tags: [params.id] },
  })
    .then((res) => res.json())
    .catch((err) => console.error(err));

  return NextResponse.json(res);
}
