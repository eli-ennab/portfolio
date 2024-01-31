let locales = ['en', 'sv']
 
function getLocale() { return 'en' }
 
export function middleware(request: any) {
  const { pathname } = request.nextUrl
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )
 
  if (pathnameHasLocale) return
 
  const locale = getLocale()
  request.nextUrl.pathname = `/${locale}${pathname}`

  return Response.redirect(request.nextUrl)
}
 
export const config = {
  matcher: ['/((?!_next).*)',],
}