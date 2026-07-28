import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const { name, email, phone, service, date, message } = body;

    if (!name || !email || !service) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields: name, email, service.' },
        { status: 400 }
      );
    }

    // TODO: integrate email notification (e.g. Resend, SendGrid) before production launch
    console.log('Booking request received:', { name, email, phone, service, date, message });

    return NextResponse.json(
      { success: true, message: 'Booking request received. We will be in touch shortly.' },
      { status: 200 }
    );
  } catch (err) {
    console.error('Booking API error:', err);
    return NextResponse.json(
      { success: false, error: 'Invalid request body.' },
      { status: 400 }
    );
  }
}
