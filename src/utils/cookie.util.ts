import { cookies } from "next/headers";
import type { NextRequest } from "next/server";

import * as jose from "jose";

const algorithm = "HS256";

const secret = new TextEncoder().encode(process.env.TOKEN_SECRET!);

export async function setAuthCookie(userId: string): Promise<void> {
  const token = await new jose.SignJWT()
    .setSubject(userId)
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

export async function extractUserId(
  request: NextRequest,
): Promise<string | null> {
  const token = request.cookies.get(process.env.TOKEN_KEY!);

  if (!token) {
    return null;
  }

  try {
    await jose.jwtVerify(token.value, secret);
    const claims = jose.decodeJwt(token.value);
    if (!claims.sub) {
      return null;
    }
    return claims.sub;
  } catch (error) {
    console.error(error);
    return null;
  }
}
