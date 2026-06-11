import Image from 'next/image'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { useLocale } from 'next-intl'
import { ArrowRight } from 'lucide-react'

const FEATURES = [
  {
    num:      '01',
    titleKey: 'strategy.title'       as const,
    descKey:  'strategy.description' as const,
    slug:     'digital-strategy-consulting',
    image:    '/images/service-strategy.webp',
    imageAlt: 'Conseil en stratégie numérique',
  },
  {
    num:      '02',
    titleKey: 'optimization.title'       as const,
    descKey:  'optimization.description' as const,
    slug:     'process-optimization-automation',
    image:    '/images/service-optimization.webp',
    imageAlt: 'Optimisation et automatisation des processus',
  },
  {
    num:      '03',
    titleKey: 'adoption.title'       as const,
    descKey:  'adoption.description' as const,
    slug:     'digital-tool-adoption-modernization',
    image:    '/images/service-tools.webp',
    imageAlt: "Adoption des outils numériques",
  },
] as const

export function PotentialSection() {
  const t      = useTranslations('services')
  const locale = useLocale()

  return (
    <section className="relative section-padding bg-surface-800 overflow-hidden">

      {/* Glow top-center */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none"
        style={{ background:'radial-gradient(ellipse, rgba(37,99,235,0.08) 0%,transparent 70%)', filter:'blur(40px)' }} />

      <div className="section-container relative z-10">

        {/* En-tête section */}
        <div className="max-w-2xl mb-10 sm:mb-16 lg:mb-20" data-reveal>
          <div className="flex items-center gap-3 mb-5">
            <div className="w-6 h-px" style={{ background:'linear-gradient(90deg,#2563eb,#60a5fa)' }} />
            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary-400">
              {locale === 'fr' ? 'Notre expertise' : 'Our expertise'}
            </span>
          </div>
          <h2 className="font-display font-bold text-white leading-tight mb-5"
            style={{ fontSize:'clamp(1.75rem,4vw,3.4rem)' }}>
            {locale === 'fr'
              ? <>Libérez votre{' '}
                  <span style={{ background:'linear-gradient(135deg,#60a5fa,#a78bfa)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>
                    potentiel numérique
                  </span>
                </>
              : <>Unlock your{' '}
                  <span style={{ background:'linear-gradient(135deg,#60a5fa,#a78bfa)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>
                    digital potential
                  </span>
                </>}
          </h2>
          <p className="text-neutral-500 text-base leading-relaxed">
            {locale === 'fr'
              ? 'Trois domaines d\'expertise complémentaires pour accompagner l\'intégralité de votre transformation.'
              : 'Three complementary areas of expertise to accompany your entire digital transformation.'}
          </p>
        </div>

        {/* Feature items : alternance image / texte */}
        <div className="space-y-4 lg:space-y-4">
          {FEATURES.map(({ num, titleKey, descKey, slug, image, imageAlt }, i) => {
            const reversed = i % 2 === 1
            return (
              <div
                key={slug}
                data-reveal
                data-delay={String(i * 100) as '0' | '100' | '200'}
                className="group grid lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden"
                style={{ border:'1px solid rgba(51,65,85,0.6)', minHeight:'420px' }}
              >
                {/* Image */}
                <div className={`relative overflow-hidden ${reversed ? 'lg:order-2' : ''}`}
                  style={{ minHeight:'340px' }}>
                  <Image
                    src={image}
                    alt={imageAlt}
                    fill
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width:1024px) 100vw,50vw"
                    quality={85}
                  />
                  {/* Overlay latéral : transparent côté externe → opaque côté raccord texte */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background: reversed
                        ? 'linear-gradient(to left, transparent 0%, transparent 25%, rgba(10,15,30,0.75) 70%, rgba(10,15,30,0.97) 100%)'
                        : 'linear-gradient(to right, transparent 0%, transparent 25%, rgba(10,15,30,0.75) 70%, rgba(10,15,30,0.97) 100%)',
                    }}
                  />
                  {/* Overlay bas constant */}
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-900/60 via-transparent to-transparent" />

                  {/* Numéro décoratif */}
                  <div className="absolute bottom-4 right-5 font-display font-black leading-none select-none"
                    style={{ fontSize:'6rem', color:'rgba(255,255,255,0.04)' }}>
                    {num}
                  </div>
                </div>

                {/* Texte */}
                <div className={`flex flex-col justify-center p-5 sm:p-8 lg:p-12 ${reversed ? 'lg:order-1' : ''}`}
                  style={{ background:'linear-gradient(145deg, rgba(15,23,42,0.95) 0%, rgba(10,15,30,1) 100%)' }}>

                  {/* Numéro */}
                  <span className="font-display font-black mb-5 leading-none select-none"
                    style={{
                      fontSize:'1rem',
                      background:'linear-gradient(135deg,#2563eb,#60a5fa)',
                      WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text',
                      letterSpacing:'0.12em',
                    }}>
                    {num}
                  </span>

                  <h3 className="font-display font-bold text-white mb-4 leading-tight"
                    style={{ fontSize:'clamp(1.3rem, 2.2vw, 1.7rem)' }}>
                    {t(titleKey)}
                  </h3>

                  <p className="text-neutral-400 text-sm leading-relaxed mb-8 max-w-md">
                    {t(descKey)}
                  </p>

                  <Link
                    href={`/${locale}/${slug}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-primary-400 hover:text-primary-300 transition-colors duration-200 group/link w-fit"
                  >
                    {locale === 'fr' ? 'Découvrir ce service' : 'Discover this service'}
                    <ArrowRight size={14} className="group-hover/link:translate-x-1.5 transition-transform duration-200" />
                  </Link>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
