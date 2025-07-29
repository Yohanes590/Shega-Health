import { NextResponse } from "next/server";
import cookie from "cookie";
import { importJWK, SignJWT } from "jose";

export async function GET(request: Request) {
  try {
    const url = new URL(request.url);
    const code = url.searchParams.get("code");
    if (!code) {
      return NextResponse.json({ error: "Missing code parameter" }, { status: 400 });
    }

    // Read code_verifier
    const cookieHeader = request.headers.get("cookie") || "";
    const cookies = cookie.parse(cookieHeader);
    const code_verifier = cookies.code_verifier;
    if (!code_verifier) {
      return NextResponse.json({ error: "Missing code_verifier cookie" }, { status: 400 });
    }

    // Prepare client assertion (required)
    const jwk = JSON.parse(process.env.VERIFAYDA_PRIVATE_KEY!);
    const privateKey = await importJWK(jwk, "RS256");
    const clientAssertion = await new SignJWT({
      iss: process.env.VERIFAYDA_CLIENT_ID,
      sub: process.env.VERIFAYDA_CLIENT_ID,
      aud: process.env.VERIFAYDA_TOKEN_ENDPOINT,
      jti: crypto.randomUUID(),
    })
      .setProtectedHeader({ alg: "RS256" })
      .setIssuedAt()
      .setExpirationTime("2m")
      .sign(privateKey);

    // Exchange token
    const body = new URLSearchParams();
    body.append("grant_type", "authorization_code");
    body.append("code", code);
    body.append("redirect_uri", process.env.VERIFAYDA_REDIRECT_URI!);
    body.append("client_id", process.env.VERIFAYDA_CLIENT_ID!);
    body.append("code_verifier", code_verifier);
    body.append("client_assertion_type", process.env.CLIENT_ASSERTION_TYPE!);
    body.append("client_assertion", clientAssertion);

    const tokenResponse = await fetch(process.env.VERIFAYDA_TOKEN_ENDPOINT!, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: body.toString(),
    });
    const tokens = await tokenResponse.json();
    if (!tokenResponse.ok) return NextResponse.json(tokens, { status: 500 });

    // ===== NEW: Get user info from Fayda =====
    const userResponse = await fetch(process.env.VERIFAYDA_USERINFO_ENDPOINT!, {
      headers: { Authorization: `Bearer ${tokens.access_token}` },
    });
    const userInfo = await userResponse.json();

    // ===== Set cookies (user_name is readable in frontend) =====
    const headers = new Headers();
    headers.append(
      "Set-Cookie",
      cookie.serialize("user_name", userInfo.name || "Unknown", {
        path: "/",
        httpOnly: false, // frontend readable
        maxAge: tokens.expires_in || 3600,
      })
    );
    headers.append(
      "Set-Cookie",
      cookie.serialize("code_verifier", "", {
        path: "/",
        maxAge: 0,
      })
    );

    return NextResponse.redirect(new URL("/dashboard/home", request.url), { headers });
  } catch (e) {
    return NextResponse.json({ error: String(e) }, { status: 500 });
  }
}
