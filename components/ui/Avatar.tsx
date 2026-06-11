import Image from 'next/image'
import { cn }  from '@/lib/utils'

interface AvatarProps {
  src?:       string | null
  alt:        string
  size?:      number
  className?: string
  /** Initiales affichées si pas d'image */
  initials?:  string
}

/**
 * Avatar circulaire — utilisé pour les photos des témoignages clients et auteurs d'articles.
 * Affiche les initiales si aucune image n'est disponible.
 */
export function Avatar({
  src,
  alt,
  size    = 48,
  className,
  initials,
}: AvatarProps) {
  const derived = initials ?? alt.split(' ').map((w) => w[0]).join('').slice(0, 2).toUpperCase()

  if (!src) {
    return (
      <div
        className={cn(
          'rounded-full bg-primary-600/20 border border-primary-600/30 flex items-center justify-center shrink-0 select-none',
          className
        )}
        style={{ width: size, height: size }}
        aria-label={alt}
      >
        <span
          className="font-display font-bold text-primary-400"
          style={{ fontSize: size * 0.35 }}
        >
          {derived}
        </span>
      </div>
    )
  }

  return (
    <div
      className={cn('relative rounded-full overflow-hidden shrink-0 border border-surface-600', className)}
      style={{ width: size, height: size }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes={`${size}px`}
      />
    </div>
  )
}

