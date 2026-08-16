import { NextRequest, NextResponse } from 'next/server';
import { getAllInquiries, inquiriesToCSV } from '@/lib/store';

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'aysent2024';

export async function GET(request: NextRequest) {
  const auth = request.headers.get('authorization');
  const password = auth?.replace('Bearer ', '') || request.nextUrl.searchParams.get('token');

  if (password !== ADMIN_PASSWORD) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const inquiries = getAllInquiries();
  const csv = inquiriesToCSV(inquiries);

  return new NextResponse(csv, {
    headers: {
      'Content-Type': 'text/csv; charset=utf-8',
      'Content-Disposition': `attachment; filename="inquiries_${new Date().toISOString().slice(0, 10)}.csv"`,
    },
  });
}
