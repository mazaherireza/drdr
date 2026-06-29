import { NextRequest, NextResponse } from "next/server";

import { SignUpDto } from "@/dto/auth.dto";

import { prisma } from "@/lib/prisma";

import type { ApiResponseType } from "@/types/api-response.type";

import { parseBody, wrapWithTrycatch } from "@/utils/api.util";
import { hashPassword } from "@/utils/bcrypt.util";
import { setAuthCookie } from "@/utils/cookie.util";

export async function POST(
  request: NextRequest,
): Promise<ApiResponseType<null>> {
  return wrapWithTrycatch(async () => {
    const [parsedError, body] = await parseBody<SignUpDto>(request);

    if (parsedError !== null) {
      return NextResponse.json({ error: parsedError }, { status: 400 });
    }

    let alreadExistedUser = await prisma.user.findUnique({
      where: { username: body.username },
    });

    if (alreadExistedUser) {
      return NextResponse.json(
        { error: "نام کاربری تکراری است" },
        { status: 400 },
      );
    }

    alreadExistedUser = await prisma.user.findUnique({
      where: { username: body.email },
    });

    if (alreadExistedUser) {
      return NextResponse.json({ error: "ایمیل تکراری است" }, { status: 400 });
    }

    const hashedPassword = await hashPassword(body.password);

    const createdUser = await prisma.user.create({
      data: { ...body, password: hashedPassword },
    });

    await setAuthCookie(createdUser.id);

    return NextResponse.json({ data: null }, { status: 201 });
  });
}
