import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Logo } from '../common/Logo'

const links = [['Library', '/library'], ['Calculators', '/calculators'], ['AI Assistant', '/chatbot']]
export function Navbar() {
  const [open, setOpen] = useState(false)
  return <header className="sticky top-0 z-40 border-b border-slate-100 bg-white/90 backdrop-blur">
    <div className="container-page flex h-16 items-center justify-between py-3">
      <Logo />
      <nav className="hidden items-center gap-7 md:flex" aria-label="Main navigation">{links.map(([name, href]) => <NavLink key={name} to={href} className={({isActive})=>`text-sm font-semibold transition hover:text-teal-700 ${isActive ? 'text-teal-700' : 'text-slate-600'}`}>{name}</NavLink>)}<Link to="/chatbot" className="btn-primary !px-4 !py-2.5">Try the assistant</Link></nav>
      <button className="rounded-lg p-2 text-slate-700 md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle navigation" aria-expanded={open}>{open ? <X /> : <Menu />}</button>
    </div>
    {open && <nav className="border-t bg-white px-5 py-4 md:hidden" aria-label="Mobile navigation">{links.map(([name, href]) => <Link key={name} to={href} onClick={() => setOpen(false)} className="block rounded-lg px-3 py-3 font-semibold text-slate-700 hover:bg-teal-50">{name}</Link>)}</nav>}
  </header>
}
