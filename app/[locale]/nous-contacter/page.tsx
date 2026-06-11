import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ContactForm }  from '@/components/sections/ContactForm'
import { CoverageMap }  from '@/components/sections/CoverageMap'
import {
  Mail, Linkedin, CalendarDays, ShieldCheck, Clock, Users,
  CheckCircle2, ChevronRight, Home, ArrowRight,
  MessageSquare, Phone, MapPin,
} from 'lucide-react'

// ─── Metadata ────────────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const isEn = locale === 'en'
  return {
    title: isEn
      ? "Contact YWA Consulting — Let's Talk About Your Project"
      : "Nous Contacter — Parlons de votre projet | YWA Consulting",
    description: isEn
      ? 'Contact YWA Consulting to discuss your digital transformation project. Free initial consultation, response within 24 hours, no commitment.'
      : 'Contactez YWA Consulting pour discuter de votre projet de transformation numérique. Consultation initiale gratuite, réponse sous 24h, sans engagement.',
  }
}

// ─── Data ────────────────────────────────────────────────────────────────────

const WHY_US = [
  {
    icon: Clock,
    fr: { title: 'Première réponse sous 24 h ouvrées',
          desc:  'Chaque message reçu est traité dans la journée. Vous ne resterez jamais sans réponse.' },
    en: { title: 'First response within 24 business hours',
          desc:  "Every message received is handled the same day. You'll never be left without a reply." },
  },
  {
    icon: CalendarDays,
    fr: { title: 'Appel découverte gratuit, sans engagement',
          desc:  'Un premier échange de 30 minutes pour comprendre votre contexte — avant toute proposition commerciale.' },
    en: { title: 'Free discovery call, no commitment',
          desc:  'A first 30-minute discussion to understand your context — before any commercial proposal.' },
  },
  {
    icon: ShieldCheck,
    fr: { title: 'Confidentialité garantie dès le premier contact',
          desc:  'Tout ce que vous nous partagez reste strictement confidentiel. Un NDA peut être signé sur demande.' },
    en: { title: 'Confidentiality guaranteed from first contact',
          desc:  'Everything you share with us stays strictly confidential. An NDA can be signed upon request.' },
  },
  {
    icon: Users,
    fr: { title: 'Vous parlez directement à un consultant senior',
          desc:  'Pas d\'assistants, pas de standardistes. Votre interlocuteur chez YWA est toujours un expert disponible.' },
    en: { title: 'You speak directly with a senior consultant',
          desc:  'No assistants, no receptionists. Your YWA contact is always an available expert.' },
  },
]

const STEPS = [
  {
    num: '01',
    icon: MessageSquare,
    fr: { title: 'Vous envoyez votre message',      desc: 'Via le formulaire, par email ou sur LinkedIn — choisissez le canal qui vous convient le mieux.' },
    en: { title: 'You send your message',            desc: 'Via the form, by email or on LinkedIn — choose the channel that suits you best.' },
  },
  {
    num: '02',
    icon: Clock,
    fr: { title: 'Nous répondons sous 24 h',        desc: 'Un consultant senior analyse votre demande et vous répond avec les premières pistes de réflexion.' },
    en: { title: 'We reply within 24 hours',         desc: 'A senior consultant reviews your request and gets back to you with initial thoughts.' },
  },
  {
    num: '03',
    icon: Phone,
    fr: { title: 'Appel découverte offert',         desc: 'Un échange de 30 minutes pour approfondir votre contexte, poser les bonnes questions et évaluer l\'adéquation.' },
    en: { title: 'Free discovery call',              desc: 'A 30-minute exchange to deepen your context, ask the right questions and assess fit.' },
  },
  {
    num: '04',
    icon: ArrowRight,
    fr: { title: 'Proposition personnalisée',       desc: 'Si le projet le justifie, nous préparons une proposition sur mesure : scope, approche, budget indicatif.' },
    en: { title: 'Tailored proposal',               desc: 'If the project warrants it, we prepare a custom proposal: scope, approach, indicative budget.' },
  },
]

// ─── Page ────────────────────────────────────────────────────────────────────

export default async function NousContacterPage({
  params,
}: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const isEn = locale === 'en'

  return (
    <>
      {/* ═══ HERO ════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-surface-900" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center' }}>
        <div className="absolute inset-0">
          <Image src="/images/team-data.webp" alt="" fill className="object-cover object-center scale-105" priority sizes="100vw" quality={90} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(10,15,30,0.97) 0%, rgba(10,15,30,0.84) 55%, rgba(10,15,30,0.55) 100%)' }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(10,15,30,0.95) 0%, transparent 55%)' }} />
        </div>
        <div className="absolute top-0 left-0 right-0 h-[480px] pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 60% 55% at 10% -5%, rgba(37,99,235,0.35) 0%, transparent 70%)' }} />
        <div className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.03) 1px,transparent 1px)',
            backgroundSize: '72px 72px',
            maskImage: 'linear-gradient(to right, rgba(0,0,0,0.7) 0%, transparent 55%)',
            WebkitMaskImage: 'linear-gradient(to right, rgba(0,0,0,0.7) 0%, transparent 55%)',
          }}
        />

        <div className="section-container relative z-10 py-20 sm:py-28 lg:py-36">
          <nav className="flex items-center gap-2 text-sm text-neutral-500 mb-6 sm:mb-10">
            <Link href={`/${locale}`} className="flex items-center gap-1 hover:text-neutral-300 transition-colors">
              <Home size={13} />
              {isEn ? 'Home' : 'Accueil'}
            </Link>
            <ChevronRight size={13} className="text-neutral-700" />
            <span className="text-neutral-400">{isEn ? 'Contact' : 'Contact'}</span>
          </nav>

          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-5 sm:mb-7">
              <div className="w-8 h-px" style={{ background: 'linear-gradient(90deg,#2563eb,#60a5fa)' }} />
              <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-primary-400">
                {isEn ? 'Get in touch' : 'Prenons contact'}
              </span>
            </div>
            <h1 className="font-display font-bold leading-[1.04] tracking-tight mb-5 sm:mb-7 text-white"
              style={{ fontSize: 'clamp(2rem, 6.5vw, 5rem)' }}>
              {isEn ? "Let's discuss your project" : 'Discutons de votre projet'}
            </h1>
            <p className="text-neutral-300 text-base sm:text-lg leading-relaxed max-w-lg mb-7 sm:mb-10">
              {isEn
                ? 'Tell us about your challenges. No sales pitch, no commitments — just an honest first discussion to explore what a transformation with YWA could look like.'
                : "Parlez-nous de vos défis. Pas de pitch commercial, pas d'engagement — juste un premier échange honnête pour explorer à quoi pourrait ressembler une transformation avec YWA."}
            </p>

            {/* Trust pills */}
            <div className="flex flex-wrap gap-3">
              {[
                isEn ? '⚡ Response within 24h' : '⚡ Réponse sous 24 h',
                isEn ? '☎ Free discovery call' : '☎ Appel découverte gratuit',
                isEn ? '🔒 100% confidential' : '🔒 100% confidentiel',
              ].map((pill, i) => (
                <span key={i} className="text-xs font-medium text-neutral-300 px-4 py-2 rounded-full"
                  style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', backdropFilter: 'blur(6px)' }}>
                  {pill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ FORMULAIRE + INFOS ══════════════════════════════════ */}
      <section className="relative section-padding bg-surface-900 overflow-hidden">
        <div className="glow-dot" style={{ width: 600, height: 600, top: '50%', right: '-10%', transform: 'translateY(-50%)',
          background: 'radial-gradient(circle,rgba(37,99,235,0.06) 0%,transparent 70%)' }} />

        <div className="section-container relative z-10">
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-14 items-start">

            {/* ── Colonne gauche ─────────────────────────────── */}
            <div className="lg:col-span-2 space-y-10" data-reveal="left">

              {/* Header */}
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-6 h-px" style={{ background: 'linear-gradient(90deg,#2563eb,#60a5fa)' }} />
                  <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary-400">
                    {isEn ? 'Contact details' : 'Coordonnées'}
                  </span>
                </div>
                <h2 className="font-display font-bold text-white mb-4"
                  style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', lineHeight: 1.12 }}>
                  {isEn ? "We'd love to hear from you" : "Nous serions ravis d'échanger avec vous"}
                </h2>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  {isEn
                    ? 'Whether you want to discuss a project, ask about our services, or simply understand how we can help — we are here, and we listen.'
                    : 'Que vous souhaitiez discuter d\'un projet, poser des questions sur nos services, ou simplement comprendre comment nous pouvons vous aider — nous sommes là, et nous écoutons.'}
                </p>
              </div>

              {/* Liens de contact */}
              <div className="space-y-3">
                <a href="mailto:contact@ywaconsulting.com"
                  className="group flex items-center gap-4 rounded-xl p-4 transition-all duration-300"
                  style={{ background: 'linear-gradient(145deg,rgba(15,23,42,0.9) 0%,rgba(10,15,30,1) 100%)',
                           border: '1px solid rgba(51,65,85,0.6)' }}>
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-300 group-hover:bg-primary-600"
                    style={{ background: 'rgba(37,99,235,0.12)', border: '1px solid rgba(37,99,235,0.2)' }}>
                    <Mail size={17} className="text-primary-400 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <p className="text-[11px] text-neutral-600 font-medium uppercase tracking-wider mb-0.5">Email</p>
                    <p className="text-white text-sm font-medium">contact@ywaconsulting.com</p>
                  </div>
                  <ChevronRight size={14} className="text-neutral-700 ml-auto group-hover:text-primary-400 group-hover:translate-x-0.5 transition-all duration-200" />
                </a>

                <a href="https://www.linkedin.com/company/ywa-consulting"
                  target="_blank" rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-xl p-4 transition-all duration-300"
                  style={{ background: 'linear-gradient(145deg,rgba(15,23,42,0.9) 0%,rgba(10,15,30,1) 100%)',
                           border: '1px solid rgba(51,65,85,0.6)' }}>
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-300 group-hover:bg-primary-600"
                    style={{ background: 'rgba(37,99,235,0.12)', border: '1px solid rgba(37,99,235,0.2)' }}>
                    <Linkedin size={17} className="text-primary-400 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <p className="text-[11px] text-neutral-600 font-medium uppercase tracking-wider mb-0.5">LinkedIn</p>
                    <p className="text-white text-sm font-medium">YWA Consulting</p>
                  </div>
                  <ChevronRight size={14} className="text-neutral-700 ml-auto group-hover:text-primary-400 group-hover:translate-x-0.5 transition-all duration-200" />
                </a>

                <div className="group flex items-center gap-4 rounded-xl p-4"
                  style={{ background: 'linear-gradient(145deg,rgba(15,23,42,0.9) 0%,rgba(10,15,30,1) 100%)',
                           border: '1px solid rgba(51,65,85,0.6)' }}>
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: 'rgba(37,99,235,0.12)', border: '1px solid rgba(37,99,235,0.2)' }}>
                    <MapPin size={17} className="text-primary-400" />
                  </div>
                  <div>
                    <p className="text-[11px] text-neutral-600 font-medium uppercase tracking-wider mb-0.5">
                      {isEn ? 'Location' : 'Localisation'}
                    </p>
                    <p className="text-white text-sm font-medium">Bamako, Mali</p>
                  </div>
                </div>
              </div>

              {/* Pourquoi nous choisir */}
              <div>
                <h3 className="font-display font-semibold text-white text-sm uppercase tracking-wider mb-5"
                  style={{ color: 'rgba(255,255,255,0.85)' }}>
                  {isEn ? 'Our commitments to you' : 'Nos engagements envers vous'}
                </h3>
                <div className="space-y-4">
                  {WHY_US.map((item, i) => {
                    const Icon = item.icon
                    const data = isEn ? item.en : item.fr
                    return (
                      <div key={i} className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                          style={{ background: 'rgba(37,99,235,0.1)', border: '1px solid rgba(37,99,235,0.15)' }}>
                          <Icon size={13} className="text-primary-400" />
                        </div>
                        <div>
                          <p className="text-white text-sm font-medium mb-0.5">{data.title}</p>
                          <p className="text-neutral-500 text-xs leading-relaxed">{data.desc}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>

            {/* ── Colonne droite — formulaire ─────────────────── */}
            <div className="lg:col-span-3" data-reveal data-delay="150">
              {/* Formulaire */}
              <div className="rounded-2xl p-5 sm:p-8 lg:p-10"
                style={{ background: 'linear-gradient(145deg,rgba(15,23,42,0.97) 0%,rgba(10,15,30,1) 100%)',
                         border: '1px solid rgba(51,65,85,0.7)',
                         boxShadow: '0 0 0 1px rgba(255,255,255,0.02) inset' }}>
                <div className="flex items-center gap-3 mb-5 sm:mb-8">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center"
                    style={{ background: 'rgba(37,99,235,0.12)', border: '1px solid rgba(37,99,235,0.2)' }}>
                    <MessageSquare size={14} className="text-primary-400" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-white text-lg leading-none">
                      {isEn ? 'Send us a message' : 'Envoyez-nous un message'}
                    </h3>
                    <p className="text-neutral-600 text-xs mt-0.5">
                      {isEn ? 'We read every message personally.' : 'Nous lisons chaque message personnellement.'}
                    </p>
                  </div>
                </div>
                <ContactForm />
              </div>

              {/* CTA Consultation directe */}
              <div className="mt-4 rounded-2xl p-5 sm:p-6 flex flex-wrap sm:flex-nowrap items-center gap-3 sm:gap-4 overflow-hidden relative"
                style={{ background: 'linear-gradient(135deg,rgba(37,99,235,0.18) 0%,rgba(15,23,42,0.95) 60%)',
                         border: '1px solid rgba(37,99,235,0.25)' }}>
                <div className="absolute right-0 top-0 bottom-0 w-1/3 pointer-events-none"
                  style={{ background: 'linear-gradient(to left,rgba(37,99,235,0.06),transparent)' }} />
                <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: 'rgba(37,99,235,0.15)', border: '1px solid rgba(37,99,235,0.25)' }}>
                  <CalendarDays size={20} className="text-primary-400" />
                </div>
                <div className="flex-1 relative z-10">
                  <p className="font-display font-semibold text-white text-base mb-0.5">
                    {isEn ? 'Prefer a direct call?' : 'Vous préférez un appel direct ?'}
                  </p>
                  <p className="text-neutral-400 text-sm">
                    {isEn
                      ? 'Book a free 30-minute slot directly in our calendar.'
                      : 'Réservez un créneau gratuit de 30 minutes directement dans notre agenda.'}
                  </p>
                </div>
                <Link href={`/${locale}/nous-contacter`}
                  className="btn-primary shrink-0 text-sm whitespace-nowrap relative z-10">
                  {isEn ? 'Book a slot' : 'Réserver un créneau'}
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ═══ PROCESSUS ═══════════════════════════════════════════ */}
      <section className="relative section-padding bg-surface-800 grain overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-px" style={{ background: 'linear-gradient(90deg,transparent,rgba(37,99,235,0.3),transparent)' }} />
        <div className="absolute bottom-0 inset-x-0 h-px" style={{ background: 'linear-gradient(90deg,transparent,rgba(37,99,235,0.15),transparent)' }} />

        <div className="section-container relative z-10">
          <div className="text-center max-w-xl mx-auto mb-10 sm:mb-16" data-reveal>
            <div className="flex items-center justify-center gap-3 mb-5">
              <div className="w-6 h-px" style={{ background: 'linear-gradient(90deg,#2563eb,#60a5fa)' }} />
              <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary-400">
                {isEn ? 'What to expect' : 'Comment ça se passe'}
              </span>
              <div className="w-6 h-px" style={{ background: 'linear-gradient(270deg,#2563eb,#60a5fa)' }} />
            </div>
            <h2 className="section-title mb-4">
              {isEn ? 'Four simple steps to get started' : 'Quatre étapes simples pour démarrer'}
            </h2>
            <p className="section-subtitle mx-auto">
              {isEn
                ? 'No lengthy process, no bureaucracy. From your first message to a concrete proposal — everything happens in days, not weeks.'
                : 'Pas de processus interminable, pas de bureaucratie. De votre premier message à une proposition concrète — tout se passe en jours, pas en semaines.'}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4 relative">
            {/* Ligne de connexion desktop */}
            <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-px pointer-events-none"
              style={{ background: 'linear-gradient(90deg, transparent, rgba(37,99,235,0.3) 15%, rgba(37,99,235,0.3) 85%, transparent)' }} />

            {STEPS.map(({ num, icon: Icon, fr, en: enItem }, i) => {
              const data = isEn ? enItem : fr
              return (
                <div key={i} data-reveal data-delay={(['0', '100', '200', '300'] as const)[i]}
                  className="relative rounded-2xl p-5 sm:p-7 text-center overflow-hidden"
                  style={{ background: 'linear-gradient(145deg,rgba(15,23,42,0.95) 0%,rgba(10,15,30,1) 100%)',
                           border: '1px solid rgba(51,65,85,0.6)' }}>
                  {/* Cercle numéroté */}
                  <div className="w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-5 relative z-10"
                    style={{ background: 'rgba(37,99,235,0.12)', border: '1px solid rgba(37,99,235,0.2)' }}>
                    <span className="font-display font-bold text-primary-400 text-sm">{num}</span>
                  </div>
                  {/* Numéro déco fond */}
                  <span className="absolute -bottom-2 -right-2 font-display font-black select-none"
                    style={{ fontSize: '5rem', color: 'rgba(255,255,255,0.025)', lineHeight: 1 }}>
                    {num}
                  </span>
                  <h3 className="font-display font-bold text-white text-base mb-2 leading-snug relative z-10">
                    {data.title}
                  </h3>
                  <p className="text-neutral-500 text-sm leading-relaxed relative z-10">
                    {data.desc}
                  </p>
                </div>
              )
            })}
          </div>

          {/* Note de réassurance */}
          <div className="mt-10 max-w-xl mx-auto text-center" data-reveal data-delay="300">
            <div className="flex items-start gap-3 rounded-xl p-5 justify-center"
              style={{ background: 'rgba(37,99,235,0.06)', border: '1px solid rgba(37,99,235,0.15)' }}>
              <CheckCircle2 size={15} className="text-primary-400 mt-0.5 shrink-0" />
              <p className="text-neutral-400 text-sm leading-relaxed text-left">
                {isEn
                  ? "If after the discovery call we don't think we're the right fit for your project, we'll tell you honestly and, where possible, point you in the right direction."
                  : "Si après l'appel découverte nous estimons ne pas être la bonne solution pour votre projet, nous vous le dirons honnêtement et, dans la mesure du possible, vous orienterons vers les bonnes ressources."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CARTE ═══════════════════════════════════════════════ */}
      <section className="relative bg-surface-900 section-padding overflow-hidden">
        <div className="glow-dot" style={{ width: 500, height: 500, bottom: '-10%', left: '50%', transform: 'translateX(-50%)',
          background: 'radial-gradient(circle,rgba(37,99,235,0.07) 0%,transparent 70%)' }} />

        <div className="section-container relative z-10">
          <div className="text-center max-w-lg mx-auto mb-8 sm:mb-12" data-reveal>
            <div className="flex items-center justify-center gap-3 mb-5">
              <div className="w-6 h-px" style={{ background: 'linear-gradient(90deg,#2563eb,#60a5fa)' }} />
              <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary-400">
                {isEn ? 'Our location' : 'Notre localisation'}
              </span>
              <div className="w-6 h-px" style={{ background: 'linear-gradient(270deg,#2563eb,#60a5fa)' }} />
            </div>
            <h2 className="section-title mb-4">
              {isEn ? 'Find us in Bamako' : 'Retrouvez-nous à Bamako'}
            </h2>
            <p className="section-subtitle mx-auto">
              {isEn
                ? "Based in Bamako, we work with organizations across Francophone Africa and beyond — in-person or remote."
                : "Basés à Bamako, nous intervenons auprès d'organisations à travers l'Afrique francophone et au-delà — en présentiel ou à distance."}
            </p>
          </div>

          {/* Carte de couverture */}
          <div data-reveal data-delay="100" className="relative rounded-2xl overflow-hidden"
            style={{ border: '1px solid rgba(51,65,85,0.6)', boxShadow: '0 0 0 1px rgba(255,255,255,0.02) inset',
                     background: '#070d1c' }}>
            <CoverageMap locale={locale} />
          </div>

          {/* Infos localisation sous la carte */}
          <div className="grid sm:grid-cols-3 gap-5 mt-6" data-reveal data-delay="200">
            {[
              {
                icon: MapPin,
                fr: { label: 'Adresse',                 value: 'Bamako, Mali' },
                en: { label: 'Address',                  value: 'Bamako, Mali' },
              },
              {
                icon: Mail,
                fr: { label: 'Email',                   value: 'contact@ywaconsulting.com' },
                en: { label: 'Email',                    value: 'contact@ywaconsulting.com' },
              },
              {
                icon: Globe,
                fr: { label: 'Intervention',            value: 'Afrique francophone & international' },
                en: { label: 'Coverage',                 value: 'Francophone Africa & international' },
              },
            ].map(({ icon: Icon, fr, en: enItem }, i) => {
              const data = isEn ? enItem : fr
              return (
                <div key={i} className="rounded-xl p-5 flex items-center gap-4"
                  style={{ background: 'linear-gradient(145deg,rgba(15,23,42,0.9) 0%,rgba(10,15,30,1) 100%)',
                           border: '1px solid rgba(51,65,85,0.6)' }}>
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                    style={{ background: 'rgba(37,99,235,0.1)', border: '1px solid rgba(37,99,235,0.15)' }}>
                    <Icon size={15} className="text-primary-400" />
                  </div>
                  <div>
                    <p className="text-[10px] font-medium uppercase tracking-wider text-neutral-600 mb-0.5">{data.label}</p>
                    <p className="text-white text-sm font-medium">{data.value}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}

// ─── Icon Globe used inline ──────────────────────────────────────────────────
function Globe({ size, className }: { size?: number; className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size ?? 24} height={size ?? 24}
      viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}
      strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  )
}
