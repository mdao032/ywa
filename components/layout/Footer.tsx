'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useLocale, useTranslations } from 'next-intl'
import { Linkedin, X as XIcon, ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

// ─── Footer Component ────────────────────────────────────────────────────────

export function Footer() {
  const t      = useTranslations('footer')
  const tNav   = useTranslations('nav')
  const locale = useLocale()

  const [email,       setEmail]       = useState('')
  const [subStatus,   setSubStatus]   = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setSubStatus('loading')
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      setSubStatus(res.ok ? 'success' : 'error')
    } catch {
      setSubStatus('error')
    }
  }

  const year = new Date().getFullYear()

  return (
    <footer className="bg-surface-800 border-t border-surface-600">

      {/* ── Logo + tagline ──────────────────────────────────────── */}
      <div className="section-container pt-12 pb-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-8 border-b border-surface-600">
          <Link href={`/${locale}`} className="flex items-center gap-3 group">
            <Image
              src="/images/logo.png"
              alt="YWA Consulting"
              width={40}
              height={40}
              className="h-9 w-auto object-contain"
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
          <p className="text-sm text-neutral-500 max-w-xs leading-relaxed">
            {locale === 'fr'
              ? 'Votre partenaire en transformation numérique — stratégie, optimisation & modernisation.'
              : 'Your digital transformation partner — strategy, optimization & modernization.'}
          </p>
        </div>
      </div>

      {/* ── Contenu principal ───────────────────────────────────── */}
      <div className="section-container pb-14 lg:pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">

          {/* Colonne Company */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-neutral-500 mb-4">
              {t('company')}
            </h3>
            <ul className="space-y-2.5">
              <FooterLink href={`/${locale}`}                  label={tNav('home')} />
              <FooterLink href={`/${locale}/nos-services`}     label={tNav('services')} />
              <FooterLink href={`/${locale}/nos-atouts`}       label={tNav('strengths')} />
              <FooterLink href={`/${locale}/notre-mission`}    label={tNav('mission')} />
              <FooterLink href={`/${locale}/carriere`}         label={tNav('career')} />
              <FooterLink href={`/${locale}/nous-contacter`}   label={tNav('contact')} />
            </ul>
          </div>

          {/* Colonne Services */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-neutral-500 mb-4">
              {t('services_col')}
            </h3>
            <ul className="space-y-2.5">
              <FooterLink href={`/${locale}/digital-strategy-consulting`}             label={t('digital_strategy')} />
              <FooterLink href={`/${locale}/process-optimization-automation`}         label={t('process_optimization')} />
              <FooterLink href={`/${locale}/digital-tool-adoption-modernization`}     label={t('automation')} />
            </ul>
          </div>

          {/* Colonne Resources */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-neutral-500 mb-4">
              {t('resources')}
            </h3>
            <ul className="space-y-2.5">
              <FooterLink href={`/${locale}/news`}              label={t('blog')} />
              <FooterLink href={`/${locale}/etudes-de-cas`}  label={t('case_studies')} />
              <FooterLink href={`/${locale}/notre-equipe`}   label={locale === 'fr' ? 'Notre Équipe' : 'Our Team'} />
            </ul>

            {/* Réseaux sociaux */}
            <div className="flex gap-3 mt-6">
              <SocialLink
                href="https://www.linkedin.com/company/ywa-consulting"
                icon={<Linkedin size={16} />}
                label="LinkedIn"
              />
              <SocialLink
                href="https://twitter.com/ywaconsulting"
                icon={<XIcon size={16} />}
                label="Twitter"
              />
            </div>
          </div>

          {/* Colonne Newsletter */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-neutral-500 mb-4">
              {t('stay_updated')}
            </h3>
            <p className="text-sm text-neutral-400 mb-4 leading-relaxed">
              {locale === 'fr'
                ? 'Recevez nos dernières analyses sur la transformation numérique.'
                : 'Get our latest insights on digital transformation.'}
            </p>

            {subStatus === 'success' ? (
              <p className="text-sm text-primary-400 font-medium">{t('newsletter_success')}</p>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t('newsletter_placeholder')}
                  required
                  className="input text-sm"
                />
                <button
                  type="submit"
                  disabled={subStatus === 'loading'}
                  className={cn(
                    'btn-primary text-sm py-2.5 flex items-center justify-center gap-2',
                    subStatus === 'loading' && 'opacity-60 cursor-not-allowed'
                  )}
                >
                  {subStatus === 'loading' ? (
                    <span className="animate-spin h-4 w-4 border-2 border-white/30 border-t-white rounded-full" />
                  ) : (
                    <>
                      {t('subscribe')}
                      <ArrowRight size={14} />
                    </>
                  )}
                </button>
                {subStatus === 'error' && (
                  <p className="text-xs text-red-400">{t('newsletter_error')}</p>
                )}
              </form>
            )}
          </div>

        </div>
      </div>

      {/* ── Barre de bas de page ────────────────────────────────── */}
      <div className="border-t border-surface-600">
        <div className="section-container py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-neutral-500">
            {t('copyright', { year })}
          </p>
          <div className="flex items-center gap-4">
            <Link
              href={`/${locale}/mentions-legales`}
              className="text-xs text-neutral-500 hover:text-neutral-300 transition-colors duration-200"
            >
              {t('terms')}
            </Link>
            <span className="text-neutral-700">·</span>
            <Link
              href={`/${locale}/politique-de-confidentialite`}
              className="text-xs text-neutral-500 hover:text-neutral-300 transition-colors duration-200"
            >
              {t('privacy')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

// ─── Sous-composants ─────────────────────────────────────────────────────────

function FooterLink({ href, label }: { href: string; label: string }) {
  return (
    <li>
      <Link
        href={href}
        className="text-sm text-neutral-400 hover:text-white transition-colors duration-200"
      >
        {label}
      </Link>
    </li>
  )
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex items-center justify-center w-8 h-8 rounded-lg bg-surface-700 border border-surface-600 text-neutral-400 hover:text-white hover:bg-primary-600 hover:border-primary-600 transition-all duration-200"
    >
      {icon}
    </a>
  )
}

