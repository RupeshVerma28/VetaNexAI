import { ArrowRight, Bot, Calculator, ShieldCheck, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export function Hero() {
  return <section id="top" className="overflow-hidden bg-[radial-gradient(circle_at_80%_20%,#d7f0ec,transparent_28%),linear-gradient(#fbfdfc,#eff9f7)]">
    <div className="container-page grid min-h-[620px] items-center gap-12 py-16 lg:grid-cols-[1.1fr_.9fr] lg:py-24">
      <motion.div initial={{opacity:0,y:18}} animate={{opacity:1,y:0}} transition={{duration:.55}}>
        <span className="eyebrow"><Sparkles size={14}/> Wellness, made clearer</span>
        <h1 className="mt-5 max-w-3xl text-4xl font-extrabold leading-[1.08] tracking-tight text-ink sm:text-6xl">A more confident way to <span className="text-teal-600">understand</span> everyday health.</h1>
        <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">VitaNexAI is your AI-powered personal health assistant for plain-language information, practical wellness tools and thoughtful general guidance.</p>
        <div className="mt-8 flex flex-wrap gap-3"><Link to="/calculators" className="btn-primary">Explore health tools <ArrowRight size={17}/></Link><Link to="/library" className="btn-secondary">Explore health library</Link></div>
        <div className="mt-9 flex flex-wrap gap-5 text-sm font-semibold text-slate-600"><span className="flex items-center gap-2"><ShieldCheck size={18} className="text-teal-600"/> Educational, not diagnostic</span><span className="flex items-center gap-2"><Sparkles size={18} className="text-teal-600"/> No account needed</span></div>
      </motion.div>
      <motion.div initial={{opacity:0,scale:.96}} animate={{opacity:1,scale:1}} transition={{delay:.12,duration:.55}} className="relative mx-auto w-full max-w-md">
        <div className="rounded-[2rem] border border-white bg-white p-5 shadow-soft"><div className="flex items-center gap-3 border-b pb-4"><span className="grid h-11 w-11 place-items-center rounded-2xl bg-teal-600 text-white"><Bot/></span><div><p className="font-bold">VitaNexAI Assistant</p><p className="text-xs text-teal-600">Ready to support you</p></div></div><div className="space-y-4 py-5"><p className="max-w-[85%] rounded-2xl rounded-tl-sm bg-teal-50 p-3 text-sm leading-6 text-slate-700">Learn about common health measurements, wellness habits and useful next steps.</p><p className="ml-auto max-w-[75%] rounded-2xl rounded-tr-sm bg-teal-600 p-3 text-sm text-white">Where should I begin?</p><p className="max-w-[88%] rounded-2xl rounded-tl-sm bg-teal-50 p-3 text-sm leading-6 text-slate-700">Start with the Health Library, a calculator, or a general question.</p></div><Link to="/chatbot" className="flex items-center justify-between rounded-xl bg-slate-50 px-4 py-3 text-sm font-bold text-slate-600">Start a conversation <ArrowRight size={17}/></Link></div>
        <div className="absolute -bottom-7 -left-10 hidden rounded-2xl border bg-white p-4 shadow-soft sm:block"><Calculator className="text-teal-600"/><p className="mt-1 text-sm font-bold">Quick calculators</p></div>
      </motion.div>
    </div>
  </section>
}
