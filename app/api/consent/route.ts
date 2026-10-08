import { NextRequest, NextResponse } from 'next/server';

const SUPABASE_URL = process.env.SUPABASE_URL!;
const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_KEY!;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { action, category, timestamp, country } = body;

    if (!action || !category) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Insert into Supabase
    const response = await fetch(`${SUPABASE_URL}/rest/v1/consent_logs`, {
      method: 'POST',
      headers: {
        'apikey': SUPABASE_SERVICE_KEY,
        'Authorization': `Bearer ${SUPABASE_SERVICE_KEY}`,
        'Content-Type': 'application/json',
        'Prefer': 'return=minimal',
      },
      body: JSON.stringify({
        action,
        category,
        country: country || null,
        created_at: timestamp || new Date().toISOString(),
        user_agent: request.headers.get('user-agent') || null,
      }),
    });

    if (!response.ok) {
      console.error('Supabase insert error:', response.status, await response.text());
      return NextResponse.json({ error: 'Failed to log consent' }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Consent API error:', error);
    return NextResponse.json({ error: 'Internal error' }, { status: 500 });
  }
}

// Admin: export consent logs as CSV
export async function GET(request: NextRequest) {
  const authHeader = request.headers.get('authorization');
  if (authHeader !== `Bearer ${process.env.ADMIN_CSV_TOKEN}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const response = await fetch(
      `${SUPABASE_URL}/rest/v1/consent_logs?select=*&order=created_at.desc`,
      {
        headers: {
          'apikey': SUPABASE_SERVICE_KEY,
          'Authorization': `Bearer ${SUPABASE_SERVICE_KEY}`,
        },
      }
    );

    if (!response.ok) {
      return NextResponse.json({ error: 'Failed to fetch logs' }, { status: 500 });
    }

    const logs = await response.json();

    // Build CSV
    const headers = ['id', 'action', 'category', 'country', 'created_at', 'user_agent'];
    const rows = logs.map((log: any) =>
      headers.map(h => `"${(log[h] || '').toString().replace(/"/g, '""')}"`).join(',')
    );
    const csv = [headers.join(','), ...rows].join('\n');

    return new NextResponse(csv, {
      headers: {
        'Content-Type': 'text/csv',
        'Content-Disposition': 'attachment; filename="consent_logs.csv"',
      },
    });
  } catch (error) {
    console.error('CSV export error:', error);
    return NextResponse.json({ error: 'Internal error' }, { status: 500 });
  }
}
