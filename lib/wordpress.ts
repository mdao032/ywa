// ─── Types ───────────────────────────────────────────────────────────────────

export interface WPMedia {
  id: number
  source_url: string
  alt_text: string
  media_details: {
    width: number
    height: number
    sizes?: Record<string, { source_url: string; width: number; height: number }>
  }
}

export interface WPPost {
  id: number
  slug: string
  date: string
  modified: string
  title: { rendered: string }
  content: { rendered: string }
  excerpt: { rendered: string }
  featured_media: number
  categories: number[]
  tags: number[]
  _embedded?: {
    'wp:featuredmedia'?: WPMedia[]
    'wp:term'?: Array<Array<{ id: number; name: string; slug: string }>>
    author?: Array<{ name: string; avatar_urls: Record<string, string> }>
  }
}

export interface WPPage {
  id: number
  slug: string
  date: string
  modified: string
  title: { rendered: string }
  content: { rendered: string }
  excerpt: { rendered: string }
  featured_media: number
  _embedded?: {
    'wp:featuredmedia'?: WPMedia[]
  }
}

// ─── Config ──────────────────────────────────────────────────────────────────

const WP_API = process.env.NEXT_PUBLIC_WP_API_URL ?? 'https://cms.ywaconsulting.com/wp-json/wp/v2'

// ─── Helpers ─────────────────────────────────────────────────────────────────

function wpUrl(path: string, params: Record<string, string | number> = {}): string {
  const url = new URL(`${WP_API}${path}`)
  Object.entries(params).forEach(([k, v]) => url.searchParams.set(k, String(v)))
  return url.toString()
}

async function wpFetch<T>(url: string, revalidate = 60): Promise<T | null> {
  try {
    const res = await fetch(url, { next: { revalidate } })
    if (!res.ok) {
      console.error(`WP API error ${res.status} for ${url}`)
      return null
    }
    return res.json() as Promise<T>
  } catch (err) {
    console.error(`WP API fetch failed for ${url}:`, err)
    return null
  }
}

// ─── Posts ───────────────────────────────────────────────────────────────────

/**
 * Récupère la liste des articles de blog.
 * @param locale - 'fr' ou 'en' (paramètre Polylang)
 * @param page   - numéro de page pour la pagination (défaut: 1)
 * @param perPage - articles par page (défaut: 9)
 */
export async function getAllPosts(
  locale = 'fr',
  page = 1,
  perPage = 9
): Promise<WPPost[]> {
  const url = wpUrl('/posts', {
    lang: locale,
    _embed: 1,
    page,
    per_page: perPage,
    orderby: 'date',
    order: 'desc',
  })
  const posts = await wpFetch<WPPost[]>(url, 60)
  return posts ?? []
}

/**
 * Récupère un article par son slug.
 */
export async function getPostBySlug(slug: string): Promise<WPPost | null> {
  const url = wpUrl('/posts', { slug, _embed: 1 })
  const posts = await wpFetch<WPPost[]>(url, 60)
  return posts?.[0] ?? null
}

/**
 * Récupère tous les slugs d'articles (pour generateStaticParams).
 */
export async function getAllPostSlugs(locale = 'fr'): Promise<string[]> {
  const url = wpUrl('/posts', { lang: locale, per_page: 100, _fields: 'slug' })
  const posts = await wpFetch<Array<{ slug: string }>>(url, 3600)
  return posts?.map((p) => p.slug) ?? []
}

// ─── Pages ───────────────────────────────────────────────────────────────────

/**
 * Récupère une page WP par son slug.
 * @param slug   - slug de la page (ex: 'nos-services')
 * @param locale - 'fr' ou 'en'
 */
export async function getPageBySlug(slug: string, locale = 'fr'): Promise<WPPage | null> {
  const url = wpUrl('/pages', { slug, lang: locale, _embed: 1 })
  const pages = await wpFetch<WPPage[]>(url, 3600)
  return pages?.[0] ?? null
}

/**
 * Récupère toutes les pages (pour sitemap).
 */
export async function getAllPages(locale = 'fr'): Promise<WPPage[]> {
  const url = wpUrl('/pages', { lang: locale, per_page: 100 })
  const pages = await wpFetch<WPPage[]>(url, 3600)
  return pages ?? []
}

// ─── Media ───────────────────────────────────────────────────────────────────

/**
 * Récupère les détails d'un média WP par son ID.
 */
export async function getFeaturedMedia(mediaId: number): Promise<WPMedia | null> {
  if (!mediaId) return null
  const url = wpUrl(`/media/${mediaId}`)
  return wpFetch<WPMedia>(url, 3600)
}

// ─── Helpers d'extraction ────────────────────────────────────────────────────

/**
 * Extrait l'URL de l'image à la une depuis un post/page avec _embedded.
 */
export function getFeaturedImageUrl(item: WPPost | WPPage): string | null {
  return item._embedded?.['wp:featuredmedia']?.[0]?.source_url ?? null
}

/**
 * Extrait le texte alt de l'image à la une.
 */
export function getFeaturedImageAlt(item: WPPost | WPPage): string {
  return item._embedded?.['wp:featuredmedia']?.[0]?.alt_text ?? ''
}

/**
 * Extrait les catégories d'un post.
 */
export function getPostCategories(post: WPPost): Array<{ name: string; slug: string }> {
  return post._embedded?.['wp:term']?.[0] ?? []
}
