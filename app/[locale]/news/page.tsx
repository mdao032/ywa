import type { Metadata } from 'next'
import Image from 'next/image'
import Link  from 'next/link'
import { getAllPosts } from '@/lib/wordpress'
import { BlogCard }   from '@/components/ui/BlogCard'
import { Pagination } from '@/components/ui/Pagination'
import { CtaBanner }  from '@/components/sections/CtaBanner'
import { ChevronRight, Home, ArrowRight, Newspaper } from 'lucide-react'

export const revalidate = 60

// ─── Types ───────────────────────────────────────────────────────────────────

interface NewsPageProps {
  params:       Promise<{ locale: string }>
  searchParams: Promise<{ page?: string }>
}

// ─── Metadata ────────────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const isEn = locale === 'en'
  return {
    title: isEn ? 'Insights & News — YWA Consulting' : 'Aperçus & Actualités — YWA Consulting',
    description: isEn
      ? 'Read the latest articles from the YWA Consulting team on digital transformation, strategy and innovation.'
      : "Lisez les derniers articles de l'équipe YWA Consulting sur la transformation numérique, la stratégie et l'innovation.",
  }
}

// ─── Page ────────────────────────────────────────────────────────────────────

const PER_PAGE = 9

export default async function NewsPage({ params, searchParams }: NewsPageProps) {
  const { locale }        = await params
  const { page: rawPage } = await searchParams
  const isEn              = locale === 'en'
  const page              = Math.max(1, parseInt(rawPage ?? '1', 10))
  const posts             = await getAllPosts(locale, page, PER_PAGE)

  const hasMore    = posts.length === PER_PAGE
  const totalPages = hasMore ? page + 1 : page

  return (
    <>
      {/* ═══ HERO ════════════════════════════════════════════════ */}
      <section
        className="relative overflow-hidden bg-surface-900"
        style={{ minHeight: '72vh', display: 'flex', alignItems: 'center' }}
      >
        {/* Fond photo */}
        <div className="absolute inset-0">
          <Image
            src="/images/team-analytics.webp"
            alt=""
            fill
            className="object-cover object-center scale-105"
            priority
            sizes="100vw"
            quality={90}
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(10,15,30,0.97) 0%, rgba(10,15,30,0.84) 55%, rgba(10,15,30,0.55) 100%)' }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(10,15,30,0.92) 0%, transparent 50%, rgba(10,15,30,0.25) 100%)' }} />
        </div>

        {/* Glow bleu haut-gauche */}
        <div
          className="absolute top-0 left-0 right-0 h-[500px] pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 70% 60% at 20% -5%, rgba(37,99,235,0.38) 0%, transparent 70%)' }}
        />

        {/* Grille décorative */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.03) 1px,transparent 1px)',
            backgroundSize: '72px 72px',
            maskImage: 'linear-gradient(to right, rgba(0,0,0,0.7) 0%, transparent 55%)',
            WebkitMaskImage: 'linear-gradient(to right, rgba(0,0,0,0.7) 0%, transparent 55%)',
          }}
        />

        <div className="section-container relative z-10 py-20 sm:py-28 lg:py-36">

          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-neutral-500 mb-6 sm:mb-10">
            <Link href={`/${locale}`} className="flex items-center gap-1 hover:text-neutral-300 transition-colors">
              <Home size={13} />
              {isEn ? 'Home' : 'Accueil'}
            </Link>
            <ChevronRight size={13} className="text-neutral-700" />
            <span className="text-neutral-400">{isEn ? 'Insights & News' : 'Actualités'}</span>
          </nav>

          <div className="max-w-3xl">
            {/* Overline */}
            <div className="flex items-center gap-3 mb-5 sm:mb-7">
              <div className="w-8 h-px" style={{ background: 'linear-gradient(90deg,#2563eb,#60a5fa)' }} />
              <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-primary-400">
                {isEn ? 'Our insights' : 'Nos réflexions'}
              </span>
            </div>

            {/* Titre gradient */}
            <h1
              className="font-display font-bold leading-[1.04] tracking-tight mb-5 sm:mb-7"
              style={{ fontSize: 'clamp(2rem, 7vw, 5.5rem)' }}
            >
              <span className="block text-white">
                {isEn ? 'Insights &' : 'Aperçus &'}
              </span>
              <span
                className="block"
                style={{
                  background: 'linear-gradient(135deg, #60a5fa 0%, #818cf8 50%, #a78bfa 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {isEn ? 'News' : 'Actualités'}
              </span>
            </h1>

            <p className="text-neutral-300 text-base sm:text-lg leading-relaxed max-w-xl">
              {isEn
                ? 'The latest thinking from the YWA Consulting team on digital transformation, strategy and innovation.'
                : "Les dernières réflexions de l'équipe YWA Consulting sur la transformation numérique, la stratégie et l'innovation."}
            </p>
          </div>
        </div>
      </section>

      {/* ═══ ARTICLES ════════════════════════════════════════════ */}
      <section className="relative section-padding bg-surface-900 overflow-hidden">
        <div
          className="glow-dot"
          style={{ width: 600, height: 600, top: '30%', right: '-8%',
            background: 'radial-gradient(circle,rgba(37,99,235,0.06) 0%,transparent 70%)' }}
        />

        <div className="section-container relative z-10">

          {posts.length === 0 ? (
            /* ── État vide premium ───────────────────────────── */
            <div className="max-w-lg mx-auto text-center py-12 sm:py-20" data-reveal>
              <div
                className="relative w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6"
                style={{
                  background: 'linear-gradient(145deg,rgba(15,23,42,0.95) 0%,rgba(10,15,30,1) 100%)',
                  border: '1px solid rgba(37,99,235,0.2)',
                  boxShadow: '0 0 0 1px rgba(255,255,255,0.02) inset',
                }}
              >
                <Newspaper size={32} className="text-primary-400" />
                <div
                  className="absolute inset-0 rounded-2xl pointer-events-none"
                  style={{ background: 'radial-gradient(circle at 60% 30%, rgba(37,99,235,0.15) 0%, transparent 70%)' }}
                />
              </div>

              <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-3">
                {isEn ? 'No articles yet' : 'Aucun article pour le moment'}
              </h2>
              <p className="text-neutral-400 text-sm sm:text-base leading-relaxed mb-8">
                {isEn
                  ? 'We are working on our first articles. Check back soon for insights on digital transformation, strategy and innovation.'
                  : "Nous travaillons sur nos premiers articles. Revenez bientôt pour découvrir nos réflexions sur la transformation numérique, la stratégie et l'innovation."}
              </p>
              <Link href={`/${locale}/nous-contacter`} className="btn-primary inline-flex items-center gap-2">
                {isEn ? 'Contact us' : 'Nous contacter'}
                <ArrowRight size={15} />
              </Link>
            </div>

          ) : (
            /* ── Liste des articles ──────────────────────────── */
            <>
              <div className="mb-8 sm:mb-12" data-reveal>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-6 h-px" style={{ background: 'linear-gradient(90deg,#2563eb,#60a5fa)' }} />
                  <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary-400">
                    {isEn ? 'Latest articles' : 'Derniers articles'}
                  </span>
                </div>
                <h2 className="section-title">
                  {isEn ? 'Explore our content' : 'Explorez nos contenus'}
                </h2>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {posts.map((post) => (
                  <BlogCard key={post.id} post={post} locale={locale} />
                ))}
              </div>

              <Pagination
                currentPage={page}
                totalPages={totalPages}
                basePath={`/${locale}/news`}
                locale={locale}
              />
            </>
          )}

        </div>
      </section>

      <CtaBanner />
    </>
  )
}
