import type { Metadata }  from 'next'
import { notFound }        from 'next/navigation'
import Link                from 'next/link'
import Image               from 'next/image'
import {
  getPostBySlug, getAllPostSlugs, getAllPosts,
  getFeaturedImageUrl, getFeaturedImageAlt, getPostCategories,
} from '@/lib/wordpress'
import { formatDate, renderWPTitle, truncate } from '@/lib/utils'
import { WPContent }   from '@/components/sections/WPContent'
import { BlogCard }    from '@/components/ui/BlogCard'
import { Calendar, ArrowLeft, Tag } from 'lucide-react'

export const revalidate = 60

interface ArticlePageProps {
  params: Promise<{ locale: string; slug: string }>
}

// ─── generateStaticParams ─────────────────────────────────────────────────────

export async function generateStaticParams() {
  const [frSlugs, enSlugs] = await Promise.all([
    getAllPostSlugs('fr'),
    getAllPostSlugs('en'),
  ])
  return [
    ...frSlugs.map((slug) => ({ locale: 'fr', slug })),
    ...enSlugs.map((slug) => ({ locale: 'en', slug })),
  ]
}

// ─── generateMetadata ─────────────────────────────────────────────────────────

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { locale, slug } = await params
  const post = await getPostBySlug(slug)
  if (!post) return { title: 'Article introuvable' }

  const title   = renderWPTitle(post.title.rendered)
  const excerpt = truncate(post.excerpt.rendered, 160)
  const imgUrl  = getFeaturedImageUrl(post)

  return {
    title,
    description: excerpt,
    openGraph: {
      title,
      description: excerpt,
      type:  'article',
      ...(imgUrl && { images: [{ url: imgUrl }] }),
    },
  }
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { locale, slug } = await params
  const [post, relatedPosts] = await Promise.all([
    getPostBySlug(slug),
    getAllPosts(locale, 1, 4),
  ])

  if (!post) notFound()

  const isEn    = locale === 'en'
  const title   = renderWPTitle(post.title.rendered)
  const imgUrl  = getFeaturedImageUrl(post)
  const imgAlt  = getFeaturedImageAlt(post) || title
  const cats    = getPostCategories(post)
  const author  = post._embedded?.author?.[0]

  // Filtrer l'article courant des articles similaires
  const related = relatedPosts.filter((p) => p.slug !== slug).slice(0, 3)

  return (
    <>
      {/* ── Hero article ───────────────────────────────────────── */}
      <section className="relative bg-surface-800 overflow-hidden">
        {imgUrl && (
          <>
            <Image
              src={imgUrl}
              alt={imgAlt}
              fill
              className="object-cover opacity-20"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-surface-900/50 to-surface-800" />
          </>
        )}
        <div className="section-container relative z-10 py-20 lg:py-28">
          {/* Fil d'Ariane */}
          <Link
            href={`/${locale}/news`}
            className="inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft size={14} />
            {isEn ? 'Back to articles' : 'Retour aux articles'}
          </Link>

          {/* Catégorie */}
          {cats[0] && (
            <span className="badge-primary mb-4 inline-flex items-center gap-1.5">
              <Tag size={10} />
              {cats[0].name}
            </span>
          )}

          <h1 className="section-title text-3xl sm:text-4xl lg:text-5xl mb-6 max-w-4xl">
            {title}
          </h1>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-neutral-400">
            <span className="flex items-center gap-1.5">
              <Calendar size={13} />
              {formatDate(post.date, locale)}
            </span>
            {author && (
              <span className="flex items-center gap-2">
                {author.avatar_urls?.['48'] && (
                  <Image
                    src={author.avatar_urls['48']}
                    alt={author.name}
                    width={24}
                    height={24}
                    className="rounded-full"
                  />
                )}
                {author.name}
              </span>
            )}
          </div>
        </div>
      </section>

      {/* ── Contenu ────────────────────────────────────────────── */}
      <section className="section-padding bg-surface-900">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <WPContent html={post.content.rendered} />
          </div>
        </div>
      </section>

      {/* ── Articles similaires ────────────────────────────────── */}
      {related.length > 0 && (
        <section className="section-padding bg-surface-800">
          <div className="section-container">
            <h2 className="font-display text-2xl font-bold text-white mb-8">
              {isEn ? 'Related Articles' : 'Articles similaires'}
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((p) => (
                <BlogCard key={p.id} post={p} locale={locale} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Retour ─────────────────────────────────────────────── */}
      <div className="py-10 bg-surface-900 border-t border-surface-700">
        <div className="section-container text-center">
          <Link href={`/${locale}/news`} className="btn-outline inline-flex items-center gap-2">
            <ArrowLeft size={14} />
            {isEn ? 'Back to all articles' : 'Retour à tous les articles'}
          </Link>
        </div>
      </div>
    </>
  )
}

