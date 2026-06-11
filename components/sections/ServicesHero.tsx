import { useTranslations } from 'next-intl'
import { useLocale } from 'next-intl'
import Link from 'next/link'
import { ChevronRight, Home } from 'lucide-react'

interface ServicesHeroProps {
  title: string
  subtitle?: string
  breadcrumb?: string
}

export function ServicesHero({ title, subtitle, breadcrumb }: ServicesHeroProps) {
  const locale = useLocale()
  const tNav   = useTranslations('nav')

  return (
    <section className="relative py-24 lg:py-32 bg-surface-800 overflow-hidden">
      {/* Fond décoratif */}
      <div className="absolute inset-0 bg-hero-glow opacity-60 pointer-events-none" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary-600/5 to-transparent pointer-events-none" />

      {/* Grille décorative */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="section-container relative z-10">
        {/* Fil d'Ariane */}
        <nav className="flex items-center gap-2 text-sm text-neutral-500 mb-8" aria-label="Breadcrumb">
          <Link href={`/${locale}`} className="flex items-center gap-1 hover:text-neutral-300 transition-colors">
            <Home size={13} />
            {tNav('home')}
          </Link>
          <ChevronRight size={13} className="text-neutral-700" />
          {breadcrumb ? (
            <>
              <Link href={`/${locale}/nos-services`} className="hover:text-neutral-300 transition-colors">
                {tNav('services')}
              </Link>
              <ChevronRight size={13} className="text-neutral-700" />
              <span className="text-neutral-400">{breadcrumb}</span>
            </>
          ) : (
            <span className="text-neutral-400">{tNav('services')}</span>
          )}
        </nav>

        {/* Contenu */}
        <div className="max-w-3xl">
          <div className="divider mb-6" />
          <h1 className="section-title text-4xl sm:text-5xl lg:text-6xl mb-6">{title}</h1>
          {subtitle && (
            <p className="section-subtitle text-lg lg:text-xl">{subtitle}</p>
          )}
        </div>
      </div>
    </section>
  )
}

