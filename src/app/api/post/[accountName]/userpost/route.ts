import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function GET(
  req: Request,
  { params }: { params: Promise<{ accountName: string }> },
) {
  const { accountName } = await params;

  const token = cookies().get('token')?.value;

  const url = new URL(req.url);
  const limit = url.searchParams.get('limit');
  const skip = url.searchParams.get('skip');

  // 백엔드 API 호출
  const res = await fetch(
    `${process.env.BACKEND_BASE_URL}/post/${accountName}/userpost?limit=${limit}&skip=${skip}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
      cache: 'no-store',
    },
  );

  const data = await res.json();
  return NextResponse.json(data);
}
