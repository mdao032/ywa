import Image from 'next/image'
import Link from 'next/link'
import { useLocale, useTranslations } from 'next-intl'
import { ChevronRight, Home } from 'lucide-react'

interface PageHeroProps {
  title: string
  subtitle?: string
  /** URL de l'image de fond (optionnel) */
  imageSrc?: string | null
  imageAlt?: string
  /** Label du fil d'Ariane courant (après Accueil) */
  breadcrumb?: string
  /** Lien intermédiaire optionnel dans le fil d'Ariane */
  parentBreadcrumb?: { label: string; href: string }
}

export function PageHero({
  title,
  subtitle,
  imageSrc,
  imageAlt = '',
  breadcrumb,
  parentBreadcrumb,
}: PageHeroProps) {
  const locale = useLocale()
  const tNav   = useTranslations('nav')

  return (
    <section className="relative py-20 sm:py-28 lg:py-36 overflow-hidden bg-surface-800">
      {/* Image de fond avec overlay */}
      {imageSrc && (
        <>
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
            quality={85}
          />
          {/* Assombrir pour lisibilité tout en laissant l'image respirer */}
          <div className="absolute inset-0 bg-gradient-to-r from-surface-900/90 via-surface-900/70 to-surface-900/50" />
          <div className="absolute inset-0 bg-gradient-to-b from-surface-900/40 via-transparent to-surface-900/80" />
        </>
      )}

      {/* Décors */}
      <div className="absolute inset-0 bg-hero-glow opacity-50 pointer-events-none" />
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.1) 1px,transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="section-container relative z-10">
        {/* Fil d'Ariane */}
        <nav className="flex items-center gap-2 text-sm text-neutral-500 mb-5 sm:mb-8" aria-label="Breadcrumb">
          <Link
            href={`/${locale}`}
            className="flex items-center gap-1 hover:text-neutral-300 transition-colors"
          >
            <Home size={13} />
            {tNav('home')}
          </Link>

          {parentBreadcrumb && (
            <>
              <ChevronRight size={13} className="text-neutral-700" />
              <Link
                href={parentBreadcrumb.href}
                className="hover:text-neutral-300 transition-colors"
              >
                {parentBreadcrumb.label}
              </Link>
            </>
          )}

          {breadcrumb && (
            <>
              <ChevronRight size={13} className="text-neutral-700" />
              <span className="text-neutral-400">{breadcrumb}</span>
            </>
          )}
        </nav>

        {/* Contenu */}
        <div className="max-w-3xl">
          <div className="divider mb-6" />
          <h1 className="section-title text-3xl sm:text-4xl lg:text-5xl mb-4 sm:mb-6">{title}</h1>
          {subtitle && (
            <p className="section-subtitle text-sm sm:text-base lg:text-lg">{subtitle}</p>
          )}
        </div>
      </div>
    </section>
  )
}

