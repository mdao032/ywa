import type { Metadata } from 'next'
import Link  from 'next/link'
import Image from 'next/image'
import { SpontaneousForm } from '@/components/sections/SpontaneousForm'
import { JobPostings }     from '@/components/sections/JobPostings'
import { CtaBanner }       from '@/components/sections/CtaBanner'
import {
  Users, Zap, TrendingUp, Globe,
  ChevronRight, Home, ArrowRight,
} from 'lucide-react'

// ─── Metadata ─────────────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const isEn = locale === 'en'
  return {
    title: isEn ? 'Career — Join YWA Consulting' : 'Carrière — Rejoindre YWA Consulting',
    description: isEn
      ? 'Join YWA Consulting and contribute to digital transformation projects that make a real difference. Discover our open positions.'
      : 'Rejoignez YWA Consulting et contribuez à des projets de transformation numérique qui font vraiment la différence. Découvrez nos offres.',
  }
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const WHY_JOIN = [
  {
    icon: Users,
    fr: { title: "Culture d'excellence",    desc: "Une équipe soudée, bienveillante et passionnée par l'innovation numérique. Chaque voix compte chez YWA." },
    en: { title: 'Culture of excellence',   desc: 'A close-knit, caring team passionate about digital innovation. Every voice matters at YWA.' },
  },
  {
    icon: Zap,
    fr: { title: 'Impact réel',             desc: 'Vos contributions influencent directement la transformation numérique de nos clients et leur succès à long terme.' },
    en: { title: 'Real impact',             desc: "Your contributions directly influence our clients' digital transformation and their long-term success." },
  },
  {
    icon: TrendingUp,
    fr: { title: 'Croissance accélérée',    desc: 'Formation continue, certifications, mentoring et perspectives d\'évolution rapide dans un secteur en pleine expansion.' },
    en: { title: 'Accelerated growth',      desc: 'Continuous training, certifications, mentoring and fast career growth opportunities in a booming sector.' },
  },
  {
    icon: Globe,
    fr: { title: 'Flexibilité & Remote',    desc: 'Travail hybride ou full remote selon les projets. Nous faisons confiance à nos collaborateurs pour s\'organiser.' },
    en: { title: 'Flexibility & Remote',    desc: 'Hybrid or full-remote work depending on projects. We trust our team members to manage their time.' },
  },
]

// ─── Page ─────────────────────────────────────────────────────────────────────

export default async function CarrierePage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const isEn = locale === 'en'

  return (
    <>
      {/* ═══ HERO ════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-surface-900" style={{ minHeight: '82vh', display: 'flex', alignItems: 'center' }}>

        {/* Fond photo */}
        <div className="absolute inset-0">
          <Image
            src="/images/team-meeting.webp"
            alt=""
            fill
            className="object-cover object-center scale-105"
            priority
            sizes="100vw"
            quality={90}
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(10,15,30,0.97) 0%, rgba(10,15,30,0.84) 55%, rgba(10,15,30,0.55) 100%)' }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(10,15,30,0.92) 0%, transparent 50%, rgba(10,15,30,0.25) 100%)' }} />
        </div>

        {/* Glow bleu haut-gauche */}
        <div className="absolute top-0 left-0 right-0 h-[500px] pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 70% 60% at 20% -5%, rgba(37,99,235,0.38) 0%, transparent 70%)' }} />

        {/* Grille décorative */}
        <div className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.03) 1px,transparent 1px)',
            backgroundSize: '72px 72px',
            maskImage: 'linear-gradient(to right, rgba(0,0,0,0.7) 0%, transparent 55%)',
            WebkitMaskImage: 'linear-gradient(to right, rgba(0,0,0,0.7) 0%, transparent 55%)',
          }}
        />

        <div className="section-container relative z-10 py-20 sm:py-28 lg:py-40">

          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-neutral-500 mb-6 sm:mb-10">
            <Link href={`/${locale}`} className="flex items-center gap-1 hover:text-neutral-300 transition-colors">
              <Home size={13} />
              {isEn ? 'Home' : 'Accueil'}
            </Link>
            <ChevronRight size={13} className="text-neutral-700" />
            <span className="text-neutral-400">{isEn ? 'Career' : 'Carrière'}</span>
          </nav>

          <div className="max-w-3xl">
            {/* Overline */}
            <div className="flex items-center gap-3 mb-5 sm:mb-7">
              <div className="w-8 h-px" style={{ background: 'linear-gradient(90deg,#2563eb,#60a5fa)' }} />
              <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-primary-400">
                {isEn ? 'Join our team' : "Rejoignez l'équipe"}
              </span>
            </div>

            {/* Titre gradient */}
            <h1
              className="font-display font-bold leading-[1.04] tracking-tight mb-5 sm:mb-7"
              style={{ fontSize: 'clamp(2rem, 7vw, 5.5rem)' }}
            >
              <span className="block text-white">
                {isEn ? 'Build your future' : 'Construisez votre avenir'}
              </span>
              <span
                className="block"
                style={{
                  background: 'linear-gradient(135deg, #60a5fa 0%, #818cf8 50%, #a78bfa 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {isEn ? 'at YWA Consulting' : 'chez YWA Consulting'}
              </span>
            </h1>

            <p className="text-neutral-300 text-base sm:text-lg leading-relaxed mb-7 sm:mb-10 max-w-xl">
              {isEn
                ? 'We are always looking for talented people passionate about digital transformation. Come make a real impact with us — wherever you are.'
                : "Nous sommes toujours à la recherche de talents passionnés par la transformation numérique. Venez faire une vraie différence avec nous — où que vous soyez."}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <a href="#candidature" className="btn-primary flex items-center gap-2">
                {isEn ? 'Apply spontaneously' : 'Candidature spontanée'}
                <ArrowRight size={15} />
              </a>
              <a href="#offres" className="btn-outline flex items-center gap-2">
                {isEn ? 'See open positions' : 'Voir les offres'}
              </a>
            </div>
          </div>

          {/* Trust stats */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 sm:gap-8 mt-10 sm:mt-14">
            {[
              { v: '10+', l: isEn ? "Years of expertise" : "Années d'expertise" },
              { v: '100%', l: isEn ? 'Remote-friendly' : 'Remote-friendly' },
              { v: '5★',  l: isEn ? 'Team satisfaction' : 'Satisfaction équipe' },
            ].map(({ v, l }, i) => (
              <div key={i} className="flex items-center gap-7">
                {i > 0 && (
                  <div className="w-px h-9"
                    style={{ background: 'linear-gradient(to bottom,transparent,rgba(51,65,85,0.9),transparent)' }} />
                )}
                <div>
                  <p className="font-display font-black text-white leading-none"
                    style={{ fontSize: 'clamp(1.4rem,3.5vw,2rem)' }}>{v}</p>
                  <p className="text-[11px] text-neutral-500 mt-0.5">{l}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ POURQUOI NOUS REJOINDRE ══════════════════════════════ */}
      <section className="relative section-padding bg-surface-800 overflow-hidden">

        {/* Glow central */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, rgba(37,99,235,0.07) 0%, transparent 70%)', filter: 'blur(40px)' }} />
        <div className="absolute top-0 inset-x-0 h-px pointer-events-none"
          style={{ background: 'linear-gradient(90deg,transparent,rgba(37,99,235,0.4),transparent)' }} />

        <div className="section-container relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16" data-reveal>
            <div className="flex items-center justify-center gap-3 mb-5">
              <div className="w-6 h-px" style={{ background: 'linear-gradient(90deg,#2563eb,#60a5fa)' }} />
              <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary-400">
                {isEn ? 'Why join us' : 'Pourquoi nous rejoindre'}
              </span>
              <div className="w-6 h-px" style={{ background: 'linear-gradient(270deg,#2563eb,#60a5fa)' }} />
            </div>
            <h2 className="section-title mb-4">
              {isEn
                ? 'Build your career at YWA Consulting'
                : 'Construisez votre carrière chez YWA Consulting'}
            </h2>
            <p className="section-subtitle mx-auto">
              {isEn
                ? "More than a job — a mission, a community, and a springboard for your ambitions."
                : "Plus qu'un emploi — une mission, une communauté, et un tremplin pour vos ambitions."}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
            {WHY_JOIN.map((item, i) => {
              const Icon = item.icon
              const data = isEn ? item.en : item.fr
              return (
                <div
                  key={i}
                  data-reveal
                  data-delay={(['0', '100', '200', '300'] as const)[i]}
                  className="group relative rounded-2xl p-5 sm:p-7 overflow-hidden transition-all duration-400"
                  style={{
                    background: 'linear-gradient(145deg,rgba(15,23,42,0.95) 0%,rgba(10,15,30,1) 100%)',
                    border: '1px solid rgba(51,65,85,0.6)',
                    boxShadow: '0 0 0 1px rgba(255,255,255,0.02) inset',
                  }}
                >
                  {/* Ligne d'accentuation au survol */}
                  <div
                    className="absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"
                    style={{ background: 'linear-gradient(90deg,#2563eb,#60a5fa)' }}
                  />
                  {/* Reflet coin haut */}
                  <div
                    className="absolute top-0 left-0 w-1/2 h-1/3 pointer-events-none"
                    style={{ background: 'linear-gradient(135deg,rgba(255,255,255,0.03) 0%,transparent 60%)' }}
                  />

                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                    style={{
                      background: 'linear-gradient(135deg,rgba(37,99,235,0.2),rgba(37,99,235,0.08))',
                      border: '1px solid rgba(37,99,235,0.3)',
                    }}
                  >
                    <Icon size={20} className="text-primary-400" />
                  </div>
                  <h3 className="font-display font-bold text-white mb-2 text-base leading-snug">
                    {data.title}
                  </h3>
                  <p className="text-neutral-400 text-sm leading-relaxed">{data.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ═══ OFFRES D'EMPLOI ══════════════════════════════════════ */}
      <section id="offres" className="relative section-padding bg-surface-900 overflow-hidden">
        <div
          className="glow-dot"
          style={{ width: 500, height: 500, top: '50%', right: '-5%', transform: 'translateY(-50%)',
            background: 'radial-gradient(circle,rgba(37,99,235,0.06) 0%,transparent 70%)' }}
        />

        <div className="section-container relative z-10">
          <div className="mb-10 sm:mb-14" data-reveal>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-6 h-px" style={{ background: 'linear-gradient(90deg,#2563eb,#60a5fa)' }} />
              <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary-400">
                {isEn ? 'Open positions' : "Offres d'emploi"}
              </span>
            </div>
            <h2 className="section-title mb-3">
              {isEn ? 'Current Openings' : 'Nos Offres Actuelles'}
            </h2>
            <p className="section-subtitle">
              {isEn
                ? 'Explore our current opportunities and find the role that matches your ambitions.'
                : 'Explorez nos opportunités actuelles et trouvez le poste qui correspond à vos ambitions.'}
            </p>
          </div>

          <JobPostings jobs={[]} locale={locale} />
        </div>
      </section>

      {/* ═══ CANDIDATURE SPONTANÉE ═══════════════════════════════ */}
      <section id="candidature" className="relative section-padding bg-surface-800 grain overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-px pointer-events-none"
          style={{ background: 'linear-gradient(90deg,transparent,rgba(37,99,235,0.3),transparent)' }} />
        <div className="absolute bottom-0 inset-x-0 h-px pointer-events-none"
          style={{ background: 'linear-gradient(90deg,transparent,rgba(37,99,235,0.15),transparent)' }} />

        <div className="section-container relative z-10">
          <div className="max-w-2xl mx-auto">

            <div className="text-center mb-8 sm:mb-12" data-reveal>
              <div className="flex items-center justify-center gap-3 mb-5">
                <div className="w-6 h-px" style={{ background: 'linear-gradient(90deg,#2563eb,#60a5fa)' }} />
                <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary-400">
                  {isEn ? 'Spontaneous application' : 'Candidature spontanée'}
                </span>
                <div className="w-6 h-px" style={{ background: 'linear-gradient(270deg,#2563eb,#60a5fa)' }} />
              </div>
              <h2 className="section-title mb-4">
                {isEn ? "Don't see the right role?" : 'Pas le bon poste ?'}
              </h2>
              <p className="section-subtitle mx-auto">
                {isEn
                  ? 'Send us your application anyway. We are always interested in meeting exceptional talent, even when we have no active openings.'
                  : "Envoyez-nous quand même votre candidature. Nous sommes toujours intéressés par des profils d'exception, même lorsque nous n'avons pas de poste actif."}
              </p>
            </div>

            <div
              className="relative rounded-2xl p-5 sm:p-8 lg:p-10"
              style={{
                background: 'linear-gradient(145deg,rgba(15,23,42,0.97) 0%,rgba(10,15,30,1) 100%)',
                border: '1px solid rgba(51,65,85,0.7)',
                boxShadow: '0 0 0 1px rgba(255,255,255,0.02) inset',
              }}
              data-reveal
              data-delay="100"
            >
              {/* Reflet coin haut */}
              <div
                className="absolute top-0 left-0 w-1/2 h-1/3 pointer-events-none"
                style={{ background: 'linear-gradient(135deg,rgba(255,255,255,0.03) 0%,transparent 60%)' }}
              />
              <SpontaneousForm locale={locale} />
            </div>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
