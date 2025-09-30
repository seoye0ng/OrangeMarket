import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ accountname: string }> },
) {
  const { accountname } = await params;

  const token = cookies().get('token')?.value;

  const res = await fetch(
    `${process.env.BACKEND_BASE_URL}/profile/${accountname}/unfollow`,
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
