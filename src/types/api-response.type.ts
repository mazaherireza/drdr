import { NextResponse } from "next/server";

export type FetchedDataType<TData> =
  | { data: TData; error?: undefined }
  | { data?: undefined; error: string };

export type ApiResponseType<TData> = NextResponse<FetchedDataType<TData>>;
