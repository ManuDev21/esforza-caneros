import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'

interface SplashScreenProps {
  onEnter: () => void
}

export default function SplashScreen({ onEnter }: SplashScreenProps) {
  const [phase, setPhase] = useState<'loading' | 'reveal' | 'cta'>('loading')

  useEffect(() => {
    const t1 = setTimeout(() => setPhase('reveal'), 1400)
    const t2 = setTimeout(() => setPhase('cta'), 2400)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [])

  return (
    <AnimatePresence>
      <motion.div
        key="splash"
        exit={{ opacity: 0, scale: 1.05 }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
        className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden bg-bg-dark"
      >
        {/* Background gradient + grid */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-deep/20 via-bg-dark to-bg-medium" />
        <div className="absolute inset-0 bg-grid-pattern opacity-40" />

        {/* Decorative orbs */}
        <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-primary/[0.08] rounded-full blur-[180px]" />
        <div className="absolute bottom-1/4 -right-32 w-[500px] h-[500px] bg-gold/[0.05] rounded-full blur-[180px]" />

        {/* Floating soccer balls */}
        {[
          { top: '8%', left: '10%', size: 28, delay: 0 },
          { top: '15%', right: '12%', size: 38, delay: 1.5 },
          { bottom: '15%', left: '8%', size: 32, delay: 2.8 },
          { bottom: '10%', right: '15%', size: 26, delay: 0.8 },
          { top: '50%', left: '5%', size: 22, delay: 4 },
          { top: '40%', right: '6%', size: 30, delay: 2 },
        ].map((ball, i) => (
          <div
            key={i}
            className="absolute opacity-40 text-white animate-float-3d hidden sm:block"
            style={{ ...ball, animationDelay: `${ball.delay}s`, fontSize: ball.size }}
          >
            ⚽
          </div>
        ))}

        <div className="relative z-10 flex flex-col items-center justify-center px-6 max-w-2xl text-center">
          {/* Rotating loader with image */}
          <div className="relative mb-8 sm:mb-10">
            {/* Rotating outer ring */}
            <motion.div
              initial={{ scale: 0, rotate: -180, opacity: 0 }}
              animate={{ scale: 1, rotate: 0, opacity: 1 }}
              transition={{ duration: 1.0, ease: 'easeOut' }}
              className="relative"
            >
              {/* Outer rotating ring (slow) */}
              <div className="absolute -inset-4 sm:-inset-6 rounded-full border-2 border-dashed border-primary/40 animate-spin-slow" />
              {/* Middle reverse ring */}
              <div className="absolute -inset-2 sm:-inset-3 rounded-full border-2 border-gold/30 border-dashed animate-spin-reverse" />

              {/* Pulse rings */}
              <div className="absolute inset-0 rounded-2xl bg-primary/20 animate-pulse-ring" />
              <div className="absolute inset-0 rounded-2xl bg-primary/10 animate-pulse-ring" style={{ animationDelay: '1.2s' }} />

              {/* The convocatoria image */}
              <motion.div
                animate={
                  phase === 'loading'
                    ? { rotate: 360 }
                    : { rotate: 0, scale: [1, 1.02, 1] }
                }
                transition={
                  phase === 'loading'
                    ? { duration: 1.4, ease: 'easeInOut', repeat: 0 }
                    : { duration: 2.4, repeat: Infinity, ease: 'easeInOut' }
                }
                className="relative w-44 h-64 sm:w-56 sm:h-80 md:w-64 md:h-96 rounded-2xl overflow-hidden ring-4 ring-primary/40 shadow-[0_0_60px_rgba(74,222,128,0.4)]"
              >
                <img
                  src="/images/misc/convocatoria.jpeg"
                  alt="Convocatoria Cañeros Zacatepec"
                  className="w-full h-full object-cover"
                />
                {/* Shine overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent" />
              </motion.div>
            </motion.div>
          </div>

          {/* Title — appears after rotation */}
          <AnimatePresence>
            {phase !== 'loading' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="text-center"
              >
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/10 border border-gold/20 text-gold text-[11px] sm:text-xs font-bold tracking-[0.2em] mb-4 sm:mb-5">
                  <Sparkles size={12} />
                  CONVOCATORIA ABIERTA
                </div>
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-black leading-tight mb-3">
                  <span className="text-white">ESFORZA </span>
                  <span className="text-gradient-green">CAÑEROS</span>
                </h1>
                <p className="text-text-secondary text-sm sm:text-base mb-7 sm:mb-9 max-w-md mx-auto leading-relaxed px-2">
                  Zacatepec · Campus Toluca Aeropuerto
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* CTA button — appears last with pulse */}
          <AnimatePresence>
            {phase === 'cta' && (
              <motion.button
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.5, ease: 'backOut' }}
                onClick={onEnter}
                className="group relative px-7 sm:px-10 py-4 sm:py-4.5 rounded-2xl bg-gradient-to-r from-primary to-accent text-bg-dark font-bold text-sm sm:text-base tracking-wide shadow-[0_10px_40px_rgba(74,222,128,0.4)] hover:shadow-[0_15px_50px_rgba(74,222,128,0.6)] hover:scale-[1.04] transition-all duration-300 flex items-center gap-3 animate-pulse-glow"
              >
                <span className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-primary to-accent opacity-50 blur-md group-hover:opacity-80 transition-opacity" />
                <span className="relative flex items-center gap-3">
                  Conoce sobre nosotros
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.button>
            )}
          </AnimatePresence>
        </div>

        {/* Bottom decoration */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-text-muted text-[10px] sm:text-xs tracking-[0.3em] font-medium">
          ¡HACER DEPORTE ES HACER PATRIA!
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
