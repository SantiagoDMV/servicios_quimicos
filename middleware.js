import { NextResponse } from 'next/server'

export function middleware(request) {
  // 1. Authentication Check
  const token = request.cookies.get(process.env.AUTH_COOKIE)
  const protectedRoutes = ['/', '/productos', '/materiaprima']
  
  if (protectedRoutes.some(route => request.nextUrl.pathname.startsWith(route))) {
    if (!token) {
      return NextResponse.redirect(new URL('/login', request.url))
    }
  }

  // 2. Country-based Routing
  const country = request.geo?.country
  if (country === 'US' && request.nextUrl.pathname === '/') {
    return NextResponse.rewrite(new URL('/us-landing', request.url))
  }

  // 3. Rate Limiting (Basic Example)
  const requestCount = request.cookies.get('request-count')
  const currentCount = requestCount ? parseInt(requestCount.value) : 0

  if (currentCount >= 10) {
    return NextResponse.json(
      { error: 'Too many requests' }, 
      { status: 429 }
    )
  }

  // 4. Security Headers
  const response = NextResponse.next()
  response.headers.set('X-Frame-Options', 'DENY')
  response.headers.set('X-Content-Type-Options', 'nosniff')
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')

  // 5. Logging (simulated)
  console.log(`[Middleware] Path: ${request.nextUrl.pathname}, Method: ${request.method}`)

  return response
}

// Specify which routes this middleware should run on
export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|registro|login).*)',
  ]
}