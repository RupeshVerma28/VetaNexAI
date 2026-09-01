import { BookOpen, Calculator, MessageCircleQuestion } from 'lucide-react'

const useCases = [
  { icon: BookOpen, title: 'Understand a reading', text: 'Learn what common measurements may mean and why context matters.' },
  { icon: Calculator, title: 'Plan a wellness habit', text: 'Use simple, local estimates to support everyday health goals.' },
  { icon: MessageCircleQuestion, title: 'Ask a general question', text: 'Explore health and wellness topics in clear, cautious language.' }
]

export function UseCases() { return <section className="section-space bg-[#f2faf8]"><div className="container-page"><div className="mx-auto max-w-2xl text-center"><span className="eyebrow">Built for everyday questions</span><h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">Ways VitaNexAI can support your health journey.</h2></div><div className="mt-10 grid gap-5 md:grid-cols-3">{useCases.map(({icon:Icon,title,text})=><article key={title} className="rounded-2xl border border-white bg-white p-7 text-center shadow-sm"><span className="mx-auto grid h-12 w-12 place-items-center rounded-2xl bg-teal-50 text-teal-700"><Icon size={24}/></span><h3 className="mt-5 text-lg font-bold">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-500">{text}</p></article>)}</div></div></section> }
