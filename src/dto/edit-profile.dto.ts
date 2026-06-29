import { Prisma } from "@/generated/prisma/client";

export type EditProfileDto = Partial<Omit<Prisma.UserModel, "id">>;
