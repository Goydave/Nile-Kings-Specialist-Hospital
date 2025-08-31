import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/db/client';

export async function POST(req: NextRequest) {
  try {
    console.log('Appointment POST request received');
    
    const { fullName, email, phone, department, doctor, date, reason } = await req.json();
    console.log('Request data:', { fullName, email, phone, department, doctor, date, reason });

    // Validate required fields
    if (!fullName || !email || !phone || !department || !doctor || !date || !reason) {
      console.log('Missing fields detected');
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
    }

    console.log('Connecting to database...');
    await prisma.$connect();
    console.log('Database connected successfully');

    // Create new appointment
    const appointment = await prisma.appointment.create({
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
    await prisma.$disconnect();
  }
}

export async function GET() {
  try {
    console.log('Fetching appointments...');
    await prisma.$connect();
    console.log('Database connected for fetching appointments');
    
    const appointments = await prisma.appointment.findMany({
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
    await prisma.$disconnect();
  }
}