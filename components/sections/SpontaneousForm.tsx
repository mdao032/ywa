'use client'

import { useState, useRef } from 'react'
import { useForm } from 'react-hook-form'
import { Send, Paperclip, CheckCircle, AlertCircle } from 'lucide-react'
import { cn } from '@/lib/utils'

interface CandidatureFormData {
  nom:     string
  email:   string
  poste:   string
  message: string
}

interface SpontaneousFormProps {
  locale: string
}

export function SpontaneousForm({ locale }: SpontaneousFormProps) {
  const isEn = locale === 'en'
  const [status,   setStatus]   = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [fileName, setFileName] = useState<string>('')
  const fileRef = useRef<HTMLInputElement>(null)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CandidatureFormData>()

  const onSubmit = async (data: CandidatureFormData) => {
    setStatus('loading')
    try {
      const formData = new FormData()
      Object.entries(data).forEach(([k, v]) => formData.append(k, v))
      if (fileRef.current?.files?.[0]) {
        formData.append('cv', fileRef.current.files[0])
      }

      const res = await fetch('/api/candidature', { method: 'POST', body: formData })
      if (res.ok) {
        setStatus('success')
        reset()
        setFileName('')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="card p-5 sm:p-8 text-center">
        <CheckCircle size={48} className="text-emerald-400 mx-auto mb-4" />
        <h3 className="font-display text-xl font-semibold text-white mb-2">
          {isEn ? 'Application received!' : 'Candidature reçue !'}
        </h3>
        <p className="text-neutral-400">
          {isEn
            ? 'Thank you for your interest. We will review your application and get back to you soon.'
            : 'Merci pour votre intérêt. Nous examinerons votre candidature et vous recontacterons rapidement.'}
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>

      {/* Nom + Email */}
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="label">
            {isEn ? 'Full Name' : 'Nom complet'} <span className="text-red-400">*</span>
          </label>
          <input
            {...register('nom', { required: isEn ? 'Required' : 'Champ requis' })}
            className={cn('input', errors.nom && 'border-red-500 focus:border-red-500')}
            placeholder={isEn ? 'Jane Doe' : 'Jean Dupont'}
          />
          {errors.nom && (
            <p className="mt-1 text-xs text-red-400">{errors.nom.message}</p>
          )}
        </div>

        <div>
          <label className="label">
            {isEn ? 'Email' : 'Email'} <span className="text-red-400">*</span>
          </label>
          <input
            type="email"
            {...register('email', {
              required: isEn ? 'Required' : 'Champ requis',
              pattern:  { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: isEn ? 'Invalid email' : 'Email invalide' },
            })}
            className={cn('input', errors.email && 'border-red-500 focus:border-red-500')}
            placeholder="vous@entreprise.com"
          />
          {errors.email && (
            <p className="mt-1 text-xs text-red-400">{errors.email.message}</p>
          )}
        </div>
      </div>

      {/* Poste souhaité */}
      <div>
        <label className="label">
          {isEn ? 'Desired Position' : 'Poste souhaité'} <span className="text-red-400">*</span>
        </label>
        <input
          {...register('poste', { required: isEn ? 'Required' : 'Champ requis' })}
          className={cn('input', errors.poste && 'border-red-500 focus:border-red-500')}
          placeholder={isEn ? 'Digital Strategy Consultant' : 'Consultant en Stratégie Numérique'}
        />
        {errors.poste && (
          <p className="mt-1 text-xs text-red-400">{errors.poste.message}</p>
        )}
      </div>

      {/* Message */}
      <div>
        <label className="label">
          {isEn ? 'Cover Letter / Message' : 'Lettre de motivation / Message'} <span className="text-red-400">*</span>
        </label>
        <textarea
          rows={5}
          {...register('message', {
            required:  isEn ? 'Required' : 'Champ requis',
            minLength: { value: 30, message: isEn ? 'At least 30 characters' : 'Au moins 30 caractères' },
          })}
          className={cn('input resize-none', errors.message && 'border-red-500 focus:border-red-500')}
          placeholder={
            isEn
              ? 'Tell us about your background, motivations, and what you would bring to YWA Consulting…'
              : 'Parlez-nous de votre parcours, vos motivations et de ce que vous apporteriez à YWA Consulting…'
          }
        />
        {errors.message && (
          <p className="mt-1 text-xs text-red-400">{errors.message.message}</p>
        )}
      </div>

      {/* CV — input file */}
      <div>
        <label className="label">{isEn ? 'CV / Resume' : 'CV'} (PDF, max 5 Mo)</label>
        <div
          className="relative cursor-pointer"
          onClick={() => fileRef.current?.click()}
        >
          <div className={cn(
            'input flex items-center gap-3 cursor-pointer hover:border-primary-500 transition-colors',
            fileName ? 'text-white' : 'text-neutral-500'
          )}>
            <Paperclip size={15} className="text-neutral-400 shrink-0" />
            <span className="text-sm truncate">
              {fileName || (isEn ? 'Click to attach your CV…' : 'Cliquez pour joindre votre CV…')}
            </span>
          </div>
          <input
            ref={fileRef}
            type="file"
            accept=".pdf,.doc,.docx"
            className="hidden"
            onChange={(e) => setFileName(e.target.files?.[0]?.name ?? '')}
          />
        </div>
      </div>

      {/* Erreur globale */}
      {status === 'error' && (
        <div className="flex items-center gap-2 p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
          <AlertCircle size={15} />
          {isEn
            ? 'Something went wrong. Please try again or email us directly.'
            : 'Une erreur est survenue. Réessayez ou écrivez-nous directement.'}
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={status === 'loading'}
        className={cn(
          'btn-primary w-full flex items-center justify-center gap-2',
          status === 'loading' && 'opacity-60 cursor-not-allowed'
        )}
      >
        {status === 'loading' ? (
          <>
            <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            {isEn ? 'Sending…' : 'Envoi en cours…'}
          </>
        ) : (
          <>
            <Send size={15} />
            {isEn ? 'Send Application' : 'Envoyer ma candidature'}
          </>
        )}
      </button>
    </form>
  )
}

