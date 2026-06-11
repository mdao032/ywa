'use client'

import { ComposableMap, Geographies, Geography, Sphere, Graticule } from 'react-simple-maps'

// ─── Country coverage data ───────────────────────────────────────────────────
// ISO numeric codes from Natural Earth / world-atlas

// Afrique francophone — marchés prioritaires
const AFRICA_TIER1 = new Set([
  '466', // Mali
  '686', // Sénégal
  '384', // Côte d'Ivoire
  '324', // Guinée
  '854', // Burkina Faso
  '562', // Niger
  '768', // Togo
  '204', // Bénin
  '120', // Cameroun
  '180', // RDC
  '178', // Congo
  '266', // Gabon
  '140', // Centrafrique
  '148', // Tchad
  '504', // Maroc
  '012', // Algérie
  '788', // Tunisie
  '478', // Mauritanie
  '646', // Rwanda
  '108', // Burundi
  '450', // Madagascar
  '624', // Guinée-Bissau
  '226', // Guinée équatoriale
  '174', // Comores
  '262', // Djibouti
  '072', // Botswana (English but often listed with franco)
])

// Europe francophone + Amérique du Nord francophone
const TIER2 = new Set([
  '250', // France
  '056', // Belgique
  '756', // Suisse
  '442', // Luxembourg
  '492', // Monaco
  '124', // Canada (Québec)
])

// ─── Couleurs ────────────────────────────────────────────────────────────────
const COLOR = {
  sphere:   '#070d1c',
  grid:     'rgba(37,99,235,0.06)',
  default:  '#0c1426',
  border:   '#0f1e3a',
  tier1:    '#1d4ed8',   // bleu primaire
  tier2:    '#1e3a8a',   // bleu plus sombre
  hover1:   '#2563eb',
  hover2:   '#2553c9',
}

// ─── Labels ──────────────────────────────────────────────────────────────────
interface LabelProps {
  fr: { zones: string[]; caption: string }
  en: { zones: string[]; caption: string }
}

const LEGEND: LabelProps = {
  fr: {
    zones:   ['Afrique francophone', 'Europe & Canada francophones', 'Intervention à distance mondiale'],
    caption: 'Zones d\'intervention',
  },
  en: {
    zones:   ['Francophone Africa', 'Francophone Europe & Canada', 'Global remote delivery'],
    caption: 'Coverage zones',
  },
}

// ─── Component ───────────────────────────────────────────────────────────────

interface CoverageMapProps {
  locale?: string
}

export function CoverageMap({ locale = 'fr' }: CoverageMapProps) {
  const isEn  = locale === 'en'
  const label = isEn ? LEGEND.en : LEGEND.fr

  return (
    <div className="relative w-full overflow-hidden" style={{ minHeight: 340 }}>
      {/* Fond ambiant */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(37,99,235,0.06) 0%, transparent 70%)' }} />

      {/* Carte SVG */}
      <ComposableMap
        projection="geoNaturalEarth1"
        projectionConfig={{ scale: 155, center: [15, 10] }}
        width={960}
        height={420}
        style={{ width: '100%', height: 'auto' }}
      >
        {/* Sphère et grille de fond */}
        <Sphere id="sphere-bg" fill={COLOR.sphere} stroke="transparent" strokeWidth={0} />
        <Graticule stroke={COLOR.grid} strokeWidth={0.5} />

        <Geographies geography="/world-110m.json">
          {({ geographies }) =>
            geographies.map((geo) => {
              const id    = String(geo.id ?? '')
              const padId = id.padStart(3, '0')

              const isTier1   = AFRICA_TIER1.has(id) || AFRICA_TIER1.has(padId)
              const isTier2   = TIER2.has(id) || TIER2.has(padId)

              const fill    = isTier1 ? COLOR.tier1 : isTier2 ? COLOR.tier2 : COLOR.default
              const stroke  = isTier1 ? 'rgba(96,165,250,0.25)'
                            : isTier2 ? 'rgba(96,165,250,0.15)'
                            : COLOR.border
              const hoverFill = isTier1 ? COLOR.hover1 : isTier2 ? COLOR.hover2 : '#111d35'

              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={fill}
                  stroke={stroke}
                  strokeWidth={0.6}
                  style={{
                    default:  { fill, stroke, strokeWidth: 0.6, outline: 'none' },
                    hover:    { fill: hoverFill, stroke, strokeWidth: 0.8, outline: 'none', transition: 'fill 0.15s' },
                    pressed:  { fill: hoverFill, outline: 'none' },
                  }}
                />
              )
            })
          }
        </Geographies>
      </ComposableMap>

      {/* Légende */}
      <div className="absolute bottom-4 left-4 right-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pointer-events-none">
        <div className="rounded-xl px-4 py-3 inline-flex flex-col gap-2"
          style={{ background: 'rgba(7,13,28,0.88)', backdropFilter: 'blur(12px)',
                   border: '1px solid rgba(51,65,85,0.5)' }}>
          <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-neutral-600 mb-0.5">
            {label.caption}
          </p>
          <div className="flex flex-col gap-1.5">
            {[
              { color: COLOR.tier1,   label: label.zones[0] },
              { color: COLOR.tier2,   label: label.zones[1] },
              { color: '#162035',     label: label.zones[2] },
            ].map(({ color, label: lbl }, i) => (
              <div key={i} className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-sm shrink-0"
                  style={{
                    background: color,
                    border: i === 2 ? '1px solid rgba(37,99,235,0.3)' : 'none',
                    boxShadow: i < 2 ? `0 0 5px ${color}80` : 'none',
                  }} />
                <span className="text-[11px] text-neutral-400 whitespace-nowrap">{lbl}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Badge discret "remote worldwide" */}
        <div className="rounded-xl px-4 py-2.5 inline-flex items-center gap-2 self-end sm:self-auto"
          style={{ background: 'rgba(7,13,28,0.88)', backdropFilter: 'blur(12px)',
                   border: '1px solid rgba(37,99,235,0.2)' }}>
          <span className="text-primary-400 text-base">🌐</span>
          <span className="text-[11px] text-neutral-400">
            {isEn ? 'Remote delivery worldwide' : 'Intervention à distance, partout dans le monde'}
          </span>
        </div>
      </div>
    </div>
  )
}
