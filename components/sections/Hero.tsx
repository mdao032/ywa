import Link from 'next/link'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { useLocale } from 'next-intl'
import { ArrowRight, ChevronDown } from 'lucide-react'

export function Hero() {
  const t      = useTranslations('hero')
  const locale = useLocale()

  return (
    <section className="relative min-h-[100svh] flex flex-col justify-between overflow-hidden bg-surface-900">

      {/* ── Fond photo ────────────────────────────────────────── */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg.webp"
          alt=""
          fill
          className="object-cover object-center scale-105"
          priority
          sizes="100vw"
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-surface-900 via-surface-900/88 to-surface-900/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-surface-900/90 via-transparent to-surface-900/40" />
      </div>

      {/* Glow radial bleu haut-gauche */}
      <div className="absolute top-0 left-0 right-0 h-[600px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 80% 60% at 30% -10%, rgba(37,99,235,0.4) 0%, transparent 70%)' }} />

      {/* Grille décorative (côté gauche seulement) */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.04) 1px,transparent 1px),' +
            'linear-gradient(90deg,rgba(255,255,255,0.04) 1px,transparent 1px)',
          backgroundSize: '72px 72px',
          maskImage: 'linear-gradient(to right, rgba(0,0,0,0.6) 0%, transparent 55%)',
          WebkitMaskImage: 'linear-gradient(to right, rgba(0,0,0,0.6) 0%, transparent 55%)',
        }}
      />

      {/* ── Contenu principal ─────────────────────────────────── */}
      <div className="section-container relative z-10 flex-1 flex items-center py-10 pt-24 sm:pt-28 lg:pt-24">
        <div className="grid lg:grid-cols-[1fr_380px] xl:grid-cols-[1fr_440px] gap-8 lg:gap-12 xl:gap-20 items-center w-full">

          {/* Texte */}
          <div className="animate-slide-up">

            {/* Overline */}
            <div className="flex items-center gap-3 mb-6 sm:mb-8">
              <div className="w-8 h-px" style={{ background: 'linear-gradient(90deg,#2563eb,#60a5fa)' }} />
              <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-primary-400">
                YWA Consulting
              </span>
            </div>

            {/* Headline massif */}
            <h3 className="font-display font-bold leading-[1.04] tracking-tight mb-6 sm:mb-8"
              style={{ fontSize: 'clamp(1rem, 6vw, 5rem)' }}>
              <span className="block text-white">{t('title_line1')}</span>
              <span className="block mt-1"
                style={{
                  background: 'linear-gradient(135deg, #60a5fa 0%, #818cf8 50%, #a78bfa 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>
                {t('title_line2')}
              </span>
            </h3>

            <p className="text-neutral-400 text-base sm:text-lg leading-relaxed mb-8 sm:mb-10 max-w-[520px]">
              {t('subtitle')}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 sm:gap-4 mb-10 sm:mb-14">
              <Link href={`/${locale}/nos-services`} className="btn-primary group flex items-center gap-2.5">
                {t('cta_primary')}
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              <Link href={`/${locale}/nous-contacter`} className="btn-outline flex items-center gap-2.5">
                {t('cta_secondary')}
              </Link>
            </div>

            {/* Trust row */}
            <div className="flex flex-wrap items-center gap-x-5 gap-y-4 sm:gap-x-8">
              {[
                { n: '10+', label: locale === 'fr' ? "Années d'expertise" : 'Years of expertise' },
                { n: '50+', label: locale === 'fr' ? 'Clients accompagnés' : 'Clients served' },
                { n: '100%', label: locale === 'fr' ? 'Engagement résultats' : 'Results-driven' },
              ].map(({ n, label }, i) => (
                <div key={i} className="flex items-center gap-4 sm:gap-5">
                  {i > 0 && (
                    <div className="w-px h-8 hidden xs:block"
                      style={{ background: 'linear-gradient(to bottom,transparent,rgba(51,65,85,0.9),transparent)' }} />
                  )}
                  <div>
                    <p className="font-display font-black text-white leading-none"
                      style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.1rem)' }}>{n}</p>
                    <p className="text-[10px] sm:text-[11px] text-neutral-500 mt-0.5 whitespace-nowrap">{label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Portrait — masqué sous lg */}
          <div className="hidden lg:block animate-fade-in animation-delay-300">
            <div className="relative">

              {/* Halo derrière */}
              <div className="absolute -inset-6 rounded-3xl opacity-50 pointer-events-none"
                style={{ background: 'radial-gradient(ellipse at 60% 40%, rgba(37,99,235,0.35) 0%, transparent 70%)', filter: 'blur(32px)' }} />

              {/* Photo */}
              <div className="relative rounded-2xl overflow-hidden shadow-glow-blue"
                style={{ border: '1px solid rgba(37,99,235,0.25)', height: 'clamp(420px, 42vw, 520px)' }}>
                <Image
                  src="/images/hero-consultant.webp"
                  alt="Expert en transformation numérique"
                  fill
                  className="object-cover object-top"
                  priority
                  sizes="(max-width:1280px) 380px, 440px"
                  quality={90}
                />
                {/* Gradient bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-surface-900/60 via-transparent to-transparent" />
                {/* Reflet coin */}
                <div className="absolute top-0 left-0 w-2/3 h-1/4 pointer-events-none"
                  style={{ background: 'linear-gradient(135deg,rgba(255,255,255,0.05) 0%,transparent 70%)' }} />
              </div>

              {/* Badge "Disponible" — ancré dans le portrait, pas hors du container */}
              <div className="absolute -top-3 left-4 flex items-center gap-2.5 px-4 py-2.5 rounded-xl shadow-premium"
                style={{
                  background: 'rgba(15,23,42,0.92)',
                  border: '1px solid rgba(51,65,85,0.8)',
                  backdropFilter: 'blur(12px)',
                }}>
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
                </span>
                <span className="text-[11px] font-medium text-neutral-200 whitespace-nowrap">
                  {locale === 'fr' ? 'Disponible pour vos projets' : 'Available for projects'}
                </span>
              </div>

              {/* Badge stat bas-droite — ancré dans le portrait */}
              <div className="absolute -bottom-3 right-4 px-5 py-3 rounded-xl text-center shadow-premium"
                style={{
                  background: 'linear-gradient(135deg, rgba(37,99,235,0.9) 0%, rgba(29,78,216,0.95) 100%)',
                  border: '1px solid rgba(96,165,250,0.3)',
                  boxShadow: '0 0 30px -8px rgba(37,99,235,0.7)',
                }}>
                <p className="font-display font-black text-white text-2xl leading-none">+35%</p>
                <p className="text-primary-200 text-[11px] mt-0.5 whitespace-nowrap">
                  {locale === 'fr' ? 'Efficacité opérationnelle' : 'Operational efficiency'}
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ── Scroll indicator ──────────────────────────────────── */}
      <div className="relative z-10 flex justify-center pb-6 sm:pb-8 animate-fade-in animation-delay-500">
        <a href="#services" aria-label="Scroll"
          className="flex flex-col items-center gap-1.5 text-neutral-600 hover:text-primary-400 transition-colors duration-300 group">
          <span className="text-[9px] uppercase tracking-[0.25em] font-semibold">
            {locale === 'fr' ? 'Découvrir' : 'Scroll'}
          </span>
          <ChevronDown size={16} className="animate-float" />
        </a>
      </div>

    </section>
  )
}
