import Image from 'next/image'
import Link  from 'next/link'
import { Calendar, ArrowRight } from 'lucide-react'
import { type WPPost, getFeaturedImageUrl, getFeaturedImageAlt, getPostCategories } from '@/lib/wordpress'
import { formatDate, truncate } from '@/lib/utils'

interface BlogCardProps {
  post:   WPPost
  locale: string
}

export function BlogCard({ post, locale }: BlogCardProps) {
  const imgUrl   = getFeaturedImageUrl(post)
  const imgAlt   = getFeaturedImageAlt(post) || post.title.rendered
  const cats     = getPostCategories(post)
  const firstCat = cats[0]

  return (
    <article
      className="group relative flex flex-col overflow-hidden rounded-2xl transition-all duration-400 hover:-translate-y-1 h-full"
      style={{
        background: 'linear-gradient(145deg,rgba(15,23,42,0.95) 0%,rgba(10,15,30,1) 100%)',
        border: '1px solid rgba(51,65,85,0.6)',
        boxShadow: '0 0 0 1px rgba(255,255,255,0.02) inset',
      }}
    >
      {/* Reflet coin haut */}
      <div
        className="absolute top-0 left-0 w-2/3 h-1/4 pointer-events-none z-10"
        style={{ background: 'linear-gradient(135deg,rgba(255,255,255,0.03) 0%,transparent 60%)' }}
      />

      {/* Ligne d'accentuation au survol */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 z-10"
        style={{ background: 'linear-gradient(90deg,#2563eb,#60a5fa)' }}
      />

      {/* ── Image ──────────────────────────────────────────── */}
      <Link
        href={`/${locale}/news/${post.slug}`}
        className="block relative h-48 overflow-hidden shrink-0"
        style={{ background: 'rgba(15,23,42,0.8)' }}
      >
        {imgUrl ? (
          <Image
            src={imgUrl}
            alt={imgAlt}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : (
          /* Placeholder branded */
          <div
            className="w-full h-full flex items-center justify-center"
            style={{ background: 'linear-gradient(135deg,rgba(37,99,235,0.15) 0%,rgba(10,15,30,1) 100%)' }}
          >
            <span
              className="font-display font-bold select-none"
              style={{
                fontSize: '3rem',
                background: 'linear-gradient(135deg,rgba(96,165,250,0.4),rgba(167,139,250,0.3))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              YWA
            </span>
          </div>
        )}

        {/* Gradient bas sur l'image */}
        <div className="absolute inset-0 bg-gradient-to-t from-surface-900/50 via-transparent to-transparent" />

        {/* Badge catégorie */}
        {firstCat && (
          <span className="absolute top-3 left-3 badge-primary text-[10px] z-10">
            {firstCat.name}
          </span>
        )}
      </Link>

      {/* ── Contenu ────────────────────────────────────────── */}
      <div className="p-5 sm:p-6 flex flex-col flex-1">

        {/* Date */}
        <div className="flex items-center gap-2 text-xs text-neutral-600 mb-3">
          <Calendar size={11} />
          <time dateTime={post.date}>{formatDate(post.date, locale)}</time>
        </div>

        {/* Titre */}
        <Link href={`/${locale}/news/${post.slug}`}>
          <h3 className="font-display font-semibold text-white leading-snug mb-2.5 line-clamp-2 hover:text-primary-300 transition-colors duration-200">
            {post.title.rendered}
          </h3>
        </Link>

        {/* Extrait */}
        <p className="text-neutral-500 text-sm leading-relaxed flex-1 line-clamp-3">
          {truncate(post.excerpt.rendered, 130)}
        </p>

        {/* Lien "Lire" */}
        <Link
          href={`/${locale}/news/${post.slug}`}
          className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary-400 hover:text-primary-300 transition-colors duration-200 group/link w-fit"
        >
          {locale === 'fr' ? "Lire l'article" : 'Read article'}
          <ArrowRight size={13} className="group-hover/link:translate-x-1 transition-transform duration-200" />
        </Link>
      </div>
    </article>
  )
}
