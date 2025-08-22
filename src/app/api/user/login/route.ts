import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const body = await request.json();

  // 1. 기존 외부 API 호출
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/user/login`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    },
  );

  const data = await response.json();

  if (response.ok && data.user?.token) {
    // 2. 🛡️ HttpOnly 쿠키로 보안 저장
    cookies().set('token', data.user.token, {
      httpOnly: true, // XSS 공격 방어
      secure: process.env.NODE_ENV === 'production', // HTTPS에서만 전송
      sameSite: 'strict', // CSRF 공격 방어
      maxAge: 60 * 60 * 24 * 3, // 3일
      path: '/',
    });

    // 3. 🔒 클라이언트에는 토큰 없이 안전한 응답
    return NextResponse.json({
      ...data,
      user: {
        ...data.user,
        token: undefined,
      },
    });
  }

  return NextResponse.json(data, { status: response.status });
}
