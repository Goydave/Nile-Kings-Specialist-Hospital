import { PrismaClient } from '@prisma/client';

const createWritePrismaClient = () => {
  // Use direct connection for write operations to avoid Transaction Pooler conflicts
  const writeUrl = process.env.WRITE_DATABASE_URL || process.env.DATABASE_URL;
  
  // If using Supabase Transaction Pooler, convert to direct connection
  let directUrl = writeUrl;
  if (writeUrl && writeUrl.includes('pooler.supabase.com:6543')) {
    // Convert from Transaction Pooler to Direct Connection
    directUrl = writeUrl.replace('pooler.supabase.com:6543', 'db.hbkiniorgxsydllivtzs.supabase.co:5432');
    directUrl = directUrl.replace('postgres.hbkiniorgxsydllivtzs', 'postgres');
  }
  
  return new PrismaClient({
    datasources: {
      db: {
        url: directUrl,
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
