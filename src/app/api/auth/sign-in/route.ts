import { NextResponse, NextRequest } from "next/server";

import { prisma } from "@/lib/prisma";

import { wrapWithTrycatch } from "@/utils/api.util";
import { parseBody } from "@/utils/api.util";

import type { ApiResponseType } from "@/types/api-response.type";

import { SignInDto } from "@/dto/auth.dto";

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

    if (data.password !== user.password) {
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

    return NextResponse.json({ data: null }, { status: 200 });
  });
}
