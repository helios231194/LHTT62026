import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

// Disable Node.js TLS certificate rejection for internal proxy calls inside Docker
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

const DATA_DIR = path.join(process.cwd(), 'src/data');
const LEADS_FILE = path.join(DATA_DIR, 'leads.json');

async function saveLeadLocally(payload: any) {
  try {
    await fs.mkdir(DATA_DIR, { recursive: true });
    let list: any[] = [];
    try {
      const content = await fs.readFile(LEADS_FILE, 'utf-8');
      list = JSON.parse(content);
    } catch {
      list = [];
    }

    const maxId = list.reduce((max: number, item: any) => (item.id > max ? item.id : max), 0);
    const newEntry = {
      id: maxId + 1,
      ...payload,
      createdAt: new Date().toISOString(),
    };

    list.push(newEntry);
    await fs.writeFile(LEADS_FILE, JSON.stringify(list, null, 2), 'utf-8');
    return newEntry;
  } catch (err) {
    console.error('Error saving lead locally:', err);
    return null;
  }
}

export async function POST(req: NextRequest) {
  try {
    const payload = await req.json();
    const nocobaseUrl = process.env.NOCOBASE_BASE_URL || 'https://linhhoatam.apps.agentic.io.vn';
    const token = process.env.NOCOBASE_TOKEN || '';

    const leadPayload = {
      ...payload,
      status: payload.status || 'new',
      source: payload.source || 'Website Form',
    };

    // 1. Always save a copy locally so data is never lost
    await saveLeadLocally(leadPayload);

    // 2. Forward the lead submission to NocoBase
    try {
      const res = await fetch(`${nocobaseUrl}/api/leads:create`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(leadPayload),
        cache: 'no-store',
      });

      if (res.ok) {
        const data = await res.json();
        return NextResponse.json(data);
      } else {
        const errText = await res.text();
        console.warn('NocoBase lead submission warning (saved locally):', res.status, errText);
        return NextResponse.json({ success: true, saved: 'local' });
      }
    } catch (nocobaseErr: any) {
      console.warn('NocoBase network error (saved locally):', nocobaseErr.message);
      return NextResponse.json({ success: true, saved: 'local' });
    }
  } catch (error) {
    console.error('Lead submission main handler error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
