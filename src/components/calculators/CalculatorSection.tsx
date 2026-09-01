import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { calculators } from '../../data/calculatorData'
import type { CalculatorCategory, CalculatorDefinition } from '../../types/health'
import { CalculatorCard } from './CalculatorCard'
import { CalculatorModal } from './CalculatorModal'

const categories: CalculatorCategory[] = ['Body & BMI', 'Nutrition', 'Lifestyle']

export function CalculatorSection() {
  const [selected, setSelected] = useState<CalculatorDefinition | null>(null)
  const [activeCategory, setActiveCategory] = useState<CalculatorCategory>('Body & BMI')
  const [searchParams] = useSearchParams()
  const requestedCalculator = searchParams.get('calculator')
  const requestedCategory = searchParams.get('category')
  useEffect(() => {
    const calculator = calculators.find(item => item.id === requestedCalculator)
    if (calculator) { setActiveCategory(calculator.category); setSelected(calculator); return }
    if (requestedCategory && categories.includes(requestedCategory as CalculatorCategory)) setActiveCategory(requestedCategory as CalculatorCategory)
  }, [requestedCalculator, requestedCategory])
  const visibleCalculators = calculators.filter(item => item.category === activeCategory)
  return <section id="calculators" className="section-space"><div className="container-page"><div className="max-w-2xl"><span className="eyebrow">Health calculators</span><h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">Practical health estimates, all in one place.</h2><p className="mt-3 leading-7 text-slate-600">Choose a calculator for a locally calculated, educational estimate. These tools do not provide medical diagnosis or personalised treatment advice.</p></div><div className="mt-9 border-y border-slate-200 py-4"><nav className="flex gap-2 overflow-x-auto pb-1" role="tablist" aria-label="Calculator categories">{categories.map(category => { const active = category === activeCategory; return <button key={category} role="tab" type="button" aria-selected={active} onClick={() => setActiveCategory(category)} className={`shrink-0 rounded-xl px-4 py-3 text-sm font-bold transition ${active ? 'bg-teal-600 text-white shadow-sm' : 'bg-white text-slate-600 hover:bg-teal-50 hover:text-teal-700'}`}>{category}<span className={`ml-2 rounded-full px-1.5 py-0.5 text-[10px] ${active ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500'}`}>{calculators.filter(item => item.category === category).length}</span></button>})}</nav></div><section className="mt-9" role="tabpanel" aria-label={`${activeCategory} calculators`}><div className="mb-5 flex items-center gap-3"><h3 className="text-xl font-extrabold tracking-tight text-ink">{activeCategory}</h3><span className="h-px flex-1 bg-slate-200"/><span className="text-xs font-bold text-slate-400">{visibleCalculators.length} tools</span></div><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{visibleCalculators.map(calculator=><CalculatorCard key={calculator.id} calculator={calculator} onOpen={setSelected}/>)}</div></section></div><CalculatorModal calculator={selected} onClose={() => setSelected(null)}/></section>
}
