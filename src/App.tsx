import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import Footer from './components/Footer'
import SplashScreen from './components/SplashScreen'
import WhatsAppFAB from './components/WhatsAppFAB'
import Home from './pages/Home'
import Nosotros from './pages/Nosotros'
import FAQ from './pages/FAQ'
import Contacto from './pages/Contacto'
import Promociones from './pages/Promociones'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

function App() {
  const [showSplash, setShowSplash] = useState(() => {
    if (typeof window === 'undefined') return true
    return !sessionStorage.getItem('splashSeen')
  })

  useEffect(() => {
    if (showSplash) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [showSplash])

  const handleEnter = () => {
    sessionStorage.setItem('splashSeen', '1')
    setShowSplash(false)
  }

  return (
    <>
      <AnimatePresence mode="wait">
        {showSplash && <SplashScreen key="splash" onEnter={handleEnter} />}
      </AnimatePresence>
      <div className="min-h-screen flex flex-col">
        <ScrollToTop />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/promociones" element={<Promociones />} />
          </Routes>
        </main>
        <Footer />
      </div>
      <WhatsAppFAB />
    </>
  )
}

export default App
