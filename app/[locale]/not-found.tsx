import Link from 'next/link'
import { FileQuestion } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-surface-900">
      <div className="section-container text-center py-24">
        <div className="w-20 h-20 rounded-2xl bg-surface-700 border border-surface-600 flex items-center justify-center mx-auto mb-6">
          <FileQuestion size={36} className="text-neutral-500" />
        </div>

        <span className="font-display text-6xl font-bold text-primary-600/30 block mb-4">404</span>

        <h1 className="font-display text-3xl font-bold text-white mb-3">
          Page introuvable
        </h1>
        <p className="text-neutral-400 mb-8 max-w-md mx-auto">
          La page que vous cherchez n&apos;existe pas ou a été déplacée.
          Vérifiez l&apos;URL ou retournez à l&apos;accueil.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/fr" className="btn-primary">
            Retour à l&apos;accueil
          </Link>
          <Link href="/fr/nous-contacter" className="btn-outline">
            Nous contacter
          </Link>
        </div>
      </div>
    </div>
  )
}

