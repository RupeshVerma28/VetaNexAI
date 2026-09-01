import { Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'

export function Logo({ compact = false }: { compact?: boolean }) {
  return <Link to="/" className="flex items-center gap-2.5" aria-label="VitaNexAI home">
    <span className="relative grid h-10 w-10 place-items-center rounded-xl bg-teal-600 text-white shadow-sm"><span className="text-xl font-black">+</span><Sparkles size={13} className="absolute -right-1 -top-1 rounded-full bg-teal-100 p-0.5 text-teal-700" /></span>
    {!compact && <span><span className="block text-lg font-extrabold tracking-tight text-ink">VitaNex<span className="text-teal-600">AI</span></span><span className="block text-[9px] font-bold uppercase tracking-[.14em] text-slate-400">Personal health assistant</span></span>}
  </Link>
}
