import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function GET(
  req: Request,
  { params }: { params: Promise<{ accountName: string }> },
) {
  const { accountName } = await params;

  const token = cookies().get('token')?.value;

  const res = await fetch(
    `${process.env.BACKEND_BASE_URL}/product/${accountName}`,
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
