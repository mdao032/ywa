import type { Metadata } from 'next'
import { getPageBySlug } from '@/lib/wordpress'
import { renderWPTitle }  from '@/lib/utils'
import { PageHero }       from '@/components/sections/PageHero'
import { WPContent }      from '@/components/sections/WPContent'

const SLUG: Record<string, string> = { fr: 'mentions-legales', en: 'terms-and-conditions' }

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const isEn = locale === 'en'
  const page = await getPageBySlug(SLUG[locale] ?? SLUG.fr, locale)
  return {
    title: page ? renderWPTitle(page.title.rendered) : (isEn ? 'Terms & Conditions' : 'Mentions Légales'),
    robots: { index: false },
  }
}

const FALLBACK_CONTENT = {
  fr: `<p>Les présentes mentions légales régissent l'utilisation du site <strong>ywaconsulting.com</strong> édité par YWA Consulting.</p>
<h2>Éditeur du site</h2>
<p>YWA Consulting — contact@ywaconsulting.com</p>
<h2>Propriété intellectuelle</h2>
<p>L'ensemble des contenus présents sur ce site (textes, images, graphiques) sont la propriété exclusive de YWA Consulting et sont protégés par les lois françaises et internationales relatives à la propriété intellectuelle.</p>
<h2>Responsabilité</h2>
<p>YWA Consulting s'efforce d'assurer l'exactitude des informations présentes sur ce site mais ne saurait être tenu responsable des erreurs ou omissions.</p>
<h2>Données personnelles</h2>
<p>Conformément au RGPD, vous disposez d'un droit d'accès, de rectification et de suppression de vos données. Pour exercer ces droits, contactez-nous à contact@ywaconsulting.com.</p>`,
  en: `<p>These terms and conditions govern the use of the website <strong>ywaconsulting.com</strong> published by YWA Consulting.</p>
<h2>Publisher</h2>
<p>YWA Consulting — contact@ywaconsulting.com</p>
<h2>Intellectual Property</h2>
<p>All content on this site (texts, images, graphics) is the exclusive property of YWA Consulting and is protected by applicable intellectual property laws.</p>
<h2>Liability</h2>
<p>YWA Consulting strives to ensure the accuracy of the information on this site but cannot be held liable for errors or omissions.</p>
<h2>Personal Data</h2>
<p>In accordance with GDPR, you have the right to access, correct and delete your personal data. To exercise these rights, contact us at contact@ywaconsulting.com.</p>`,
}

export default async function MentionsLegalesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const isEn   = locale === 'en'
  const page   = await getPageBySlug(SLUG[locale] ?? SLUG.fr, locale)
  const title  = page ? renderWPTitle(page.title.rendered) : (isEn ? 'Terms & Conditions' : 'Mentions Légales')
  const content = page?.content.rendered || FALLBACK_CONTENT[isEn ? 'en' : 'fr']
  const updated = page ? new Date(page.modified).toLocaleDateString(isEn ? 'en-US' : 'fr-FR', { year: 'numeric', month: 'long', day: 'numeric' }) : null

  return (
    <>
      <PageHero title={title} breadcrumb={title} />
      <section className="section-padding bg-surface-900">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            {updated && (
              <p className="text-sm text-neutral-500 mb-8 pb-6 border-b border-surface-600">
                {isEn ? 'Last updated:' : 'Dernière mise à jour :'} {updated}
              </p>
            )}
            <WPContent html={content} />
          </div>
        </div>
      </section>
    </>
  )
}

