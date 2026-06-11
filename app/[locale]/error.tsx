'use client'

import Link from 'next/link'
import { AlertTriangle, RefreshCw } from 'lucide-react'

interface ErrorPageProps {
  error:  Error & { digest?: string }
  reset:  () => void
}

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-surface-900">
      <div className="section-container text-center py-24">
        <div className="w-20 h-20 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center mx-auto mb-6">
          <AlertTriangle size={36} className="text-red-400" />
        </div>

        <h1 className="font-display text-3xl font-bold text-white mb-3">
          Une erreur est survenue
        </h1>
        <p className="text-neutral-400 mb-2 max-w-md mx-auto">
          Nous n&apos;avons pas pu charger cette page. Veuillez réessayer ou revenir à l&apos;accueil.
        </p>
        {error.digest && (
          <p className="text-xs text-neutral-600 mb-8">Code : {error.digest}</p>
        )}

        <div className="flex flex-wrap justify-center gap-4">
          <button onClick={reset} className="btn-primary flex items-center gap-2">
            <RefreshCw size={14} />
            Réessayer
          </button>
          <Link href="/fr" className="btn-outline">
            Retour à l&apos;accueil
          </Link>
        </div>
      </div>
    </div>
  )
}

