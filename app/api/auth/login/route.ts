import { NextResponse } from "next/server";
import pkceChallenge from "pkce-challenge";
import cookie from "cookie";

export async function GET() {
  const { code_verifier, code_challenge } =await pkceChallenge();

  if (!process.env.VERIFAYDA_AUTH_ENDPOINT) throw new Error("VERIFAYDA_AUTH_ENDPOINT not set");
  if (!process.env.VERIFAYDA_CLIENT_ID) throw new Error("VERIFAYDA_CLIENT_ID not set");
  if (!process.env.VERIFAYDA_REDIRECT_URI) throw new Error("VERIFAYDA_REDIRECT_URI not set");

  // Save code_verifier in httpOnly cookie for later token exchange
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

  // Build authorization URL with required params
  const url = new URL(process.env.VERIFAYDA_AUTH_ENDPOINT);
  url.searchParams.set("client_id", process.env.VERIFAYDA_CLIENT_ID);
  url.searchParams.set("response_type", "code");
  url.searchParams.set("redirect_uri", process.env.VERIFAYDA_REDIRECT_URI);

  // Required scopes per doc
  url.searchParams.set("scope", "openid profile email");

  // You can add acr_values if needed, e.g., OTP only:
  // url.searchParams.set("acr_values", "mosip:idp:acr:generated-code");
  // For now leaving empty to use default
  // url.searchParams.set("acr_values", "");

  // Random state for CSRF protection
  url.searchParams.set("state", Math.random().toString(36).slice(2));

  url.searchParams.set("code_challenge", code_challenge);
  url.searchParams.set("code_challenge_method", "S256");

  return NextResponse.redirect(url.toString(), { headers });
}
