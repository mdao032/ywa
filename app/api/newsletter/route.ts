import { NextRequest, NextResponse } from 'next/server'
import { isValidEmail } from '@/lib/utils'

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json()

    if (!email || !isValidEmail(email)) {
      return NextResponse.json({ error: 'Email invalide.' }, { status: 400 })
    }

    // TODO: Connecter à Brevo / Resend audience
    console.log(`[Newsletter] Nouvelle inscription : ${email}`)

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: 'Erreur interne.' }, { status: 500 })
  }
}

