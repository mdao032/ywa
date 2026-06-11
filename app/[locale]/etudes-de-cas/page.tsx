import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, TrendingUp, Clock, Building2 } from 'lucide-react'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const isEn = locale === 'en'
  return {
    title: isEn ? 'Case Studies' : 'Études de Cas',
    description: isEn
      ? 'Discover how YWA Consulting has helped organizations across Africa and the French-speaking world achieve measurable digital transformation results.'
      : 'Découvrez comment YWA Consulting a aidé des organisations en Afrique et dans le monde francophone à atteindre des résultats mesurables de transformation numérique.',
  }
}

// ─── Données études de cas ────────────────────────────────────────────────────
const CASE_STUDIES = [
  {
    id: 'retail-bamako',
    sector_fr: 'Commerce & Retail',
    sector_en: 'Commerce & Retail',
    client_fr: 'Groupe Retail Bamako',
    client_en: 'Bamako Retail Group',
    title_fr:  'Digitalisation de la chaîne d\'approvisionnement',
    title_en:  'Supply chain digitalisation',
    desc_fr:   'Accompagnement d\'un groupe de distribution malien dans la digitalisation complète de ses processus d\'approvisionnement et de gestion des stocks, passant d\'un système Excel à une solution ERP intégrée.',
    desc_en:   'Supported a Malian distribution group in the complete digitalisation of its supply chain and inventory management processes, transitioning from Excel spreadsheets to an integrated ERP solution.',
    result_fr: '40% de réduction des ruptures de stock',
    result_en: '40% reduction in stock-outs',
    duration:  '6 mois',
    image:     '/images/service-optimization.webp',
    tags_fr:   ['ERP', 'Optimisation processus', 'Formation'],
    tags_en:   ['ERP', 'Process optimization', 'Training'],
    stat:      { value: '40%', label_fr: 'Ruptures de stock réduites', label_en: 'Stock-outs reduced' },
  },
  {
    id: 'finance-dakar',
    sector_fr: 'Services Financiers',
    sector_en: 'Financial Services',
    client_fr: 'Institution Financière Régionale',
    client_en: 'Regional Financial Institution',
    title_fr:  'Stratégie de modernisation digitale',
    title_en:  'Digital modernisation strategy',
    desc_fr:   'Définition et mise en œuvre d\'une feuille de route de transformation numérique sur 3 ans pour une institution financière régionale, incluant la dématérialisation des processus clients et la mise en place d\'outils collaboratifs.',
    desc_en:   'Definition and implementation of a 3-year digital transformation roadmap for a regional financial institution, including customer process dematerialisation and collaborative tool deployment.',
    result_fr: '60% de réduction du délai de traitement des dossiers',
    result_en: '60% reduction in file processing time',
    duration:  '8 mois',
    image:     '/images/service-strategy.webp',
    tags_fr:   ['Stratégie digitale', 'Change management', 'Automatisation'],
    tags_en:   ['Digital strategy', 'Change management', 'Automation'],
    stat:      { value: '60%', label_fr: 'Délai de traitement réduit', label_en: 'Processing time reduced' },
  },
  {
    id: 'ngo-abidjan',
    sector_fr: 'ONG & Secteur Public',
    sector_en: 'NGO & Public Sector',
    client_fr: 'ONG Internationale',
    client_en: 'International NGO',
    title_fr:  'Adoption des outils numériques collaboratifs',
    title_en:  'Adoption of collaborative digital tools',
    desc_fr:   'Accompagnement d\'une ONG internationale dans l\'adoption de la suite Microsoft 365 et la structuration de ses processus de gestion de projets, avec une forte composante de formation et de conduite du changement.',
    desc_en:   'Supported an international NGO in adopting Microsoft 365 and structuring its project management processes, with a strong training and change management component.',
    result_fr: '3× plus de projets gérés simultanément',
    result_en: '3× more projects managed simultaneously',
    duration:  '4 mois',
    image:     '/images/service-tools.webp',
    tags_fr:   ['Microsoft 365', 'Formation', 'Gestion de projets'],
    tags_en:   ['Microsoft 365', 'Training', 'Project management'],
    stat:      { value: '3×', label_fr: 'Capacité projets augmentée', label_en: 'Project capacity increased' },
  },
]

export default async function EtudesDeCasPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const isEn = locale === 'en'

  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="relative py-24 lg:py-32 overflow-hidden bg-surface-800">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-bg.webp"
            alt=""
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
            quality={80}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-surface-900/92 via-surface-900/75 to-surface-900/55" />
          <div className="absolute inset-0 bg-gradient-to-b from-surface-900/40 via-transparent to-surface-900/80" />
        </div>
        <div className="absolute inset-0 bg-hero-glow opacity-40 pointer-events-none" />
        <div
          className="absolute inset-0 opacity-[0.025] pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.1) 1px,transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        <div className="section-container relative z-10">
          <nav className="flex items-center gap-2 text-sm text-neutral-500 mb-8">
            <Link href={`/${locale}`} className="hover:text-neutral-300 transition-colors">
              {isEn ? 'Home' : 'Accueil'}
            </Link>
            <span className="text-neutral-700">›</span>
            <span className="text-neutral-400">{isEn ? 'Case Studies' : 'Études de Cas'}</span>
          </nav>
          <div className="max-w-3xl">
            <div className="divider mb-6" />
            <h1 className="section-title text-4xl sm:text-5xl lg:text-6xl mb-6">
              {isEn ? 'Case Studies' : 'Études de Cas'}
            </h1>
            <p className="section-subtitle text-lg lg:text-xl">
              {isEn
                ? 'Real missions, measurable results. Discover how we support our clients through their digital transformation.'
                : 'Des missions réelles, des résultats mesurables. Découvrez comment nous accompagnons nos clients dans leur transformation numérique.'}
            </p>
          </div>
        </div>
      </section>

      {/* ── Études de cas ─────────────────────────────────────── */}
      <section className="section-padding bg-surface-900">
        <div className="section-container space-y-12">
          {CASE_STUDIES.map((cs, index) => (
            <article
              key={cs.id}
              className={`group grid lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden border border-surface-600 bg-surface-800 hover:border-primary-600/40 transition-all duration-500 shadow-card hover:shadow-card-hover ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}
            >
              {/* Image */}
              <div className={`relative h-64 lg:h-auto min-h-[320px] overflow-hidden ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <Image
                  src={cs.image}
                  alt={isEn ? cs.title_en : cs.title_fr}
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  quality={85}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-900/60 via-transparent to-transparent" />

                {/* Stat flottante */}
                <div className="absolute bottom-5 left-5 bg-primary-600 rounded-xl px-4 py-3 shadow-glow-blue text-center">
                  <p className="font-display font-black text-white text-2xl leading-none">{cs.stat.value}</p>
                  <p className="text-primary-200 text-[10px] mt-0.5 leading-tight">
                    {isEn ? cs.stat.label_en : cs.stat.label_fr}
                  </p>
                </div>
              </div>

              {/* Contenu */}
              <div className={`p-8 lg:p-10 flex flex-col justify-center ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                {/* Secteur + durée */}
                <div className="flex items-center gap-4 mb-5">
                  <span className="badge-primary">
                    {isEn ? cs.sector_en : cs.sector_fr}
                  </span>
                  <span className="flex items-center gap-1.5 text-neutral-500 text-xs">
                    <Clock size={12} />
                    {cs.duration}
                  </span>
                </div>

                {/* Client */}
                <div className="flex items-center gap-2 mb-3 text-neutral-500 text-xs uppercase tracking-wider">
                  <Building2 size={12} />
                  <span>{isEn ? cs.client_en : cs.client_fr}</span>
                </div>

                <h2 className="font-display font-bold text-white text-xl lg:text-2xl mb-4 leading-snug group-hover:text-primary-300 transition-colors duration-300">
                  {isEn ? cs.title_en : cs.title_fr}
                </h2>

                <p className="text-neutral-400 text-sm leading-relaxed mb-6">
                  {isEn ? cs.desc_en : cs.desc_fr}
                </p>

                {/* Résultat clé */}
                <div className="flex items-start gap-3 mb-6 p-4 bg-surface-700/50 rounded-xl border border-primary-600/15">
                  <TrendingUp size={16} className="text-primary-400 mt-0.5 shrink-0" />
                  <p className="text-primary-300 text-sm font-medium">
                    {isEn ? cs.result_en : cs.result_fr}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {(isEn ? cs.tags_en : cs.tags_fr).map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-md bg-surface-700 border border-surface-600 text-neutral-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ── CTA Contact ───────────────────────────────────────── */}
      <section className="section-padding bg-surface-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-600/10 via-transparent to-primary-600/5 pointer-events-none" />
        <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="section-container relative z-10 text-center max-w-2xl mx-auto">
          <span className="badge-primary mb-4">
            {isEn ? 'Your project' : 'Votre projet'}
          </span>
          <h2 className="section-title mb-5">
            {isEn ? 'Let\'s discuss your transformation' : 'Parlons de votre transformation'}
          </h2>
          <p className="section-subtitle mx-auto mb-10">
            {isEn
              ? 'Every transformation is unique. Let\'s meet to understand your challenges and co-build your roadmap.'
              : 'Chaque transformation est unique. Rencontrons-nous pour comprendre vos enjeux et co-construire votre feuille de route.'}
          </p>
          <Link href={`/${locale}/nous-contacter`} className="btn-primary inline-flex items-center gap-2">
            {isEn ? 'Contact us' : 'Nous contacter'}
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  )
}
