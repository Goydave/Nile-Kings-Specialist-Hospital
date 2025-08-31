import { NextResponse } from 'next/server';
import getPrismaClient from '@/db/client';

export async function GET() {
  const prisma = getPrismaClient();
  
  try {
    console.log('Testing database connection...');
    console.log('Environment:', process.env.NODE_ENV);
    console.log('Database URL exists:', !!process.env.DATABASE_URL);
    
    if (!process.env.DATABASE_URL) {
      return NextResponse.json({
        success: false,
        error: 'DATABASE_URL not set',
        environment: process.env.NODE_ENV
      }, { status: 500 });
    }

    // Test connection
    await prisma.$connect();
    console.log('Database connected successfully');
    
    // Test a simple query
    const result = await prisma.$queryRaw`SELECT 1 as test`;
    console.log('Query result:', result);
    
    return NextResponse.json({
      success: true,
      message: 'Database connection successful',
      environment: process.env.NODE_ENV,
      queryResult: result
    });
  } catch (error) {
    console.error('Database connection test failed:', error);
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
      environment: process.env.NODE_ENV,
      databaseUrl: process.env.DATABASE_URL ? 'Set' : 'Not set'
    }, { status: 500 });
  } finally {
    if (process.env.NODE_ENV === 'production') {
      try {
        await prisma.$disconnect();
      } catch (disconnectError) {
        console.error('Error disconnecting:', disconnectError);
      }
    }
  }
}
