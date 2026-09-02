import { useState } from 'react'
import { ArrowUpRight, BookOpen, AlertTriangle } from 'lucide-react'
import type { HealthInfo, AgeGroup, SexCategory } from '../../types/health'

const AGE_GROUPS: AgeGroup[] = ['Newborn', 'Infant', 'Child', 'Adolescent', 'Adult', 'Older Adult']

interface HealthInfoCardProps {
  item: HealthInfo
  onLearnMore: (item: HealthInfo) => void
  onCheckYours: (item: HealthInfo) => void
  selectedGlobalAge?: AgeGroup
  selectedGlobalSex?: SexCategory
}

export function HealthInfoCard({
  item,
  onLearnMore,
  onCheckYours,
  selectedGlobalAge = 'Adult',
  selectedGlobalSex = 'Male'
}: HealthInfoCardProps) {
  const Icon = item.icon
  const [cardAge, setCardAge] = useState<AgeGroup>(selectedGlobalAge)
  const [cardSex, setCardSex] = useState<SexCategory>(selectedGlobalSex)

  // Find best matching reference range for current card age/sex selection
  const availableRanges = item.referenceRanges || []
  
  // Find range matching age & sex
  let matchedRange = availableRanges.find(
    r => r.ageGroup === cardAge && (r.sex === cardSex || r.sex === 'Both' || !r.sex)
  )

  // Fallback to age match only
  if (!matchedRange) {
    matchedRange = availableRanges.find(r => r.ageGroup === cardAge)
  }

  // Fallback to Adult or first available
  if (!matchedRange) {
    matchedRange = availableRanges.find(r => r.ageGroup === 'Adult') || availableRanges[0]
  }

  // Check if range differs by sex for the current age group
  const hasSexVariation = availableRanges.some(
    r => r.ageGroup === cardAge && (r.sex === 'Male' || r.sex === 'Female')
  )

  // Filter available age groups for this item
  const supportedAgeGroups = AGE_GROUPS.filter(ag =>
    availableRanges.some(r => r.ageGroup === ag)
  )

  return (
    <article className="group flex min-h-[360px] flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-teal-200 hover:shadow-soft">
      {/* Top Header Section */}
      <div>
        <div className="flex items-start justify-between gap-3">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-teal-50 text-teal-700 transition group-hover:bg-teal-600 group-hover:text-white">
            <Icon size={24} />
          </div>
          <span className="inline-flex rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-bold text-slate-600">
            {item.category}
          </span>
        </div>

        <h3 className="mt-4 text-xl font-bold text-ink tracking-tight group-hover:text-teal-700 transition">
          {item.title}
        </h3>

        <p className="mt-2 text-xs leading-5 text-slate-600 line-clamp-2">
          {item.shortDescription}
        </p>

        {/* Reference Range Box */}
        <div className="mt-4 rounded-xl border border-teal-100 bg-[#f7fcfa] p-3.5">
          <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-wider text-teal-800">
            <span>General Reference</span>
            {matchedRange && (
              <span className="font-semibold text-slate-500 lowercase">
                unit: {matchedRange.unit}
              </span>
            )}
          </div>

          {/* Age Group Selector Tabs (if multiple available) */}
          {supportedAgeGroups.length > 1 ? (
            <div className="mt-2.5 flex flex-wrap gap-1 border-b border-teal-100/70 pb-2">
              {supportedAgeGroups.map(ag => (
                <button
                  key={ag}
                  type="button"
                  onClick={() => setCardAge(ag)}
                  className={`rounded-md px-2 py-0.5 text-[11px] font-semibold transition ${
                    cardAge === ag
                      ? 'bg-teal-700 text-white shadow-xs'
                      : 'bg-white text-slate-600 hover:bg-teal-50 hover:text-teal-700'
                  }`}
                >
                  {ag}
                </button>
              ))}
            </div>
          ) : (
            <div className="mt-2 text-[11px] text-slate-500 font-medium">
              Standard across age groups
            </div>
          )}

          {/* Sex Selector (if applicable) */}
          {hasSexVariation && (
            <div className="mt-2 flex items-center gap-1.5">
              <span className="text-[11px] font-semibold text-slate-500">Sex:</span>
              {(['Male', 'Female'] as SexCategory[]).map(sex => (
                <button
                  key={sex}
                  type="button"
                  onClick={() => setCardSex(sex)}
                  className={`rounded-md px-2 py-0.5 text-[11px] font-semibold transition ${
                    cardSex === sex
                      ? 'bg-slate-800 text-white'
                      : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  {sex}
                </button>
              ))}
            </div>
          )}

          {/* Display Range */}
          <div className="mt-2.5 flex items-baseline justify-between gap-2">
            <span className="text-lg font-extrabold text-ink">
              {matchedRange ? matchedRange.range : 'See details'}
            </span>
            <span className="text-xs font-bold text-teal-700">
              {matchedRange?.unit || ''}
            </span>
          </div>

          {matchedRange?.notes && (
            <p className="mt-1.5 text-[11px] text-slate-500 italic leading-4">
              {matchedRange.notes}
            </p>
          )}
        </div>
      </div>

      {/* Action Footer Buttons */}
      <div className="mt-5 flex items-center justify-between gap-2 border-t border-slate-100 pt-4">
        <button
          onClick={() => onLearnMore(item)}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 hover:text-teal-700 transition"
        >
          <BookOpen size={15} />
          Learn More
        </button>

        <button
          onClick={() => onCheckYours(item)}
          className="inline-flex items-center gap-1 text-xs font-bold text-teal-700 hover:text-teal-800 bg-teal-50 hover:bg-teal-100 px-3 py-1.5 rounded-lg transition"
        >
          Check Yours
          <ArrowUpRight size={15} />
        </button>
      </div>
    </article>
  )
}
