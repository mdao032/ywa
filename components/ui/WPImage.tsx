import Image from 'next/image'
import { cn }  from '@/lib/utils'

interface WPImageProps {
  src:        string | null | undefined
  alt:        string
  width?:     number
  height?:    number
  fill?:      boolean
  className?: string
  priority?:  boolean
  sizes?:     string
  /** Classes du wrapper (uniquement si fill=true) */
  wrapperClassName?: string
}

/**
 * Wrapper next/image optimisé pour les images WordPress.
 * Affiche un placeholder gris si src est null/undefined.
 */
export function WPImage({
  src,
  alt,
  width,
  height,
  fill = false,
  className,
  priority = false,
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  wrapperClassName,
}: WPImageProps) {
  // Placeholder si pas d'image WP
  if (!src) {
    return (
      <div
        className={cn(
          'bg-surface-700 flex items-center justify-center',
          fill ? 'absolute inset-0' : '',
          !fill && width  ? `w-[${width}px]`  : '',
          !fill && height ? `h-[${height}px]` : '',
          wrapperClassName ?? className
        )}
        aria-label={alt || 'Image non disponible'}
        role="img"
      >
        <span className="text-neutral-600 font-display font-bold text-2xl select-none">YWA</span>
      </div>
    )
  }

  if (fill) {
    return (
      <div className={cn('relative overflow-hidden', wrapperClassName)}>
        <Image
          src={src}
          alt={alt}
          fill
          className={cn('object-cover', className)}
          priority={priority}
          sizes={sizes}
        />
      </div>
    )
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width ?? 800}
      height={height ?? 600}
      className={className}
      priority={priority}
      sizes={sizes}
    />
  )
}

