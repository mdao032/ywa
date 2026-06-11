import type { MetadataRoute } from 'next'
import { getAllPosts, getAllPages } from '@/lib/wordpress'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://ywaconsulting.com'
const LOCALES  = ['fr', 'en'] as const

const STATIC_ROUTES = [
  '',
  '/nos-services',
  '/nos-atouts',
  '/notre-mission',
  '/carriere',
  '/news',
  '/nous-contacter',
  '/mentions-legales',
  '/politique-de-confidentialite',
]

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date()

  // ── Pages statiques ───────────────────────────────────────────────────────
  const staticEntries: MetadataRoute.Sitemap = LOCALES.flatMap((locale) =>
    STATIC_ROUTES.map((route) => ({
      url:              `${SITE_URL}/${locale}${route}`,
      lastModified:     now,
      changeFrequency:  (route === '' ? 'weekly' : 'monthly') as 'weekly' | 'monthly',
      priority:         route === '' ? 1 : 0.7,
      alternates: {
        languages: Object.fromEntries(
          LOCALES.map((l) => [l, `${SITE_URL}/${l}${route}`])
        ),
      },
    }))
  )

  // ── Articles de blog ──────────────────────────────────────────────────────
  const [frPosts, enPosts] = await Promise.all([
    getAllPosts('fr', 1, 100),
    getAllPosts('en', 1, 100),
  ])

  const postEntries: MetadataRoute.Sitemap = [
    ...frPosts.map((post) => ({
      url:             `${SITE_URL}/fr/news/${post.slug}`,
      lastModified:    new Date(post.modified ?? post.date),
      changeFrequency: 'weekly' as const,
      priority:        0.6,
    })),
    ...enPosts.map((post) => ({
      url:             `${SITE_URL}/en/news/${post.slug}`,
      lastModified:    new Date(post.modified ?? post.date),
      changeFrequency: 'weekly' as const,
      priority:        0.6,
    })),
  ]

  return [...staticEntries, ...postEntries]
}

