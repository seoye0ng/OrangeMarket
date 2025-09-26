import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function GET(
  req: Request,
  { params }: { params: Promise<{ accountname: string }> },
) {
  const { accountname } = await params;
  const token = cookies().get('token')?.value;

  console.log('token in profile proxy:', token);

  const res = await fetch(
    `${process.env.BACKEND_BASE_URL}/profile/${accountname}`,
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
