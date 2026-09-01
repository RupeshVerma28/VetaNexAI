import { Route, Routes } from 'react-router-dom'
import { Footer } from './components/layout/Footer'
import { Navbar } from './components/layout/Navbar'
import { CalculatorsPage, ChatbotPage, LandingPage, LibraryPage, SafetyNote, ScrollToTop } from './pages'

export default function App() {
  return <><ScrollToTop/><Navbar/><main><Routes><Route path="/" element={<LandingPage/>}/><Route path="/library" element={<LibraryPage/>}/><Route path="/calculators" element={<CalculatorsPage/>}/><Route path="/chatbot" element={<ChatbotPage/>}/><Route path="*" element={<LandingPage/>}/></Routes><SafetyNote/></main><Footer/></>
}
