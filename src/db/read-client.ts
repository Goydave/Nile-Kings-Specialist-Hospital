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

// Use singleton for read operations to maintain connection efficiency
const getReadPrismaClient = () => {
  if (process.env.NODE_ENV === 'production') {
    // In production, create a new client for each request to avoid conflicts
    return createReadPrismaClient();
  }
  
  // Use singleton in development
  if (!globalThis.readPrisma) {
    globalThis.readPrisma = createReadPrismaClient();
  }
  
  return globalThis.readPrisma;
};

export default getReadPrismaClient;
