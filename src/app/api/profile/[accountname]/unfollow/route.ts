import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ accountName: string }> },
) {
  const { accountName } = await params;

  const token = cookies().get('token')?.value;

  const res = await fetch(
    `${process.env.BACKEND_BASE_URL}/profile/${accountName}/unfollow`,
    {
      method: 'DELETE',
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
