import Link from 'next/link'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { useLocale } from 'next-intl'
import { ArrowUpRight } from 'lucide-react'

const SERVICES = [
  {
    key:    'strategy',
    image:  '/images/service-strategy.webp',
    slug:   'digital-strategy-consulting',
    accent: '#2563eb',
  },
  {
    key:    'optimization',
    image:  '/images/service-optimization.webp',
    slug:   'process-optimization-automation',
    accent: '#1d4ed8',
  },
  {
    key:    'adoption',
    image:  '/images/service-tools.webp',
    slug:   'digital-tool-adoption-modernization',
    accent: '#3b82f6',
  },
  {
    key:    'innovation',
    image:  '/images/team-presentation.webp',
    slug:   'nos-services',
    accent: '#2563eb',
  },
] as const

export function ServicesGrid() {
  const t      = useTranslations('services')
  const locale = useLocale()

  return (
    <section id="services" className="relative section-padding bg-surface-900 overflow-hidden">

      {/* Glow droit */}
      <div className="absolute top-1/3 right-0 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle,rgba(37,99,235,0.1) 0%,transparent 70%)', filter:'blur(60px)' }} />

      <div className="section-container relative z-10">

        {/* En-tête */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 sm:gap-6 mb-8 sm:mb-12" data-reveal>
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-px" style={{ background:'linear-gradient(90deg,#2563eb,#60a5fa)' }} />
              <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary-400">
                {t('badge')}
              </span>
            </div>
            <h2 className="font-display font-bold text-white leading-tight"
              style={{ fontSize:'clamp(2.2rem, 4vw, 3.2rem)' }}>
              {locale === 'fr'
                ? <>Nos <span style={{ background:'linear-gradient(135deg,#60a5fa,#818cf8)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>services de conseil</span></>
                : <>Our <span style={{ background:'linear-gradient(135deg,#60a5fa,#818cf8)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>consulting services</span></>}
            </h2>
          </div>
          <p className="text-neutral-500 text-sm max-w-xs leading-relaxed sm:text-right">
            {t('subtitle')}
          </p>
        </div>

        {/* Grille : 4 cartes pleine hauteur */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {SERVICES.map(({ key, image, slug, accent }, i) => (
            <Link
              key={key}
              href={`/${locale}/${slug}`}
              data-reveal
              data-delay={(['0', '100', '200', '300'] as const)[i]}
              className="group relative rounded-2xl overflow-hidden block"
              style={{ height: 'clamp(340px, 44vw, 480px)' }}
            >
              {/* Photo fond plein */}
              <Image
                src={image}
                alt={t(`${key}.title`)}
                fill
                className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width:640px) 100vw,(max-width:1024px) 50vw,25vw"
                quality={85}
              />

              {/* Overlay gradient : transparent haut → noir bas */}
              <div className="absolute inset-0"
                style={{ background:'linear-gradient(to top, rgba(10,15,30,0.98) 0%, rgba(10,15,30,0.7) 35%, rgba(10,15,30,0.15) 65%, transparent 100%)' }} />

              {/* Couleur tint au hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background:`linear-gradient(to top,${accent}22 0%,transparent 50%)` }} />

              {/* Numéro décoratif */}
              <div className="absolute top-5 left-5 font-display font-black leading-none select-none"
                style={{ fontSize:'4rem', color:'rgba(255,255,255,0.06)' }}>
                0{i + 1}
              </div>

              {/* Flèche top-right */}
              <div className="absolute top-5 right-5 w-9 h-9 rounded-xl flex items-center justify-center
                              opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-y-1 group-hover:translate-y-0"
                style={{ background:'rgba(37,99,235,0.85)', border:'1px solid rgba(96,165,250,0.3)' }}>
                <ArrowUpRight size={15} className="text-white" />
              </div>

              {/* Contenu texte bas de carte */}
              <div className="absolute bottom-0 left-0 right-0 p-6">

                {/* Barre bleue animée */}
                <div className="h-[2px] rounded-full mb-4 transition-all duration-500 group-hover:w-12"
                  style={{ width:'24px', background:`linear-gradient(90deg,${accent},#60a5fa)`, boxShadow:`0 0 8px ${accent}80` }} />

                <h3 className="font-display font-bold text-white leading-snug mb-2 transition-colors duration-300 group-hover:text-primary-200"
                  style={{ fontSize:'1.05rem' }}>
                  {t(`${key}.title`)}
                </h3>

                {/* Description : cachée par défaut, slide au hover */}
                <div className="overflow-hidden transition-all duration-500 max-h-0 group-hover:max-h-20">
                  <p className="text-neutral-400 text-xs leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 mb-3">
                    {t(`${key}.description`)}
                  </p>
                </div>

                <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-primary-400 group-hover:text-primary-300 transition-colors duration-200">
                  {t(`${key}.cta`)}
                </span>
              </div>

              {/* Bordure bleue en bas au hover */}
              <div className="absolute bottom-0 left-0 right-0 h-[2px] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"
                style={{ background:`linear-gradient(90deg,${accent},#60a5fa)` }} />
            </Link>
          ))}
        </div>

      </div>
    </section>
  )
}
