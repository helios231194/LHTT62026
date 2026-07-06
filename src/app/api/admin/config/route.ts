import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

const DATA_DIR = path.join(process.cwd(), 'src/data');

const TAB_FILES: Record<string, string> = {
  homepage: 'homepage.json',
  partners: 'partners.json',
  testimonials: 'testimonials.json',
  speaker_events: 'speaker_events.json',
  customer_screenshots: 'customer_screenshots.json',
  personal_products: 'personal_products.json',
  business_products: 'business_products.json',
  stats: 'stats.json',
  facebook_posts: 'facebook_posts.json',
  speaker_assets: 'speaker_assets.json',
};

// Verify Admin Token via NocoBase API
async function checkAuth(req: NextRequest): Promise<boolean> {
  const authHeader = req.headers.get('authorization');
  if (!authHeader) return false;

  const nocobaseUrl = process.env.NOCOBASE_BASE_URL || 'https://lht.gun.hmz.one';
  try {
    const res = await fetch(`${nocobaseUrl}/api/users:getSelf`, {
      headers: {
        Authorization: authHeader,
      },
      cache: 'no-store',
    });
    return res.status === 200;
  } catch (error) {
    console.error('Auth verification error:', error);
    return false;
  }
}

async function readJsonFile(filename: string): Promise<any> {
  const filepath = path.join(DATA_DIR, filename);
  try {
    const data = await fs.readFile(filepath, 'utf-8');
    return JSON.parse(data);
  } catch (error: any) {
    if (error.code === 'ENOENT') {
      // Return empty array for lists, empty object for singular config files
      if (['homepage.json', 'speaker_assets.json'].includes(filename)) {
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

    // Singular object overrides
    if (['homepage', 'speaker_assets'].includes(tab)) {
      await writeJsonFile(filename, payload);
      return NextResponse.json({ data: payload });
    }

    // List-based updates
    const list = await readJsonFile(filename);
    if (!Array.isArray(list)) {
      return NextResponse.json({ error: 'Target file is not an array list' }, { status: 500 });
    }

    if (payload.id) {
      // Update existing item
      const index = list.findIndex((item: any) => item.id === payload.id);
      if (index !== -1) {
        list[index] = { ...list[index], ...payload };
      } else {
        list.push(payload);
      }
    } else {
      // Create new item
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
