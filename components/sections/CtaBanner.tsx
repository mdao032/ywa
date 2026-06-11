import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { useLocale } from 'next-intl'
import { ArrowRight, CalendarDays } from 'lucide-react'

export function CtaBanner() {
  const t      = useTranslations('cta_banner')
  const locale = useLocale()

  return (
    <section className="relative section-padding overflow-hidden" style={{ background:'#0a0f1e' }}>

      {/* Fond géométrique premium */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Grande ellipse bleue centrale */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 70% 80% at 50% 120%, rgba(37,99,235,0.25) 0%, transparent 70%)',
          }}
        />
        {/* Grid subtile */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.15) 1px,transparent 1px),' +
              'linear-gradient(90deg,rgba(255,255,255,0.15) 1px,transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Ligne déco top */}
      <div
        className="absolute top-0 inset-x-0 h-px pointer-events-none"
        style={{ background:'linear-gradient(90deg,transparent 0%,rgba(37,99,235,0.45) 50%,transparent 100%)' }}
      />

      <div className="section-container relative z-10">

        {/* Box centrée avec border premium */}
        <div
          className="relative mx-auto max-w-3xl rounded-3xl p-6 sm:p-10 lg:p-14 text-center overflow-hidden"
          style={{
            background: 'linear-gradient(145deg, rgba(15,23,42,0.85) 0%, rgba(10,15,30,0.95) 100%)',
            border: '1px solid rgba(37,99,235,0.2)',
            boxShadow: '0 0 0 1px rgba(255,255,255,0.03) inset, 0 32px 80px -16px rgba(0,0,0,0.7)',
          }}
          data-reveal
        >
          {/* Reflet coin haut-gauche */}
          <div
            className="absolute top-0 left-0 w-2/3 h-1/2 pointer-events-none"
            style={{ background:'linear-gradient(135deg,rgba(255,255,255,0.04) 0%,transparent 60%)' }}
          />

          {/* Glow interne */}
          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 h-32 pointer-events-none"
            style={{ background:'radial-gradient(ellipse,rgba(37,99,235,0.2) 0%,transparent 70%)', filter:'blur(20px)' }}
          />

          <span className="badge-primary mb-6 inline-flex">
            {locale === 'fr' ? 'Passons à l\'action' : "Let's get started"}
          </span>

          <h2 className="section-title text-3xl sm:text-4xl lg:text-5xl mb-5">
            <span className="text-white block">{t('title')}</span>
          </h2>

          <p className="text-neutral-400 text-base lg:text-lg leading-relaxed mb-10 max-w-xl mx-auto">
            {t('subtitle')}
          </p>

          <div className="flex flex-wrap justify-center gap-4 relative z-10">
            <Link href={`/${locale}/nous-contacter`} className="btn-primary flex items-center gap-2">
              <CalendarDays size={16} />
              {t('primary')}
            </Link>
            <Link href={`/${locale}/notre-mission`} className="btn-secondary flex items-center gap-2">
              {t('secondary')}
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
