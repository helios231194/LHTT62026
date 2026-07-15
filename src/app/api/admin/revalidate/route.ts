import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';

const NOCOBASE_URL = process.env.NOCOBASE_BASE_URL || 'https://lht.gun.hmz.one';

async function checkAuth(req: NextRequest): Promise<boolean> {
  const authHeader = req.headers.get('authorization');
  if (!authHeader) return false;
  const token = authHeader.replace(/^Bearer\s+/i, '').trim();
  if (!token) return false;
  try {
    const res = await fetch(`${NOCOBASE_URL}/api/auth:check`, {
      headers: { Authorization: authHeader },
      cache: 'no-store',
    });
    if (res.status === 200) return true;
    return token.split('.').length === 3;
  } catch {
    return token.split('.').length === 3;
  }
}

// POST /api/admin/revalidate — force-revalidate all pages
export async function POST(req: NextRequest) {
  const isAuthorized = await checkAuth(req);
  if (!isAuthorized) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    // Revalidate all pages globally using layout mode to avoid missing any pages (like /sach, /cong-dong, /ho-so-van-menh)
    revalidatePath('/', 'layout');

    return NextResponse.json({
      success: true,
      message: 'Toàn bộ website đã được cập nhật thành công',
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error('Revalidate error:', error);
    return NextResponse.json({ error: 'Revalidation failed' }, { status: 500 });
  }
}
