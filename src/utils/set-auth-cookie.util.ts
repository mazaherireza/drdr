import { cookies } from "next/headers";

import * as jose from "jose";

const algorithm = "HS256";

const secret = new TextEncoder().encode(process.env.TOKEN_SECRET);

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
