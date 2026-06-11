'use client'

import { useState } from 'react'
import { useForm }  from 'react-hook-form'
import { useTranslations } from 'next-intl'
import { Send, CheckCircle, AlertCircle } from 'lucide-react'
import { cn } from '@/lib/utils'

interface ContactFormData {
  nom:        string
  email:      string
  entreprise: string
  objet:      string
  message:    string
}

export function ContactForm() {
  const t = useTranslations('contact')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>()

  const onSubmit = async (data: ContactFormData) => {
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify(data),
      })
      if (res.ok) { setStatus('success'); reset() }
      else setStatus('error')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="card p-8 text-center">
        <CheckCircle size={48} className="text-emerald-400 mx-auto mb-4" />
        <h3 className="font-display text-xl font-semibold text-white mb-2">{t('success')}</h3>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>

      {/* Nom + Email */}
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="label">{t('name')} <span className="text-red-400">*</span></label>
          <input
            {...register('nom', { required: 'Champ requis' })}
            className={cn('input', errors.nom && 'border-red-500')}
            placeholder="Jean Dupont"
          />
          {errors.nom && <p className="mt-1 text-xs text-red-400">{errors.nom.message}</p>}
        </div>
        <div>
          <label className="label">{t('email')} <span className="text-red-400">*</span></label>
          <input
            type="email"
            {...register('email', {
              required: 'Champ requis',
              pattern:  { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Email invalide' },
            })}
            className={cn('input', errors.email && 'border-red-500')}
            placeholder="vous@entreprise.com"
          />
          {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email.message}</p>}
        </div>
      </div>

      {/* Entreprise + Objet */}
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="label">{t('company')}</label>
          <input
            {...register('entreprise')}
            className="input"
            placeholder="Votre entreprise"
          />
        </div>
        <div>
          <label className="label">{t('subject')} <span className="text-red-400">*</span></label>
          <input
            {...register('objet', { required: 'Champ requis' })}
            className={cn('input', errors.objet && 'border-red-500')}
            placeholder="Objet de votre message"
          />
          {errors.objet && <p className="mt-1 text-xs text-red-400">{errors.objet.message}</p>}
        </div>
      </div>

      {/* Message */}
      <div>
        <label className="label">{t('message')} <span className="text-red-400">*</span></label>
        <textarea
          rows={5}
          {...register('message', {
            required:  'Champ requis',
            minLength: { value: 20, message: 'Au moins 20 caractères' },
          })}
          className={cn('input resize-none', errors.message && 'border-red-500')}
          placeholder="Décrivez votre projet ou votre besoin…"
        />
        {errors.message && <p className="mt-1 text-xs text-red-400">{errors.message.message}</p>}
      </div>

      {/* Erreur globale */}
      {status === 'error' && (
        <div className="flex items-center gap-2 p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
          <AlertCircle size={15} />
          {t('error')}
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className={cn('btn-primary w-full flex items-center justify-center gap-2', status === 'loading' && 'opacity-60 cursor-not-allowed')}
      >
        {status === 'loading' ? (
          <>
            <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            {t('sending')}
          </>
        ) : (
          <>
            <Send size={15} />
            {t('send')}
          </>
        )}
      </button>
    </form>
  )
}

