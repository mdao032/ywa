import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { useLocale } from 'next-intl'
import { ArrowRight, LineChart, Settings, Laptop } from 'lucide-react'

const SERVICES = [
  {
    slug:    'digital-strategy-consulting',
    icon:    LineChart,
    color:   'from-blue-600/20 to-primary-600/10',
    border:  'border-blue-600/20',
  },
  {
    slug:    'process-optimization-automation',
    icon:    Settings,
    color:   'from-violet-600/20 to-primary-600/10',
    border:  'border-violet-600/20',
  },
  {
    slug:    'digital-tool-adoption-modernization',
    icon:    Laptop,
    color:   'from-teal-600/20 to-primary-600/10',
    border:  'border-teal-600/20',
  },
]

const SERVICE_KEYS = ['strategy', 'optimization', 'adoption'] as const

export function ServicesDetailCards() {
  const t      = useTranslations('services')
  const locale = useLocale()

  return (
    <section className="section-padding bg-surface-800">
      <div className="section-container">

        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="section-title mb-4">
            {locale === 'fr' ? 'Nos offres détaillées' : 'Our detailed offerings'}
          </h2>
          <p className="section-subtitle mx-auto">
            {locale === 'fr'
              ? 'Explorez chaque service en profondeur et découvrez comment nous pouvons vous accompagner.'
              : 'Explore each service in depth and discover how we can support you.'}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {SERVICES.map((svc, i) => {
            const key  = SERVICE_KEYS[i]
            const Icon = svc.icon
            return (
              <div
                key={svc.slug}
                className={`relative card p-0 overflow-hidden group flex flex-col border ${svc.border}`}
              >
                {/* Header gradient */}
                <div className={`bg-gradient-to-br ${svc.color} px-6 pt-8 pb-6 border-b border-surface-600`}>
                  <div className="w-12 h-12 rounded-xl bg-surface-800/80 border border-surface-600 flex items-center justify-center mb-4">
                    <Icon size={22} className="text-primary-400" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-white leading-snug">
                    {t(`${key}.title`)}
                  </h3>
                </div>

                {/* Body */}
                <div className="px-6 py-5 flex flex-col flex-1">
                  <h3 className="font-display text-lg font-bold text-white leading-snug mb-3">
                    {t(`${key}.title`)}
                  </h3>
                  <p className="text-neutral-400 text-sm leading-relaxed flex-1">
                    {t(`${key}.description`)}
                  </p>

                  <div className="mt-6 pt-5 border-t border-surface-600">
                    <Link
                      href={`/${locale}/${svc.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-medium text-primary-400 hover:text-primary-300 group/link transition-colors duration-200"
                    >
                      {t(`${key}.cta`)}
                      <ArrowRight
                        size={14}
                        className="group-hover/link:translate-x-1 transition-transform duration-200"
                      />
                    </Link>
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

