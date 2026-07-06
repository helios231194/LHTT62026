import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

const UPLOADS_DIR = path.join(process.cwd(), 'public/uploads');

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

export async function POST(req: NextRequest) {
  const isAuthorized = await checkAuth(req);
  if (!isAuthorized) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const formData = await req.formData();
    const file = formData.get('file') as File | null;

    if (!file) {
      return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    
    // Ensure directory exists
    await fs.mkdir(UPLOADS_DIR, { recursive: true });

    // Generate unique name to avoid overwriting files with the same name
    const timestamp = Date.now();
    const safeName = file.name.replace(/[^a-zA-Z0-9.\-_]/g, '');
    const filename = `${timestamp}-${safeName}`;
    const filepath = path.join(UPLOADS_DIR, filename);

    await fs.writeFile(filepath, buffer);

    const fileUrl = `/uploads/${filename}`;
    
    // NocoBase attachment object format compatibility
    return NextResponse.json({
      id: timestamp,
      filename: file.name,
      url: fileUrl,
      mimetype: file.type,
    });
  } catch (error) {
    console.error('File upload error:', error);
    return NextResponse.json({ error: 'Failed to upload file' }, { status: 500 });
  }
}
