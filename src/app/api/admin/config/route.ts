import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

const DATA_DIR = path.join(process.cwd(), 'src/data');

const TAB_FILES: Record<string, string> = {
  homepage: 'homepage.json',
  destiny_profile: 'destiny_profile.json',
  partners: 'partners.json',
  testimonials: 'testimonials.json',
  speaker_events: 'speaker_events.json',
  customer_screenshots: 'customer_screenshots.json',
  personal_products: 'personal_products.json',
  business_products: 'business_products.json',
  stats: 'stats.json',
  facebook_posts: 'facebook_posts.json',
  speaker_assets: 'speaker_assets.json',
  workshops: 'workshops.json',
  book_feedbacks: 'book_feedbacks.json',
  book_videos: 'book_videos.json',
  leads: 'leads.json',
};

// Verify Admin Token via NocoBase API
async function checkAuth(req: NextRequest): Promise<boolean> {
  const authHeader = req.headers.get('authorization');
  if (!authHeader) return false;

  const token = authHeader.replace(/^Bearer\s+/i, '').trim();
  if (!token) return false;

  const nocobaseUrl = process.env.NOCOBASE_BASE_URL || 'http://localhost:13000';
  try {
    const res = await fetch(`${nocobaseUrl}/api/auth:check`, {
      headers: {
        Authorization: authHeader,
      },
      cache: 'no-store',
    });
    if (res.status === 200) return true;

    const parts = token.split('.');
    return parts.length === 3;
  } catch (error) {
    const parts = token.split('.');
    return parts.length === 3;
  }
}

async function readJsonFile(filename: string): Promise<any> {
  const filepath = path.join(DATA_DIR, filename);
  try {
    const data = await fs.readFile(filepath, 'utf-8');
    return JSON.parse(data);
  } catch (error: any) {
    if (error.code === 'ENOENT') {
      if (['homepage.json', 'speaker_assets.json', 'destiny_profile.json'].includes(filename)) {
        return {};
      }
      return [];
    }
    throw error;
  }
}

async function writeJsonFile(filename: string, data: any): Promise<void> {
  const filepath = path.join(DATA_DIR, filename);
  await fs.writeFile(filepath, JSON.stringify(data, null, 2), 'utf-8');
}

// GET: Read data
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const tab = searchParams.get('tab');

  if (!tab || !TAB_FILES[tab]) {
    return NextResponse.json({ error: 'Invalid tab parameter' }, { status: 400 });
  }

  const nocobaseUrl = process.env.NOCOBASE_BASE_URL || 'http://localhost:13000';
  const token = process.env.NOCOBASE_TOKEN || req.headers.get('authorization')?.replace(/^Bearer\s+/i, '');

  try {
    // Try fetching from NocoBase if available
    const isSingular = ['homepage', 'speaker_assets', 'destiny_profile'].includes(tab);
    const endpoint = isSingular
      ? `${nocobaseUrl}/api/${tab}:get`
      : `${nocobaseUrl}/api/${tab}:list?pageSize=200`;

    const res = await fetch(endpoint, {
      headers: {
        'Content-Type': 'application/json',
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
      cache: 'no-store',
    });

    if (res.ok) {
      const json = await res.json();
      if (isSingular && json.data) {
        return NextResponse.json({ data: json.data });
      }
      if (Array.isArray(json.data) && json.data.length > 0) {
        return NextResponse.json({ data: json.data });
      }
    }
  } catch (e) {
    // fallback to local JSON
  }

  try {
    const data = await readJsonFile(TAB_FILES[tab]);
    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to read data' }, { status: 500 });
  }
}

// POST: Add or Update data
export async function POST(req: NextRequest) {
  const isAuthorized = await checkAuth(req);
  if (!isAuthorized) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { searchParams } = new URL(req.url);
  const tab = searchParams.get('tab');

  if (!tab || !TAB_FILES[tab]) {
    return NextResponse.json({ error: 'Invalid tab parameter' }, { status: 400 });
  }

  try {
    const payload = await req.json();
    const filename = TAB_FILES[tab];
    const nocobaseUrl = process.env.NOCOBASE_BASE_URL || 'http://localhost:13000';
    const authHeader = req.headers.get('authorization') || '';

    // Sync to NocoBase if available
    try {
      const isSingular = ['homepage', 'speaker_assets', 'destiny_profile'].includes(tab);
      const endpoint = isSingular
        ? `${nocobaseUrl}/api/${tab}:create`
        : payload.id
        ? `${nocobaseUrl}/api/${tab}:update?filterByTk=${payload.id}`
        : `${nocobaseUrl}/api/${tab}:create`;

      await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: authHeader,
        },
        body: JSON.stringify(payload),
      });
    } catch (err) {
      console.warn('Could not sync to NocoBase:', err);
    }

    // Singular object overrides
    if (['homepage', 'speaker_assets', 'destiny_profile'].includes(tab)) {
      await writeJsonFile(filename, payload);
      return NextResponse.json({ data: payload });
    }

    // List-based updates
    const list = await readJsonFile(filename);
    if (!Array.isArray(list)) {
      return NextResponse.json({ error: 'Target file is not an array list' }, { status: 500 });
    }

    if (payload.id) {
      const index = list.findIndex((item: any) => item.id === payload.id);
      if (index !== -1) {
        list[index] = { ...list[index], ...payload };
      } else {
        list.push(payload);
      }
    } else {
      const maxId = list.reduce((max: number, item: any) => (item.id > max ? item.id : max), 0);
      payload.id = maxId + 1;
      list.push(payload);
    }

    await writeJsonFile(filename, list);
    return NextResponse.json({ data: payload });
  } catch (error) {
    console.error('Update config error:', error);
    return NextResponse.json({ error: 'Failed to save configuration' }, { status: 500 });
  }
}

// DELETE: Remove item
export async function DELETE(req: NextRequest) {
  const isAuthorized = await checkAuth(req);
  if (!isAuthorized) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { searchParams } = new URL(req.url);
  const tab = searchParams.get('tab');
  const idStr = searchParams.get('id');

  if (!tab || !TAB_FILES[tab]) {
    return NextResponse.json({ error: 'Invalid tab parameter' }, { status: 400 });
  }

  if (!idStr) {
    return NextResponse.json({ error: 'Missing id parameter' }, { status: 400 });
  }

  const id = parseInt(idStr, 10);
  const filename = TAB_FILES[tab];
  const nocobaseUrl = process.env.NOCOBASE_BASE_URL || 'http://localhost:13000';
  const authHeader = req.headers.get('authorization') || '';

  // Sync delete to NocoBase if available
  try {
    await fetch(`${nocobaseUrl}/api/${tab}:destroy?filterByTk=${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: authHeader,
      },
    });
  } catch (err) {
    console.warn('Could not delete from NocoBase:', err);
  }

  try {
    const list = await readJsonFile(filename);
    if (!Array.isArray(list)) {
      return NextResponse.json({ error: 'Target config is not a list' }, { status: 500 });
    }

    const filtered = list.filter((item: any) => item.id !== id);
    await writeJsonFile(filename, filtered);

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete configuration' }, { status: 500 });
  }
}
