'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useLocale, useTranslations } from 'next-intl'
import { Menu, X, ChevronDown, Globe } from 'lucide-react'
import { cn } from '@/lib/utils'

// ─── Sous-menu Expertise ─────────────────────────────────────────────────────

const expertiseLinks = (locale: string) => [
  { key: 'services',  href: `/${locale}/nos-services` },
  { key: 'strengths', href: `/${locale}/nos-atouts` },
  { key: 'mission',   href: `/${locale}/notre-mission` },
  { key: 'team',      href: `/${locale}/notre-equipe` },
]

// ─── Composant ───────────────────────────────────────────────────────────────

export function Navbar() {
  const t        = useTranslations('nav')
  const locale   = useLocale()
  const pathname = usePathname()

  const [scrolled,      setScrolled]      = useState(false)
  const [mobileOpen,    setMobileOpen]    = useState(false)
  const [expertiseOpen, setExpertiseOpen] = useState(false)
  const [mobileExpOpen, setMobileExpOpen] = useState(false)

  const dropdownRef = useRef<HTMLLIElement>(null)

  // Scroll listener
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Fermer le menu mobile au changement de route
  useEffect(() => {
    setMobileOpen(false)
    setExpertiseOpen(false)
    setMobileExpOpen(false)
  }, [pathname])

  // Fermer le dropdown au clic extérieur
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setExpertiseOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const otherLocale = locale === 'fr' ? 'en' : 'fr'
  // Construire l'URL de la langue opposée en remplaçant le préfixe de locale
  const switchLangHref = pathname.replace(`/${locale}`, `/${otherLocale}`) || `/${otherLocale}`

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-surface-900/95 backdrop-blur-md border-b border-surface-600/50 shadow-lg'
          : 'bg-transparent'
      )}
    >
      <nav className="section-container flex items-center justify-between h-16 lg:h-20">

        {/* Logo */}
        <Link href={`/${locale}`} className="flex items-center gap-3 shrink-0 group">
          <Image
            src="/images/logo.png"
            alt="YWA Consulting"
            width={40}
            height={40}
            className="h-9 w-auto object-contain"
            priority
          />
          <span className="flex flex-col leading-none">
            <span className="font-display font-extrabold text-[17px] tracking-[0.12em] uppercase text-white group-hover:text-primary-300 transition-colors duration-200">
              YWA
            </span>
            <span className="font-display font-light text-[10px] tracking-[0.28em] uppercase text-primary-400 group-hover:text-primary-300 transition-colors duration-200">
              Consulting
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-1">

          {/* Accueil */}
          <li>
            <Link
              href={`/${locale}`}
              className={cn(
                'px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200',
                pathname === `/${locale}` || pathname === `/${locale}/`
                  ? 'text-white bg-surface-700'
                  : 'text-neutral-300 hover:text-white hover:bg-surface-700/50'
              )}
            >
              {t('home')}
            </Link>
          </li>

          {/* Notre Expertise (dropdown) */}
          <li ref={dropdownRef} className="relative">
            <button
              onClick={() => setExpertiseOpen(!expertiseOpen)}
              className={cn(
                'flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200',
                expertiseOpen
                  ? 'text-white bg-surface-700'
                  : 'text-neutral-300 hover:text-white hover:bg-surface-700/50'
              )}
              aria-expanded={expertiseOpen}
            >
              {t('expertise')}
              <ChevronDown
                size={14}
                className={cn('transition-transform duration-200', expertiseOpen && 'rotate-180')}
              />
            </button>

            {/* Dropdown panel */}
            {expertiseOpen && (
              <div className="absolute top-full left-0 mt-2 w-52 bg-surface-800 border border-surface-600 rounded-xl shadow-xl py-1 animate-fade-in">
                {expertiseLinks(locale).map((link) => (
                  <Link
                    key={link.key}
                    href={link.href}
                    className={cn(
                      'block px-4 py-2.5 text-sm transition-colors duration-150',
                      pathname.startsWith(link.href)
                        ? 'text-primary-400 bg-primary-600/10'
                        : 'text-neutral-300 hover:text-white hover:bg-surface-700'
                    )}
                  >
                    {link.key === 'team'
                      ? (locale === 'fr' ? 'Notre Équipe' : 'Our Team')
                      : t(link.key as 'services' | 'strengths' | 'mission')}
                  </Link>
                ))}
              </div>
            )}
          </li>

          {/* Carrière */}
          <li>
            <Link
              href={`/${locale}/carriere`}
              className={cn(
                'px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200',
                pathname.startsWith(`/${locale}/carriere`)
                  ? 'text-white bg-surface-700'
                  : 'text-neutral-300 hover:text-white hover:bg-surface-700/50'
              )}
            >
              {t('career')}
            </Link>
          </li>

          {/* News */}
          <li>
            <Link
              href={`/${locale}/news`}
              className={cn(
                'px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200',
                pathname.startsWith(`/${locale}/news`)
                  ? 'text-white bg-surface-700'
                  : 'text-neutral-300 hover:text-white hover:bg-surface-700/50'
              )}
            >
              {t('news')}
            </Link>
          </li>
        </ul>

        {/* Actions desktop */}
        <div className="hidden lg:flex items-center gap-3">
          {/* Switcher de langue */}
          <Link
            href={switchLangHref}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-neutral-400 hover:text-white hover:bg-surface-700 transition-colors duration-200 border border-surface-600 hover:border-surface-500"
            title={t('language')}
          >
            <Globe size={12} />
            <span className="uppercase">{otherLocale}</span>
          </Link>

          {/* CTA Contact */}
          <Link
            href={`/${locale}/nous-contacter`}
            className="btn-primary text-xs px-4 py-2"
          >
            {t('contact')}
          </Link>
        </div>

        {/* Hamburger mobile */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 rounded-lg text-neutral-300 hover:text-white hover:bg-surface-700 transition-colors duration-200"
          aria-label="Menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* ── Menu mobile ─────────────────────────────────────────── */}
      {mobileOpen && (
        <div className="lg:hidden bg-surface-900/98 backdrop-blur-md border-t border-surface-600/50 animate-fade-in">
          <div className="section-container py-4 space-y-1">

            <Link href={`/${locale}`} className="mobile-nav-link">{t('home')}</Link>

            {/* Expertise accordéon */}
            <div>
              <button
                onClick={() => setMobileExpOpen(!mobileExpOpen)}
                className="mobile-nav-link w-full flex items-center justify-between"
              >
                {t('expertise')}
                <ChevronDown
                  size={16}
                  className={cn('transition-transform duration-200', mobileExpOpen && 'rotate-180')}
                />
              </button>
              {mobileExpOpen && (
                <div className="pl-4 mt-1 space-y-1 border-l border-surface-600 ml-3">
                  {expertiseLinks(locale).map((link) => (
                    <Link
                      key={link.key}
                      href={link.href}
                      className="block py-2 px-3 text-sm text-neutral-400 hover:text-white transition-colors duration-150"
                    >
                      {link.key === 'team'
                      ? (locale === 'fr' ? 'Notre Équipe' : 'Our Team')
                      : t(link.key as 'services' | 'strengths' | 'mission')}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href={`/${locale}/carriere`} className="mobile-nav-link">{t('career')}</Link>
            <Link href={`/${locale}/news`}     className="mobile-nav-link">{t('news')}</Link>

            <div className="pt-3 border-t border-surface-600 flex items-center gap-3">
              <Link href={switchLangHref} className="flex items-center gap-1.5 text-sm text-neutral-400 hover:text-white transition-colors">
                <Globe size={14} />
                <span className="uppercase">{otherLocale}</span>
              </Link>
              <Link href={`/${locale}/nous-contacter`} className="btn-primary text-sm px-5 py-2.5 flex-1 text-center">
                {t('contact')}
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

