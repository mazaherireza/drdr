import { Prisma } from "@/generated/prisma/client";

export type SignUpDto = Omit<Prisma.UserModel, "id">;
