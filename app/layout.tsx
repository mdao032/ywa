import type { Metadata } from 'next'

export const metadata: Metadata = {
  icons: {
    icon:  '/images/logo.png',
    apple: '/images/logo.png',
  },
}

// Layout racine minimal requis par Next.js App Router.
// Le vrai layout (avec html/body) est dans app/[locale]/layout.tsx
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children
}
