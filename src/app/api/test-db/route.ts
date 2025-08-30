import { NextResponse } from 'next/server';
import prisma from '@/db/client';

export async function GET() {
  try {
    // Test database connection
    await prisma.$connect();
    
    // Try to count appointments
    const count = await prisma.appointment.count();
    
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
    await prisma.$disconnect();
  }
}
