import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight, CheckCircle2, LineChart, Settings, Laptop,
  ChevronRight, Home, TrendingUp, Target,
} from 'lucide-react'
import { CtaBanner } from '@/components/sections/CtaBanner'

// ─── Metadata ────────────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const isEn = locale === 'en'
  return {
    title: isEn
      ? 'Our Services — Digital Transformation | YWA Consulting'
      : 'Nos Services — Transformation Numérique | YWA Consulting',
    description: isEn
      ? 'Digital strategy consulting, process optimization and tool adoption by YWA Consulting. Tailored solutions for B2B organizations, measurable results in 90 days.'
      : 'Conseil en stratégie numérique, optimisation des processus et adoption des outils par YWA Consulting. Solutions sur-mesure pour organisations B2B, résultats mesurables en 90 jours.',
  }
}

// ─── Data ────────────────────────────────────────────────────────────────────

const SERVICES = [
  {
    num:   '01',
    slug:  'digital-strategy-consulting',
    image: '/images/service-strategy.webp',
    fr: {
      title:    'Stratégie Numérique',
      subtitle: 'Une feuille de route claire, priorisée et directement actionnable',
      desc:     '85 % de nos clients n\'avaient pas de feuille de route numérique documentée avant de travailler avec nous. En 6 à 12 semaines, nous construisons avec vous un plan d\'action priorisé, réaliste et directement lié à vos objectifs de croissance — pas un rapport qui restera dans un tiroir.',
      features: [
        'Audit numérique complet : outils, processus, compétences et données',
        'Roadmap sur 12 à 36 mois avec quick wins identifiés dès le départ',
        'Alignement stratégie IT & priorités business de la direction',
        'Plan de gestion du changement et mobilisation des équipes',
        'Tableau de bord KPIs pour piloter et mesurer la transformation',
      ],
      cta: 'Découvrir la stratégie numérique',
    },
    en: {
      title:    'Digital Strategy',
      subtitle: 'A clear, prioritized and directly actionable roadmap',
      desc:     '85% of our clients had no documented digital roadmap before working with us. In 6 to 12 weeks, we build with you a prioritized, realistic plan directly linked to your growth objectives — not a report that will gather dust.',
      features: [
        'Comprehensive digital audit: tools, processes, skills and data',
        '12 to 36-month roadmap with quick wins identified from day one',
        'IT strategy & management business priorities alignment',
        'Change management plan and team mobilization',
        'KPI dashboard to steer and measure the transformation',
      ],
      cta: 'Explore digital strategy',
    },
  },
  {
    num:   '02',
    slug:  'process-optimization-automation',
    image: '/images/service-optimization.webp',
    fr: {
      title:    'Optimisation des Processus',
      subtitle: 'Éradiquons ensemble vos goulots d\'étranglement opérationnels',
      desc:     'Un processus mal défini coûte entre 20 % et 30 % de productivité à une organisation. Nous cartographions vos flux, identifions les inefficacités, automatisons ce qui peut l\'être — et vous livrons des équipes formées et des gains de productivité mesurables sous 90 jours.',
      features: [
        'Cartographie BPMN de tous vos processus critiques',
        'Analyse des goulots d\'étranglement, redondances et points de friction',
        'Mise en place de workflows automatisés (RPA, outils no-code)',
        'Intégration des solutions IA et plateformes d\'automatisation adaptées',
        'Mesure et documentation du ROI et des gains de productivité obtenus',
      ],
      cta: 'Optimiser mes processus',
    },
    en: {
      title:    'Process Optimization',
      subtitle: "Let's eliminate your operational bottlenecks together",
      desc:     'A poorly defined process costs an organization between 20% and 30% in productivity. We map your flows, identify inefficiencies, automate what can be automated — and deliver trained teams and measurable productivity gains within 90 days.',
      features: [
        'BPMN mapping of all your critical processes',
        'Bottleneck, redundancy and friction point analysis',
        'Automated workflow implementation (RPA, no-code tools)',
        'AI solutions and automation platform integration',
        'ROI measurement and documentation of productivity gains',
      ],
      cta: 'Optimize my processes',
    },
  },
  {
    num:   '03',
    slug:  'digital-tool-adoption-modernization',
    image: '/images/service-tools.webp',
    fr: {
      title:    'Adoption des Outils Numériques',
      subtitle: 'Des outils vraiment utilisés — pas seulement achetés',
      desc:     'Trop d\'organisations investissent dans des logiciels qui restent sous-utilisés à 30 %. Nous intervenons en amont : sélection rigoureuse des solutions adaptées, déploiement par phases, formation sur-mesure par profil utilisateur et suivi de l\'adoption réelle jusqu\'à ce que vos équipes soient pleinement autonomes.',
      features: [
        'Audit des besoins métier et des outils existants (shadow IT inclus)',
        'Sélection multi-critères des meilleures solutions disponibles',
        'Plan de déploiement progressif, segmenté par équipe et usage',
        'Formations adaptées par profil utilisateur (dirigeants, opérationnels)',
        'Mesure du taux d\'adoption réel et support post-lancement continu',
      ],
      cta: 'Moderniser mes outils',
    },
    en: {
      title:    'Digital Tool Adoption',
      subtitle: 'Tools actually used — not just purchased',
      desc:     'Too many organizations invest in software that remains 30% underused. We intervene upstream: rigorous selection of appropriate solutions, phased deployment, role-adapted training and monitoring of real adoption until your teams are fully autonomous.',
      features: [
        'Business needs audit and existing tools assessment (including shadow IT)',
        'Multi-criteria selection of best available solutions',
        'Progressive deployment plan, segmented by team and use case',
        'Role-adapted training (executives, operational staff)',
        'Real adoption rate measurement and continuous post-launch support',
      ],
      cta: 'Modernize my tools',
    },
  },
]

const STEPS = [
  { num: '01', icon: Target,     fr: { title: 'Diagnostic',      desc: 'Nous immergeons dans votre organisation : entretiens dirigeants et équipes, observation des processus, analyse des outils et des données existantes. Un état des lieux complet, sans filtre.' },
                                 en: { title: 'Diagnosis',        desc: 'We immerse ourselves in your organization: leadership and team interviews, process observation, analysis of existing tools and data. A comprehensive, unfiltered assessment.' } },
  { num: '02', icon: LineChart,  fr: { title: 'Stratégie',        desc: 'Sur la base du diagnostic, nous co-construisons avec vous une feuille de route priorisée : objectifs chiffrés, jalons clairs et premiers résultats mesurables attendus sous 90 jours.' },
                                 en: { title: 'Strategy',          desc: 'Based on the diagnosis, we co-build a prioritized roadmap with quantified objectives, clear milestones and first measurable results expected within 90 days.' } },
  { num: '03', icon: Settings,   fr: { title: 'Implémentation',   desc: 'Nous exécutons avec agilité : sprints courts, livrables réguliers, formation continue des équipes et ajustements en temps réel selon les retours du terrain et les évolutions du contexte.' },
                                 en: { title: 'Implementation',    desc: 'We execute with agility: short sprints, regular deliverables, continuous team training and real-time adjustments based on field feedback and evolving context.' } },
  { num: '04', icon: TrendingUp, fr: { title: 'Optimisation',     desc: 'Nous mesurons, analysons et affinons en continu. Un suivi post-mission est assuré pour garantir que les gains se pérennisent et que l\'organisation progresse de façon autonome.' },
                                 en: { title: 'Optimization',      desc: 'We continuously measure, analyze and refine. Post-mission follow-up ensures gains are sustained and the organization progresses independently.' } },
]

// ─── Page ────────────────────────────────────────────────────────────────────

export default async function NosServicesPage({
  params,
}: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const isEn = locale === 'en'

  return (
    <>
      {/* ═══ HERO ═══════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-surface-900" style={{ minHeight: '82vh', display: 'flex', alignItems: 'center' }}>
        <div className="absolute inset-0">
          <Image src="/images/office-night.webp" alt="" fill className="object-cover object-center scale-105" priority sizes="100vw" quality={90} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(10,15,30,0.96) 0%, rgba(10,15,30,0.82) 55%, rgba(10,15,30,0.5) 100%)' }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(10,15,30,0.92) 0%, transparent 50%, rgba(10,15,30,0.25) 100%)' }} />
        </div>

        <div className="absolute top-0 left-0 right-0 h-[500px] pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 70% 60% at 20% -5%, rgba(37,99,235,0.38) 0%, transparent 70%)' }} />
        <div className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.03) 1px,transparent 1px)',
            backgroundSize: '72px 72px',
            maskImage: 'linear-gradient(to right, rgba(0,0,0,0.7) 0%, transparent 55%)',
            WebkitMaskImage: 'linear-gradient(to right, rgba(0,0,0,0.7) 0%, transparent 55%)',
          }}
        />

        <div className="section-container relative z-10 py-20 sm:py-28 lg:py-40">
          <nav className="flex items-center gap-2 text-sm text-neutral-500 mb-10">
            <Link href={`/${locale}`} className="flex items-center gap-1 hover:text-neutral-300 transition-colors">
              <Home size={13} />
              {isEn ? 'Home' : 'Accueil'}
            </Link>
            <ChevronRight size={13} className="text-neutral-700" />
            <span className="text-neutral-400">{isEn ? 'Our Services' : 'Nos Services'}</span>
          </nav>

          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-7">
              <div className="w-8 h-px" style={{ background: 'linear-gradient(90deg,#2563eb,#60a5fa)' }} />
              <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-primary-400">
                {isEn ? 'Our Expertise' : 'Notre Expertise'}
              </span>
            </div>

            <h1 className="font-display font-bold leading-[1.04] tracking-tight mb-5 sm:mb-7"
              style={{ fontSize: 'clamp(2rem, 7vw, 5.5rem)' }}>
              <span className="block text-white">{isEn ? 'Transform your' : 'Transformez votre'}</span>
              <span className="block" style={{
                background: 'linear-gradient(135deg, #60a5fa 0%, #818cf8 50%, #a78bfa 100%)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
              }}>
                {isEn ? 'Organization' : 'Organisation'}
              </span>
            </h1>

            <p className="text-neutral-300 text-base sm:text-lg leading-relaxed mb-7 sm:mb-10 max-w-xl">
              {isEn
                ? "We don't offer generic digital services — we build tailored solutions adapted to your operational reality, your teams and your business goals."
                : "Nous ne proposons pas des services numériques génériques — nous construisons avec vous des solutions adaptées à votre réalité terrain, vos équipes et vos objectifs business."}
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href={`/${locale}/nous-contacter`} className="btn-primary flex items-center gap-2">
                {isEn ? 'Request a free audit' : 'Demander un audit gratuit'}
                <ArrowRight size={15} />
              </Link>
              <a href="#services-detail" className="btn-outline flex items-center gap-2">
                {isEn ? 'Explore our services' : 'Explorer nos services'}
              </a>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 sm:gap-8 mt-10 sm:mt-14">
            {[
              { v: '50+', l: isEn ? 'Clients served' : 'Clients accompagnés' },
              { v: '10+', l: isEn ? 'Years experience' : "Années d'expérience" },
              { v: '–40%', l: isEn ? 'Avg. op. costs' : 'Coûts opérationnels moy.' },
            ].map(({ v, l }, i) => (
              <div key={i} className="flex items-center gap-7">
                {i > 0 && <div className="w-px h-9" style={{ background: 'linear-gradient(to bottom,transparent,rgba(51,65,85,0.9),transparent)' }} />}
                <div>
                  <p className="font-display font-black text-white leading-none" style={{ fontSize: 'clamp(1.4rem,3.5vw,2rem)' }}>{v}</p>
                  <p className="text-[11px] text-neutral-500 mt-0.5">{l}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SERVICES DÉTAIL ════════════════════════════════════ */}
      <section id="services-detail" className="relative bg-surface-800 section-padding overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, rgba(37,99,235,0.07) 0%, transparent 70%)', filter: 'blur(40px)' }} />

        <div className="section-container relative z-10">
          <div className="max-w-2xl mb-10 sm:mb-16 lg:mb-20" data-reveal>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-6 h-px" style={{ background: 'linear-gradient(90deg,#2563eb,#60a5fa)' }} />
              <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary-400">
                {isEn ? 'What we do' : 'Ce que nous faisons'}
              </span>
            </div>
            <h2 className="section-title mb-5">
              {isEn
                ? <>3 areas of expertise,{' '}<span style={{ background:'linear-gradient(135deg,#60a5fa,#a78bfa)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>one mission</span></>
                : <>3 domaines d&apos;expertise,{' '}<span style={{ background:'linear-gradient(135deg,#60a5fa,#a78bfa)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>une mission</span></>}
            </h2>
            <p className="text-neutral-500 text-base leading-relaxed">
              {isEn
                ? 'Three complementary service lines to address the full scope of your digital transformation — from vision to execution.'
                : "Trois lignes de services complémentaires pour couvrir l'intégralité de votre transformation numérique — de la vision à l'exécution."}
            </p>
          </div>

          <div className="space-y-6">
            {SERVICES.map(({ num, slug, image, fr, en: enData }, i) => {
              const data = isEn ? enData : fr
              const reversed = i % 2 === 1
              return (
                <div
                  key={slug}
                  data-reveal
                  data-delay={(['0', '100', '200'] as const)[i]}
                  className="group grid lg:grid-cols-2 rounded-2xl overflow-hidden"
                  style={{ border: '1px solid rgba(51,65,85,0.6)', minHeight: '420px' }}
                >
                  <div className={`relative overflow-hidden ${reversed ? 'lg:order-2' : ''}`} style={{ minHeight: '320px' }}>
                    <Image src={image} alt={data.title} fill
                      className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width:1024px) 100vw,50vw" quality={85} />
                    <div className="absolute inset-0" style={{
                      background: reversed
                        ? 'linear-gradient(to left, transparent 0%, transparent 25%, rgba(10,15,30,0.75) 70%, rgba(10,15,30,0.97) 100%)'
                        : 'linear-gradient(to right, transparent 0%, transparent 25%, rgba(10,15,30,0.75) 70%, rgba(10,15,30,0.97) 100%)',
                    }} />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface-900/50 via-transparent to-transparent" />
                    <div className="absolute bottom-4 right-5 font-display font-black leading-none select-none pointer-events-none"
                      style={{ fontSize: '6rem', color: 'rgba(255,255,255,0.04)' }}>{num}</div>
                  </div>

                  <div className={`flex flex-col justify-center p-5 sm:p-8 lg:p-12 ${reversed ? 'lg:order-1' : ''}`}
                    style={{ background: 'linear-gradient(145deg, rgba(15,23,42,0.95) 0%, rgba(10,15,30,1) 100%)' }}>
                    <span className="font-display font-black mb-4 leading-none"
                      style={{ fontSize: '0.9rem', background: 'linear-gradient(135deg,#2563eb,#60a5fa)',
                               WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', letterSpacing: '0.14em' }}>
                      {num}
                    </span>
                    <h3 className="font-display font-bold text-white mb-2 leading-tight"
                      style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)' }}>
                      {data.title}
                    </h3>
                    <p className="text-primary-400 text-sm font-medium mb-5">{data.subtitle}</p>
                    <p className="text-neutral-400 text-sm leading-relaxed mb-8 max-w-md">{data.desc}</p>
                    <ul className="space-y-2.5 mb-6 sm:mb-9">
                      {data.features.map((f, j) => (
                        <li key={j} className="flex items-start gap-3">
                          <CheckCircle2 size={14} className="text-primary-500 shrink-0 mt-0.5" />
                          <span className="text-neutral-300 text-sm leading-relaxed">{f}</span>
                        </li>
                      ))}
                    </ul>
                    <Link href={`/${locale}/${slug}`}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-primary-400 hover:text-primary-300 transition-colors w-fit group/link">
                      {data.cta}
                      <ArrowRight size={14} className="group-hover/link:translate-x-1.5 transition-transform duration-200" />
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ═══ MÉTHODE EN 4 PHASES ════════════════════════════════ */}
      <section className="relative section-padding bg-surface-900 overflow-hidden">
        <div className="glow-dot" style={{ width: 500, height: 500, top: '50%', left: '50%', transform: 'translate(-50%,-50%)',
          background: 'radial-gradient(circle,rgba(37,99,235,0.06) 0%,transparent 70%)' }} />
        <div className="absolute top-0 inset-x-0 h-px pointer-events-none"
          style={{ background: 'linear-gradient(90deg,transparent,rgba(37,99,235,0.4),transparent)' }} />

        <div className="section-container relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16 lg:mb-20" data-reveal>
            <div className="flex items-center justify-center gap-3 mb-5">
              <div className="w-6 h-px" style={{ background: 'linear-gradient(90deg,#2563eb,#60a5fa)' }} />
              <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary-400">
                {isEn ? 'Our method' : 'Notre méthode'}
              </span>
              <div className="w-6 h-px" style={{ background: 'linear-gradient(270deg,#2563eb,#60a5fa)' }} />
            </div>
            <h2 className="section-title mb-5">
              {isEn ? 'From diagnosis to lasting results' : 'Du diagnostic aux résultats durables'}
            </h2>
            <p className="section-subtitle mx-auto">
              {isEn
                ? 'A structured 4-phase process, developed and refined over 10 years of field consulting missions.'
                : 'Un processus structuré en 4 phases, développé et affiné sur 10 ans de missions de conseil terrain.'}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {STEPS.map(({ num, icon: Icon, fr, en: enStep }, i) => {
              const data = isEn ? enStep : fr
              return (
                <div key={num} data-reveal data-delay={(['0', '100', '200', '300'] as const)[i]} className="relative group">
                  {i < 3 && (
                    <div className="hidden lg:block absolute top-8 left-[calc(100%_-_12px)] w-[calc(100%_-_24px)] h-px z-10 pointer-events-none"
                      style={{ background: 'linear-gradient(90deg, rgba(37,99,235,0.4), rgba(37,99,235,0.08))' }} />
                  )}
                  <div className="relative rounded-2xl p-5 sm:p-7 h-full transition-all duration-400"
                    style={{ background: 'linear-gradient(145deg,rgba(15,23,42,0.95) 0%,rgba(10,15,30,1) 100%)',
                             border: '1px solid rgba(51,65,85,0.6)' }}>
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center mb-5 sm:mb-6"
                      style={{ background: 'linear-gradient(135deg,rgba(37,99,235,0.2),rgba(37,99,235,0.08))',
                               border: '1px solid rgba(37,99,235,0.3)' }}>
                      <span className="font-display font-black text-primary-400 text-sm">{num}</span>
                    </div>
                    <div className="mb-4">
                      <Icon size={18} className="text-primary-500 mb-3" />
                      <h3 className="font-display font-bold text-white text-lg leading-snug">{data.title}</h3>
                    </div>
                    <p className="text-neutral-400 text-sm leading-relaxed">{data.desc}</p>
                    <div className="absolute bottom-0 left-0 right-0 h-[2px] rounded-b-2xl scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"
                      style={{ background: 'linear-gradient(90deg,#2563eb,#60a5fa)' }} />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
