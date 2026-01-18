import { NextResponse } from 'next/server';

export function middleware(request) {
  const userCookie = request.cookies.get('user');
  const isProtectedRoute = request.nextUrl.pathname.startsWith('/add-item');
  
  if (isProtectedRoute && !userCookie) {
    return NextResponse.redirect(new URL('/login', request.url));
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: ['/add-item/:path*'],
};
