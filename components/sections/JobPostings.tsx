import { MapPin, Briefcase, Clock, ArrowRight } from 'lucide-react'

// ─── Types ────────────────────────────────────────────────────────────────────

export interface Job {
  id:           string
  title:        string
  type:         'CDI' | 'CDD' | 'Freelance' | 'Stage' | 'Alternance'
  location:     string
  /** ISO date string */
  postedAt:     string
  description?: string
  applyUrl?:    string
}

interface JobPostingsProps {
  jobs:   Job[]
  locale: string
}

// ─── Composant ────────────────────────────────────────────────────────────────

export function JobPostings({ jobs, locale }: JobPostingsProps) {
  const isEn = locale === 'en'

  if (jobs.length === 0) {
    return (
      <div
        className="text-center py-14 px-6 rounded-2xl relative overflow-hidden"
        style={{
          background: 'linear-gradient(145deg,rgba(15,23,42,0.7) 0%,rgba(10,15,30,0.85) 100%)',
          border: '1px dashed rgba(51,65,85,0.7)',
        }}
      >
        <div
          className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-5"
          style={{
            background: 'linear-gradient(135deg,rgba(37,99,235,0.15),rgba(37,99,235,0.06))',
            border: '1px solid rgba(37,99,235,0.2)',
          }}
        >
          <Briefcase size={22} className="text-primary-400" />
        </div>
        <h3 className="font-display font-semibold text-white mb-2">
          {isEn ? 'No open positions' : 'Aucune offre disponible'}
        </h3>
        <p className="text-neutral-400 text-sm max-w-sm mx-auto">
          {isEn
            ? 'No positions available at the moment. Check back soon or send a spontaneous application below.'
            : 'Aucune offre disponible actuellement. Revenez bientôt ou envoyez une candidature spontanée ci-dessous.'}
        </p>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} locale={locale} />
      ))}
    </div>
  )
}

// ─── Card individuelle ────────────────────────────────────────────────────────

function JobCard({ job, locale }: { job: Job; locale: string }) {
  const isEn = locale === 'en'

  const typeColors: Record<Job['type'], string> = {
    CDI:        'bg-emerald-600/15 text-emerald-400 border-emerald-600/25',
    CDD:        'bg-amber-600/15  text-amber-400  border-amber-600/25',
    Freelance:  'bg-violet-600/15 text-violet-400 border-violet-600/25',
    Stage:      'bg-sky-600/15    text-sky-400    border-sky-600/25',
    Alternance: 'bg-orange-600/15 text-orange-400 border-orange-600/25',
  }

  const postedDate = new Date(job.postedAt).toLocaleDateString(
    isEn ? 'en-US' : 'fr-FR',
    { year: 'numeric', month: 'long', day: 'numeric' }
  )

  return (
    <div
      className="group rounded-2xl p-5 sm:p-7 transition-all duration-400 hover:-translate-y-0.5"
      style={{
        background: 'linear-gradient(145deg,rgba(15,23,42,0.95) 0%,rgba(10,15,30,1) 100%)',
        border: '1px solid rgba(51,65,85,0.6)',
        boxShadow: '0 0 0 1px rgba(255,255,255,0.02) inset',
      }}
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold border ${typeColors[job.type]}`}>
              {job.type}
            </span>
          </div>
          <h3 className="font-display font-semibold text-white text-lg leading-snug mb-3">
            {job.title}
          </h3>
          <div className="flex flex-wrap items-center gap-4 text-sm text-neutral-500">
            <span className="flex items-center gap-1.5">
              <MapPin size={13} />
              {job.location}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={13} />
              {isEn ? 'Posted' : 'Publié le'} {postedDate}
            </span>
          </div>
          {job.description && (
            <p className="mt-3 text-sm text-neutral-400 leading-relaxed line-clamp-2">
              {job.description}
            </p>
          )}
        </div>

        {job.applyUrl && (
          <a
            href={job.applyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary shrink-0 flex items-center gap-2 text-sm"
          >
            {isEn ? 'Apply' : 'Postuler'}
            <ArrowRight size={14} />
          </a>
        )}
      </div>
    </div>
  )
}

