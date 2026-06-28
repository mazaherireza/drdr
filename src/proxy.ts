import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

import { isSignedIn } from "@/utils/cookie.util";

const onlySignedInRoutes = ["/dashboard"];
const onlyNotSignedInRoutes = ["/auth/sign-in", "/auth/sign-up"];

export default async function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  const isOnlySignedInRoutes = onlySignedInRoutes.includes(pathname);
  const isOnlyNotSignedInRoutes = onlyNotSignedInRoutes.includes(pathname);

  if (await isSignedIn(request)) {
    if (isOnlyNotSignedInRoutes && !pathname.startsWith("/dashboard")) {
      return NextResponse.redirect(new URL("/dashboard", request.url));
    }
  } else {
    if (isOnlySignedInRoutes && !pathname.startsWith("/auth/sign-in")) {
      return NextResponse.redirect(new URL("/auth/sign-in", request.url));
    }
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
