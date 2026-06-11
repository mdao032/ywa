import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Linkedin, ArrowRight, CheckCircle2, ChevronRight, Home,
         Target, Users, Zap, Globe, Award, MessageSquare } from 'lucide-react'

// ─── Metadata ────────────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const isEn = locale === 'en'
  return {
    title: isEn
      ? 'Our Team — Meet the YWA Consultants | YWA Consulting'
      : 'Notre Équipe — Rencontrez les Consultants YWA | YWA Consulting',
    description: isEn
      ? 'Meet the YWA Consulting team — experienced digital transformation consultants with deep knowledge of African and Francophone markets, committed to your success.'
      : "Rencontrez l'équipe YWA Consulting — des consultants expérimentés en transformation numérique avec une connaissance approfondie des marchés africains et francophones, engagés pour votre succès.",
  }
}

// ─── Data ────────────────────────────────────────────────────────────────────

const TEAM = [
  {
    name:       'Youssouf W.',
    role_fr:    'Fondateur & Directeur Général',
    role_en:    'Founder & CEO',
    bio_fr:     'Expert en transformation numérique B2B avec plus de 10 ans d\'expérience, Youssouf a fondé YWA Consulting après avoir piloté des programmes de transformation chez des distributeurs régionaux, des institutions financières et des organisations à but non lucratif en Afrique de l\'Ouest et en Europe. Il supervise chaque engagement YWA et reste un interlocuteur direct pour les clients stratégiques. Son approche combine rigueur analytique et compréhension fine des réalités opérationnelles des marchés émergents.',
    bio_en:     'B2B digital transformation expert with over 10 years of experience, Youssouf founded YWA Consulting after steering transformation programs at regional distributors, financial institutions and non-profit organizations in West Africa and Europe. He oversees every YWA engagement and remains a direct point of contact for strategic clients. His approach combines analytical rigor with a deep understanding of the operational realities of emerging markets.',
    avatar:     '/images/hero-portrait.webp',
    linkedin:   'https://www.linkedin.com/company/ywa-consulting',
    tags_fr:    ['Stratégie numérique', 'Change management', 'Développement B2B'],
    tags_en:    ['Digital strategy', 'Change management', 'B2B development'],
  },
  {
    name:       'Aïssata T.',
    role_fr:    'Consultante Senior — Stratégie Numérique',
    role_en:    'Senior Consultant — Digital Strategy',
    bio_fr:     'Aïssata apporte à YWA une expertise pointue en conseil stratégique et en accompagnement au changement. Avant de rejoindre YWA, elle a travaillé avec des équipes dirigeantes dans les secteurs bancaire, télécom et de la grande distribution pour définir leurs priorités numériques et aligner leurs organisations sur ces enjeux. Elle est reconnue pour sa capacité à synthétiser des situations complexes en plans d\'action clairs et à mobiliser durablement les équipes autour d\'une vision partagée.',
    bio_en:     'Aïssata brings YWA sharp expertise in strategic consulting and change management. Before joining YWA, she worked with leadership teams in banking, telecom and retail to define their digital priorities and align their organizations accordingly. She is known for her ability to synthesize complex situations into clear action plans and to sustainably mobilize teams around a shared vision.',
    avatar:     '/images/career-portrait.webp',
    linkedin:   'https://www.linkedin.com/company/ywa-consulting',
    tags_fr:    ['Conseil stratégique', 'Design organisationnel', 'Formation dirigeants'],
    tags_en:    ['Strategic consulting', 'Organizational design', 'Executive training'],
  },
  {
    name:       'Modibo D.',
    role_fr:    'Expert — Optimisation des Processus',
    role_en:    'Expert — Process Optimization',
    bio_fr:     'Modibo est l\'architecte des processus chez YWA. Ingénieur de formation spécialisé en systèmes d\'information, il conçoit et déploie des solutions d\'automatisation sur mesure qui transforment concrètement la productivité des organisations. Il maîtrise les principaux outils RPA, les plateformes d\'intégration et les frameworks d\'analyse de processus. Ses interventions ont permis à plusieurs clients de réduire leurs délais opérationnels de 30 à 60 % en moins de 4 mois.',
    bio_en:     'Modibo is the process architect at YWA. A software engineer specializing in information systems, he designs and deploys tailored automation solutions that tangibly transform organizational productivity. He masters leading RPA tools, integration platforms and process analysis frameworks. His interventions have helped several clients reduce operational lead times by 30 to 60% in under 4 months.',
    avatar:     '/images/about-team.webp',
    linkedin:   'https://www.linkedin.com/company/ywa-consulting',
    tags_fr:    ['Analyse BPMN', 'Automatisation RPA', 'Intégration SI'],
    tags_en:    ['BPMN analysis', 'RPA automation', 'System integration'],
  },
]

const VALUES = [
  {
    icon: Target,
    fr: { title: 'Impact avant tout',        desc: 'Chaque mission est mesurée par les résultats concrets qu\'elle génère — pas par la quantité de diapositives livrées.' },
    en: { title: 'Impact first',              desc: 'Every mission is measured by the concrete results it generates — not the number of slides delivered.' },
  },
  {
    icon: Users,
    fr: { title: 'Collaboration ouverte',     desc: 'Nous travaillons en équipe soudée, avec nos clients comme partenaires à part entière et non comme simples commanditaires.' },
    en: { title: 'Open collaboration',         desc: 'We work as a close-knit team, with our clients as full partners rather than mere project sponsors.' },
  },
  {
    icon: Zap,
    fr: { title: 'Agilité & réactivité',      desc: 'Nous nous adaptons vite aux évolutions du contexte. Si les conditions changent, notre approche s\'ajuste — en temps réel.' },
    en: { title: 'Agility & responsiveness',   desc: 'We adapt quickly to evolving contexts. If conditions change, our approach adjusts — in real time.' },
  },
  {
    icon: Globe,
    fr: { title: 'Vision locale d\'abord',    desc: 'Nous comprenons les spécificités des marchés africains et francophones, et ne plaquons jamais un prisme étranger sur vos défis.' },
    en: { title: 'Local vision first',         desc: "We understand the specificities of African and Francophone markets and never impose a foreign lens on your challenges." },
  },
]

const HOW_WE_WORK = [
  {
    icon: MessageSquare,
    fr: { title: 'Un premier échange gratuit, sans engagement',
          desc:  'Toute collaboration YWA commence par une conversation ouverte où nous cherchons à comprendre votre contexte, vos défis et vos objectifs avant de proposer quoi que ce soit.' },
    en: { title: 'A free first discussion, no commitment',
          desc:  'Every YWA collaboration begins with an open conversation where we seek to understand your context, challenges and objectives before proposing anything.' },
  },
  {
    icon: Target,
    fr: { title: 'Un diagnostic honnête, même inconfortable',
          desc:  'Nous vous disons ce que nous observons — pas ce que vous voulez entendre. Un diagnostic clair, même difficile, est la base de toute transformation réussie.' },
    en: { title: 'An honest diagnosis, even if uncomfortable',
          desc:  "We tell you what we observe — not what you want to hear. A clear diagnosis, even a difficult one, is the foundation of any successful transformation." },
  },
  {
    icon: Award,
    fr: { title: 'Des livrables actionnables, pas des rapports',
          desc:  'Tout ce que nous produisons est conçu pour être utilisé immédiatement : plans d\'action, workflows documentés, dashboards opérationnels, formations pratiques.' },
    en: { title: 'Actionable deliverables, not reports',
          desc:  'Everything we produce is designed to be used immediately: action plans, documented workflows, operational dashboards, practical training.' },
  },
  {
    icon: Zap,
    fr: { title: 'Un suivi post-mission qui ancre les changements',
          desc:  'Nous ne disparaissons pas à la livraison. Un suivi structuré post-mission garantit que les équipes continuent à progresser et que les gains se pérennisent.' },
    en: { title: 'Post-mission follow-up that anchors change',
          desc:  "We don't disappear at delivery. Structured post-mission follow-up ensures teams continue to progress and gains are sustained." },
  },
]

// ─── Page ────────────────────────────────────────────────────────────────────

export default async function NotreEquipePage({
  params,
}: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const isEn = locale === 'en'

  return (
    <>
      {/* ═══ HERO ═══════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-surface-900" style={{ minHeight: '72vh', display: 'flex', alignItems: 'center' }}>
        <div className="absolute inset-0">
          <Image src="/images/about-team.webp" alt="" fill className="object-cover object-center scale-105" priority sizes="100vw" quality={90} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(10,15,30,0.96) 0%, rgba(10,15,30,0.82) 55%, rgba(10,15,30,0.5) 100%)' }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(10,15,30,0.9) 0%, transparent 55%, rgba(10,15,30,0.2) 100%)' }} />
        </div>
        <div className="absolute top-0 left-0 right-0 h-[500px] pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 70% 60% at 15% -5%, rgba(37,99,235,0.38) 0%, transparent 70%)' }} />
        <div className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.03) 1px,transparent 1px)',
            backgroundSize: '72px 72px',
            maskImage: 'linear-gradient(to right, rgba(0,0,0,0.7) 0%, transparent 50%)',
            WebkitMaskImage: 'linear-gradient(to right, rgba(0,0,0,0.7) 0%, transparent 50%)',
          }}
        />

        <div className="section-container relative z-10 py-20 sm:py-28 lg:py-40">
          <nav className="flex items-center gap-2 text-sm text-neutral-500 mb-10">
            <Link href={`/${locale}`} className="flex items-center gap-1 hover:text-neutral-300 transition-colors">
              <Home size={13} />
              {isEn ? 'Home' : 'Accueil'}
            </Link>
            <ChevronRight size={13} className="text-neutral-700" />
            <span className="text-neutral-400">{isEn ? 'Our Team' : 'Notre Équipe'}</span>
          </nav>

          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-7">
              <div className="w-8 h-px" style={{ background: 'linear-gradient(90deg,#2563eb,#60a5fa)' }} />
              <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-primary-400">
                {isEn ? 'The people behind YWA' : 'Les personnes derrière YWA'}
              </span>
            </div>
            <h1 className="font-display font-bold leading-[1.04] tracking-tight mb-7"
              style={{ fontSize: 'clamp(2rem, 7vw, 5.5rem)' }}>
              <span className="block text-white">{isEn ? 'Meet the' : 'Rencontrez'}</span>
              <span className="block" style={{
                background: 'linear-gradient(135deg, #60a5fa 0%, #818cf8 50%, #a78bfa 100%)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
              }}>
                {isEn ? 'YWA team' : "l'équipe YWA"}
              </span>
            </h1>
            <p className="text-neutral-300 text-base sm:text-lg leading-relaxed max-w-xl">
              {isEn
                ? 'A small, experienced team of consultants who combine analytical rigor, field knowledge and a deep commitment to their clients\' success.'
                : "Une équipe de consultants expérimentés qui combinent rigueur analytique, connaissance du terrain et engagement profond envers le succès de leurs clients."}
            </p>
          </div>
        </div>
      </section>

      {/* ═══ ÉQUIPE ══════════════════════════════════════════════ */}
      <section className="relative section-padding bg-surface-900 overflow-hidden">
        <div className="glow-dot" style={{ width: 600, height: 600, top: '50%', right: '-8%', transform: 'translateY(-50%)',
          background: 'radial-gradient(circle,rgba(37,99,235,0.07) 0%,transparent 70%)' }} />

        <div className="section-container relative z-10">
          <div className="text-center max-w-xl mx-auto mb-10 sm:mb-16 lg:mb-20" data-reveal>
            <div className="flex items-center justify-center gap-3 mb-5">
              <div className="w-6 h-px" style={{ background: 'linear-gradient(90deg,#2563eb,#60a5fa)' }} />
              <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary-400">
                {isEn ? 'The team' : "L'équipe"}
              </span>
              <div className="w-6 h-px" style={{ background: 'linear-gradient(270deg,#2563eb,#60a5fa)' }} />
            </div>
            <h2 className="section-title mb-4">
              {isEn ? 'Experienced, engaged, local' : 'Expérimentés, engagés, locaux'}
            </h2>
            <p className="section-subtitle mx-auto">
              {isEn
                ? 'Three consultants, three complementary fields of expertise, one common goal: tangible, measurable results for your organization.'
                : "Trois consultants, trois domaines d'expertise complémentaires, un objectif commun : des résultats tangibles et mesurables pour votre organisation."}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {TEAM.map((member, i) => {
              const role = isEn ? member.role_en : member.role_fr
              const bio  = isEn ? member.bio_en  : member.bio_fr
              const tags = isEn ? member.tags_en : member.tags_fr
              return (
                <div
                  key={member.name}
                  data-reveal
                  data-delay={(['0', '100', '200'] as const)[i]}
                  className="group relative rounded-2xl overflow-hidden flex flex-col transition-all duration-400"
                  style={{ background: 'linear-gradient(145deg,rgba(15,23,42,0.95) 0%,rgba(10,15,30,1) 100%)',
                           border: '1px solid rgba(51,65,85,0.6)' }}
                >
                  {/* Photo */}
                  <div className="relative overflow-hidden" style={{ height: 'clamp(220px,32vw,300px)' }}>
                    <Image src={member.avatar} alt={member.name} fill
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width:768px) 100vw,(max-width:1024px) 50vw,33vw" quality={85} />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface-900/90 via-surface-900/20 to-transparent" />
                    {/* LinkedIn overlay */}
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer"
                      className="absolute top-4 right-4 w-9 h-9 rounded-lg flex items-center justify-center text-neutral-400 hover:text-white hover:bg-primary-600 hover:border-primary-600 transition-all duration-200 opacity-0 group-hover:opacity-100"
                      style={{ background: 'rgba(10,15,30,0.85)', backdropFilter: 'blur(8px)', border: '1px solid rgba(51,65,85,0.6)' }}
                      aria-label={`LinkedIn — ${member.name}`}>
                      <Linkedin size={14} />
                    </a>
                    {/* Name overlay on photo */}
                    <div className="absolute bottom-4 left-5 right-5">
                      <div className="w-8 h-[2px] rounded-full mb-3"
                        style={{ background: 'linear-gradient(90deg,#2563eb,#60a5fa)' }} />
                      <h3 className="font-display font-bold text-white text-xl leading-none mb-1.5">
                        {member.name}
                      </h3>
                      <p className="text-primary-400 text-[11px] font-medium uppercase tracking-wider">{role}</p>
                    </div>
                  </div>

                  {/* Contenu */}
                  <div className="p-6 flex flex-col flex-1">
                    <p className="text-neutral-400 text-sm leading-relaxed mb-6 flex-1">{bio}</p>

                    {/* Tags spécialités */}
                    <div className="flex flex-wrap gap-2 mt-auto pt-4"
                      style={{ borderTop: '1px solid rgba(51,65,85,0.5)' }}>
                      {tags.map((tag, j) => (
                        <span key={j} className="text-[10px] font-medium text-primary-400 px-2.5 py-1 rounded-full"
                          style={{ background: 'rgba(37,99,235,0.1)', border: '1px solid rgba(37,99,235,0.15)' }}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ═══ CULTURE ═════════════════════════════════════════════ */}
      <section className="relative section-padding bg-surface-800 grain overflow-hidden">
        <div className="glow-dot" style={{ width: 500, height: 500, top: '40%', left: '-5%',
          background: 'radial-gradient(circle,rgba(37,99,235,0.1) 0%,transparent 70%)' }} />
        <div className="absolute top-0 inset-x-0 h-px" style={{ background: 'linear-gradient(90deg,transparent,rgba(37,99,235,0.3),transparent)' }} />

        <div className="section-container relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

            {/* Image équipe */}
            <div className="relative" data-reveal="left">
              <div className="absolute -inset-4 bg-primary-600/5 rounded-3xl blur-2xl pointer-events-none" />
              <div className="relative rounded-2xl overflow-hidden" style={{ height: 'clamp(260px,38vw,440px)', border: '1px solid rgba(51,65,85,0.6)' }}>
                <Image src="/images/team-meeting.webp"
                  alt={isEn ? 'YWA team collaboration' : 'Collaboration équipe YWA'}
                  fill className="object-cover object-center" sizes="(max-width:1024px) 100vw,50vw" quality={85} />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-900/70 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="rounded-xl p-4 flex items-center gap-3"
                    style={{ background: 'rgba(10,15,30,0.88)', backdropFilter: 'blur(12px)', border: '1px solid rgba(37,99,235,0.2)' }}>
                    <CheckCircle2 size={15} className="text-primary-400 shrink-0" />
                    <p className="text-neutral-200 text-sm">
                      {isEn ? 'A team that thinks "we" — yours and ours.' : 'Une équipe qui pense "nous" — les vôtres et les nôtres.'}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Valeurs */}
            <div data-reveal data-delay="200">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-6 h-px" style={{ background: 'linear-gradient(90deg,#2563eb,#60a5fa)' }} />
                <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary-400">
                  {isEn ? 'Our culture' : 'Notre culture'}
                </span>
              </div>
              <h2 className="section-title mb-5"
                style={{
                  background: 'linear-gradient(120deg, #ffffff 20%, #93c5fd 70%, #a78bfa 100%)',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                }}>
                {isEn ? 'What drives us every day' : "Ce qui nous anime chaque jour"}
              </h2>
              <p className="text-neutral-400 text-sm leading-relaxed mb-7 sm:mb-10">
                {isEn
                  ? "Our values aren't written on walls — they guide every decision we make, every project we accept and every relationship we build with our clients."
                  : "Nos valeurs ne sont pas affichées sur des murs — elles guident chaque décision que nous prenons, chaque projet que nous acceptons et chaque relation que nous construisons avec nos clients."}
              </p>

              <div className="grid grid-cols-2 gap-4">
                {VALUES.map((v, i) => {
                  const Icon = v.icon
                  const data = isEn ? v.en : v.fr
                  return (
                    <div key={i} className="group rounded-xl p-5 transition-all duration-300"
                      style={{ background: 'linear-gradient(145deg,rgba(15,23,42,0.9) 0%,rgba(10,15,30,1) 100%)',
                               border: '1px solid rgba(51,65,85,0.6)' }}>
                      <div className="w-9 h-9 rounded-lg flex items-center justify-center mb-3 transition-colors duration-300"
                        style={{ background: 'rgba(37,99,235,0.12)', border: '1px solid rgba(37,99,235,0.2)' }}>
                        <Icon size={15} className="text-primary-400" />
                      </div>
                      <h3 className="font-display font-semibold text-white text-sm mb-1.5">{data.title}</h3>
                      <p className="text-neutral-500 text-xs leading-relaxed">{data.desc}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ COMMENT NOUS TRAVAILLONS ════════════════════════════ */}
      <section className="relative section-padding bg-surface-900 overflow-hidden">
        <div className="glow-dot" style={{ width: 500, height: 500, top: '50%', right: '-5%', transform: 'translateY(-50%)',
          background: 'radial-gradient(circle,rgba(37,99,235,0.07) 0%,transparent 70%)' }} />

        <div className="section-container relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16 lg:mb-20" data-reveal>
            <div className="flex items-center justify-center gap-3 mb-5">
              <div className="w-6 h-px" style={{ background: 'linear-gradient(90deg,#2563eb,#60a5fa)' }} />
              <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary-400">
                {isEn ? 'How we operate' : 'Notre façon de travailler'}
              </span>
              <div className="w-6 h-px" style={{ background: 'linear-gradient(270deg,#2563eb,#60a5fa)' }} />
            </div>
            <h2 className="section-title mb-5">
              {isEn ? 'What working with YWA really means' : 'Ce que travailler avec YWA signifie vraiment'}
            </h2>
            <p className="section-subtitle mx-auto">
              {isEn
                ? 'Four commitments we make to every client — not promises, but practices we hold ourselves accountable to.'
                : "Quatre engagements que nous prenons envers chaque client — pas des promesses, mais des pratiques sur lesquelles nous nous rendons responsables."}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {HOW_WE_WORK.map(({ icon: Icon, fr, en: enItem }, i) => {
              const data = isEn ? enItem : fr
              return (
                <div key={i} data-reveal data-delay={(['0', '100', '0', '100'] as const)[i]}
                  className="group relative rounded-2xl p-5 sm:p-7 overflow-hidden transition-all duration-400"
                  style={{ background: 'linear-gradient(145deg,rgba(15,23,42,0.95) 0%,rgba(10,15,30,1) 100%)',
                           border: '1px solid rgba(51,65,85,0.6)' }}>
                  {/* Numéro déco */}
                  <span className="absolute top-4 right-5 font-display font-black select-none"
                    style={{ fontSize: '4rem', color: 'rgba(255,255,255,0.03)', lineHeight: 1 }}>
                    0{i + 1}
                  </span>
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                    style={{ background: 'rgba(37,99,235,0.12)', border: '1px solid rgba(37,99,235,0.2)' }}>
                    <Icon size={20} className="text-primary-400" />
                  </div>
                  <h3 className="font-display font-bold text-white text-lg mb-3 leading-snug relative z-10">
                    {data.title}
                  </h3>
                  <p className="text-neutral-400 text-sm leading-relaxed relative z-10">
                    {data.desc}
                  </p>
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"
                    style={{ background: 'linear-gradient(90deg,#2563eb,#60a5fa)' }} />
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ═══ CTA CARRIÈRE ════════════════════════════════════════ */}
      <section className="relative section-padding overflow-hidden" style={{ background: '#0a0f1e' }}>
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 70% 80% at 50% 120%, rgba(37,99,235,0.22) 0%, transparent 70%)' }} />
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.15) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.15) 1px,transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="absolute top-0 inset-x-0 h-px" style={{ background: 'linear-gradient(90deg,transparent,rgba(37,99,235,0.4),transparent)' }} />

        <div className="section-container relative z-10">
          <div className="relative mx-auto max-w-3xl rounded-3xl p-6 sm:p-10 lg:p-14 text-center overflow-hidden"
            data-reveal
            style={{ background: 'linear-gradient(145deg,rgba(15,23,42,0.85) 0%,rgba(10,15,30,0.95) 100%)',
                     border: '1px solid rgba(37,99,235,0.2)', boxShadow: '0 0 0 1px rgba(255,255,255,0.03) inset' }}>
            <div className="absolute top-0 left-0 w-2/3 h-1/2 pointer-events-none"
              style={{ background: 'linear-gradient(135deg,rgba(255,255,255,0.04) 0%,transparent 60%)' }} />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 h-32 pointer-events-none"
              style={{ background: 'radial-gradient(ellipse,rgba(37,99,235,0.18) 0%,transparent 70%)', filter: 'blur(20px)' }} />

            <span className="badge-primary mb-6 inline-flex">
              {isEn ? 'Join the adventure' : "Rejoignez l'aventure"}
            </span>
            <h2 className="section-title mb-5">
              {isEn ? 'Ready to grow with us?' : "Prêt à grandir avec nous ?"}
            </h2>
            <p className="text-neutral-400 text-base leading-relaxed mb-10 max-w-xl mx-auto">
              {isEn
                ? "We're always looking for consultants passionate about digital transformation and committed to the development of African and Francophone organizations. If this is you, let's talk."
                : "Nous sommes toujours à la recherche de consultants passionnés par la transformation numérique et engagés dans le développement des organisations africaines et francophones. Si c'est vous, parlons-en."}
            </p>
            <Link href={`/${locale}/carriere`} className="btn-primary inline-flex items-center gap-2 relative z-10">
              {isEn ? 'Explore open positions' : "Voir les offres d'emploi"}
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
