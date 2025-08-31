import { NextResponse } from 'next/server';
import getReadPrismaClient from '@/db/read-client';

export async function GET() {
  const readPrisma = getReadPrismaClient();
  
  try {
    // Test database connection
    await readPrisma.$connect();
    
    // Try to count appointments
    const count = await readPrisma.appointment.count();
    
    return NextResponse.json({ 
      status: 'success', 
      message: 'Database connection successful',
      appointmentCount: count,
      databaseUrl: process.env.DATABASE_URL ? 'Set' : 'Not set'
    });
  } catch (error) {
    console.error('Database connection error:', error);
    return NextResponse.json({ 
      status: 'error', 
      message: 'Database connection failed',
      error: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  } finally {
    // Always disconnect read client
    await readPrisma.$disconnect();
  }
}
