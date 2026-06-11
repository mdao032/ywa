import Image from 'next/image'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { useLocale } from 'next-intl'
import { ShieldCheck, BarChart3, TrendingUp, ArrowRight, CheckCircle2 } from 'lucide-react'

const whyKeys = ['expertise', 'methodology', 'results'] as const
const icons   = [ShieldCheck, BarChart3, TrendingUp]

export function WhyUs() {
  const t      = useTranslations('why_us')
  const locale = useLocale()

  return (
    <section className="section-padding bg-surface-900 grain relative overflow-hidden">
      <div
        className="glow-dot"
        style={{ width:500, height:500, top:'40%', right:'-8%',
                 background:'radial-gradient(circle,rgba(37,99,235,0.12) 0%,transparent 70%)' }}
      />

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* ── Colonne gauche : arguments ─────────────────────── */}
          <div data-reveal="left">
            <span className="badge-primary mb-4">{t('badge')}</span>
            <h2 className="section-title mb-4"
              style={{
                background: 'linear-gradient(120deg, #ffffff 20%, #93c5fd 70%, #a78bfa 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
              {t('title', { highlight: t('title_highlight') })}
            </h2>
            <p className="section-subtitle mb-10">{t('subtitle')}</p>

            <div className="space-y-7" data-reveal data-delay="100">
              {whyKeys.map((key, i) => {
                const Icon = icons[i]
                return (
                  <div key={key} className="flex gap-4 group">
                    {/* Icône */}
                    <div className="shrink-0 w-11 h-11 rounded-xl bg-primary-600/15 border border-primary-600/20 flex items-center justify-center mt-0.5 group-hover:bg-primary-600/25 group-hover:border-primary-500/40 transition-all duration-300">
                      <Icon size={18} className="text-primary-400" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-white mb-1.5">
                        {t(`${key}.title`)}
                      </h3>
                      <p className="text-neutral-400 text-sm leading-relaxed">
                        {t(`${key}.description`)}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Lien philosophie */}
            <Link
              href={`/${locale}/notre-mission`}
              className="mt-10 inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 font-medium text-sm transition-colors duration-200"
            >
              {t('philosophy_cta')}
              <ArrowRight size={14} />
            </Link>
          </div>

          {/* ── Colonne droite : image + encart philosophie ────── */}
          <div className="relative" data-reveal data-delay="200">
            {/* Halo derrière l'image */}
            <div className="absolute -inset-4 bg-primary-600/5 rounded-3xl blur-2xl" />

            {/* Image principale */}
            <div className="relative rounded-2xl overflow-hidden border border-surface-600 shadow-card-hover">
              <div className="relative h-[320px] sm:h-[400px] lg:h-[480px]">
                <Image
                  src="/images/team-analytics.webp"
                  alt="Équipe YWA Consulting en réunion stratégique"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  quality={85}
                />
                {/* Overlay gradient bas */}
                <div className="absolute inset-0 bg-gradient-to-t from-surface-900/80 via-transparent to-transparent" />

                {/* Encart philosophie flottant en bas */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="bg-surface-900/90 backdrop-blur-sm rounded-xl border border-surface-600/80 p-5">
                    <span className="badge-primary mb-3 inline-flex">{t('philosophy_label')}</span>
                    <h3 className="font-display text-lg font-bold text-white mb-2 leading-snug">
                      {t('philosophy_title')}
                    </h3>
                    <p className="text-neutral-400 text-sm leading-relaxed line-clamp-2">
                      {t('philosophy_text')}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Badge flottant haut-droite — visible à partir de sm pour éviter le clip */}
            <div className="hidden sm:block absolute -top-3 -right-3 lg:-top-4 lg:-right-4 bg-primary-600 rounded-xl px-4 py-3 shadow-glow-blue text-center z-10">
              <p className="font-display font-bold text-white text-xl leading-none">10+</p>
              <p className="text-primary-200 text-xs mt-0.5 whitespace-nowrap">
                {locale === 'fr' ? 'ans d\'expertise' : 'years expertise'}
              </p>
            </div>

            {/* Points de confiance bas-gauche — visible à partir de sm */}
            <div className="hidden sm:block absolute -bottom-4 -left-3 lg:-bottom-5 lg:-left-4 bg-surface-800 border border-surface-600 rounded-xl p-3 shadow-lg z-10">
              <div className="flex flex-col gap-1.5">
                {(locale === 'fr'
                  ? ['Résultats mesurables', 'Approche sur-mesure', 'Support continu']
                  : ['Measurable results', 'Tailored approach', 'Ongoing support']
                ).map((label) => (
                  <div key={label} className="flex items-center gap-2">
                    <CheckCircle2 size={12} className="text-primary-400 shrink-0" />
                    <span className="text-xs text-neutral-300 whitespace-nowrap">{label}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
