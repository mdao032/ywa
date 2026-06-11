import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

interface PaginationProps {
  currentPage:  number
  totalPages:   number
  basePath:     string   // ex: "/fr/news"
  locale:       string
}

export function Pagination({ currentPage, totalPages, basePath, locale }: PaginationProps) {
  if (totalPages <= 1) return null

  const isEn = locale === 'en'

  const pages = buildPageRange(currentPage, totalPages)

  return (
    <nav className="flex items-center justify-center gap-2 mt-12" aria-label="Pagination">

      {/* Précédent */}
      {currentPage > 1 ? (
        <Link
          href={`${basePath}?page=${currentPage - 1}`}
          className="flex items-center gap-1.5 px-4 py-2 rounded-lg border border-surface-600 text-sm text-neutral-300 hover:text-white hover:border-primary-600 transition-all duration-200"
        >
          <ChevronLeft size={14} />
          {isEn ? 'Previous' : 'Précédent'}
        </Link>
      ) : (
        <span className="flex items-center gap-1.5 px-4 py-2 rounded-lg border border-surface-700 text-sm text-neutral-600 cursor-not-allowed">
          <ChevronLeft size={14} />
          {isEn ? 'Previous' : 'Précédent'}
        </span>
      )}

      {/* Numéros de pages */}
      <div className="flex items-center gap-1">
        {pages.map((p, i) =>
          p === '…' ? (
            <span key={`ellipsis-${i}`} className="px-2 py-2 text-neutral-600 text-sm select-none">…</span>
          ) : (
            <Link
              key={p}
              href={`${basePath}?page=${p}`}
              className={cn(
                'w-9 h-9 rounded-lg flex items-center justify-center text-sm font-medium transition-all duration-200',
                p === currentPage
                  ? 'bg-primary-600 text-white shadow-md shadow-primary-600/30'
                  : 'border border-surface-600 text-neutral-300 hover:text-white hover:border-primary-600'
              )}
              aria-current={p === currentPage ? 'page' : undefined}
            >
              {p}
            </Link>
          )
        )}
      </div>

      {/* Suivant */}
      {currentPage < totalPages ? (
        <Link
          href={`${basePath}?page=${currentPage + 1}`}
          className="flex items-center gap-1.5 px-4 py-2 rounded-lg border border-surface-600 text-sm text-neutral-300 hover:text-white hover:border-primary-600 transition-all duration-200"
        >
          {isEn ? 'Next' : 'Suivant'}
          <ChevronRight size={14} />
        </Link>
      ) : (
        <span className="flex items-center gap-1.5 px-4 py-2 rounded-lg border border-surface-700 text-sm text-neutral-600 cursor-not-allowed">
          {isEn ? 'Next' : 'Suivant'}
          <ChevronRight size={14} />
        </span>
      )}
    </nav>
  )
}

// ─── Helper : plage de pages avec ellipsis ────────────────────────────────────

function buildPageRange(current: number, total: number): (number | '…')[] {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1)

  const pages: (number | '…')[] = [1]

  if (current > 3) pages.push('…')

  const start = Math.max(2, current - 1)
  const end   = Math.min(total - 1, current + 1)
  for (let i = start; i <= end; i++) pages.push(i)

  if (current < total - 2) pages.push('…')
  pages.push(total)

  return pages
}

