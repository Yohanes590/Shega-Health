import { NextResponse } from "next/server";
import pkceChallenge from "pkce-challenge";
import cookie from "cookie";

export async function GET() {
  const { code_verifier, code_challenge } = await pkceChallenge();

  const headers = new Headers();
  headers.append(
    "Set-Cookie",
    cookie.serialize("code_verifier", code_verifier, {
      path: "/",
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 600,
      sameSite: "lax",
    })
  );

  const url = new URL(process.env.VERIFAYDA_AUTH_ENDPOINT!);
  url.searchParams.set("client_id", process.env.VERIFAYDA_CLIENT_ID!);
  url.searchParams.set("response_type", "code");
  url.searchParams.set("redirect_uri", process.env.VERIFAYDA_REDIRECT_URI!);

  url.searchParams.set("scope", "openid profile email demographic");

  url.searchParams.set("state", Math.random().toString(36).substring(2));
  url.searchParams.set("code_challenge", code_challenge);
  url.searchParams.set("code_challenge_method", "S256");

  return NextResponse.redirect(url.toString(), { headers });
}
