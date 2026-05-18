import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

interface SplashScreenProps {
  onEnter: () => void
}

const WELCOME_LINE_1 = 'BIENVENIDOS A'
const WELCOME_LINE_2 = 'CAÑEROS ESFORZA TOLUCA'

export default function SplashScreen({ onEnter }: SplashScreenProps) {
  // Phases:
  // 0 = letters falling
  // 1 = convocatoria image enters
  // 2 = button appears
  const [phase, setPhase] = useState(0)

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 2800) // letters done -> image (slower)
    const t2 = setTimeout(() => setPhase(2), 4400) // image settled -> button (slower)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [])

  return (
    <motion.div
      key="splash"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden bg-bg-dark px-4"
    >
      {/* Subtle gradient background — no heavy effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-deep/15 via-bg-dark to-bg-medium" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/[0.06] rounded-full blur-[160px]" />

      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-2xl text-center">

        {/* Phase 0: Falling letters */}
        <AnimatePresence mode="wait">
          {phase === 0 && (
            <motion.div
              key="letters"
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col items-center gap-2 sm:gap-3"
            >
              <FallingText text={WELCOME_LINE_1} className="text-2xl sm:text-4xl md:text-5xl font-black text-white tracking-wide" />
              <FallingText text={WELCOME_LINE_2} className="text-xl sm:text-3xl md:text-5xl font-black text-gradient-green tracking-wide" delay={0.6} />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Phase 1+: Convocatoria image */}
        <AnimatePresence>
          {phase >= 1 && (
            <motion.div
              key="conv-img"
              initial={{ opacity: 0, scale: 0.6, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative flex items-center justify-center"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/30 to-gold/20 blur-xl" />
              <img
                src="/images/misc/convocatoria.jpeg"
                alt="Convocatoria Cañeros Zacatepec"
                className="relative max-w-[80vw] max-h-[60vh] sm:max-h-[65vh] w-auto h-auto rounded-2xl ring-2 ring-primary/40 shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
                loading="eager"
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Phase 2: Button */}
        <AnimatePresence>
          {phase >= 2 && (
            <motion.button
              key="cta"
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, ease: 'backOut' }}
              onClick={onEnter}
              className="mt-6 sm:mt-8 group relative px-8 sm:px-10 py-3.5 sm:py-4 rounded-2xl bg-gradient-to-r from-primary to-accent text-bg-dark font-bold text-sm sm:text-base tracking-wide shadow-[0_10px_30px_rgba(74,222,128,0.35)] hover:shadow-[0_15px_45px_rgba(74,222,128,0.55)] hover:scale-[1.03] active:scale-[0.98] transition-all duration-200 flex items-center gap-3 animate-pulse-glow"
            >
              Conoce más
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-200" />
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-text-muted text-[10px] sm:text-xs tracking-[0.3em] font-medium">
        ¡HACER DEPORTE ES HACER PATRIA!
      </div>
    </motion.div>
  )
}

/* ─── Falling letters component ─── */
function FallingText({ text, className = '', delay = 0 }: { text: string; className?: string; delay?: number }) {
  return (
    <div className={`flex flex-wrap justify-center ${className}`}>
      {text.split('').map((char, i) => (
        <motion.span
          key={`${char}-${i}`}
          initial={{ y: -80, opacity: 0, rotate: -15 }}
          animate={{ y: 0, opacity: 1, rotate: 0 }}
          transition={{
            duration: 0.5,
            delay: delay + i * 0.07,
            ease: [0.34, 1.56, 0.64, 1],
          }}
          style={{ display: 'inline-block' }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </div>
  )
}
