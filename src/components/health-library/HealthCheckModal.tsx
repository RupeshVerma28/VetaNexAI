import { X, AlertTriangle } from 'lucide-react'
import { useEffect, useState } from 'react'
import type { HealthTopic } from '../../types/health'
import { checkValue } from '../../utils/healthChecks'

export function HealthCheckModal({ topic, onClose }: { topic: HealthTopic | null; onClose: () => void }) {
  const [value, setValue] = useState('')
  useEffect(() => { const fn = (e: KeyboardEvent) => e.key === 'Escape' && onClose(); window.addEventListener('keydown', fn); return () => window.removeEventListener('keydown', fn) }, [onClose])
  if (!topic) return null
  const isMeasurable = topic.min !== undefined && topic.max !== undefined
  const result = value && isMeasurable ? checkValue(topic.name, Number(value), topic.min!, topic.max!, topic.unit) : null
  return <div className="fixed inset-0 z-50 grid place-items-center bg-slate-950/45 p-4" role="dialog" aria-modal="true" aria-labelledby="check-title" onMouseDown={onClose}><div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl" onMouseDown={e=>e.stopPropagation()}><div className="flex items-start justify-between"><div><span className="eyebrow">Personal check</span><h2 id="check-title" className="mt-3 text-2xl font-extrabold">Check your {topic.name.toLowerCase()}</h2></div><button onClick={onClose} className="rounded-lg p-2 text-slate-500 hover:bg-slate-100" aria-label="Close check"><X/></button></div>{isMeasurable ? <><label className="label mt-6 block">Your reading {topic.unit && `(${topic.unit.trim()})`}<input autoFocus type="number" step="any" value={value} onChange={e=>setValue(e.target.value)} className="input" placeholder={`Reference: ${topic.range}`}/></label>{result && <div className={`mt-5 rounded-xl p-4 ${result.state === 'Within' ? 'bg-teal-50 text-teal-900' : 'bg-amber-50 text-amber-950'}`}><p className="font-bold">{result.state} the general range</p><p className="mt-1 text-sm leading-6">{result.message}</p></div>}</> : <div className="mt-6 rounded-xl bg-teal-50 p-4 text-sm leading-6 text-teal-950">For {topic.name.toLowerCase()}, use the relevant calculator below for a tailored general estimate.</div>}<div className="mt-6 flex gap-2 rounded-xl bg-slate-50 p-3 text-xs leading-5 text-slate-600"><AlertTriangle size={18} className="shrink-0 text-amber-600"/>Reference ranges vary with age, personal factors, measurement method and clinical or laboratory standards. This is not a diagnosis.</div>{!isMeasurable && <a href="#calculators" onClick={onClose} className="btn-primary mt-5 w-full">Open calculators</a>}</div></div>
}
