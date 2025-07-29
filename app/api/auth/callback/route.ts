import { NextResponse } from "next/server";
import cookie from "cookie";
import { importJWK, SignJWT } from "jose";

export async function GET(request: Request) {
  try {
    const url = new URL(request.url);
    const code = url.searchParams.get("code");
    const state = url.searchParams.get("state");
    const error = url.searchParams.get("error");

    if (error) {
      return NextResponse.json(
        { error, error_description: url.searchParams.get("error_description") },
        { status: 400 }
      );
    }

    if (!code) {
      return NextResponse.json({ error: "Missing authorization code" }, { status: 400 });
    }
    if (!state) {
      return NextResponse.json({ error: "Missing state parameter" }, { status: 400 });
    }

    const cookieHeader = request.headers.get("cookie") || "";
    const cookies = cookie.parse(cookieHeader);
    const code_verifier = cookies.code_verifier;
    if (!code_verifier) {
      return NextResponse.json({ error: "Missing code_verifier cookie" }, { status: 400 });
    }

    // Environment variable checks
    const privateKeyString = process.env.VERIFAYDA_PRIVATE_KEY;
    const clientId = process.env.VERIFAYDA_CLIENT_ID;
    const tokenEndpoint = process.env.VERIFAYDA_TOKEN_ENDPOINT;
    const redirectUri = process.env.VERIFAYDA_REDIRECT_URI;
    const clientAssertionType = process.env.CLIENT_ASSERTION_TYPE;

    if (!privateKeyString) throw new Error("VERIFAYDA_PRIVATE_KEY not set");
    if (!clientId) throw new Error("VERIFAYDA_CLIENT_ID not set");
    if (!tokenEndpoint) throw new Error("VERIFAYDA_TOKEN_ENDPOINT not set");
    if (!redirectUri) throw new Error("VERIFAYDA_REDIRECT_URI not set");
    if (!clientAssertionType) throw new Error("CLIENT_ASSERTION_TYPE not set");

    // Import private key
    const jwk = JSON.parse(privateKeyString);
    const privateKey = await importJWK(jwk, "RS256");

    // Create client assertion JWT
    const clientAssertion = await new SignJWT({
      iss: clientId,
      sub: clientId,
      aud: tokenEndpoint,
      jti: crypto.randomUUID(),
    })
      .setProtectedHeader({ alg: "RS256" })
      .setIssuedAt()
      .setExpirationTime("2m")
      .sign(privateKey);

    // Prepare token request body
    const body = new URLSearchParams();
    body.append("grant_type", "authorization_code");
    body.append("code", code);
    body.append("redirect_uri", redirectUri);
    body.append("client_id", clientId);
    body.append("code_verifier", code_verifier);
    body.append("client_assertion_type", clientAssertionType);
    body.append("client_assertion", clientAssertion);

    // Exchange authorization code for tokens
    const tokenResponse = await fetch(tokenEndpoint, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: body.toString(),
    });

    const tokens = await tokenResponse.json();

    if (!tokenResponse.ok) {
      return NextResponse.json(tokens, { status: 500 });
    }

    // Set tokens as cookies, clear code_verifier cookie
    const headers = new Headers();
    headers.append(
      "Set-Cookie",
      cookie.serialize("access_token", tokens.access_token, {
        path: "/",
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: tokens.expires_in || 3600,
        sameSite: "lax",
      })
    );
    headers.append(
      "Set-Cookie",
      cookie.serialize("id_token", tokens.id_token, {
        path: "/",
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: tokens.expires_in || 3600,
        sameSite: "lax",
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
