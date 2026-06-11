'use client'

import { ComposableMap, Geographies, Geography, Sphere, Graticule, Marker } from 'react-simple-maps'

// ─── Points de présence ──────────────────────────────────────────────────────
// Coordonnées : [longitude, latitude]

/** Siège social */
const HOME = {
  name:        'Bamako',
  coordinates: [-8.00, 12.65] as [number, number],
}

/** Présence principale — capitales Afrique francophone */
const PRIMARY: Array<{ name: string; coordinates: [number, number]; delay: number }> = [
  { name: 'Dakar',          coordinates: [-17.47, 14.72], delay: 0.30 },
  { name: 'Conakry',        coordinates: [-13.68,  9.54], delay: 0.90 },
  { name: 'Abidjan',        coordinates: [ -4.03,  5.36], delay: 0.60 },
  { name: 'Ouagadougou',    coordinates: [ -1.53, 12.36], delay: 0.10 },
  { name: 'Lomé',           coordinates: [  1.22,  6.13], delay: 0.45 },
  { name: 'Cotonou',        coordinates: [  2.36,  6.37], delay: 0.75 },
  { name: 'Niamey',         coordinates: [  2.12, 13.51], delay: 1.20 },
  { name: 'Yaoundé',        coordinates: [ 11.52,  3.87], delay: 0.15 },
  { name: 'Douala',         coordinates: [  9.70,  4.05], delay: 1.05 },
  { name: 'Libreville',     coordinates: [  9.45,  0.39], delay: 0.50 },
  { name: "N'Djamena",      coordinates: [ 15.05, 12.11], delay: 0.80 },
  { name: 'Bangui',         coordinates: [ 18.56,  4.36], delay: 0.20 },
  { name: 'Kinshasa',       coordinates: [ 15.32, -4.32], delay: 0.65 },
  { name: 'Antananarivo',   coordinates: [ 47.52,-18.91], delay: 1.10 },
]

/** Présence secondaire — Europe francophone, Canada, Maghreb */
const SECONDARY: Array<{ name: string; coordinates: [number, number]; delay: number }> = [
  { name: 'Casablanca',  coordinates: [ -7.59, 33.59], delay: 0.25 },
  { name: 'Alger',       coordinates: [  3.06, 36.74], delay: 1.15 },
  { name: 'Tunis',       coordinates: [ 10.18, 36.82], delay: 0.85 },
  { name: 'Paris',       coordinates: [  2.35, 48.85], delay: 0.40 },
  { name: 'Bruxelles',   coordinates: [  4.35, 50.85], delay: 0.70 },
  { name: 'Genève',      coordinates: [  6.14, 46.20], delay: 1.00 },
  { name: 'Luxembourg',  coordinates: [  6.13, 49.61], delay: 0.35 },
  { name: 'Montréal',    coordinates: [-73.57, 45.50], delay: 0.55 },
]

// ─── Component ───────────────────────────────────────────────────────────────

interface CoverageMapProps {
  locale?: string
}

export function CoverageMap({ locale = 'fr' }: CoverageMapProps) {
  const isEn = locale === 'en'

  return (
    <div className="relative w-full overflow-hidden select-none" style={{ minHeight: 340 }}>

      {/* Halo ambiant central */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 70% 55% at 50% 55%, rgba(37,99,235,0.07) 0%, transparent 70%)' }}
      />

      {/* ── Carte SVG ────────────────────────────────────────────────────── */}
      <ComposableMap
        projection="geoNaturalEarth1"
        projectionConfig={{ scale: 180, center: [8, 12] }}
        width={960}
        height={440}
        style={{ width: '100%', height: 'auto' }}
      >
        {/* Fond océan */}
        <Sphere id="sphere-bg" fill="#060c1a" stroke="transparent" strokeWidth={0} />

        {/* Grille géographique discrète */}
        <Graticule stroke="rgba(37,99,235,0.05)" strokeWidth={0.4} />

        {/* Pays — uniforme, sans coloriage différencié */}
        <Geographies geography="/world-110m.json">
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                style={{
                  default: {
                    fill:        '#0b1628',
                    stroke:      'rgba(37,99,235,0.1)',
                    strokeWidth: 0.5,
                    outline:     'none',
                  },
                  hover: {
                    fill:        '#0d1a30',
                    stroke:      'rgba(37,99,235,0.18)',
                    strokeWidth: 0.5,
                    outline:     'none',
                  },
                  pressed: { outline: 'none' },
                }}
              />
            ))
          }
        </Geographies>

        {/* ── Points secondaires (Europe, Canada, Maghreb) ─────────────── */}
        {SECONDARY.map((pt) => (
          <Marker key={pt.name} coordinates={pt.coordinates}>
            {/* Anneau pulsant */}
            <circle fill="transparent" stroke="rgba(139,92,246,0.35)" strokeWidth={0.5}>
              <animate attributeName="r"       values="2;8;2"       dur="3.2s" begin={`${pt.delay}s`} repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.5;0;0.5"   dur="3.2s" begin={`${pt.delay}s`} repeatCount="indefinite" />
            </circle>
            {/* Halo doux */}
            <circle r={2.2} fill="rgba(167,139,250,0.2)" />
            {/* Cœur scintillant */}
            <circle r={1.4} fill="rgba(196,181,253,0.88)">
              <animate attributeName="opacity" values="0.6;1;0.75;1;0.6" dur="2.8s" begin={`${pt.delay}s`} repeatCount="indefinite" />
            </circle>
          </Marker>
        ))}

        {/* ── Points primaires (Afrique francophone) ───────────────────── */}
        {PRIMARY.map((pt) => (
          <Marker key={pt.name} coordinates={pt.coordinates}>
            {/* Anneau pulsant large */}
            <circle fill="transparent" stroke="rgba(59,130,246,0.35)" strokeWidth={0.5}>
              <animate attributeName="r"       values="3;13;3"      dur="2.8s" begin={`${pt.delay}s`} repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.55;0;0.55" dur="2.8s" begin={`${pt.delay}s`} repeatCount="indefinite" />
            </circle>
            {/* Halo doux */}
            <circle r={3.2} fill="rgba(96,165,250,0.18)" />
            {/* Cœur scintillant */}
            <circle r={1.9} fill="rgba(147,197,253,0.95)">
              <animate attributeName="opacity" values="0.7;1;0.8;1;0.7" dur="2.4s" begin={`${pt.delay}s`} repeatCount="indefinite" />
            </circle>
          </Marker>
        ))}

        {/* ── Point siège — Bamako (traitement spécial) ────────────────── */}
        <Marker coordinates={HOME.coordinates}>
          {/* Anneau extérieur très lent */}
          <circle fill="transparent" stroke="rgba(96,165,250,0.25)" strokeWidth={0.6}>
            <animate attributeName="r"       values="6;22;6"      dur="3.5s" begin="0s"    repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.6;0;0.6"   dur="3.5s" begin="0s"    repeatCount="indefinite" />
          </circle>
          {/* Anneau intermédiaire */}
          <circle fill="transparent" stroke="rgba(147,197,253,0.45)" strokeWidth={0.7}>
            <animate attributeName="r"       values="4;12;4"      dur="2.5s" begin="0.6s"  repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.7;0;0.7"   dur="2.5s" begin="0.6s"  repeatCount="indefinite" />
          </circle>
          {/* Halo intérieur fixe */}
          <circle r={5} fill="rgba(96,165,250,0.12)" />
          <circle r={3.5} fill="rgba(147,197,253,0.18)" />
          {/* Cœur blanc brillant */}
          <circle r={2.8} fill="#e0f2fe">
            <animate attributeName="opacity" values="0.85;1;0.9;1;0.85" dur="1.8s" repeatCount="indefinite" />
          </circle>
          {/* Point central dur */}
          <circle r={1.4} fill="white" opacity={0.95} />
        </Marker>

      </ComposableMap>

      {/* ── Légende ──────────────────────────────────────────────────────── */}
      <div className="absolute bottom-4 left-4 right-4 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 pointer-events-none">

        {/* Bloc légende points */}
        <div className="rounded-xl px-4 py-3 inline-flex flex-col gap-2.5"
          style={{ background: 'rgba(6,12,26,0.90)', backdropFilter: 'blur(12px)',
                   border: '1px solid rgba(51,65,85,0.45)' }}>
          <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-neutral-600">
            {isEn ? 'Presence' : 'Présence'}
          </p>

          {/* Siège */}
          <div className="flex items-center gap-2.5">
            <svg width={16} height={16} viewBox="0 0 16 16">
              <circle cx={8} cy={8} r={6} fill="transparent" stroke="rgba(147,197,253,0.4)" strokeWidth={0.8}>
                <animate attributeName="r" values="3;7;3" dur="2.5s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.6;0;0.6" dur="2.5s" repeatCount="indefinite" />
              </circle>
              <circle cx={8} cy={8} r={3} fill="rgba(224,242,254,0.9)">
                <animate attributeName="opacity" values="0.8;1;0.8" dur="1.8s" repeatCount="indefinite" />
              </circle>
              <circle cx={8} cy={8} r={1.5} fill="white" />
            </svg>
            <span className="text-[11px] text-neutral-300 whitespace-nowrap">
              {isEn ? 'Headquarters — Bamako' : 'Siège — Bamako, Mali'}
            </span>
          </div>

          {/* Présence principale */}
          <div className="flex items-center gap-2.5">
            <svg width={16} height={16} viewBox="0 0 16 16">
              <circle cx={8} cy={8} r={5} fill="transparent" stroke="rgba(59,130,246,0.35)" strokeWidth={0.6}>
                <animate attributeName="r" values="3;6;3" dur="2.8s" begin="0.3s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.5;0;0.5" dur="2.8s" begin="0.3s" repeatCount="indefinite" />
              </circle>
              <circle cx={8} cy={8} r={2.2} fill="rgba(147,197,253,0.9)">
                <animate attributeName="opacity" values="0.7;1;0.7" dur="2.4s" begin="0.3s" repeatCount="indefinite" />
              </circle>
            </svg>
            <span className="text-[11px] text-neutral-400 whitespace-nowrap">
              {isEn ? 'Francophone Africa' : 'Afrique francophone'}
            </span>
          </div>

          {/* Présence secondaire */}
          <div className="flex items-center gap-2.5">
            <svg width={16} height={16} viewBox="0 0 16 16">
              <circle cx={8} cy={8} r={4} fill="transparent" stroke="rgba(139,92,246,0.3)" strokeWidth={0.5}>
                <animate attributeName="r" values="2;5;2" dur="3.2s" begin="0.6s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.4;0;0.4" dur="3.2s" begin="0.6s" repeatCount="indefinite" />
              </circle>
              <circle cx={8} cy={8} r={1.6} fill="rgba(196,181,253,0.85)">
                <animate attributeName="opacity" values="0.6;1;0.6" dur="2.8s" begin="0.6s" repeatCount="indefinite" />
              </circle>
            </svg>
            <span className="text-[11px] text-neutral-400 whitespace-nowrap">
              {isEn ? 'Europe, Canada & Maghreb' : 'Europe, Canada & Maghreb'}
            </span>
          </div>
        </div>

        {/* Badge remote */}
        <div className="rounded-xl px-4 py-2.5 inline-flex items-center gap-2 self-end sm:self-auto"
          style={{ background: 'rgba(6,12,26,0.90)', backdropFilter: 'blur(12px)',
                   border: '1px solid rgba(37,99,235,0.2)' }}>
          <span className="text-primary-400 text-sm">🌐</span>
          <span className="text-[11px] text-neutral-400">
            {isEn ? 'Remote delivery worldwide' : 'Intervention à distance, partout dans le monde'}
          </span>
        </div>
      </div>
    </div>
  )
}
