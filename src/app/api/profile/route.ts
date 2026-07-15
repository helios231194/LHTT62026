import { NextResponse } from 'next/server';
import { getProfile } from '@/lib/local-db';


export async function GET() {
  try {
    const profile = await getProfile();
    return NextResponse.json({ data: profile });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch profile' }, { status: 500 });
  }
}
