import { PrismaClient } from '@prisma/client';

declare global {
  var readPrisma: PrismaClient | undefined;
}

const createReadPrismaClient = () => {
  return new PrismaClient({
    datasources: {
      db: {
        url: process.env.DATABASE_URL,
      },
    },
    log: ['error', 'warn'],
  });
};

// Always create a fresh client to avoid prepared statement conflicts
const getReadPrismaClient = () => {
  return createReadPrismaClient();
};

export default getReadPrismaClient;
