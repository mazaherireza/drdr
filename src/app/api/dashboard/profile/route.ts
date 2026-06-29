import { NextRequest, NextResponse } from "next/server";

import { Prisma } from "@/generated/prisma/client";

import { EditProfileDto } from "@/dto/edit-profile.dto";

import { prisma } from "@/lib/prisma";

import type { ApiResponseType } from "@/types/api-response.type";
import { safeUserType } from "@/types/safe-user.type";

import { parseBody, wrapWithTrycatch } from "@/utils/api.util";
import { hashPassword } from "@/utils/bcrypt.util";
import { extractUserId } from "@/utils/cookie.util";

export async function GET(
  request: NextRequest,
): Promise<ApiResponseType<safeUserType>> {
  return wrapWithTrycatch(async () => {
    const foundUser = await findUser(request);

    if (!foundUser) {
      return NextResponse.json(
        { error: "ابتدا وارد حساب کاربری خود شوید" },
        { status: 401 },
      );
    }

    const { id, password, ...safeUser } = foundUser;

    return NextResponse.json({ data: safeUser }, { status: 200 });
  });
}

export async function PATCH(
  request: NextRequest,
): Promise<ApiResponseType<null>> {
  return wrapWithTrycatch(async () => {
    const [parsedError, body] = await parseBody<EditProfileDto>(request);

    if (parsedError !== null) {
      return NextResponse.json({ error: parsedError }, { status: 400 });
    }

    const foundUser = await findUser(request);

    if (!foundUser) {
      return NextResponse.json(
        { error: "ابتدا وارد حساب کاربری خود شودید" },
        { status: 401 },
      );
    }

    if (body.password) {
      body.password = await hashPassword(body.password);
    }

    await prisma.user.update({ where: { id: foundUser.id }, data: body });

    return NextResponse.json({ data: null }, { status: 200 });
  });
}

async function findUser(
  request: NextRequest,
): Promise<Prisma.UserModel | null> {
  const userId = await extractUserId(request);

  if (!userId) {
    return null;
  }

  const foundUser = await prisma.user.findUnique({
    where: { id: userId },
  });

  if (!foundUser) {
    return null;
  }

  return foundUser;
}
