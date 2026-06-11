import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

// ─── Classnames ──────────────────────────────────────────────────────────────

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs))
}

// ─── Dates ───────────────────────────────────────────────────────────────────

/**
 * Formate une date ISO en format lisible selon la locale.
 * @example formatDate('2026-06-07T10:00:00', 'fr') → "7 juin 2026"
 */
export function formatDate(dateString: string, locale = 'fr'): string {
  try {
    return new Date(dateString).toLocaleDateString(locale === 'fr' ? 'fr-FR' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  } catch {
    return dateString
  }
}

/**
 * Formate une date en format court.
 * @example formatDateShort('2026-06-07', 'fr') → "07/06/2026"
 */
export function formatDateShort(dateString: string, locale = 'fr'): string {
  try {
    return new Date(dateString).toLocaleDateString(locale === 'fr' ? 'fr-FR' : 'en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    })
  } catch {
    return dateString
  }
}

// ─── Texte ───────────────────────────────────────────────────────────────────

/**
 * Supprime les balises HTML d'une chaîne.
 */
export function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, '').replace(/&[a-z]+;/gi, ' ').trim()
}

/**
 * Tronque un texte à la longueur spécifiée.
 */
export function truncate(text: string, length = 150): string {
  const clean = stripHtml(text)
  if (clean.length <= length) return clean
  return clean.slice(0, length).replace(/\s+\S*$/, '') + '…'
}

/**
 * Décode les entités HTML communes.
 */
export function decodeHtmlEntities(text: string): string {
  return text
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&nbsp;/g, ' ')
}

/**
 * Rend le titre WP (qui peut contenir des entités HTML).
 */
export function renderWPTitle(title: string): string {
  return decodeHtmlEntities(stripHtml(title))
}

// ─── URL ─────────────────────────────────────────────────────────────────────

/**
 * Génère une URL de page locale.
 * @example localePath('fr', '/nos-services') → "/fr/nos-services"
 */
export function localePath(locale: string, path: string): string {
  const normalized = path.startsWith('/') ? path : `/${path}`
  return `/${locale}${normalized}`
}

// ─── Validation ──────────────────────────────────────────────────────────────

export function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}
