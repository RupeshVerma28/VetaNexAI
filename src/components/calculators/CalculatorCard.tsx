import { ArrowUpRight } from 'lucide-react'
import type { CalculatorDefinition } from '../../types/health'

export function CalculatorCard({ calculator, onOpen }: { calculator: CalculatorDefinition; onOpen: (calculator: CalculatorDefinition) => void }) {
  const Icon = calculator.icon
  return <article className="group flex min-h-[235px] flex-col rounded-2xl border bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-teal-200 hover:shadow-soft">
    <div className="flex items-start justify-between gap-3"><span className="grid h-11 w-11 place-items-center rounded-xl bg-teal-50 text-teal-700 transition group-hover:bg-teal-600 group-hover:text-white"><Icon size={21}/></span><span className="rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-slate-500">{calculator.category}</span></div>
    <h3 className="mt-5 text-lg font-bold tracking-tight text-ink">{calculator.title}</h3>
    <p className="mt-2 text-sm leading-6 text-slate-500">{calculator.description}</p>
    <button onClick={() => onOpen(calculator)} className="mt-auto flex items-center gap-1 pt-5 text-sm font-bold text-teal-700 transition group-hover:gap-2" aria-label={`Open ${calculator.title}`}>Open calculator <ArrowUpRight size={16}/></button>
  </article>
}
