// app/api/auth/userinfo/route.ts
import { NextResponse } from "next/server";
import cookie from "cookie";

export async function GET(request: Request) {
  try {
    // Read access_token from cookie
    const cookieHeader = request.headers.get("cookie") || "";
    const cookies = cookie.parse(cookieHeader);
    const access_token = cookies.access_token;

    if (!access_token) {
      return NextResponse.json({ error: "No access token" }, { status: 401 });
    }

    // Call Fayda userinfo endpoint
    const res = await fetch(process.env.VERIFAYDA_USERINFO_ENDPOINT!, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });

    if (!res.ok) {
      return NextResponse.json(
        { error: "Failed to fetch user info" },
        { status: 500 }
      );
    }

    const userInfo = await res.json();
    return NextResponse.json(userInfo);
  } catch (error) {
    return NextResponse.json({ error: "Internal error", details: String(error) }, { status: 500 });
  }
}
