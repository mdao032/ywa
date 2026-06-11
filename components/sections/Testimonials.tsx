'use client'

import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { Star } from 'lucide-react'

const TESTIMONIALS = [
  {
    quote_fr: 'YWA Consulting a transformé notre façon de travailler. Leur approche méthodique et leur expertise en stratégie numérique nous ont permis de réduire nos coûts opérationnels de 30 % en seulement six mois.',
    quote_en: 'YWA Consulting transformed the way we work. Their methodical approach and expertise in digital strategy helped us reduce operational costs by 30% in just six months.',
    author:   'Aïssata T.',
    role:     'Entrepreneur',
    company:  'ACG',
    avatar:   '/images/team-1.webp',
    result:   '–30 % coûts',
    num:      '01',
  },
  {
    quote_fr: 'Grâce à YWA Consulting, nous avons pu automatiser des processus clés qui prenaient des heures chaque jour. L\'équipe est professionnelle, réactive et vraiment à l\'écoute de nos besoins.',
    quote_en: 'Thanks to YWA Consulting, we automated key processes that took hours daily. The team is professional, responsive and genuinely attentive to our needs.',
    author:   'Modibo D.',
    role:     'Consultant',
    company:  'HRHC',
    avatar:   '/images/team-2.webp',
    result:   '×3 productivité',
    num:      '02',
  },
]

interface TestimonialsProps {
  locale: string
}

export function Testimonials({ locale }: TestimonialsProps) {
  const t = useTranslations('testimonials')

  return (
    <section className="relative section-padding bg-surface-800 grain overflow-hidden">

      {/* Ambient glow */}
      <div
        className="glow-dot"
        style={{ width: 600, height: 600, top: '50%', left: '50%',
                 transform: 'translate(-50%,-50%)',
                 background: 'radial-gradient(circle, rgba(37,99,235,0.07) 0%, transparent 70%)' }}
      />

      <div className="section-container relative z-10">

        {/* En-tête */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16" data-reveal>
          <span className="badge-primary mb-5">{t('badge')}</span>
          <h2 className="section-title mb-4">{t('title')}</h2>
          <p className="section-subtitle mx-auto">{t('subtitle')}</p>
        </div>

        {/* Grille 2 colonnes sur desktop */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {TESTIMONIALS.map((item, i) => {
            const quote = locale === 'fr' ? item.quote_fr : item.quote_en
            return (
              <div
                key={item.num}
                data-reveal
                data-delay={i === 0 ? '0' : '150'}
                className="relative rounded-2xl p-5 sm:p-8 lg:p-10 overflow-hidden flex flex-col"
                style={{
                  background: 'linear-gradient(145deg, rgba(15,23,42,0.95) 0%, rgba(10,15,30,1) 100%)',
                  border: '1px solid rgba(51,65,85,0.7)',
                  boxShadow: '0 0 0 1px rgba(255,255,255,0.03) inset',
                }}
              >
                {/* Reflet coin */}
                <div
                  className="absolute top-0 left-0 w-1/2 h-1/3 pointer-events-none"
                  style={{ background: 'linear-gradient(135deg,rgba(255,255,255,0.04) 0%,transparent 60%)' }}
                />

                {/* Numéro déco */}
                <span
                  className="absolute top-5 right-6 font-display font-black select-none"
                  style={{ fontSize: '4rem', color: 'rgba(255,255,255,0.04)', lineHeight: 1 }}
                >
                  {item.num}
                </span>

                {/* Quote SVG */}
                <svg className="mb-5 shrink-0" width="36" height="26" viewBox="0 0 40 28" fill="none" aria-hidden="true">
                  <path
                    d="M0 28V16.8C0 12.267 1.067 8.533 3.2 5.6 5.333 2.667 8.533.8 12.8 0L14.4 2.8C11.467 3.733 9.2 5.333 7.6 7.6 6 9.733 5.2 12.267 5.2 15.2H11.2V28H0ZM22.4 28V16.8C22.4 12.267 23.467 8.533 25.6 5.6 27.733 2.667 30.933.8 35.2 0L36.8 2.8C33.867 3.733 31.6 5.333 30 7.6 28.4 9.733 27.6 12.267 27.6 15.2H33.6V28H22.4Z"
                    fill="rgba(37,99,235,0.4)"
                  />
                </svg>

                {/* Étoiles */}
                <div className="flex items-center gap-0.5 mb-5">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={13} fill="#f59e0b" className="text-amber-400" />
                  ))}
                </div>

                {/* Quote text */}
                <blockquote className="text-neutral-200 text-base leading-relaxed flex-1 mb-8 relative z-10">
                  &ldquo;{quote}&rdquo;
                </blockquote>

                {/* Footer */}
                <div className="flex items-center justify-between mt-auto">
                  <div className="flex items-center gap-3.5">
                    <div className="relative w-11 h-11 rounded-full overflow-hidden border border-primary-600/30 shadow-glow-blue-sm shrink-0">
                      <Image
                        src={item.avatar}
                        alt={item.author}
                        fill
                        className="object-cover"
                        sizes="44px"
                      />
                    </div>
                    <div>
                      <p className="font-display font-semibold text-white text-sm">{item.author}</p>
                      <p className="text-xs text-neutral-500">{item.role} · {item.company}</p>
                    </div>
                  </div>

                  {/* Badge résultat */}
                  <div
                    className="flex items-center px-3 py-1.5 rounded-lg text-xs font-bold text-primary-300 shrink-0"
                    style={{ background: 'rgba(37,99,235,0.12)', border: '1px solid rgba(37,99,235,0.25)' }}
                  >
                    {item.result}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
