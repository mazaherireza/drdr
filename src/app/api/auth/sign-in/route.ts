import { NextRequest, NextResponse } from "next/server";

import { SignInDto } from "@/dto/auth.dto";

import { prisma } from "@/lib/prisma";

import type { ApiResponseType } from "@/types/api-response.type";

import { parseBody, wrapWithTrycatch } from "@/utils/api.util";
import { comparePassword } from "@/utils/bcrypt.util";
import { setAuthCookie } from "@/utils/cookie.util";

export async function POST(
  request: NextRequest,
): Promise<ApiResponseType<null>> {
  return wrapWithTrycatch(async () => {
    const [parsedError, body] = await parseBody<SignInDto>(request);

    if (parsedError !== null) {
      return NextResponse.json({ error: parsedError }, { status: 400 });
    }

    const foundUser = await prisma.user.findUnique({
      where: { username: body.username },
    });

    if (!foundUser) {
      return NextResponse.json(
        { error: "کاربری با این مشخصات پیدا نشد" },
        { status: 400 },
      );
    }

    if (!(await comparePassword(body.password, foundUser.password))) {
      return NextResponse.json(
        { error: "نام‌کاربری یا رمز عبور اشتباه است" },
        { status: 401 },
      );
    }

    await setAuthCookie(foundUser.id);

    return NextResponse.json({ data: null }, { status: 200 });
  });
}
