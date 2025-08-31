import { PrismaClient } from '@prisma/client';

const createWritePrismaClient = () => {
  return new PrismaClient({
    datasources: {
      db: {
        url: process.env.WRITE_DATABASE_URL || process.env.DATABASE_URL,
      },
    },
    log: ['error', 'warn'],
  });
};

// Always create a fresh client for write operations to avoid prepared statement conflicts
const getWritePrismaClient = () => {
  return createWritePrismaClient();
};

export default getWritePrismaClient;
