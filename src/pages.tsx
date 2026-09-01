import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ArrowRight, AlertCircle, Bot } from 'lucide-react'
import { CalculatorSection } from './components/calculators/CalculatorSection'
import { HealthChatbot } from './components/chatbot/HealthChatbot'
import { HealthLibrary } from './components/health-library/HealthLibrary'
import { Features } from './components/landing/Features'
import { Hero } from './components/landing/Hero'
import { HowItWorks } from './components/landing/HowItWorks'
import { UseCases } from './components/landing/UseCases'

export function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}
export function LandingPage() { return <><Hero/><Features/><UseCases/><HowItWorks/><section className="py-14 sm:py-20"><div className="container-page"><div className="rounded-3xl bg-teal-600 px-6 py-10 text-center text-white sm:px-12 sm:py-14"><p className="text-sm font-bold uppercase tracking-[.16em] text-teal-100">Start with a question</p><h2 className="mx-auto mt-3 max-w-2xl text-3xl font-extrabold tracking-tight sm:text-4xl">Explore the right VitaNexAI tool for you.</h2><div className="mt-7 flex flex-wrap justify-center gap-3"><Link to="/library" className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-teal-700 hover:bg-teal-50">Health Library <ArrowRight size={17}/></Link><Link to="/chatbot" className="inline-flex items-center gap-2 rounded-xl border border-white/40 px-5 py-3 text-sm font-bold text-white hover:bg-white/10"><Bot size={18}/> Try AI Health Chatbot</Link></div></div></div></section></> }
export function LibraryPage() { return <><PageIntro eyebrow="Your reference guide" title="Health Library" text="Browse easy-to-understand information about common health measurements and everyday wellbeing."/><HealthLibrary/></> }
export function CalculatorsPage() { return <><PageIntro eyebrow="Wellness tools" title="Health Calculators" text="Use practical, locally calculated estimates to better understand your everyday health."/><CalculatorSection/></> }
export function ChatbotPage() { return <><PageIntro eyebrow="General guidance" title="VitaNexAI Health Assistant" text="Have a thoughtful, safety-minded conversation about common health and wellness questions."/><HealthChatbot/></> }
function PageIntro({ eyebrow, title, text }: { eyebrow:string; title:string; text:string }) { return <section className="bg-ink py-14 text-white sm:py-20"><div className="container-page max-w-5xl"><span className="eyebrow !bg-white/10 !text-teal-100">{eyebrow}</span><h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">{title}</h1><p className="mt-4 max-w-2xl text-lg leading-7 text-slate-300">{text}</p></div></section> }
export function SafetyNote() { return <section className="py-10"><div className="container-page"><div className="flex gap-4 rounded-2xl border border-amber-200 bg-amber-50 p-5 text-amber-950"><AlertCircle className="mt-0.5 shrink-0 text-amber-700"/><div><h2 className="font-bold">A note about your health</h2><p className="mt-1 text-sm leading-6">VitaNexAI provides general health information and wellness guidance for educational purposes. It does not provide medical diagnosis or replace advice from a qualified healthcare professional. If you have severe, persistent or emergency symptoms, seek appropriate medical care.</p></div></div></div></section> }
