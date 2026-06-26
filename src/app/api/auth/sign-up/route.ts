import { NextResponse, NextRequest } from "next/server";

import { prisma } from "@/lib/prisma";

import { wrapWithTrycatch } from "@/utils/fetch.util";

import type { ApiResponseType } from "@/types/api-response.type";

export async function POST(
  request: NextRequest,
): Promise<ApiResponseType<null>> {
  return wrapWithTrycatch(async () => {
    const body = await request.json();

    await prisma.user.create({ data: body });

    return NextResponse.json({ data: null }, { status: 201 });
  });
}
