import { NextRequest, NextResponse } from 'next/server';
import { saveInquiry } from '@/lib/store';
import { sendInquiryNotification } from '@/lib/email';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, company, email, country, whatsapp, product, message } = body;

    if (!name || !email) {
      return NextResponse.json({ error: 'Name and email are required' }, { status: 400 });
    }

    const inquiry = saveInquiry({
      name: String(name),
      company: String(company || ''),
      email: String(email),
      country: String(country || ''),
      whatsapp: String(whatsapp || ''),
      product: String(product || ''),
      message: String(message || ''),
    });

    await sendInquiryNotification(inquiry);

    return NextResponse.json({ success: true, id: inquiry.id });
  } catch (e) {
    console.error('Contact API error:', e);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
