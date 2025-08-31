import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const dbUrl = process.env.DATABASE_URL;
    
    if (!dbUrl) {
      return NextResponse.json({
        error: 'DATABASE_URL not set',
        status: 'failed'
      }, { status: 500 });
    }

    // Check if it's using pooled connection
    const isPooled = dbUrl.includes('6543') || dbUrl.includes('pgbouncer=true');
    
    return NextResponse.json({
      status: 'success',
      hasDatabaseUrl: true,
      isPooledConnection: isPooled,
      connectionType: isPooled ? 'pooled' : 'direct',
      urlLength: dbUrl.length,
      environment: process.env.NODE_ENV
    });
  } catch (error) {
    return NextResponse.json({
      error: error instanceof Error ? error.message : 'Unknown error',
      status: 'failed'
    }, { status: 500 });
  }
}
