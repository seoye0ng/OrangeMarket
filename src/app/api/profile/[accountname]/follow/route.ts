import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function POST(
  req: Request,
  { params }: { params: Promise<{ accountName: string }> },
) {
  const { accountName } = await params;

  const token = cookies().get('token')?.value;

  const res = await fetch(
    `${process.env.BACKEND_BASE_URL}/profile/${accountName}/follow`,
    {
      method: 'POST',
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
