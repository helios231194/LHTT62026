import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const payload = await req.json();
    const nocobaseUrl = process.env.NOCOBASE_BASE_URL || 'https://lht.gun.hmz.one';
    const token = process.env.NOCOBASE_TOKEN || '';

    // Forward the lead submission to NocoBase with the secret token
    const res = await fetch(`${nocobaseUrl}/api/leads:create`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
      cache: 'no-store',
    });

    if (!res.ok) {
      const errText = await res.text();
      console.error('Error forwarding lead to NocoBase:', errText);
      return NextResponse.json({ error: 'Failed to submit lead to CRM' }, { status: res.status });
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Lead submission proxy error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
