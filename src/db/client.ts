import { PrismaClient } from '@prisma/client';

declare global {
  var prisma: PrismaClient | undefined;
}

const createPrismaClient = () => {
  return new PrismaClient({
    datasources: {
      db: {
        url: process.env.DATABASE_URL,
      },
    },
    log: ['error', 'warn'],
  });
};

// Create a new instance for each request in production to avoid prepared statement conflicts
const getPrismaClient = () => {
  if (process.env.NODE_ENV === 'production') {
    return createPrismaClient();
  }
  
  if (!globalThis.prisma) {
    globalThis.prisma = createPrismaClient();
  }
  
  return globalThis.prisma;
};

export default getPrismaClient;