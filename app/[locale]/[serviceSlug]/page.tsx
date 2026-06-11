import type { Metadata } from 'next'
import { notFound }      from 'next/navigation'
import Link              from 'next/link'
import Image             from 'next/image'
import { getPageBySlug, getFeaturedImageUrl, getFeaturedImageAlt } from '@/lib/wordpress'
import { renderWPTitle } from '@/lib/utils'
import { CtaBanner }     from '@/components/sections/CtaBanner'
import { ChevronRight, Home, ArrowLeft } from 'lucide-react'

// Slugs autorisés pour les pages de service
const SERVICE_SLUGS = [
  'digital-strategy-consulting',
  'process-optimization-automation',
  'digital-tool-adoption-modernization',
]

// Image locale de fallback par slug
const SLUG_IMAGES: Record<string, string> = {
  'digital-strategy-consulting':         '/images/service-strategy.webp',
  'process-optimization-automation':     '/images/service-optimization.webp',
  'digital-tool-adoption-modernization': '/images/service-tools.webp',
}

// Titres et descriptions de repli si WP ne retourne rien
const FALLBACKS: Record<string, { fr: { title: string; content: string }; en: { title: string; content: string } }> = {
  'digital-strategy-consulting': {
    fr: {
      title: 'Conseil en Stratégie Numérique',
      content: '<p>Nous élaborons des stratégies numériques complètes pour aligner vos objectifs commerciaux avec les technologies les plus adaptées à votre secteur. Notre équipe vous accompagne de l\'audit initial jusqu\'à la mise en œuvre opérationnelle.</p><h2>Notre approche</h2><p>Chaque projet débute par une analyse approfondie de votre situation actuelle, de vos défis et de vos ambitions. Nous définissons ensuite une feuille de route claire, priorisée et mesurable.</p>',
    },
    en: {
      title: 'Digital Strategy Consulting',
      content: '<p>We develop comprehensive digital strategies to align your business goals with the most appropriate technologies for your sector. Our team supports you from the initial audit to operational implementation.</p><h2>Our approach</h2><p>Every project begins with an in-depth analysis of your current situation, challenges and ambitions. We then define a clear, prioritized and measurable roadmap.</p>',
    },
  },
  'process-optimization-automation': {
    fr: {
      title: 'Optimisation & Automatisation des Processus',
      content: '<p>Nous analysons vos flux de travail, identifions les inefficacités et mettons en place des solutions d\'automatisation adaptées pour améliorer votre productivité et réduire vos coûts.</p><h2>Bénéfices clés</h2><p>Nos clients constatent en moyenne une réduction de 30 à 40% du temps consacré aux tâches répétitives et une amélioration significative de la qualité des livrables.</p>',
    },
    en: {
      title: 'Process Optimization & Automation',
      content: '<p>We analyze your workflows, identify inefficiencies, and implement tailored automation solutions to improve your productivity and reduce costs.</p><h2>Key benefits</h2><p>Our clients see on average a 30 to 40% reduction in time spent on repetitive tasks and a significant improvement in the quality of deliverables.</p>',
    },
  },
  'digital-tool-adoption-modernization': {
    fr: {
      title: 'Adoption des Outils Numériques & Modernisation',
      content: '<p>Nous vous aidons à sélectionner, déployer et intégrer les meilleurs outils numériques pour moderniser vos opérations, améliorer la collaboration et accélérer votre croissance.</p><h2>Nos domaines d\'intervention</h2><p>CRM, ERP, outils de collaboration, plateformes cloud, solutions BI et analytics — nous couvrons l\'ensemble de l\'écosystème numérique B2B.</p>',
    },
    en: {
      title: 'Digital Tool Adoption & Modernization',
      content: '<p>We help you select, deploy and integrate the best digital tools to modernize your operations, improve collaboration and accelerate your growth.</p><h2>Our areas of expertise</h2><p>CRM, ERP, collaboration tools, cloud platforms, BI and analytics solutions — we cover the entire B2B digital ecosystem.</p>',
    },
  },
}

interface ServicePageProps {
  params: Promise<{ locale: string; serviceSlug: string }>
}

export async function generateStaticParams() {
  return ['fr', 'en'].flatMap((locale) =>
    SERVICE_SLUGS.map((serviceSlug) => ({ locale, serviceSlug }))
  )
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { locale, serviceSlug } = await params
  const page     = await getPageBySlug(serviceSlug, locale)
  const fallback = FALLBACKS[serviceSlug]?.[locale === 'en' ? 'en' : 'fr']
  const title    = page ? renderWPTitle(page.title.rendered) : (fallback?.title ?? serviceSlug)

  return {
    title,
    description: locale === 'en'
      ? `Discover our ${title} service at YWA Consulting.`
      : `Découvrez notre service ${title} chez YWA Consulting.`,
  }
}

export default async function ServiceSlugPage({ params }: ServicePageProps) {
  const { locale, serviceSlug } = await params
  // Vérifier que le slug est autorisé
  if (!SERVICE_SLUGS.includes(serviceSlug)) notFound()

  const page     = await getPageBySlug(serviceSlug, locale)
  const fallback = FALLBACKS[serviceSlug]?.[locale === 'en' ? 'en' : 'fr']

  const title   = page ? renderWPTitle(page.title.rendered) : (fallback?.title ?? serviceSlug)
  const content = page?.content.rendered ?? fallback?.content ?? ''
  const imgUrl  = page ? getFeaturedImageUrl(page) : (SLUG_IMAGES[serviceSlug] ?? null)
  const imgAlt  = page ? getFeaturedImageAlt(page) : title

  const isEn = locale === 'en'

  return (
    <>
      {/* Hero de page de service */}
      <section className="relative py-24 lg:py-32 bg-surface-800 overflow-hidden">
        <div className="absolute inset-0 bg-hero-glow opacity-60 pointer-events-none" />

        <div className="section-container relative z-10">
          {/* Fil d'Ariane */}
          <nav className="flex items-center gap-2 text-sm text-neutral-500 mb-8" aria-label="Breadcrumb">
            <Link href={`/${locale}`} className="flex items-center gap-1 hover:text-neutral-300 transition-colors">
              <Home size={13} />
              {isEn ? 'Home' : 'Accueil'}
            </Link>
            <ChevronRight size={13} className="text-neutral-700" />
            <Link href={`/${locale}/nos-services`} className="hover:text-neutral-300 transition-colors">
              {isEn ? 'Our Services' : 'Nos Services'}
            </Link>
            <ChevronRight size={13} className="text-neutral-700" />
            <span className="text-neutral-400">{title}</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="divider mb-6" />
              <h1 className="section-title text-4xl sm:text-5xl mb-6">{title}</h1>
              <Link
                href={`/${locale}/nos-services`}
                className="inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors"
              >
                <ArrowLeft size={14} />
                {isEn ? 'Back to all services' : 'Retour à tous les services'}
              </Link>
            </div>

            {/* Image à la une */}
            {imgUrl && (
              <div className="relative h-64 lg:h-80 rounded-2xl overflow-hidden border border-surface-600">
                <Image
                  src={imgUrl}
                  alt={imgAlt}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Contenu WP */}
      <section className="section-padding bg-surface-900">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            {content ? (
              <div
                className="wp-content"
                dangerouslySetInnerHTML={{ __html: content }}
              />
            ) : (
              <p className="text-neutral-400 text-center py-12">
                {isEn ? 'Content coming soon.' : 'Contenu à venir.'}
              </p>
            )}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}

