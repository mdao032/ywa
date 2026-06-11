import type { Metadata } from 'next'
import type { WPPage, WPPost } from './wordpress'
import { getFeaturedImageUrl, getFeaturedImageAlt } from './wordpress'
import { renderWPTitle, truncate } from './utils'

const SITE_URL  = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://ywaconsulting.com'
const SITE_NAME = 'YWA Consulting'

/**
 * Génère un objet Metadata Next.js depuis une page WP.
 */
export function generatePageMetadata(
  page:   WPPage | WPPost,
  locale: string
): Metadata {
  const title       = renderWPTitle(page.title.rendered)
  const description = truncate(('excerpt' in page ? page.excerpt.rendered : ''), 160) ||
    (locale === 'fr'
      ? 'YWA Consulting accompagne votre entreprise dans sa transformation numérique.'
      : 'YWA Consulting supports your business through digital transformation.')
  const imgUrl = getFeaturedImageUrl(page)
  const imgAlt = getFeaturedImageAlt(page) || title

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      siteName:  SITE_NAME,
      locale:    locale === 'fr' ? 'fr_FR' : 'en_US',
      type:      'website',
      ...(imgUrl && {
        images: [{ url: imgUrl, alt: imgAlt, width: 1200, height: 630 }],
      }),
    },
    twitter: {
      card:        'summary_large_image',
      title,
      description,
      ...(imgUrl && { images: [imgUrl] }),
    },
    alternates: {
      canonical: `${SITE_URL}/${locale}`,
      languages: {
        'fr': `${SITE_URL}/fr`,
        'en': `${SITE_URL}/en`,
      },
    },
  }
}

/**
 * Génère des métadonnées pour une page statique (sans contenu WP).
 */
export function generateStaticMetadata(opts: {
  title:       string
  description: string
  locale:      string
  path:        string
  imageSrc?:   string
}): Metadata {
  const { title, description, locale, path, imageSrc } = opts
  const url = `${SITE_URL}${path}`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      siteName: SITE_NAME,
      url,
      locale:   locale === 'fr' ? 'fr_FR' : 'en_US',
      type:     'website',
      ...(imageSrc && { images: [{ url: imageSrc, width: 1200, height: 630 }] }),
    },
    twitter: {
      card:        'summary_large_image',
      title,
      description,
    },
    alternates: {
      canonical:  url,
      languages: {
        'fr': `${SITE_URL}/fr${path.replace(`/${locale}`, '')}`,
        'en': `${SITE_URL}/en${path.replace(`/${locale}`, '')}`,
      },
    },
  }
}

