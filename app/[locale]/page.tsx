import type { Metadata } from 'next'
import { getAllPosts } from '@/lib/wordpress'
import { Hero }             from '@/components/sections/Hero'
import { MarqueeBelt }      from '@/components/sections/MarqueeBelt'
import { ServicesGrid }     from '@/components/sections/ServicesGrid'
import { PotentialSection } from '@/components/sections/PotentialSection'
import { WhyUs }            from '@/components/sections/WhyUs'
import { Testimonials } from '@/components/sections/Testimonials'
import { BlogPreview }  from '@/components/sections/BlogPreview'
import { CtaBanner }    from '@/components/sections/CtaBanner'
import { StatsCounter } from '@/components/sections/StatsCounter'

export const metadata: Metadata = {
  title: 'YWA Consulting — Experts en Transformation Numérique',
  description:
    'YWA Consulting accompagne votre entreprise dans sa transformation numérique avec des stratégies claires, des solutions d\'optimisation et un soutien expert.',
}

interface HomePageProps {
  params: Promise<{ locale: string }>
}

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params
  const posts = await getAllPosts(locale, 1, 3)

  return (
    <>
      <Hero />
      <MarqueeBelt />
      <ServicesGrid />
      <PotentialSection />
      <WhyUs />
      <Testimonials locale={locale} />
      <BlogPreview posts={posts} />
      <CtaBanner />
      <StatsCounter />
    </>
  )
}
