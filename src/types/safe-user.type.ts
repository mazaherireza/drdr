import { Prisma } from "@/generated/prisma/client";

export type safeUserType = Omit<Prisma.UserModel, "id" | "password">;
