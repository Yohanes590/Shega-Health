import { NextResponse } from "next/server";
import cookie from "cookie";
import jwt from "jsonwebtoken";

export async function GET(request: Request) {
  try {
    const cookieHeader = request.headers.get("cookie") || "";
    const cookies = cookie.parse(cookieHeader);
    const access_token = cookies.access_token;

    if (!access_token) {
      return NextResponse.json({ error: "No access token" }, { status: 401 });
    }

    if (!process.env.VERIFAYDA_USERINFO_ENDPOINT) {
      throw new Error("VERIFAYDA_USERINFO_ENDPOINT not set");
    }

    // Call userinfo endpoint
    const userResponse = await fetch(process.env.VERIFAYDA_USERINFO_ENDPOINT, {
      headers: { Authorization: `Bearer ${access_token}` },
    });

    if (!userResponse.ok) {
      return NextResponse.json({ error: "Failed to fetch user info" }, { status: 500 });
    }

    // The userinfo response is a JWT string (per doc), so decode it
    const userJwt = await userResponse.text();

    // Decode JWT without verifying signature (doc says it’s fine)
    const userInfo = jwt.decode(userJwt, { json: true });

    return NextResponse.json(userInfo);
  } catch (e) {
    return NextResponse.json({ error: String(e) }, { status: 500 });
  }
}
