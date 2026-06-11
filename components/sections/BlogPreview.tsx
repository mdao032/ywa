import Link from 'next/link'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { useLocale } from 'next-intl'
import { Calendar, ArrowRight } from 'lucide-react'
import { type WPPost, getFeaturedImageUrl, getFeaturedImageAlt } from '@/lib/wordpress'
import { formatDate, truncate } from '@/lib/utils'

interface BlogPreviewProps {
  posts: WPPost[]
}

export function BlogPreview({ posts }: BlogPreviewProps) {
  const t      = useTranslations('blog')
  const locale = useLocale()

  // Masquer la section quand aucun article n'est disponible
  if (posts.length === 0) return null

  return (
    <section className="section-padding bg-surface-900">
      <div className="section-container">

        {/* En-tête */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-12">
          <div>
            <span className="badge-primary mb-4">{t('badge')}</span>
            <h2 className="section-title">{t('title')}</h2>
            <p className="section-subtitle mt-3">{t('subtitle')}</p>
          </div>
          <Link
            href={`/${locale}/news`}
            className="btn-outline whitespace-nowrap flex items-center gap-2 shrink-0"
          >
            {t('all_articles')}
            <ArrowRight size={14} />
          </Link>
        </div>

        {/* Articles ou état vide */}
        {posts.length === 0 ? (
          <div className="text-center py-16 text-neutral-500">
            <p>{t('empty')}</p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.slice(0, 3).map((post) => {
              const imgUrl = getFeaturedImageUrl(post)
              const imgAlt = getFeaturedImageAlt(post)
              return (
                <article key={post.id} className="card group flex flex-col overflow-hidden p-0">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden bg-surface-700">
                    {imgUrl ? (
                      <Image
                        src={imgUrl}
                        alt={imgAlt || post.title.rendered}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <span className="text-neutral-600 text-4xl">✦</span>
                      </div>
                    )}
                  </div>

                  {/* Contenu */}
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-2 text-xs text-neutral-500 mb-3">
                      <Calendar size={12} />
                      <time>{formatDate(post.date, locale)}</time>
                    </div>

                    <h3 className="font-display font-semibold text-white leading-snug mb-2 line-clamp-2">
                      {post.title.rendered}
                    </h3>

                    <p className="text-neutral-400 text-sm leading-relaxed flex-1 line-clamp-3">
                      {truncate(post.excerpt.rendered, 120)}
                    </p>

                    <Link
                      href={`/${locale}/news/${post.slug}`}
                      className="mt-4 inline-flex items-center gap-1.5 text-sm text-primary-400 hover:text-primary-300 font-medium transition-colors duration-200"
                    >
                      {t('read_more')}
                      <ArrowRight size={13} />
                    </Link>
                  </div>
                </article>
              )
            })}
          </div>
        )}
      </div>
    </section>
  )
}

