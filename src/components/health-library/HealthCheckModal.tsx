import { X, AlertTriangle, ArrowRight } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import type { HealthInfo, HealthTopic } from '../../types/health'
import { checkValue } from '../../utils/healthChecks'

interface HealthCheckModalProps {
  topic: HealthInfo | HealthTopic | null
  onClose: () => void
}

export function HealthCheckModal({ topic, onClose }: HealthCheckModalProps) {
  const [value, setValue] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    const fn = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', fn)
    return () => window.removeEventListener('keydown', fn)
  }, [onClose])

  if (!topic) return null

  // Normalize topic properties regardless of type
  const title = 'title' in topic ? topic.title : topic.name
  const relatedCalc = 'relatedCalculatorId' in topic ? topic.relatedCalculatorId : undefined

  // Find min/max and unit
  let minVal: number | undefined
  let maxVal: number | undefined
  let unitVal: string | undefined = ''
  let rangeLabel: string = ''

  if ('referenceRanges' in topic && topic.referenceRanges && topic.referenceRanges.length > 0) {
    const adultRange = topic.referenceRanges.find(r => r.ageGroup === 'Adult') || topic.referenceRanges[0]
    minVal = adultRange.min
    maxVal = adultRange.max
    unitVal = adultRange.unit
    rangeLabel = `${adultRange.range} ${adultRange.unit}`
  } else if ('min' in topic && 'max' in topic) {
    minVal = topic.min
    maxVal = topic.max
    unitVal = topic.unit
    rangeLabel = topic.range
  }

  const isMeasurable = minVal !== undefined && maxVal !== undefined
  const result = value && isMeasurable ? checkValue(title, Number(value), minVal!, maxVal!, unitVal) : null

  const handleCalculatorClick = () => {
    onClose()
    if (relatedCalc) {
      navigate(`/calculators?id=${relatedCalc}`)
    } else {
      navigate('/calculators')
    }
  }

  return (
    <div
      className="fixed inset-0 z-50 grid place-items-center bg-slate-950/45 p-4 backdrop-blur-xs"
      role="dialog"
      aria-modal="true"
      aria-labelledby="check-title"
      onMouseDown={onClose}
    >
      <div
        className="w-full max-w-md rounded-3xl bg-white p-6 sm:p-7 shadow-2xl border border-slate-100"
        onMouseDown={e => e.stopPropagation()}
      >
        <div className="flex items-start justify-between">
          <div>
            <span className="eyebrow">Personal check</span>
            <h2 id="check-title" className="mt-2 text-2xl font-extrabold text-ink">
              Check your {title.toLowerCase()}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="rounded-lg p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition"
            aria-label="Close check"
          >
            <X size={20} />
          </button>
        </div>

        {isMeasurable ? (
          <>
            <label className="label mt-6 block">
              Your reading {unitVal && `(${unitVal.trim()})`}
              <input
                autoFocus
                type="number"
                step="any"
                value={value}
                onChange={e => setValue(e.target.value)}
                className="input text-base"
                placeholder={rangeLabel ? `Adult reference: ${rangeLabel}` : 'Enter your value...'}
              />
            </label>

            {result && (
              <div
                className={`mt-5 rounded-2xl p-4 transition-all ${
                  result.state === 'Within'
                    ? 'bg-teal-50 border border-teal-200 text-teal-900'
                    : 'bg-amber-50 border border-amber-200 text-amber-950'
                }`}
              >
                <p className="font-bold text-sm">{result.state} the general reference range</p>
                <p className="mt-1 text-xs leading-5">{result.message}</p>
              </div>
            )}
          </>
        ) : (
          <div className="mt-6 rounded-2xl bg-teal-50 p-4 text-xs leading-6 text-teal-950 border border-teal-100">
            For <strong>{title}</strong>, explore our dedicated interactive health calculators for a tailored assessment.
          </div>
        )}

        <div className="mt-5 flex gap-2.5 rounded-2xl bg-slate-50 p-3.5 text-xs leading-5 text-slate-600 border border-slate-100">
          <AlertTriangle size={18} className="shrink-0 text-amber-600 mt-0.5" />
          <div>
            Reference ranges vary by laboratory equipment, age, sex, and individual health context. This reading checker provides educational reference matching—not medical diagnosis.
          </div>
        </div>

        {relatedCalc ? (
          <button onClick={handleCalculatorClick} className="btn-primary mt-5 w-full text-xs">
            Open Tailored {title} Calculator <ArrowRight size={16} />
          </button>
        ) : !isMeasurable ? (
          <button onClick={handleCalculatorClick} className="btn-primary mt-5 w-full text-xs">
            Explore All Calculators <ArrowRight size={16} />
          </button>
        ) : null}
      </div>
    </div>
  )
}
