import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/db/client';

export async function POST(req: NextRequest) {
  try {
    const { fullName, email, phone, department, doctor, date, reason } = await req.json();

    // Validate required fields
    if (!fullName || !email || !phone || !department || !doctor || !date || !reason) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
    }

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

    return NextResponse.json(appointment, { status: 201 });
  } catch (error) {
    console.error('Error creating appointment:', error);
    return NextResponse.json({ error: 'Failed to create appointment' }, { status: 500 });
  }
}

export async function GET() {
  try {
    const appointments = await prisma.appointment.findMany({
      orderBy: { createdAt: 'desc' },
    });

    return NextResponse.json(appointments);
  } catch (error) {
    console.error('Error fetching appointments:', error);
    return NextResponse.json({ error: 'Failed to fetch appointments' }, { status: 500 });
  }
}