import { NextResponse, NextRequest } from "next/server";

import { prisma } from "@/lib/prisma";

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const body = await request.json();
    console.log(body);

    await prisma.user.create({ data: body });

    return NextResponse.json(
      { message: "User created successfully." },
      { status: 201 },
    );
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json(
      { error: "Something went wrong" },
      {
        status: 500,
      },
    );
  }
}
