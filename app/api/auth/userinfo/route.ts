import { NextResponse } from "next/server";
import cookie from "cookie";

// simple JWT decode (no signature verification)
function parseJwt(token: string) {
  try {
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split("")
        .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
        .join("")
    );
    return JSON.parse(jsonPayload);
  } catch (e) {
    return null;
  }
}

export async function GET(req: Request) {
  const cookies = cookie.parse(req.headers.get("cookie") || "");
  const access_token = cookies.access_token;
  if (!access_token) {
    return NextResponse.json({ error: "No token" }, { status: 401 });
  }

  // Fetch user info (JWT string) from Fayda
  const res = await fetch(process.env.VERIFAYDA_USERINFO_ENDPOINT!, {
    headers: { Authorization: `Bearer ${access_token}` },
  });

  if (!res.ok) {
    return NextResponse.json({ error: "Failed to fetch user info" }, { status: res.status });
  }

  const jwt = await res.text(); // Fayda returns JWT string
  const userInfo = parseJwt(jwt);

  if (!userInfo) {
    return NextResponse.json({ error: "Invalid JWT returned from Fayda" }, { status: 500 });
  }

  return NextResponse.json({ user: userInfo });
}
