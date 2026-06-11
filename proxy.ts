import createMiddleware from 'next-intl/middleware'

export default createMiddleware({
  locales: ['fr', 'en'],
  defaultLocale: 'fr',
  localePrefix: 'always', // /fr/... et /en/...
})

export const config = {
  matcher: [
    // Toutes les routes sauf _next, api, et fichiers statiques
    '/((?!_next|_vercel|api|.*\\..*).*)',
  ],
}
