import { NextRequest, NextResponse } from 'next/server';
import getReadPrismaClient from '@/db/read-client';
import getWritePrismaClient from '@/db/write-client';

export async function POST(req: NextRequest) {
  const writePrisma = getWritePrismaClient();
  
  try {
    console.log('Appointment POST request received');
    console.log('Environment:', process.env.NODE_ENV);
    console.log('Database URL exists:', !!process.env.DATABASE_URL);
    console.log('Write Database URL exists:', !!process.env.WRITE_DATABASE_URL);
    
    const { fullName, email, phone, department, doctor, date, reason } = await req.json();
    console.log('Request data:', { fullName, email, phone, department, doctor, date, reason });

    // Validate required fields
    if (!fullName || !email || !phone || !department || !doctor || !date || !reason) {
      console.log('Missing fields detected');
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
    }

    if (!process.env.DATABASE_URL) {
      console.error('DATABASE_URL is not set');
      return NextResponse.json({ 
        error: 'Database configuration error',
        details: 'DATABASE_URL environment variable is not set'
      }, { status: 500 });
    }

    console.log('Creating appointment with write client...');

    // Create new appointment using write client
    const appointment = await writePrisma.appointment.create({
      data: {
        fullName,
        email,
        phone,
        department,
        doctor,
        date: new Date(date), // make sure frontend sends ISO string
        reason,
      },
    });

    console.log('Appointment created successfully:', appointment.id);
    return NextResponse.json(appointment, { status: 201 });
  } catch (error) {
    console.error('Error creating appointment:', error);
    console.error('Error details:', {
      message: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : undefined,
    });
    return NextResponse.json({ 
      error: 'Failed to create appointment',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  } finally {
    // Always disconnect write client
    await writePrisma.$disconnect();
  }
}

export async function GET() {
  const readPrisma = getReadPrismaClient();
  
  try {
    console.log('Fetching appointments with read client...');
    
    const appointments = await readPrisma.appointment.findMany({
      orderBy: { createdAt: 'desc' },
    });

    console.log(`Found ${appointments.length} appointments`);
    return NextResponse.json(appointments);
  } catch (error) {
    console.error('Error fetching appointments:', error);
    console.error('Error details:', {
      message: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : undefined,
    });
    return NextResponse.json({ 
      error: 'Failed to fetch appointments',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  } finally {
    if (process.env.NODE_ENV === 'production') {
      await readPrisma.$disconnect();
    }
  }
}