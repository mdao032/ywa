/**
 * MarqueeBelt — bande horizontale animée entre le Hero et les Services.
 * Ajoute un rythme visuel et une séparation nette entre les deux sections.
 */

const ITEMS = [
  'Stratégie Numérique',
  'Optimisation Process',
  'Transformation IA',
  'Innovation',
  'Conseil Expert',
  'Résultats Mesurables',
  'Leadership Digital',
  'Automatisation',
]

export function MarqueeBelt() {
  // Double la liste pour un loop sans saut visible
  const doubled = [...ITEMS, ...ITEMS]

  return (
    <div
      className="relative overflow-hidden"
      style={{
        background: 'linear-gradient(to right, rgba(10,15,30,0.98), rgba(15,23,42,0.95))',
        borderTop:    '1px solid rgba(51,65,85,0.5)',
        borderBottom: '1px solid rgba(51,65,85,0.5)',
      }}
      aria-hidden="true"
    >
      {/* Fondu gauche */}
      <div
        className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to right, rgba(10,15,30,0.98), transparent)' }}
      />
      {/* Fondu droit */}
      <div
        className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to left, rgba(10,15,30,0.98), transparent)' }}
      />

      <div className="marquee-track py-4">
        {doubled.map((item, i) => (
          <span key={i} className="inline-flex items-center shrink-0">
            <span className="text-[10.5px] font-display font-semibold uppercase tracking-[0.28em] text-neutral-600 whitespace-nowrap px-6">
              {item}
            </span>
            <span
              className="shrink-0 w-1 h-1 rounded-full"
              style={{ background: 'rgba(37,99,235,0.5)' }}
            />
          </span>
        ))}
      </div>
    </div>
  )
}
