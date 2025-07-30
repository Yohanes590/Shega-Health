import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const userRequest = await request.json();

  return NextResponse.json({ message: userRequest});
}
