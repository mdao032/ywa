import type { Metadata } from 'next'
import { getPageBySlug } from '@/lib/wordpress'
import { renderWPTitle }  from '@/lib/utils'
import { PageHero }       from '@/components/sections/PageHero'
import { WPContent }      from '@/components/sections/WPContent'

const SLUG: Record<string, string> = { fr: 'politique-de-confidentialite', en: 'privacy-policy' }

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const isEn = locale === 'en'
  const page = await getPageBySlug(SLUG[locale] ?? SLUG.fr, locale)
  return {
    title: page ? renderWPTitle(page.title.rendered) : (isEn ? 'Privacy Policy' : 'Politique de Confidentialité'),
    robots: { index: false },
  }
}

const FALLBACK_CONTENT = {
  fr: `<p>YWA Consulting s'engage à protéger la confidentialité de vos données personnelles conformément au Règlement Général sur la Protection des Données (RGPD).</p>
<h2>Données collectées</h2>
<p>Nous collectons uniquement les données nécessaires au traitement de vos demandes : nom, adresse email, et contenu de vos messages. Ces données ne sont jamais revendues à des tiers.</p>
<h2>Finalité du traitement</h2>
<p>Vos données sont utilisées exclusivement pour répondre à vos demandes de contact et, avec votre consentement, pour vous adresser notre newsletter.</p>
<h2>Conservation des données</h2>
<p>Vos données sont conservées pendant une durée maximale de 3 ans à compter de votre dernière interaction avec nous.</p>
<h2>Vos droits</h2>
<p>Conformément au RGPD, vous disposez d'un droit d'accès, de rectification, d'effacement, de portabilité et d'opposition. Pour exercer ces droits, écrivez à contact@ywaconsulting.com.</p>
<h2>Cookies</h2>
<p>Ce site utilise des cookies techniques nécessaires à son bon fonctionnement. Aucun cookie publicitaire ou de tracking tiers n'est utilisé.</p>`,
  en: `<p>YWA Consulting is committed to protecting the confidentiality of your personal data in accordance with the General Data Protection Regulation (GDPR).</p>
<h2>Data Collected</h2>
<p>We only collect data necessary to process your requests: name, email address, and message content. This data is never sold to third parties.</p>
<h2>Purpose of Processing</h2>
<p>Your data is used exclusively to respond to your contact requests and, with your consent, to send you our newsletter.</p>
<h2>Data Retention</h2>
<p>Your data is retained for a maximum period of 3 years from your last interaction with us.</p>
<h2>Your Rights</h2>
<p>Under GDPR, you have the right to access, correct, erase, port and object to your data. To exercise these rights, write to contact@ywaconsulting.com.</p>
<h2>Cookies</h2>
<p>This site uses technical cookies necessary for its operation. No advertising or third-party tracking cookies are used.</p>`,
}

export default async function PolitiqueConfidentialitePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const isEn   = locale === 'en'
  const page   = await getPageBySlug(SLUG[locale] ?? SLUG.fr, locale)
  const title  = page ? renderWPTitle(page.title.rendered) : (isEn ? 'Privacy Policy' : 'Politique de Confidentialité')
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

