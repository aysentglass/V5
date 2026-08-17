import { NextRequest, NextResponse } from 'next/server';
import { saveInquiry } from '@/lib/store';
import { sendInquiryNotification } from '@/lib/email';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mnpazezo';

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

    // Forward to Formspree (server-side, no CORS issues)
    try {
      await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: inquiry.name,
          company: inquiry.company,
          email: inquiry.email,
          country: inquiry.country,
          whatsapp: inquiry.whatsapp,
          product: inquiry.product,
          message: inquiry.message,
          _subject: `New Inquiry: ${inquiry.name} - ${inquiry.product}`,
        }),
      });
    } catch (fsError) {
      console.error('Formspree forward failed:', fsError);
      // Continue - local save and email still work
    }

    // Send email notification (if SMTP configured)
    try {
      await sendInquiryNotification(inquiry);
    } catch (emailError) {
      console.error('Email notification failed:', emailError);
    }

    return NextResponse.json({ success: true, id: inquiry.id });
  } catch (e) {
    console.error('Contact API error:', e);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
