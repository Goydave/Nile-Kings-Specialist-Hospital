import { NextResponse } from 'next/server';
import prisma from '@/db/client';

export async function GET() {
  try {
    // Test database connection
    await prisma.$connect();
    
    // Test a simple query
    const count = await prisma.appointment.count();
    
    return NextResponse.json({
      status: 'healthy',
      database: 'connected',
      appointmentCount: count,
      timestamp: new Date().toISOString(),
      environment: process.env.NODE_ENV,
    });
  } catch (error) {
    console.error('Health check failed:', error);
    return NextResponse.json({
      status: 'unhealthy',
      database: 'disconnected',
      error: error instanceof Error ? error.message : 'Unknown error',
      timestamp: new Date().toISOString(),
      environment: process.env.NODE_ENV,
    }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
