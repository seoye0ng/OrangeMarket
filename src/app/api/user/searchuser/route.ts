import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  const token = cookies().get('token')?.value;

  const url = new URL(req.url);
  const keyword = url.searchParams.get('keyword') ?? '';

  const res = await fetch(
    `${process.env.BACKEND_BASE_URL}/user/searchuser/?keyword=${encodeURIComponent(keyword)}`,
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
