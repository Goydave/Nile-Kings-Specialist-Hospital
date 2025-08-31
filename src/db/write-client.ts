import { PrismaClient } from '@prisma/client';

const createWritePrismaClient = () => {
  // Use Transaction Pooler but with aggressive connection management
  const writeUrl = process.env.WRITE_DATABASE_URL || process.env.DATABASE_URL;
  
  console.log('Write client using URL:', writeUrl);
  
  return new PrismaClient({
    datasources: {
      db: {
        url: writeUrl,
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
