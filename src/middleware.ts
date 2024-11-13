import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('userToken');
  const { pathname } = request.nextUrl;

  const protectedPaths = ['/feed', '/profile', '/post', '/search'];

  // 보호가 필요한 경로에 대해 접근 제어
  if (!token && protectedPaths.some((path) => pathname.startsWith(path))) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/:path*'],
};
