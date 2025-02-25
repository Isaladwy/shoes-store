import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { cookies } from 'next/headers';
import { Admin, handleAdmin } from './services/admin/Admin';


export async function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith('/admin')) {
    const token = (await cookies()).get('admin_token')?.value || '';
    if (!token) return NextResponse.redirect(new URL('/login', request.url));

    try {
      const [header, payload, signature] = token.split('.');
      if (!header || !payload || !signature) {
        return NextResponse.redirect(new URL('/login', request.url));
      }

      const decodedPayload = JSON.parse(atob(payload));
      const admin = decodedPayload as Admin;

      // Check if token is expired
      const currentTime = Math.floor(Date.now() / 1000);
      if (decodedPayload.exp && decodedPayload.exp < currentTime) {
        return NextResponse.redirect(new URL('/login', request.url));
      }

      const isAdmin = await handleAdmin(admin);
      if (isAdmin) {
        return NextResponse.next();
      }
    } catch {
      return NextResponse.redirect(new URL('/login', request.url));
    }

    return NextResponse.redirect(new URL('/login', request.url));
  }
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
  ],
};

/*
const sKey = process.env.NEXT_PUBLIC_JWT_SECRET_KEY || '';
export async function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith('/admin')) {
    const token = (await cookies()).get('admin_token')?.value || '';
    if (!token) return NextResponse.redirect(new URL('/login', request.url));

    const encodedSecret = new TextEncoder().encode(sKey);
    const { payload: credentials } = await jose.jwtVerify(token, encodedSecret);
    const admin = credentials as Admin;

    const isAdmin = await handleAdmin(admin);
    if (isAdmin) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }
}
*/
