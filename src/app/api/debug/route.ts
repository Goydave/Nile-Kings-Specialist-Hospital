import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    nodeEnv: process.env.NODE_ENV,
    databaseUrl: process.env.DATABASE_URL ? 'Set (length: ' + process.env.DATABASE_URL.length + ')' : 'Not set',
    hasPrisma: typeof require !== 'undefined' ? 'Available' : 'Not available',
    timestamp: new Date().toISOString(),
  });
}
