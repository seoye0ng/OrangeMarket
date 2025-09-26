import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function GET(
  req: Request,
  {
    params,
  }: {
    params: Promise<{
      accountname: string;
      followListType: 'following' | 'follower';
    }>;
  },
) {
  const { accountname, followListType } = await params;

  const { searchParams } = new URL(req.url);
  const limit = searchParams.get('limit');
  const skip = searchParams.get('skip');

  const token = cookies().get('token')?.value;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/profile/${accountname}/${followListType}?limit=${limit}&skip=${skip}`,
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
