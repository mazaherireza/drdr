import { NextResponse, NextRequest } from "next/server";

import { wrapWithTrycatch } from "@/utils/api.util";
import { removeAuthCookie } from "@/utils/cookie.util";

import type { ApiResponseType } from "@/types/api-response.type";

export async function DELETE(): Promise<ApiResponseType<null>> {
  return wrapWithTrycatch(async () => {
    await removeAuthCookie();

    return NextResponse.json({ data: null }, { status: 200 });
  });
}
