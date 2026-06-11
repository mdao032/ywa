import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)
const TO     = process.env.CONTACT_EMAIL ?? 'contact@ywaconsulting.com'

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData()

    const nom     = formData.get('nom')?.toString().trim()    ?? ''
    const email   = formData.get('email')?.toString().trim()  ?? ''
    const poste   = formData.get('poste')?.toString().trim()  ?? ''
    const message = formData.get('message')?.toString().trim() ?? ''

    // Validation basique
    if (!nom || !email || !poste || !message) {
      return NextResponse.json({ error: 'Champs requis manquants.' }, { status: 400 })
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Email invalide.' }, { status: 400 })
    }
    if (message.length < 30) {
      return NextResponse.json({ error: 'Message trop court.' }, { status: 400 })
    }

    // Fichier CV (optionnel)
    const cvFile = formData.get('cv') as File | null
    const attachments: { filename: string; content: Buffer }[] = []
    if (cvFile && cvFile.size > 0) {
      if (cvFile.size > 5 * 1024 * 1024) {
        return NextResponse.json({ error: 'CV trop volumineux (max 5 Mo).' }, { status: 400 })
      }
      const buffer = Buffer.from(await cvFile.arrayBuffer())
      attachments.push({ filename: cvFile.name, content: buffer })
    }

    // Envoi via Resend
    await resend.emails.send({
      from:    'YWA Consulting <noreply@ywaconsulting.com>',
      to:      [TO],
      reply_to: email,
      subject: `[Candidature] ${poste} — ${nom}`,
      html: `
        <h2>Nouvelle candidature spontanée</h2>
        <p><strong>Nom :</strong> ${nom}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Poste souhaité :</strong> ${poste}</p>
        <hr />
        <h3>Message :</h3>
        <p style="white-space:pre-wrap">${message}</p>
      `,
      ...(attachments.length > 0 && { attachments }),
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('[API /candidature]', err)
    return NextResponse.json({ error: 'Erreur interne.' }, { status: 500 })
  }
}

