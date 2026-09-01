import { ArrowUpRight } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { healthTopics } from '../../data/healthData'
import type { HealthTopic } from '../../types/health'
import { HealthCheckModal } from './HealthCheckModal'

export function HealthLibrary() {
  const [topic, setTopic] = useState<HealthTopic | null>(null)
  const [searchParams] = useSearchParams()
  const requestedTopic = searchParams.get('check')
  useEffect(() => {
    if (requestedTopic) setTopic(healthTopics.find(item => item.id === requestedTopic) ?? null)
  }, [requestedTopic])
  return <section id="library" className="section-space bg-[#f2faf8]"><div className="container-page"><div className="max-w-xl"><span className="eyebrow">Health library</span><h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">Everyday health, made easy to read.</h2><p className="mt-3 leading-7 text-slate-600">Quick reference guides are a good starting point—not a replacement for personal medical advice.</p></div><div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">{healthTopics.map(item => { const Icon = item.icon; return <article key={item.id} className="flex min-h-[230px] flex-col rounded-2xl border border-white bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-soft"><span className="grid h-10 w-10 place-items-center rounded-xl bg-teal-50 text-teal-700"><Icon size={20}/></span><h3 className="mt-4 font-bold">{item.name}</h3><p className="mt-2 text-sm leading-5 text-slate-500">{item.description}</p><p className="mt-3 text-xs font-bold text-teal-700">{item.range}</p><button onClick={() => setTopic(item)} className="mt-auto flex items-center gap-1 pt-5 text-sm font-bold text-slate-700 hover:text-teal-700">Check yours <ArrowUpRight size={16}/></button></article> })}</div></div><HealthCheckModal topic={topic} onClose={() => setTopic(null)}/></section>
}
