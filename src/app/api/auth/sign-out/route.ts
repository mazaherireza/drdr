import { NextResponse } from "next/server";

import type { ApiResponseType } from "@/types/api-response.type";

import { wrapWithTrycatch } from "@/utils/api.util";
import { removeAuthCookie } from "@/utils/cookie.util";

export async function DELETE(): Promise<ApiResponseType<null>> {
  return wrapWithTrycatch(async () => {
    await removeAuthCookie();

    return NextResponse.json({ data: null }, { status: 200 });
  });
}
