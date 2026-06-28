import { NextRequest, NextResponse } from "next/server";

import { SignInDto } from "@/dto/auth.dto";

import { prisma } from "@/lib/prisma";

import type { ApiResponseType } from "@/types/api-response.type";

import { wrapWithTrycatch } from "@/utils/api.util";
import { parseBody } from "@/utils/api.util";
import { comparePassword } from "@/utils/bcrypt.util";
import { setAuthCookie } from "@/utils/cookie.util";

export async function POST(
  request: NextRequest,
): Promise<ApiResponseType<null>> {
  return wrapWithTrycatch(async () => {
    const [error, data] = await parseBody<SignInDto>(request);

    if (error !== null) {
      return NextResponse.json({ error }, { status: 400 });
    }

    const user = await prisma.user.findUnique({
      where: { username: data.username },
    });

    if (!user) {
      return NextResponse.json(
        { error: "username not found" },
        { status: 400 },
      );
    }

    if (!(await comparePassword(data.password, user.password))) {
      return NextResponse.json(
        { error: "username or password is incorrect" },
        { status: 401 },
      );
    }

    if (user) {
      return NextResponse.json(
        { error: "email has already taken." },
        { status: 400 },
      );
    }

    await setAuthCookie();

    return NextResponse.json({ data: null }, { status: 200 });
  });
}
