import { NextRequest, NextResponse } from "next/server";

import type { ApiResponseType } from "@/types/api-response.type";

type ParseBodyResult<T> = [error: null, data: T] | [error: string, data: null];

export async function parseBody<T>(
  request: NextRequest,
): Promise<ParseBodyResult<T>> {
  try {
    const body = await request.json();

    return [null, body];
  } catch (error) {
    if (error instanceof Error) {
      if (error.name === "SyntaxError") {
        return ["Wrong Format", null];
      }

      return [error.message, null];
    }

    if (typeof error === "string") {
      return [error, null];
    }

    return ["Unknown Error", null];
  }
}

export async function wrapWithTrycatch<T>(
  callback: () => Promise<ApiResponseType<T>>,
): Promise<ApiResponseType<T>> {
  try {
    return await callback();
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json(
      { error: "Unknown Error" },
      {
        status: 500,
      },
    );
  }
}
