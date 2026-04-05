import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Star, ChevronRight } from 'lucide-react'

const navLinks = [
  { to: '/', label: 'Inicio' },
  { to: '/nosotros', label: 'Nosotros' },
  { to: '/faq', label: 'FAQ' },
  { to: '/contacto', label: 'Contacto' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setMobileOpen(false) }, [location.pathname])

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'py-3 sm:py-2.5 bg-bg-dark/85 backdrop-blur-2xl shadow-[0_1px_0_0_rgba(255,255,255,0.04)] border-b border-white/[0.04]'
            : 'py-5 sm:py-6 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 flex items-center justify-between gap-6">
          {/* Logo — compact on mobile */}
          <Link to="/" className="flex items-center gap-2.5 sm:gap-3 group relative z-10 shrink-0">
            <div className="relative">
              <img
                src="/images/misc/logo1.png"
                alt="Esforza Cañeros Toluca"
                className={`transition-all duration-500 group-hover:scale-110 ${scrolled ? 'w-8 sm:w-9' : 'w-9 sm:w-11'}`}
              />
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <div className="flex flex-col">
              <span className="text-white font-bold text-sm sm:text-base tracking-[0.12em] leading-tight">
                ESFORZA
              </span>
              <span className="text-primary text-[10px] sm:text-xs font-semibold tracking-[0.2em] leading-tight">
                CAÑEROS
              </span>
            </div>
          </Link>

          {/* Desktop nav — evenly distributed */}
          <div className="hidden lg:flex items-center gap-8">
            <div className="flex items-center gap-2 bg-white/[0.03] border border-white/[0.06] rounded-2xl px-3 py-2">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="relative px-6 py-2.5 rounded-xl font-medium text-sm transition-all duration-300 group"
                >
                  {location.pathname === link.to && (
                    <motion.div
                      layoutId="nav-active"
                      className="absolute inset-0 bg-primary/10 border border-primary/20 rounded-xl"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
                    />
                  )}
                  <span className={`relative z-10 transition-colors duration-300 ${
                    location.pathname === link.to
                      ? 'text-primary font-semibold'
                      : 'text-text-secondary group-hover:text-white'
                  }`}>
                    {link.label}
                  </span>
                </Link>
              ))}
            </div>

            <Link
              to="/promociones"
              className={`px-6 py-3 rounded-xl font-semibold text-sm border transition-all duration-400 flex items-center gap-2.5 group ${
                location.pathname === '/promociones'
                  ? 'bg-gradient-to-r from-gold to-gold-light text-bg-dark border-gold/50 shadow-[0_0_20px_rgba(245,158,11,0.25)]'
                  : 'text-gold border-gold/30 hover:bg-gold/10 hover:border-gold/50 hover:shadow-[0_0_20px_rgba(245,158,11,0.15)]'
              }`}
            >
              <Star size={14} fill="currentColor" />
              Promociones
              <ChevronRight size={14} className="opacity-0 -ml-1 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden relative w-11 h-11 flex items-center justify-center rounded-xl bg-white/[0.05] border border-white/[0.08] text-white hover:bg-white/[0.1] transition-all duration-300"
          >
            <AnimatePresence mode="wait">
              {mobileOpen ? (
                <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <X size={20} />
                </motion.div>
              ) : (
                <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <Menu size={20} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </nav>

      {/* Mobile menu — full overlay with generous spacing */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-bg-dark/98 backdrop-blur-2xl lg:hidden"
          >
            {/* Close button at top */}
            <div className="absolute top-5 right-4">
              <button
                onClick={() => setMobileOpen(false)}
                className="w-11 h-11 flex items-center justify-center rounded-xl bg-white/[0.05] border border-white/[0.08] text-white"
              >
                <X size={20} />
              </button>
            </div>

            <div className="flex flex-col justify-center items-center h-full gap-4 px-6 sm:px-10">
              {/* Logo in menu */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="mb-8"
              >
                <img src="/images/misc/logo1.png" alt="Logo" className="w-16 mx-auto" />
              </motion.div>

              {navLinks.map((link, i) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ delay: i * 0.07, duration: 0.35 }}
                  className="w-full max-w-xs"
                >
                  <Link
                    to={link.to}
                    className={`flex items-center justify-between w-full px-7 py-5 rounded-2xl text-base font-medium transition-all duration-300 ${
                      location.pathname === link.to
                        ? 'text-primary bg-primary/10 border border-primary/20'
                        : 'text-text-secondary hover:text-white hover:bg-white/[0.04] border border-transparent'
                    }`}
                  >
                    {link.label}
                    <ChevronRight size={16} className="opacity-30" />
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ delay: 0.3, duration: 0.35 }}
                className="w-full max-w-xs mt-6"
              >
                <Link
                  to="/promociones"
                  className="flex items-center justify-center gap-3 w-full px-7 py-5 rounded-2xl font-bold text-base bg-gradient-to-r from-gold to-gold-light text-bg-dark"
                >
                  <Star size={16} fill="currentColor" />
                  Promociones
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
