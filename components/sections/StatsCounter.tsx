'use client'

import { useEffect, useRef, useState } from 'react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

interface Stat {
  value:    number
  suffix:   string
  labelKey: 'transformation' | 'growth' | 'expertise' | 'innovation'
}

const STATS: Stat[] = [
  { value: 95,  suffix: '%', labelKey: 'transformation' },
  { value: 40,  suffix: '%', labelKey: 'growth'         },
  { value: 10,  suffix: '+', labelKey: 'expertise'      },
  { value: 50,  suffix: '+', labelKey: 'innovation'     },
]

function useCountUp(target: number, active: boolean, duration = 2200) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!active) return
    const start = Date.now()
    const tick = () => {
      const elapsed  = Date.now() - start
      const progress = Math.min(elapsed / duration, 1)
      // Ease out expo
      const eased = 1 - Math.pow(1 - progress, 4)
      setCount(Math.round(target * eased))
      if (progress < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [active, target, duration])
  return count
}

function StatItem({ stat, active, index }: { stat: Stat; active: boolean; index: number }) {
  const t     = useTranslations('stats')
  const count = useCountUp(stat.value, active)

  return (
    <div
      className="group relative flex flex-col items-center text-center p-4 sm:p-6 lg:p-8 rounded-2xl border border-surface-600/60 overflow-hidden transition-all duration-500 hover:-translate-y-1"
      style={{
        background: 'linear-gradient(145deg, rgba(15,23,42,0.9) 0%, rgba(10,15,30,1) 100%)',
        animationDelay: `${index * 120}ms`,
      }}
    >
      {/* Glow derrière le nombre */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"
        style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.2) 0%, transparent 70%)', filter: 'blur(20px)', top: '-20px' }}
      />

      {/* Ligne déco haut */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(37,99,235,0.6), transparent)' }}
      />

      {/* Nombre animé */}
      <div className="relative font-display font-black text-4xl sm:text-5xl lg:text-7xl mb-3 leading-none">
        <span
          className="tabular-nums"
          style={{
            background: 'linear-gradient(135deg, #ffffff 30%, #60a5fa 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          {count}
        </span>
        <span
          style={{
            background: 'linear-gradient(135deg, #60a5fa 0%, #a78bfa 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          {stat.suffix}
        </span>
      </div>

      {/* Label */}
      <p className="text-neutral-400 text-sm leading-snug max-w-[140px]">
        {t(stat.labelKey)}
      </p>
    </div>
  )
}

export function StatsCounter() {
  const t   = useTranslations('stats')
  const ref = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setActive(true); observer.disconnect() } },
      { threshold: 0.25 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="relative section-padding overflow-hidden">

      {/* Photo fond nuit bureau */}
      <div className="absolute inset-0">
        <Image src="/images/office-night.webp" alt="" fill className="object-cover object-center" sizes="100vw" quality={80} />
        <div className="absolute inset-0" style={{ background:'linear-gradient(135deg,rgba(10,15,30,0.88) 0%,rgba(10,15,30,0.78) 60%,rgba(10,15,30,0.85) 100%)' }} />
      </div>

      {/* Ambient glows */}
      <div
        className="glow-dot"
        style={{ width: 500, height: 500, top: '50%', left: '50%',
                 transform: 'translate(-50%,-50%)',
                 background: 'radial-gradient(circle, rgba(37,99,235,0.08) 0%, transparent 70%)' }}
      />

      {/* Ligne déco haut de section */}
      <div className="absolute top-0 inset-x-0 section-glow-top" />

      <div ref={ref} className="section-container relative z-10">

        <div className="text-center mb-10 sm:mb-16 max-w-2xl mx-auto" data-reveal>
          <h2 className="section-title mb-4">
            {t('title')}
          </h2>
          <p className="section-subtitle mx-auto">{t('subtitle')}</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {STATS.map((stat, i) => (
            <StatItem key={stat.labelKey} stat={stat} active={active} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
