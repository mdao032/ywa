'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { useLocale } from 'next-intl'
import Link from 'next/link'
import { LineChart, Settings, Laptop, Lightbulb, ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

const TAB_KEYS  = ['strategy', 'optimization', 'adoption', 'innovation'] as const
const TAB_ICONS = [LineChart, Settings, Laptop, Lightbulb]

const TAB_DESCRIPTIONS: Record<string, { fr: string; en: string }> = {
  strategy: {
    fr: 'Nous développons des stratégies numériques sur mesure qui alignent vos objectifs commerciaux avec les dernières technologies. Notre approche garantit une feuille de route claire pour votre transformation.',
    en: 'We develop bespoke digital strategies that align your business goals with the latest technologies. Our approach ensures a clear roadmap for your transformation.',
  },
  optimization: {
    fr: 'Analysez et refondez vos flux de travail pour éliminer les inefficacités. Nous implémentons des solutions d\'automatisation qui rationalisent vos opérations et réduisent les coûts.',
    en: 'Analyze and redesign your workflows to eliminate inefficiencies. We implement automation solutions that streamline your operations and reduce costs.',
  },
  adoption: {
    fr: 'Sélectionnez, intégrez et adoptez les meilleurs outils numériques adaptés à vos besoins. Nous assurons une transition en douceur et une montée en compétences de vos équipes.',
    en: 'Select, integrate, and adopt the best digital tools suited to your needs. We ensure a smooth transition and upskilling of your teams.',
  },
  innovation: {
    fr: 'Modernisez vos processus avec des solutions innovantes pour améliorer la productivité, l\'agilité et la performance globale de votre organisation.',
    en: 'Modernize your processes with innovative solutions to improve productivity, agility, and overall performance of your organization.',
  },
}

export function ServicesTabs() {
  const t      = useTranslations('services')
  const locale = useLocale()
  const [active, setActive] = useState(0)

  const serviceLinks: Record<string, string> = {
    strategy:     `/${locale}/digital-strategy-consulting`,
    optimization: `/${locale}/process-optimization-automation`,
    adoption:     `/${locale}/digital-tool-adoption-modernization`,
    innovation:   `/${locale}/nos-services`,
  }

  const activeKey  = TAB_KEYS[active]
  const ActiveIcon = TAB_ICONS[active]
  const desc       = TAB_DESCRIPTIONS[activeKey]

  return (
    <section className="section-padding bg-surface-900">
      <div className="section-container">

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-10 p-1.5 bg-surface-800 rounded-2xl border border-surface-600 w-fit mx-auto">
          {TAB_KEYS.map((key, i) => {
            const Icon = TAB_ICONS[i]
            return (
              <button
                key={key}
                onClick={() => setActive(i)}
                className={cn(
                  'flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200',
                  i === active
                    ? 'bg-primary-600 text-white shadow-md shadow-primary-600/30'
                    : 'text-neutral-400 hover:text-white hover:bg-surface-700'
                )}
              >
                <Icon size={15} />
                <span className="hidden sm:inline">{t(`${key}.title`)}</span>
              </button>
            )
          })}
        </div>

        {/* Contenu du tab actif */}
        <div key={active} className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 items-center animate-fade-in">

          {/* Texte */}
          <div>
            <div className="w-14 h-14 rounded-2xl bg-primary-600/15 border border-primary-600/20 flex items-center justify-center mb-6">
              <ActiveIcon size={26} className="text-primary-400" />
            </div>
            <h2 className="font-display text-2xl lg:text-3xl font-bold text-white mb-4 leading-snug">
              {t(`${activeKey}.title`)}
            </h2>
            <p className="text-neutral-400 leading-relaxed mb-6">
              {locale === 'fr' ? desc.fr : desc.en}
            </p>
            <Link
              href={serviceLinks[activeKey]}
              className="btn-primary inline-flex items-center gap-2"
            >
              {t(`${activeKey}.cta`)}
              <ArrowRight size={15} />
            </Link>
          </div>

          {/* Visuel / Features list */}
          <div className="card p-6 space-y-4">
            <p className="text-xs font-semibold uppercase tracking-widest text-neutral-500 mb-5">
              {locale === 'fr' ? 'Points clés' : 'Key highlights'}
            </p>
            {getFeatures(activeKey, locale).map((feature, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="mt-0.5 w-5 h-5 rounded-full bg-primary-600/20 border border-primary-600/30 flex items-center justify-center shrink-0">
                  <span className="text-primary-400 text-xs">✓</span>
                </span>
                <p className="text-sm text-neutral-300 leading-relaxed">{feature}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

// ─── Features par service ─────────────────────────────────────────────────────

function getFeatures(key: string, locale: string): string[] {
  const data: Record<string, { fr: string[]; en: string[] }> = {
    strategy: {
      fr: [
        'Audit numérique complet de votre organisation',
        'Définition d\'une roadmap sur 12 à 36 mois',
        'Identification des opportunités de croissance',
        'Alignement stratégie IT & objectifs business',
        'Accompagnement au changement',
      ],
      en: [
        'Comprehensive digital audit of your organization',
        'Roadmap definition over 12 to 36 months',
        'Identification of growth opportunities',
        'IT strategy & business goals alignment',
        'Change management support',
      ],
    },
    optimization: {
      fr: [
        'Cartographie et analyse des processus existants',
        'Identification des goulots d\'étranglement',
        'Mise en place de workflows automatisés',
        'Intégration des outils RPA & IA',
        'Mesure des gains d\'efficacité',
      ],
      en: [
        'Mapping and analysis of existing processes',
        'Bottleneck identification',
        'Automated workflow implementation',
        'RPA & AI tools integration',
        'Efficiency gains measurement',
      ],
    },
    adoption: {
      fr: [
        'Évaluation et sélection des outils adaptés',
        'Plan de déploiement personnalisé',
        'Formation et accompagnement des équipes',
        'Intégration avec les systèmes existants',
        'Support post-déploiement',
      ],
      en: [
        'Tool evaluation and selection',
        'Personalized deployment plan',
        'Team training and support',
        'Integration with existing systems',
        'Post-deployment support',
      ],
    },
    innovation: {
      fr: [
        'Veille technologique et benchmark sectoriel',
        'Ateliers d\'idéation et innovation',
        'Prototypage rapide de solutions',
        'Pilotes et preuves de concept',
        'Mise à l\'échelle des solutions validées',
      ],
      en: [
        'Technology watch and sector benchmarking',
        'Ideation and innovation workshops',
        'Rapid solution prototyping',
        'Pilots and proof of concepts',
        'Scaling validated solutions',
      ],
    },
  }
  return data[key]?.[locale === 'fr' ? 'fr' : 'en'] ?? []
}

