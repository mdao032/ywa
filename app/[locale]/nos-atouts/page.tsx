import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, ChevronRight, Home,
         ShieldCheck, BarChart3, Users, Lightbulb, TrendingUp, Globe,
         Target, Settings, Zap } from 'lucide-react'
import { CtaBanner } from '@/components/sections/CtaBanner'

// ─── Metadata ────────────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const isEn = locale === 'en'
  return {
    title: isEn
      ? 'Our Strengths — Why YWA Consulting | YWA Consulting'
      : 'Nos Atouts — Pourquoi YWA Consulting | YWA Consulting',
    description: isEn
      ? 'Discover the 6 competitive advantages that distinguish YWA Consulting: proven expertise, measurable results, tailored methodology, and deep knowledge of African markets.'
      : 'Découvrez les 6 atouts compétitifs qui distinguent YWA Consulting : expertise prouvée, résultats mesurables, méthodologie sur-mesure et connaissance fine des marchés africains.',
  }
}

// ─── Data ────────────────────────────────────────────────────────────────────

const STRENGTHS = [
  {
    icon: ShieldCheck,
    fr: {
      title: 'Expertise sectorielle prouvée sur le terrain',
      desc:  'Notre équipe a accompagné des organisations dans des secteurs aussi différents que la distribution, la fintech, les ONG, le BTP ou la grande distribution en Afrique de l\'Ouest et centrale. Cette diversité sectorielle est notre force : nous apportons des benchmarks concrets et des bonnes pratiques cross-industries à chaque mission, sans jamais partir de zéro.',
    },
    en: {
      title: 'Proven sector expertise in the field',
      desc:  'Our team has supported organizations in sectors as diverse as distribution, fintech, NGOs, construction and retail in West and Central Africa. This sectoral diversity is our strength: we bring concrete benchmarks and cross-industry best practices to every mission, never starting from scratch.',
    },
  },
  {
    icon: BarChart3,
    fr: {
      title: 'Résultats mesurables, engagements tenus',
      desc:  'Contrairement à de nombreux cabinets qui livrent des rapports, nous pilotons l\'exécution jusqu\'aux résultats. Chaque engagement YWA commence par la définition d\'indicateurs de performance (KPIs) partagés et validés avec votre direction. Nos clients observent en moyenne +35 % d\'efficacité opérationnelle après 6 mois d\'accompagnement — un chiffre que nous documentons.',
    },
    en: {
      title: 'Measurable results, commitments kept',
      desc:  'Unlike many firms that deliver reports, we drive execution all the way to results. Every YWA engagement begins with defining shared KPIs validated with your leadership. Our clients see an average +35% operational efficiency gain after 6 months — a number we document.',
    },
  },
  {
    icon: Users,
    fr: {
      title: 'Approche sur-mesure, 100 % contextualisée',
      desc:  'Nous ne vendons pas de solutions en boîte. Notre méthode part toujours d\'un diagnostic approfondi de votre organisation, de vos équipes, de vos outils existants et de vos contraintes réelles. Chaque recommandation est contextuelle, réaliste et adaptée à votre secteur, votre taille et votre culture d\'entreprise.',
    },
    en: {
      title: 'Tailored approach, 100% contextualized',
      desc:  "We don't sell off-the-shelf solutions. Our method always starts with an in-depth diagnosis of your organization, your teams, your existing tools and your real constraints. Every recommendation is contextual, realistic and adapted to your sector, size and corporate culture.",
    },
  },
  {
    icon: Lightbulb,
    fr: {
      title: 'Innovation pratique, pas théorique',
      desc:  'L\'innovation chez YWA, ce n\'est pas un discours sur l\'IA ou la blockchain — c\'est l\'identification précise des technologies qui créent de la valeur pour vous aujourd\'hui. Nous pratiquons une veille technologique permanente orientée impact, et ne recommandons que ce que nous avons vu fonctionner en conditions réelles.',
    },
    en: {
      title: 'Practical innovation, not theoretical',
      desc:  "Innovation at YWA isn't a discourse on AI or blockchain — it's precise identification of technologies that create value for you today. We maintain permanent, impact-oriented technology monitoring and only recommend what we've seen work in real conditions.",
    },
  },
  {
    icon: TrendingUp,
    fr: {
      title: 'Méthodologie propriétaire en 4 phases',
      desc:  'Notre framework de transformation numérique (Diagnostic → Stratégie → Implémentation → Optimisation) a été développé et affiné sur 10 ans de missions terrain. Il garantit structure, rapidité et adaptation permanente à votre contexte. Les premiers résultats tangibles sont systématiquement attendus sous 90 jours.',
    },
    en: {
      title: 'Proprietary 4-phase methodology',
      desc:  'Our digital transformation framework (Diagnosis → Strategy → Implementation → Optimization) has been developed and refined over 10 years of field missions. It guarantees structure, speed and permanent adaptation to your context. The first tangible results are consistently expected within 90 days.',
    },
  },
  {
    icon: Globe,
    fr: {
      title: 'Compréhension fine des marchés africains',
      desc:  'Nous comprenons les spécificités des marchés africains : contraintes d\'infrastructure, cultures organisationnelles hybrides, enjeux de change management dans des structures multi-générationnelles, réglementations locales et dynamiques de marché propres à chaque sous-région. Nous ne plaquons pas un prisme européen — nous pensons local d\'abord.',
    },
    en: {
      title: 'Deep understanding of African markets',
      desc:  "We understand the specificities of African markets: infrastructure constraints, hybrid organizational cultures, change management challenges in multi-generational structures, local regulations and market dynamics specific to each sub-region. We don't apply a European lens — we think local first.",
    },
  },
]

const METHOD_PHASES = [
  {
    num: '01', icon: Target,
    fr: { title: 'Diagnostic', time: '1–2 semaines', desc: 'Audit complet de votre organisation, entretiens équipes dirigeantes et opérationnelles, analyse des processus existants et identification des zones de friction prioritaires.' },
    en: { title: 'Diagnosis',  time: '1–2 weeks',    desc: 'Comprehensive audit of your organization, leadership and operational team interviews, analysis of existing processes and identification of priority friction areas.' },
  },
  {
    num: '02', icon: Settings,
    fr: { title: 'Stratégie', time: '2–3 semaines', desc: 'Co-construction d\'une feuille de route priorisée avec objectifs chiffrés, quick wins à impact immédiat et initiatives transformationnelles à moyen terme.' },
    en: { title: 'Strategy',  time: '2–3 weeks',    desc: 'Co-construction of a prioritized roadmap with quantified objectives, immediate-impact quick wins and medium-term transformational initiatives.' },
  },
  {
    num: '03', icon: Zap,
    fr: { title: 'Implémentation', time: '4–12 semaines', desc: 'Exécution agile par sprints courts, formation continue des équipes, livraisons régulières et ajustements en temps réel selon les retours terrain.' },
    en: { title: 'Implementation', time: '4–12 weeks',    desc: 'Agile execution in short sprints, continuous team training, regular deliverables and real-time adjustments based on field feedback.' },
  },
  {
    num: '04', icon: TrendingUp,
    fr: { title: 'Optimisation', time: 'Continu', desc: 'Mesure des KPIs, documentation des gains, ajustements stratégiques et suivi post-mission pour ancrer les changements dans la durée.' },
    en: { title: 'Optimization', time: 'Ongoing', desc: 'KPI measurement, gain documentation, strategic adjustments and post-mission follow-up to embed changes for the long term.' },
  },
]

// ─── Page ────────────────────────────────────────────────────────────────────

export default async function NosAtoutsPage({
  params,
}: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const isEn = locale === 'en'

  return (
    <>
      {/* ═══ HERO ═══════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-surface-900" style={{ minHeight: '75vh', display: 'flex', alignItems: 'center' }}>
        <div className="absolute inset-0">
          <Image src="/images/team-analytics.webp" alt="" fill className="object-cover object-center scale-105" priority sizes="100vw" quality={90} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(10,15,30,0.96) 0%, rgba(10,15,30,0.82) 55%, rgba(10,15,30,0.5) 100%)' }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(10,15,30,0.9) 0%, transparent 50%, rgba(10,15,30,0.2) 100%)' }} />
        </div>
        <div className="absolute top-0 left-0 right-0 h-[500px] pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 70% 60% at 20% -5%, rgba(37,99,235,0.35) 0%, transparent 70%)' }} />
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
            <span className="text-neutral-400">{isEn ? 'Our Strengths' : 'Nos Atouts'}</span>
          </nav>

          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-7">
              <div className="w-8 h-px" style={{ background: 'linear-gradient(90deg,#2563eb,#60a5fa)' }} />
              <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-primary-400">
                {isEn ? 'Why YWA' : 'Pourquoi YWA'}
              </span>
            </div>
            <h1 className="font-display font-bold leading-[1.04] tracking-tight mb-5 sm:mb-7"
              style={{ fontSize: 'clamp(2rem, 7vw, 5.5rem)' }}>
              <span className="block text-white">{isEn ? 'What sets us' : 'Ce qui nous'}</span>
              <span className="block" style={{
                background: 'linear-gradient(135deg, #60a5fa 0%, #818cf8 50%, #a78bfa 100%)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
              }}>
                {isEn ? 'apart' : 'distingue'}
              </span>
            </h1>
            <p className="text-neutral-300 text-base sm:text-lg leading-relaxed mb-7 sm:mb-10 max-w-xl">
              {isEn
                ? '10 years of digital transformation consulting, 50+ organizations supported, a field-proven methodology and measurable results — here is why our clients choose YWA.'
                : '10 ans de conseil en transformation numérique, 50+ organisations accompagnées, une méthodologie éprouvée sur le terrain et des résultats mesurables — voici pourquoi nos clients choisissent YWA.'}
            </p>
            <Link href={`/${locale}/nous-contacter`} className="btn-primary inline-flex items-center gap-2">
              {isEn ? 'Discuss your project' : 'Discuter de votre projet'}
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ STATS STRIP ════════════════════════════════════════ */}
      <div className="relative overflow-hidden" style={{ background: 'linear-gradient(to right, rgba(10,15,30,0.98), rgba(15,23,42,0.95))', borderTop: '1px solid rgba(37,99,235,0.2)', borderBottom: '1px solid rgba(37,99,235,0.2)' }}>
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 80% 200% at 50% 50%, rgba(37,99,235,0.06) 0%, transparent 70%)' }} />
        <div className="section-container relative z-10 py-8 sm:py-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-0">
            {[
              { v: '10+', l: isEn ? "Years of field experience"   : "Années d'expérience terrain" },
              { v: '50+', l: isEn ? "Organizations supported"     : "Organisations accompagnées" },
              { v: '+35%', l: isEn ? "Avg. operational efficiency" : "Efficacité opérationnelle moy." },
              { v: '95%',  l: isEn ? "Mission success rate"        : "Taux de réussite des missions" },
            ].map(({ v, l }, i) => (
              <div key={i} className="text-center lg:border-r lg:last:border-r-0 border-surface-700/50">
                <p className="font-display font-black leading-none mb-2" style={{
                  fontSize: 'clamp(1.6rem, 5vw, 3.5rem)',
                  background: 'linear-gradient(135deg, #ffffff 30%, #60a5fa 100%)',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                }}>{v}</p>
                <p className="text-neutral-400 text-sm">{l}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ═══ 6 ATOUTS ════════════════════════════════════════════ */}
      <section className="relative section-padding bg-surface-900 overflow-hidden">
        <div className="glow-dot" style={{ width: 600, height: 600, top: '30%', right: '-5%',
          background: 'radial-gradient(circle,rgba(37,99,235,0.08) 0%,transparent 70%)' }} />

        <div className="section-container relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16 lg:mb-20" data-reveal>
            <div className="flex items-center justify-center gap-3 mb-5">
              <div className="w-6 h-px" style={{ background: 'linear-gradient(90deg,#2563eb,#60a5fa)' }} />
              <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary-400">
                {isEn ? 'Our advantages' : 'Nos avantages'}
              </span>
              <div className="w-6 h-px" style={{ background: 'linear-gradient(270deg,#2563eb,#60a5fa)' }} />
            </div>
            <h2 className="section-title mb-5">
              {isEn ? '6 reasons to choose YWA Consulting' : '6 raisons de choisir YWA Consulting'}
            </h2>
            <p className="section-subtitle mx-auto">
              {isEn
                ? 'Beyond the numbers, here is what makes our consulting approach genuinely different from the rest of the market.'
                : "Au-delà des chiffres, voici ce qui rend notre approche de conseil véritablement différente du reste du marché."}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {STRENGTHS.map((s, i) => {
              const Icon = s.icon
              const data = isEn ? s.en : s.fr
              return (
                <div
                  key={i}
                  data-reveal
                  data-delay={(['0', '100', '200', '0', '100', '200'] as const)[i]}
                  className="group relative rounded-2xl p-5 sm:p-7 transition-all duration-400 overflow-hidden"
                  style={{ background: 'linear-gradient(145deg,rgba(15,23,42,0.95) 0%,rgba(10,15,30,1) 100%)',
                           border: '1px solid rgba(51,65,85,0.6)' }}
                >
                  {/* Numéro déco */}
                  <span className="absolute top-4 right-5 font-display font-black select-none"
                    style={{ fontSize: '4rem', color: 'rgba(255,255,255,0.03)', lineHeight: 1 }}>
                    0{i + 1}
                  </span>
                  {/* Hover glow */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                    style={{ background: 'radial-gradient(circle,rgba(37,99,235,0.15) 0%,transparent 70%)', filter: 'blur(20px)', top: '-20px' }} />

                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-colors duration-300"
                    style={{ background: 'rgba(37,99,235,0.12)', border: '1px solid rgba(37,99,235,0.2)' }}
          >
                    <Icon size={20} className="text-primary-400 group-hover:text-primary-300 transition-colors" />
                  </div>

                  <h3 className="font-display font-bold text-white text-lg mb-3 leading-snug relative z-10">
                    {data.title}
                  </h3>
                  <p className="text-neutral-400 text-sm leading-relaxed relative z-10">
                    {data.desc}
                  </p>

                  {/* Bordure bottom au hover */}
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"
                    style={{ background: 'linear-gradient(90deg,#2563eb,#60a5fa)' }} />
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ═══ MÉTHODOLOGIE ════════════════════════════════════════ */}
      <section className="relative section-padding bg-surface-800 overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-px" style={{ background: 'linear-gradient(90deg,transparent,rgba(37,99,235,0.4),transparent)' }} />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] pointer-events-none"
          style={{ background: 'radial-gradient(ellipse,rgba(37,99,235,0.07) 0%,transparent 70%)', filter: 'blur(40px)' }} />

        <div className="section-container relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

            {/* Image */}
            <div className="relative rounded-2xl overflow-hidden" data-reveal="left"
              style={{ border: '1px solid rgba(51,65,85,0.6)', height: 'clamp(260px,38vw,440px)' }}>
              <Image src="/images/team-presentation.webp" alt={isEn ? 'YWA methodology in action' : 'La méthode YWA en action'}
                fill className="object-cover object-center" sizes="(max-width:1024px) 100vw,50vw" quality={85} />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-900/80 via-transparent to-transparent" />
              {/* Badge overlay */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="rounded-xl p-4" style={{ background: 'rgba(10,15,30,0.9)', backdropFilter: 'blur(12px)', border: '1px solid rgba(37,99,235,0.2)' }}>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 size={16} className="text-primary-400 shrink-0" />
                    <p className="text-neutral-200 text-sm font-medium">
                      {isEn ? 'First measurable results in 90 days — guaranteed.' : 'Premiers résultats mesurables en 90 jours — garanti.'}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Texte + phases */}
            <div data-reveal data-delay="200">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-6 h-px" style={{ background: 'linear-gradient(90deg,#2563eb,#60a5fa)' }} />
                <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary-400">
                  {isEn ? 'Our proprietary framework' : 'Notre framework propriétaire'}
                </span>
              </div>
              <h2 className="section-title mb-5">
                {isEn
                  ? <>A method built for <span style={{ background: 'linear-gradient(135deg,#60a5fa,#a78bfa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>your reality</span></>
                  : <>Une méthode bâtie pour <span style={{ background: 'linear-gradient(135deg,#60a5fa,#a78bfa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>votre réalité</span></>}
              </h2>
              <p className="text-neutral-400 text-sm leading-relaxed mb-6 sm:mb-10">
                {isEn
                  ? 'Developed over 10 years of field consulting missions across Africa and Europe, our 4-phase framework is designed to deliver rapid wins while building lasting capabilities within your organization.'
                  : "Développé sur 10 ans de missions de conseil terrain en Afrique et en Europe, notre framework en 4 phases est conçu pour délivrer des gains rapides tout en construisant des capacités durables au sein de votre organisation."}
              </p>

              <div className="space-y-4">
                {METHOD_PHASES.map(({ num, icon: Icon, fr, en: enPhase }) => {
                  const data = isEn ? enPhase : fr
                  return (
                    <div key={num} className="group flex gap-4 rounded-xl p-4 transition-all duration-300 hover:bg-surface-700/30">
                      <div className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center"
                        style={{ background: 'linear-gradient(135deg,rgba(37,99,235,0.25),rgba(37,99,235,0.1))', border: '1px solid rgba(37,99,235,0.3)' }}>
                        <Icon size={14} className="text-primary-400" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1.5">
                          <h3 className="font-display font-semibold text-white text-sm">{num} — {data.title}</h3>
                          <span className="text-[10px] text-primary-500 font-medium uppercase tracking-wider px-2 py-0.5 rounded-full"
                            style={{ background: 'rgba(37,99,235,0.1)', border: '1px solid rgba(37,99,235,0.15)' }}>
                            {data.time}
                          </span>
                        </div>
                        <p className="text-neutral-500 text-xs leading-relaxed">{data.desc}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
