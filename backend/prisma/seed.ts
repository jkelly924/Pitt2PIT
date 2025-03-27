import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.user.create({
    data: {
      email: 'test@example.com',
      name: 'Test User',
      timeRequests: {
        create: [
          {
            date: new Date('2025-03-30'),
            startTime: new Date('2025-03-30T10:00:00Z'),
            endTime: new Date('2025-03-30T12:00:00Z'),
          },
        ],
      },
    },
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });