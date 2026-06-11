import Link from 'next/link'
import { ArrowLeft, Home, Search } from 'lucide-react'

export default function NotFound() {
  return (
    <main className="min-h-screen bg-surface-900 flex items-center justify-center relative overflow-hidden">

      {/* Glow décoratif */}
      <div className="absolute inset-0 bg-hero-glow opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-600/10 rounded-full blur-3xl pointer-events-none" />
      {/* Grille */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.1) 1px,transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 text-center px-6 max-w-lg mx-auto">

        {/* Code d'erreur */}
        <div className="relative mb-8 select-none">
          <span
            className="block font-display font-black text-[8rem] sm:text-[10rem] leading-none text-transparent bg-clip-text"
            style={{ backgroundImage: 'linear-gradient(135deg, #1d4ed8 0%, #3b82f6 50%, #60a5fa 100%)' }}
          >
            404
          </span>
          <div className="absolute inset-0 font-display font-black text-[8rem] sm:text-[10rem] leading-none text-primary-600/5 blur-2xl">
            404
          </div>
        </div>

        <div className="divider mx-auto mb-8 w-16" />

        <h1 className="font-display font-bold text-white text-2xl sm:text-3xl mb-4">
          Page introuvable
        </h1>
        <p className="text-neutral-400 text-base leading-relaxed mb-10">
          La page que vous recherchez n&apos;existe pas ou a été déplacée. Retournez à l&apos;accueil ou explorez nos services.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/fr" className="btn-primary inline-flex items-center gap-2 w-full sm:w-auto justify-center">
            <Home size={16} />
            Retour à l&apos;accueil
          </Link>
          <Link href="/fr/nous-contacter" className="btn-secondary inline-flex items-center gap-2 w-full sm:w-auto justify-center">
            <Search size={16} />
            Nous contacter
          </Link>
        </div>

        {/* Liens rapides */}
        <div className="mt-12 border-t border-surface-600 pt-8">
          <p className="text-xs text-neutral-500 uppercase tracking-widest mb-4">Pages populaires</p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { href: '/fr/nos-services',   label: 'Nos Services' },
              { href: '/fr/notre-mission',  label: 'Notre Mission' },
              { href: '/fr/carriere',       label: 'Carrière' },
              { href: '/fr/news',           label: 'Actualités' },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-sm text-neutral-400 hover:text-white px-3 py-1.5 rounded-lg hover:bg-surface-700 transition-colors duration-200"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>

      </div>
    </main>
  )
}
