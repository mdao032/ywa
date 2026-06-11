'use client'

import { useEffect } from 'react'

/**
 * Composant invisible — active les animations scroll-reveal
 * sur tous les éléments [data-reveal] présents dans le DOM.
 *
 * Utilise un MutationObserver pour détecter les nouveaux éléments
 * injectés lors des navigations client-side Next.js (le layout ne se
 * démonte jamais, donc useEffect ne tourne qu'une fois — sans le
 * MutationObserver, les [data-reveal] des pages suivantes resteraient
 * invisibles jusqu'à un rechargement complet).
 */
export function ScrollReveal() {
  useEffect(() => {
    // ── IntersectionObserver : anime quand l'élément entre dans le viewport ──
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
          }
        })
      },
      {
        threshold:  0.08,
        rootMargin: '0px 0px -48px 0px',
      }
    )

    // ── Observe tous les [data-reveal] pas encore visibles ───────────────────
    const observe = () => {
      document
        .querySelectorAll('[data-reveal]:not(.is-visible)')
        .forEach((el) => io.observe(el))
    }

    // Passe initiale (éléments déjà dans le DOM au montage)
    observe()

    // ── MutationObserver : re-passe quand Next.js injecte une nouvelle page ──
    const mo = new MutationObserver((mutations) => {
      // N'agir que si de nouveaux nœuds ont été ajoutés
      const hasAdditions = mutations.some((m) => m.addedNodes.length > 0)
      if (hasAdditions) observe()
    })

    mo.observe(document.body, { childList: true, subtree: true })

    return () => {
      io.disconnect()
      mo.disconnect()
    }
  }, []) // ← une seule fois, mais le MutationObserver gère la suite

  return null
}
