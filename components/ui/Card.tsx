import { cn } from '@/lib/utils'
import { type ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  padding?: 'sm' | 'md' | 'lg' | 'none'
}

const paddingClasses = {
  none: '',
  sm:   'p-4',
  md:   'p-6',
  lg:   'p-8',
}

export function Card({ children, className, hover = true, padding = 'md' }: CardProps) {
  return (
    <div className={cn('card', paddingClasses[padding], !hover && 'hover:transform-none hover:shadow-none', className)}>
      {children}
    </div>
  )
}

// ─── Sous-composants ────────────────────────────────────────

export function CardHeader({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn('mb-4', className)}>{children}</div>
}

export function CardTitle({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <h3 className={cn('font-display text-xl font-semibold text-white leading-snug', className)}>
      {children}
    </h3>
  )
}

export function CardDescription({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p className={cn('text-neutral-400 text-sm leading-relaxed mt-2', className)}>
      {children}
    </p>
  )
}

export function CardFooter({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn('mt-6 pt-4 border-t border-surface-600', className)}>{children}</div>
}
