import { NextRequest, NextResponse } from 'next/server';
import { getAllInquiries } from '@/lib/store';

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'aysent2024';

export async function GET(request: NextRequest) {
  const auth = request.headers.get('authorization');
  const password = auth?.replace('Bearer ', '') || request.nextUrl.searchParams.get('password');

  if (password !== ADMIN_PASSWORD) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const inquiries = getAllInquiries();
  return NextResponse.json(inquiries);
}
