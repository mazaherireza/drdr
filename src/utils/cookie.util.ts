import { cookies } from "next/headers";
import type { NextRequest } from "next/server";

import * as jose from "jose";

const algorithm = "HS256";

const secret = new TextEncoder().encode(process.env.TOKEN_SECRET!);

export async function setAuthCookie(): Promise<void> {
  const token = await new jose.SignJWT()
    .setProtectedHeader({ alg: algorithm })
    .setIssuedAt()
    .setExpirationTime("3d")
    .sign(secret);

  const cookieStore = await cookies();

  cookieStore.set(process.env.TOKEN_KEY!, token, {
    secure: true,
    httpOnly: true,
    sameSite: "none",
    maxAge: 3 * 24 * 60 * 60,
  });
}

export async function removeAuthCookie(): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.delete(process.env.TOKEN_KEY!);
}

export async function isSignedIn(request: NextRequest): Promise<boolean> {
  const token = request.cookies.get(process.env.TOKEN_KEY!);

  if (!token) {
    return false;
  }

  try {
    await jose.jwtVerify(token.value, secret);
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}
