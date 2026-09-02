import { useEffect, useState } from 'react'
import { X, AlertTriangle, BookOpen, HeartPulse, Activity, CheckCircle2, ShieldAlert, Utensils, ArrowUpRight } from 'lucide-react'
import type { HealthInfo, AgeGroup, SexCategory } from '../../types/health'

interface HealthDetailModalProps {
  item: HealthInfo | null
  onClose: () => void
  onOpenCheckModal: (item: HealthInfo) => void
}

export function HealthDetailModal({ item, onClose, onOpenCheckModal }: HealthDetailModalProps) {
  const [selectedAge, setSelectedAge] = useState<AgeGroup>('Adult')
  const [selectedSex, setSelectedSex] = useState<SexCategory>('Male')

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

  if (!item) return null

  const Icon = item.icon
  const availableRanges = item.referenceRanges || []
  
  const currentRange = availableRanges.find(
    r => r.ageGroup === selectedAge && (r.sex === selectedSex || r.sex === 'Both' || !r.sex)
  ) || availableRanges.find(r => r.ageGroup === selectedAge) || availableRanges[0]

  return (
    <div
      className="fixed inset-0 z-50 grid place-items-center overflow-y-auto bg-slate-950/50 p-4 sm:p-6 backdrop-blur-xs"
      role="dialog"
      aria-modal="true"
      aria-labelledby="detail-title"
      onMouseDown={onClose}
    >
      <div
        className="my-auto w-full max-w-3xl rounded-3xl bg-white shadow-2xl transition-all border border-slate-100 overflow-hidden"
        onMouseDown={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between border-b border-slate-100 bg-[#f8fcfb] p-6 sm:p-8">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-teal-600 text-white shadow-sm">
              <Icon size={28} />
            </div>
            <div>
              <span className="eyebrow !bg-teal-100 !text-teal-800">{item.category}</span>
              <h2 id="detail-title" className="mt-1 text-2xl sm:text-3xl font-extrabold text-ink">
                {item.title}
              </h2>
            </div>
          </div>
          <button
            onClick={onClose}
            className="rounded-xl p-2.5 text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content Body */}
        <div className="max-h-[75vh] overflow-y-auto p-6 sm:p-8 space-y-8">
          
          {/* Section 1: Overview & What is it? */}
          <section className="space-y-4">
            <div>
              <h3 className="text-sm font-extrabold uppercase tracking-wider text-teal-800 flex items-center gap-2">
                <BookOpen size={16} /> What is it?
              </h3>
              <p className="mt-2 text-sm sm:text-base leading-7 text-slate-700">
                {item.whatIsIt}
              </p>
            </div>

            {item.whyItMatters && (
              <div className="rounded-2xl bg-slate-50 p-4 border border-slate-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-600">Why it matters</h4>
                <p className="mt-1 text-sm leading-6 text-slate-700">{item.whyItMatters}</p>
              </div>
            )}

            {item.howMeasured && (
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">How it is commonly measured</h4>
                <p className="mt-1 text-sm text-slate-600 leading-6">{item.howMeasured}</p>
              </div>
            )}
          </section>

          {/* Section 2: Demographic Reference Information */}
          <section className="rounded-2xl border border-teal-100 bg-[#f7fcfa] p-5 sm:p-6">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-teal-100 pb-4">
              <div>
                <h3 className="text-base font-bold text-teal-900">Demographic Reference Ranges</h3>
                <p className="text-xs text-slate-500">Select age & sex to view expected clinical reference norms.</p>
              </div>
              {currentRange && (
                <div className="rounded-xl bg-teal-600 px-3.5 py-1.5 text-right text-white">
                  <span className="text-xs font-semibold block text-teal-100">Reference Target</span>
                  <span className="text-base font-extrabold">{currentRange.range} {currentRange.unit}</span>
                </div>
              )}
            </div>

            {/* Age selector tabs */}
            <div className="mt-4">
              <label className="text-xs font-bold text-slate-600 uppercase tracking-wider block mb-2">Age Group</label>
              <div className="flex flex-wrap gap-1.5">
                {(['Newborn', 'Infant', 'Child', 'Adolescent', 'Adult', 'Older Adult'] as AgeGroup[]).map(ag => {
                  const hasData = availableRanges.some(r => r.ageGroup === ag)
                  return (
                    <button
                      key={ag}
                      type="button"
                      onClick={() => setSelectedAge(ag)}
                      className={`rounded-xl px-3 py-1.5 text-xs font-bold transition ${
                        selectedAge === ag
                          ? 'bg-teal-700 text-white shadow-xs'
                          : hasData
                          ? 'bg-white border border-slate-200 text-slate-700 hover:bg-teal-50 hover:border-teal-200'
                          : 'bg-slate-100 text-slate-400 cursor-default'
                      }`}
                    >
                      {ag}
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Sex selector tabs */}
            <div className="mt-3 flex items-center gap-2">
              <span className="text-xs font-bold text-slate-600 uppercase tracking-wider">Sex:</span>
              {(['Male', 'Female'] as SexCategory[]).map(sex => (
                <button
                  key={sex}
                  type="button"
                  onClick={() => setSelectedSex(sex)}
                  className={`rounded-lg px-3 py-1 text-xs font-bold transition ${
                    selectedSex === sex
                      ? 'bg-slate-800 text-white'
                      : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  {sex}
                </button>
              ))}
            </div>

            {/* Range Notes */}
            {currentRange?.notes && (
              <div className="mt-4 rounded-xl bg-white p-3 text-xs leading-5 text-slate-600 border border-teal-100">
                <span className="font-bold text-teal-800">Note: </span>{currentRange.notes}
              </div>
            )}

            {/* Pregnancy Note */}
            {item.pregnancyNote && (
              <div className="mt-3 rounded-xl bg-purple-50 p-3 text-xs leading-5 text-purple-900 border border-purple-100">
                <span className="font-bold text-purple-950">Pregnancy Context: </span>{item.pregnancyNote}
              </div>
            )}
          </section>

          {/* Section 3: High and Low Meanings */}
          {(item.highMeaning || item.lowMeaning) && (
            <section className="grid gap-4 sm:grid-cols-2">
              {item.highMeaning && (
                <div className="rounded-2xl border border-amber-200 bg-amber-50/60 p-5">
                  <h4 className="flex items-center gap-2 font-bold text-amber-950 text-sm">
                    <Activity size={18} className="text-amber-700" />
                    High Results May Be Associated With:
                  </h4>
                  <p className="mt-2 text-xs sm:text-sm leading-6 text-amber-900">
                    {item.highMeaning}
                  </p>
                </div>
              )}

              {item.lowMeaning && (
                <div className="rounded-2xl border border-blue-200 bg-blue-50/60 p-5">
                  <h4 className="flex items-center gap-2 font-bold text-blue-950 text-sm">
                    <Activity size={18} className="text-blue-700" />
                    Low Results May Be Associated With:
                  </h4>
                  <p className="mt-2 text-xs sm:text-sm leading-6 text-blue-900">
                    {item.lowMeaning}
                  </p>
                </div>
              )}
            </section>
          )}

          {/* Section 4: Factors Affecting Readings */}
          {item.factorsAffecting && item.factorsAffecting.length > 0 && (
            <section>
              <h3 className="text-sm font-extrabold uppercase tracking-wider text-slate-700 flex items-center gap-2">
                <CheckCircle2 size={16} className="text-teal-600" /> Factors That May Affect Reading
              </h3>
              <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                {item.factorsAffecting.map((factor, idx) => (
                  <li key={idx} className="flex items-center gap-2 rounded-xl bg-slate-50 px-3.5 py-2.5 text-xs text-slate-700 font-medium">
                    <span className="h-1.5 w-1.5 rounded-full bg-teal-500 shrink-0" />
                    {factor}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Section 5: Dietary Sources (Vitamins/Minerals) */}
          {item.foodSources && item.foodSources.length > 0 && (
            <section className="rounded-2xl border border-emerald-100 bg-emerald-50/40 p-5">
              <h3 className="text-sm font-bold text-emerald-950 flex items-center gap-2">
                <Utensils size={18} className="text-emerald-700" /> Common Dietary Sources
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {item.foodSources.map((food, idx) => (
                  <span key={idx} className="rounded-full bg-white px-3 py-1 text-xs font-bold text-emerald-800 shadow-2xs border border-emerald-200">
                    {food}
                  </span>
                ))}
              </div>
            </section>
          )}

          {/* Section 6: When to Seek Medical Attention */}
          {item.whenToSeekCare && (
            <section className="rounded-2xl border border-rose-200 bg-rose-50/60 p-5">
              <h3 className="text-sm font-bold text-rose-950 flex items-center gap-2">
                <ShieldAlert size={18} className="text-rose-700" /> When to Seek Professional Attention
              </h3>
              <p className="mt-2 text-xs sm:text-sm leading-6 text-rose-900">
                {item.whenToSeekCare}
              </p>
            </section>
          )}

          {/* Section 7: Medical Disclaimer Warning Banner */}
          <div className="flex gap-3 rounded-2xl bg-amber-50 border border-amber-200 p-4 text-xs text-amber-950 leading-5">
            <AlertTriangle size={20} className="shrink-0 text-amber-700 mt-0.5" />
            <div>
              <span className="font-bold">Medical Disclaimer: </span>
              {item.disclaimer || 'Reference ranges vary across laboratories and diagnostic methods. Educational reference information only—not medical diagnosis or treatment advice.'}
            </div>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 bg-[#f8fcfb] p-6">
          <button
            onClick={onClose}
            className="rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-xs font-bold text-slate-700 hover:bg-slate-50 transition"
          >
            Close Guide
          </button>
          
          <button
            onClick={() => {
              onClose()
              onOpenCheckModal(item)
            }}
            className="btn-primary text-xs py-2.5 px-5"
          >
            Check Yours Interactive Tool
            <ArrowUpRight size={16} />
          </button>
        </div>
      </div>
    </div>
  )
}
