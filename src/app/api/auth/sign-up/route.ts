import { NextResponse, NextRequest } from "next/server";

import { prisma } from "@/lib/prisma";

import { wrapWithTrycatch } from "@/utils/api.util";
import { parseBody } from "@/utils/api.util";
import { setAuthCookie } from "@/utils/set-auth-cookie.util";

import type { ApiResponseType } from "@/types/api-response.type";

import { SignUpDto } from "@/dto/auth.dto";

export async function POST(
  request: NextRequest,
): Promise<ApiResponseType<null>> {
  return wrapWithTrycatch(async () => {
    const [error, data] = await parseBody<SignUpDto>(request);

    if (error !== null) {
      return NextResponse.json({ error }, { status: 400 });
    }

    let user = await prisma.user.findUnique({
      where: { username: data.username },
    });

    if (user) {
      return NextResponse.json(
        { error: "username has already taken." },
        { status: 400 },
      );
    }

    user = await prisma.user.findUnique({
      where: { username: data.email },
    });

    if (user) {
      return NextResponse.json(
        { error: "email has already taken." },
        { status: 400 },
      );
    }

    await prisma.user.create({ data });

    await setAuthCookie();

    return NextResponse.json({ data: null }, { status: 201 });
  });
}
