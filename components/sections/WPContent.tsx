interface WPContentProps {
  html: string
  className?: string
}

/**
 * Rend le contenu HTML issu de WordPress avec les styles Tailwind Typography (prose).
 * Utilise dangerouslySetInnerHTML — le contenu provient d'un CMS de confiance.
 */
export function WPContent({ html, className = '' }: WPContentProps) {
  if (!html || html.trim() === '') return null

  return (
    <div
      className={`wp-content ${className}`}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}

