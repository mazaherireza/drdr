import { PrismaPg } from "@prisma/adapter-pg";

import { PrismaClient } from "@/generated/prisma/client";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL!,
});

const prisma = new PrismaClient({
  adapter,
});

export async function main() {
  await prisma.user.deleteMany();

  const users = await prisma.user.createMany({
    data: [
      {
        name: "Reza Mazaheri",
        username: "rezamazaheri",
        email: "rezamazaheri.email@gmail.com",
        password: "1001",
      },
    ],
  });
}

main()
  .catch((e) => {
    console.error("Error seeding data:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
