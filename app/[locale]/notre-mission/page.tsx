import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ChevronRight, Home,
         Target, Eye, Heart, Zap, CheckCircle2 } from 'lucide-react'
import { StatsCounter } from '@/components/sections/StatsCounter'
import { CtaBanner }    from '@/components/sections/CtaBanner'

// ─── Metadata ────────────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const isEn = locale === 'en'
  return {
    title: isEn
      ? 'Our Mission — Purpose & Values | YWA Consulting'
      : 'Notre Mission — Raison d\'être & Valeurs | YWA Consulting',
    description: isEn
      ? "Discover YWA Consulting's mission: empowering African and Francophone organizations to excel in the digital age through relevant strategies, measurable results and committed support."
      : "Découvrez la mission de YWA Consulting : donner aux organisations africaines et francophones les moyens d'exceller dans l'ère numérique grâce à des stratégies pertinentes, des résultats mesurables et un accompagnement engagé.",
  }
}

// ─── Data ────────────────────────────────────────────────────────────────────

const VALUES = [
  {
    icon: Target,
    fr: {
      title: 'Clarté',
      desc:  'Nous croyons que la complexité est souvent un symptôme, pas une réalité. Notre rôle est de simplifier, de nommer les choses avec précision et de vous donner une vision claire de là où vous en êtes et où vous allez — sans jargon, sans ambiguïté.',
    },
    en: {
      title: 'Clarity',
      desc:  "We believe complexity is often a symptom, not a reality. Our role is to simplify, to name things precisely and give you a clear view of where you are and where you're going — without jargon, without ambiguity.",
    },
  },
  {
    icon: Heart,
    fr: {
      title: 'Intégrité',
      desc:  'Nous disons ce que nous pensons — pas ce qu\'on veut entendre. Cela inclut signaler les risques d\'un projet, recommander de ne pas investir dans une solution si ce n\'est pas justifié, ou alerter sur des délais irréalistes. La confiance se construit sur la vérité.',
    },
    en: {
      title: 'Integrity',
      desc:  "We say what we think — not what people want to hear. This includes flagging project risks, recommending not to invest in a solution if it's not warranted, or alerting to unrealistic timelines. Trust is built on truth.",
    },
  },
  {
    icon: Zap,
    fr: {
      title: 'Excellence',
      desc:  'Chaque livrable YWA est relu, challengé et validé en interne avant d\'être présenté. Nous maintenons des standards élevés parce que nos clients méritent mieux que des recommandations génériques issues d\'un template. L\'excellence, c\'est aussi l\'attention aux détails qui font la différence.',
    },
    en: {
      title: 'Excellence',
      desc:  'Every YWA deliverable is reviewed, challenged and internally validated before being presented. We maintain high standards because our clients deserve better than generic template recommendations. Excellence also means attention to the details that make the difference.',
    },
  },
  {
    icon: Eye,
    fr: {
      title: 'Engagement',
      desc:  'Nous nous approprions le succès de nos clients. Quand votre projet rencontre un obstacle, nous ne disparaissons pas — nous adaptons, résolvons et assurons la continuité de l\'accompagnement. Notre relation avec vous ne s\'arrête pas à la livraison d\'un rapport.',
    },
    en: {
      title: 'Commitment',
      desc:  "We take ownership of our clients' success. When your project hits an obstacle, we don't disappear — we adapt, resolve and ensure continuity of support. Our relationship with you doesn't end at report delivery.",
    },
  },
]

const PRINCIPLES = [
  {
    fr: { title: 'Partir du terrain, pas de la théorie',     desc: 'Toute recommandation YWA est fondée sur une analyse concrète de votre organisation, pas sur un modèle générique.' },
    en: { title: 'Start from the field, not theory',          desc: 'Every YWA recommendation is based on a concrete analysis of your organization, not a generic template.' },
  },
  {
    fr: { title: 'Mesurer avant, pendant et après',           desc: 'Nous définissons des KPIs partagés dès le départ et mesurons l\'impact à chaque étape de la transformation.' },
    en: { title: 'Measure before, during and after',          desc: 'We define shared KPIs from the start and measure impact at every stage of the transformation.' },
  },
  {
    fr: { title: 'Transférer les compétences',                desc: 'Notre objectif est que vos équipes soient autonomes à l\'issue de chaque mission — pas dépendantes de nous.' },
    en: { title: 'Transfer knowledge and skills',             desc: 'Our goal is for your teams to be autonomous at the end of each mission — not dependent on us.' },
  },
  {
    fr: { title: 'Adapter en continu',                        desc: 'Les contextes changent. Nous ajustons nos recommandations en temps réel pour rester pertinents et efficaces.' },
    en: { title: 'Continuously adapt',                        desc: 'Contexts change. We adjust our recommendations in real time to remain relevant and effective.' },
  },
]

// ─── Page ────────────────────────────────────────────────────────────────────

export default async function NotreMissionPage({
  params,
}: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const isEn = locale === 'en'

  return (
    <>
      {/* ═══ HERO MANIFESTE ════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-surface-900" style={{ minHeight: '85vh', display: 'flex', alignItems: 'center' }}>
        <div className="absolute inset-0">
          <Image src="/images/mission-bg.webp" alt="" fill className="object-cover object-center scale-105" priority sizes="100vw" quality={90} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(10,15,30,0.96) 0%, rgba(10,15,30,0.85) 55%, rgba(10,15,30,0.55) 100%)' }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(10,15,30,0.92) 0%, transparent 55%, rgba(10,15,30,0.25) 100%)' }} />
        </div>

        <div className="absolute top-0 left-0 right-0 h-[600px] pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 70% 60% at 15% -5%, rgba(37,99,235,0.4) 0%, transparent 70%)' }} />
        <div className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.03) 1px,transparent 1px)',
            backgroundSize: '72px 72px',
            maskImage: 'linear-gradient(to right, rgba(0,0,0,0.65) 0%, transparent 50%)',
            WebkitMaskImage: 'linear-gradient(to right, rgba(0,0,0,0.65) 0%, transparent 50%)',
          }}
        />

        <div className="section-container relative z-10 py-20 sm:py-28 lg:py-44">
          <nav className="flex items-center gap-2 text-sm text-neutral-500 mb-10">
            <Link href={`/${locale}`} className="flex items-center gap-1 hover:text-neutral-300 transition-colors">
              <Home size={13} />
              {isEn ? 'Home' : 'Accueil'}
            </Link>
            <ChevronRight size={13} className="text-neutral-700" />
            <span className="text-neutral-400">{isEn ? 'Our Mission' : 'Notre Mission'}</span>
          </nav>

          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-px" style={{ background: 'linear-gradient(90deg,#2563eb,#60a5fa)' }} />
              <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-primary-400">
                {isEn ? 'Our purpose' : 'Notre raison d\'être'}
              </span>
            </div>

            <h1 className="font-display font-bold leading-[1.04] tracking-tight mb-5 sm:mb-8"
              style={{ fontSize: 'clamp(1.9rem, 6.5vw, 5.5rem)' }}>
              <span className="block text-white">
                {isEn ? 'Empowering' : 'Donner aux organisations'}
              </span>
              <span className="block" style={{
                background: 'linear-gradient(135deg, #60a5fa 0%, #818cf8 50%, #a78bfa 100%)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
              }}>
                {isEn ? 'organizations to excel' : 'les moyens d\'exceller'}
              </span>
            </h1>

            {/* Manifesto quote */}
            <div className="relative pl-6 mb-7 sm:mb-10 max-w-2xl">
              <div className="absolute left-0 top-0 bottom-0 w-[3px] rounded-full"
                style={{ background: 'linear-gradient(to bottom,#2563eb,#a78bfa)' }} />
              <p className="text-neutral-200 text-lg lg:text-xl leading-relaxed font-light italic">
                {isEn
                  ? '"Not by applying foreign templates, but by building transformations that truly belong to them."'
                  : '"Non pas en leur appliquant des modèles étrangers, mais en construisant avec elles des transformations qui leur ressemblent vraiment."'}
              </p>
            </div>

            <p className="text-neutral-400 text-base leading-relaxed max-w-xl">
              {isEn
                ? 'YWA Consulting supports African and Francophone B2B organizations in their digital transformation — with relevant strategies, measurable results, and committed support that goes beyond the report.'
                : "YWA Consulting accompagne les organisations B2B africaines et francophones dans leur transformation numérique — avec des stratégies pertinentes, des résultats mesurables et un accompagnement engagé qui va au-delà du rapport."}
            </p>
          </div>
        </div>
      </section>

      {/* ═══ MISSION + VISION ════════════════════════════════════ */}
      <section className="relative section-padding bg-surface-900 overflow-hidden">
        <div className="glow-dot" style={{ width: 600, height: 600, top: '50%', left: '50%', transform: 'translate(-50%,-50%)',
          background: 'radial-gradient(circle,rgba(37,99,235,0.06) 0%,transparent 70%)' }} />

        <div className="section-container relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14" data-reveal>
            <div className="flex items-center justify-center gap-3 mb-5">
              <div className="w-6 h-px" style={{ background: 'linear-gradient(90deg,#2563eb,#60a5fa)' }} />
              <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary-400">
                {isEn ? 'Who we are' : 'Qui nous sommes'}
              </span>
              <div className="w-6 h-px" style={{ background: 'linear-gradient(270deg,#2563eb,#60a5fa)' }} />
            </div>
            <h2 className="section-title mb-5">
              {isEn ? 'A clear purpose, a measurable impact' : "Une raison d'être claire, un impact mesurable"}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Mission */}
            <div data-reveal data-delay="0" className="relative rounded-2xl overflow-hidden"
              style={{ background: 'linear-gradient(145deg,rgba(15,23,42,0.95) 0%,rgba(10,15,30,1) 100%)', border: '1px solid rgba(37,99,235,0.2)', minHeight: '320px' }}>
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[2px]"
                style={{ background: 'linear-gradient(90deg,transparent,rgba(37,99,235,0.6),transparent)' }} />
              <div className="absolute top-0 right-0 w-40 h-40 pointer-events-none"
                style={{ background: 'radial-gradient(circle,rgba(37,99,235,0.08) 0%,transparent 70%)' }} />
              <div className="p-5 sm:p-8 lg:p-10 h-full flex flex-col">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: 'rgba(37,99,235,0.15)', border: '1px solid rgba(37,99,235,0.25)' }}>
                    <Target size={18} className="text-primary-400" />
                  </div>
                  <h3 className="font-display font-bold text-white text-xl">
                    {isEn ? 'Our Mission' : 'Notre Mission'}
                  </h3>
                </div>
                <p className="text-neutral-300 text-base leading-relaxed flex-1">
                  {isEn
                    ? 'To empower African and Francophone organizations to excel in the digital age through innovative strategies, seamless transformation, and reliable, engaged support — by building transformations that truly belong to them.'
                    : "Donner aux organisations africaines et francophones les moyens d'exceller dans l'ère numérique grâce à des stratégies innovantes, une transformation transparente et un soutien fiable et engagé — en construisant des transformations qui leur ressemblent vraiment."}
                </p>
              </div>
            </div>

            {/* Vision */}
            <div data-reveal data-delay="150" className="relative rounded-2xl overflow-hidden"
              style={{ background: 'linear-gradient(145deg,rgba(37,99,235,0.08) 0%,rgba(10,15,30,1) 100%)', border: '1px solid rgba(37,99,235,0.2)', minHeight: '320px' }}>
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[2px]"
                style={{ background: 'linear-gradient(90deg,transparent,rgba(96,165,250,0.5),transparent)' }} />
              <div className="p-5 sm:p-8 lg:p-10 h-full flex flex-col">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: 'rgba(37,99,235,0.15)', border: '1px solid rgba(37,99,235,0.25)' }}>
                    <Eye size={18} className="text-primary-400" />
                  </div>
                  <h3 className="font-display font-bold text-white text-xl">
                    {isEn ? 'Our Vision' : 'Notre Vision'}
                  </h3>
                </div>
                <p className="text-neutral-300 text-base leading-relaxed flex-1">
                  {isEn
                    ? "To be, by 2030, the reference digital transformation consulting firm for B2B companies in Francophone and sub-Saharan Africa — recognized for the quality of our analyses, the relevance of our strategies and the durability of the transformations we support."
                    : "Être, d'ici 2030, le cabinet de conseil en transformation numérique de référence pour les entreprises B2B d'Afrique francophone et subsaharienne — reconnu pour la qualité de nos analyses, la pertinence de nos stratégies et la durabilité des transformations que nous accompagnons."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ VALEURS ════════════════════════════════════════════ */}
      <section className="relative section-padding bg-surface-800 grain overflow-hidden">
        <div className="glow-dot" style={{ width: 500, height: 500, top: '40%', right: '-5%',
          background: 'radial-gradient(circle,rgba(37,99,235,0.1) 0%,transparent 70%)' }} />
        <div className="absolute top-0 inset-x-0 h-px pointer-events-none"
          style={{ background: 'linear-gradient(90deg,transparent,rgba(37,99,235,0.3),transparent)' }} />

        <div className="section-container relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16 lg:mb-20" data-reveal>
            <div className="flex items-center justify-center gap-3 mb-5">
              <div className="w-6 h-px" style={{ background: 'linear-gradient(90deg,#2563eb,#60a5fa)' }} />
              <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary-400">
                {isEn ? 'What guides us' : 'Ce qui nous guide'}
              </span>
              <div className="w-6 h-px" style={{ background: 'linear-gradient(270deg,#2563eb,#60a5fa)' }} />
            </div>
            <h2 className="section-title mb-5">
              {isEn ? 'Four values, not slogans' : 'Quatre valeurs, pas des slogans'}
            </h2>
            <p className="section-subtitle mx-auto">
              {isEn
                ? 'These values are not written on walls. They guide every recommendation we make, every project we accept and every relationship we build.'
                : "Ces valeurs ne sont pas affichées sur des murs. Elles guident chaque recommandation que nous formulons, chaque projet que nous acceptons et chaque relation que nous construisons."}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {VALUES.map((v, i) => {
              const Icon = v.icon
              const data = isEn ? v.en : v.fr
              return (
                <div
                  key={i}
                  data-reveal
                  data-delay={(['0', '150', '0', '150'] as const)[i]}
                  className="group flex gap-5 rounded-2xl p-5 sm:p-7 transition-all duration-400"
                  style={{ background: 'linear-gradient(145deg,rgba(15,23,42,0.95) 0%,rgba(10,15,30,1) 100%)',
                           border: '1px solid rgba(51,65,85,0.6)' }}
                >
                  <div className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center mt-0.5 transition-colors duration-300"
                    style={{ background: 'rgba(37,99,235,0.12)', border: '1px solid rgba(37,99,235,0.2)' }}>
                    <Icon size={20} className="text-primary-400 group-hover:text-primary-300 transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-white text-xl mb-3 leading-snug">{data.title}</h3>
                    <p className="text-neutral-400 text-sm leading-relaxed">{data.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ═══ PHILOSOPHIE / PRINCIPES D'ACTION ════════════════════ */}
      <section className="relative section-padding bg-surface-900 overflow-hidden">
        <div className="glow-dot" style={{ width: 500, height: 500, top: '50%', left: '-5%',
          background: 'radial-gradient(circle,rgba(37,99,235,0.09) 0%,transparent 70%)' }} />

        <div className="section-container relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

            {/* Texte */}
            <div data-reveal="left">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-6 h-px" style={{ background: 'linear-gradient(90deg,#2563eb,#60a5fa)' }} />
                <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary-400">
                  {isEn ? 'Our philosophy' : 'Notre philosophie'}
                </span>
              </div>
              <h2 className="section-title mb-6">
                {isEn
                  ? <>Clarity drives <span style={{ background:'linear-gradient(135deg,#60a5fa,#a78bfa)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>transformation</span></>
                  : <>La clarté entraîne la <span style={{ background:'linear-gradient(135deg,#60a5fa,#a78bfa)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>transformation</span></>}
              </h2>
              <p className="text-neutral-300 text-base leading-relaxed mb-4">
                {isEn
                  ? "Too many organizations get lost in the complexity of digital change. Consultants who mystify complexity aren't serving their clients — they're protecting their invoices."
                  : "Trop d'organisations se perdent dans la complexité du changement numérique. Les consultants qui mystifient la complexité ne servent pas leurs clients — ils protègent leurs honoraires."}
              </p>
              <p className="text-neutral-400 text-sm leading-relaxed mb-6 sm:mb-10">
                {isEn
                  ? "At YWA, we believe our job is the opposite: to simplify, to make the complex understandable, to give your teams the tools to move forward confidently — and then to step back."
                  : "Chez YWA, nous croyons que notre travail est à l'opposé : simplifier, rendre le complexe compréhensible, donner à vos équipes les outils pour avancer en confiance — puis s'effacer."}
              </p>

              <div className="space-y-3">
                {PRINCIPLES.map((p, i) => {
                  const data = isEn ? p.en : p.fr
                  return (
                    <div key={i} className="flex items-start gap-4 group">
                      <div className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center mt-0.5"
                        style={{ background: 'linear-gradient(135deg,rgba(37,99,235,0.25),rgba(37,99,235,0.1))',
                                 border: '1px solid rgba(37,99,235,0.3)' }}>
                        <span className="text-primary-400 text-[10px] font-bold font-display">{i + 1}</span>
                      </div>
                      <div>
                        <p className="text-white text-sm font-semibold font-display mb-0.5">{data.title}</p>
                        <p className="text-neutral-500 text-xs leading-relaxed">{data.desc}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Image */}
            <div className="relative" data-reveal data-delay="200">
              <div className="absolute -inset-4 bg-primary-600/5 rounded-3xl blur-2xl pointer-events-none" />
              <div className="relative rounded-2xl overflow-hidden" style={{ height: 'clamp(260px,40vw,460px)', border: '1px solid rgba(51,65,85,0.6)' }}>
                <Image src="/images/team-analytics.webp"
                  alt={isEn ? 'YWA team in strategic analysis' : "Équipe YWA en analyse stratégique"}
                  fill className="object-cover object-center" sizes="(max-width:1024px) 100vw,50vw" quality={85} />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-900/80 via-transparent to-transparent" />

                {/* Overlay info bottom */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="rounded-xl p-4 flex items-center gap-4"
                    style={{ background: 'rgba(10,15,30,0.88)', backdropFilter: 'blur(12px)', border: '1px solid rgba(37,99,235,0.2)' }}>
                    <CheckCircle2 size={16} className="text-primary-400 shrink-0" />
                    <p className="text-neutral-200 text-sm">
                      {isEn
                        ? 'Every recommendation is field-tested and context-adapted.'
                        : 'Chaque recommandation est testée sur le terrain et adaptée au contexte.'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <StatsCounter />
      <CtaBanner />
    </>
  )
}
