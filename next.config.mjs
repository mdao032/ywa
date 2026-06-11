import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin('./i18n/request.ts')

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ywaconsulting.com',
        pathname: '/wp-content/uploads/**',
      },
      {
        // Avatars Gravatar (auteurs WP)
        protocol: 'https',
        hostname: 'secure.gravatar.com',
        pathname: '/avatar/**',
      },
    ],
  },
  async redirects() {
    return [
      // ── Anciennes URLs WP → nouvelles URLs Next.js (FR) ──────────────────
      { source: '/nos-services',                          destination: '/fr/nos-services',                          permanent: true },
      { source: '/nos-atouts',                            destination: '/fr/nos-atouts',                            permanent: true },
      { source: '/notre-mission',                         destination: '/fr/notre-mission',                         permanent: true },
      { source: '/nous-contacter',                        destination: '/fr/nous-contacter',                        permanent: true },
      { source: '/carriere',                              destination: '/fr/carriere',                              permanent: true },
      { source: '/news',                                  destination: '/fr/news',                                  permanent: true },
      { source: '/mentions-legales',                      destination: '/fr/mentions-legales',                      permanent: true },
      { source: '/politique-de-confidentialite',          destination: '/fr/politique-de-confidentialite',          permanent: true },
      // ── Anciennes URLs WP → nouvelles URLs Next.js (EN) ──────────────────
      { source: '/en/home',                               destination: '/en',                                       permanent: true },
      { source: '/en/home/',                              destination: '/en',                                       permanent: true },
      { source: '/en/terms-and-conditions',               destination: '/en/mentions-legales',                      permanent: true },
      { source: '/en/terms-and-conditions/',              destination: '/en/mentions-legales',                      permanent: true },
      { source: '/en/privacy-policy',                     destination: '/en/politique-de-confidentialite',          permanent: true },
      { source: '/en/privacy-policy/',                    destination: '/en/politique-de-confidentialite',          permanent: true },
      // ── Racine → locale par défaut ────────────────────────────────────────
      { source: '/',                                      destination: '/fr',                                       permanent: false },
    ]
  },
}

export default withNextIntl(nextConfig)
