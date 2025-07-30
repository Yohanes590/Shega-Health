import { NextResponse } from "next/server";
import cookie from "cookie";

export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const code = url.searchParams.get("code");
    const state = url.searchParams.get("state");

    if (!code) {
      return NextResponse.json({ error: "Missing code in callback" }, { status: 400 });
    }

    const cookies = cookie.parse(req.headers.get("cookie") || "");
    const code_verifier = cookies.code_verifier;

    if (!code_verifier) {
      return NextResponse.json({ error: "Missing code_verifier cookie" }, { status: 400 });
    }

    const params = new URLSearchParams({
      grant_type: "authorization_code",
      code,
      redirect_uri: process.env.VERIFAYDA_REDIRECT_URI!,
      client_id: process.env.VERIFAYDA_CLIENT_ID!,
      code_verifier,
    });

    const tokenRes = await fetch(process.env.VERIFAYDA_TOKEN_ENDPOINT!, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: params.toString(),
    });

    if (!tokenRes.ok) {
      const errorText = await tokenRes.text();
      return NextResponse.json({ error: "Token exchange failed", details: errorText }, { status: 500 });
    }

    const tokens = await tokenRes.json();

    if (!tokens.access_token) {
      return NextResponse.json({ error: "No access_token in response", tokens }, { status: 500 });
    }

    const headers = new Headers();
    headers.append(
      "Set-Cookie",
      cookie.serialize("access_token", tokens.access_token, {
        path: "/",
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: tokens.expires_in,
        sameSite: "lax",
      })
    );

    headers.append(
      "Set-Cookie",
      cookie.serialize("id_token", tokens.id_token, {
        path: "/",
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: tokens.expires_in,
        sameSite: "lax",
      })
    );

    // redirect to dashboard or home page after login
    return NextResponse.redirect("/dashboard", { headers });
  } catch (error:any) {
    return NextResponse.json({ error: "Internal server error", details: error.message }, { status: 500 });
  }
}
