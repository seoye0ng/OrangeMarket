import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function PUT(req: Request) {
  const token = cookies().get('token')?.value;
  const body = await req.json();

  const res = await fetch(`${process.env.BACKEND_BASE_URL}/user`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
    body: JSON.stringify(body),
  });

  const data = await res.json();
  return NextResponse.json(data);
}
