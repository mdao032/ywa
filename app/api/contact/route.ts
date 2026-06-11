import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)
const TO     = process.env.CONTACT_EMAIL ?? 'contact@ywaconsulting.com'

// Compteur de rate limiting basique en mémoire (reset au redémarrage)
const rateLimitMap = new Map<string, { count: number; resetAt: number }>()
const RATE_LIMIT   = 5        // max 5 requêtes
const RATE_WINDOW  = 60_000   // par minute

function checkRateLimit(ip: string): boolean {
  const now  = Date.now()
  const entry = rateLimitMap.get(ip)
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_WINDOW })
    return true
  }
  if (entry.count >= RATE_LIMIT) return false
  entry.count++
  return true
}

export async function POST(req: NextRequest) {
  // Rate limiting
  const ip = req.headers.get('x-forwarded-for') ?? req.headers.get('x-real-ip') ?? 'unknown'
  if (!checkRateLimit(ip)) {
    return NextResponse.json({ error: 'Trop de requêtes. Réessayez dans une minute.' }, { status: 429 })
  }

  try {
    const { nom, email, entreprise, objet, message } = await req.json()

    // Validation serveur
    if (!nom?.trim() || !email?.trim() || !objet?.trim() || !message?.trim()) {
      return NextResponse.json({ error: 'Champs requis manquants.' }, { status: 400 })
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Email invalide.' }, { status: 400 })
    }
    if (message.trim().length < 20) {
      return NextResponse.json({ error: 'Message trop court.' }, { status: 400 })
    }

    await resend.emails.send({
      from:    'YWA Consulting <noreply@ywaconsulting.com>',
      to:      [TO],
      reply_to: email,
      subject: `[Contact] ${objet} — ${nom}`,
      html: `
        <h2>Nouveau message de contact</h2>
        <p><strong>Nom :</strong> ${nom}</p>
        <p><strong>Email :</strong> ${email}</p>
        ${entreprise ? `<p><strong>Entreprise :</strong> ${entreprise}</p>` : ''}
        <p><strong>Objet :</strong> ${objet}</p>
        <hr />
        <h3>Message :</h3>
        <p style="white-space:pre-wrap">${message}</p>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('[API /contact]', err)
    return NextResponse.json({ error: 'Erreur interne.' }, { status: 500 })
  }
}

