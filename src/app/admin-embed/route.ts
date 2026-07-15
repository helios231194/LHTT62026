import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

export const dynamic = 'force-dynamic';

export async function GET(req: NextRequest) {
  const filePath = path.join(process.cwd(), 'public/admin-embed/dashboard.html');
  try {
    const htmlContent = await fs.readFile(filePath, 'utf-8');
    
    // Trả về file HTML với các headers bảo mật cho phép NocoBase nhúng
    return new NextResponse(htmlContent, {
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
        'Content-Security-Policy': "frame-ancestors 'self' https://lht.gun.hmz.one",
        'X-Content-Type-Options': 'nosniff',
        'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0',
      },
    });
  } catch (error) {
    console.error('Failed to read dashboard html:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
