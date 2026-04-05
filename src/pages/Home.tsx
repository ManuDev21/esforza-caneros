import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Trophy, Clock, Users, X, Play, ArrowRight, Quote, Award, Sparkles, Eye, Star, ImagePlus, Video, Baby, Calendar } from 'lucide-react'
import AnimatedSection from '../components/AnimatedSection'
import OptImage from '../components/OptImage'
import LazyVideo from '../components/LazyVideo'

/* ── Data ───────────────────────────────────────────────── */

const typedStrings = [
  'Formamos a los campeones del mañana.',
  'Disciplina, pasión y trabajo en equipo.',
  'Únete a la familia Cañeros.',
]

const championImages = Array.from({ length: 30 }, (_, i) => `/images/champions/camp${i + 1}.jpg`)

const nuevoImages = [
  'nuevo2.jpeg', 'nuevo3.jpeg', 'nuevo4.jpeg', 'nuevo5.jpeg', 'nuevo6.jpeg',
  'nuevo7.jpeg', 'nuevo8.jpeg', 'nuevo9.jpeg', 'nuevo10.jpeg', 'nuevo11.jpeg', 'nuevo12.jpeg',
].map(f => `/images/nuevo/${f}`)

const galleryC = [
  'c12.jpg', 'c3.jpg', 'c4.jpg', 'c5.jpg', 'c6.jpg',
  'c7.jpg', 'c8.jpg', 'c9.jpg', 'c10.jpg', 'c11.jpg', 'c2.jpg',
].map(f => `/images/gallery/${f}`)

const videoGallery = [
  { src: '/videos/nuevo/nuevoV1.mov', type: 'video' },
  { src: '/videos/nuevo/nuevoV2.mov', type: 'video' },
  { src: '/videos/nuevo/nuevoV3.mov', type: 'video' },
  { src: '/videos/nuevo/nuevoV4.mov', type: 'video' },
  { src: '/videos/nuevo/nuevoV5.mov', type: 'video' },
  { src: '/videos/nuevo/nuevoV6.mov', type: 'video' },
  { src: '/videos/gallery/v1.mp4', type: 'video' },
  { src: '/videos/gallery/v4.mp4', type: 'video' },
  { src: '/videos/gallery/v9.mp4', type: 'video' },
  { src: '/images/gallery/g1.jpg', type: 'image' },
  { src: '/videos/gallery/v2.mp4', type: 'video' },
  { src: '/videos/gallery/v5.mp4', type: 'video' },
  { src: '/videos/gallery/v7.mp4', type: 'video' },
  { src: '/images/gallery/g2.jpg', type: 'image' },
  { src: '/videos/gallery/v3.mp4', type: 'video' },
  { src: '/videos/gallery/v6.mp4', type: 'video' },
  { src: '/videos/gallery/v8.mp4', type: 'video' },
  { src: '/images/gallery/g4.jpg', type: 'image' },
]

const contenidoItems = [
  ...Array.from({ length: 9 }, (_, i) => ({ src: `/videos/contenido/Contenido${i + 1}.mp4`, type: 'video' as const })),
  { src: '/images/contenido/Contenido10.jpg', type: 'image' as const },
  { src: '/images/contenido/Contenido11.jpg', type: 'image' as const },
  { src: '/images/contenido/Contenido12.jpg', type: 'image' as const },
  ...Array.from({ length: 5 }, (_, i) => ({ src: `/videos/contenido/Contenido${i + 13}.mp4`, type: 'video' as const })),
  { src: '/videos/contenido/contenido18.mp4', type: 'video' as const },
]

const coaches = [
  { name: 'Prof. Jesus Ruben Arroyo Delgado', role: 'Director Técnico', img: '/images/coaches/profe1.jpg', badge: '/images/coaches/t1.jpg' },
  { name: 'Prof. Wily Arroyo', role: 'Entrenador', img: '/images/coaches/profe2.jpg' },
  { name: 'Prof. Manuel Rodriguez Calderon', role: 'Entrenador', img: '/images/coaches/profe3.jpg' },
  { name: 'Prof. Diego Aldair', role: 'Entrenador', img: '/images/coaches/profe4.jpeg' },
]

const testimonials = [
  { text: 'Entrenar aquí me ha hecho mejorar muchísimo. ¡Ahora soy el goleador de mi equipo gracias a mi desempeño y dedicación!', author: 'Diego Ramírez', role: 'Alumno Cat. 2012' },
  { text: 'Los entrenadores son súper dedicados y el ambiente es increíble. ¡Me encanta venir a cada entrenamiento me la paso muy bien!', author: 'Sofía Méndez', role: 'Alumna Cat. 2014' },
  { text: 'Aprendí a jugar en equipo, a pasar mejor y hasta mejorar mi condición física. ¡Es una experiencia genial!', author: 'Luis Torres', role: 'Alumno Cat. 2010' },
]

const stats = [
  { icon: Trophy, value: '6', label: 'Títulos', color: 'text-gold' },
  { icon: Users, value: '500+', label: 'Alumnos', color: 'text-primary' },
  { icon: Award, value: '30+', label: 'Años', color: 'text-secondary' },
  { icon: Sparkles, value: '4', label: 'Profes', color: 'text-accent' },
]

/* ── New Sections Data ─────────────────────────────────── */

const visoriaMedia: { src: string; type: 'image' | 'video' }[] = [
  { src: '/images/visoriaNuv/visoriaNuv.jpeg', type: 'image' },
]

const campeonatoNuevoMedia: { src: string; type: 'image' | 'video' }[] = [
  { src: '/images/campNuv/campNuv2.jpeg', type: 'image' },
  { src: '/images/campNuv/campNuv3.jpeg', type: 'image' },
  { src: '/images/campNuv/campNuv4.jpeg', type: 'image' },
  { src: '/images/campNuv/campNuv5.jpeg', type: 'image' },
  { src: '/images/campNuv/campNuv6.jpeg', type: 'image' },
  { src: '/images/campNuv/campNuv7.jpeg', type: 'image' },
  { src: '/images/campNuv/campNuv9.jpeg', type: 'image' },
  { src: '/images/campNuv/campNuv10.jpeg', type: 'image' },
  { src: '/images/campNuv/CampNuv11.jpeg', type: 'image' },
  { src: '/images/campNuv/CampNuv12.jpeg', type: 'image' },
  { src: '/videos/campNuv/campNuv1.mp4', type: 'video' },
  { src: '/videos/campNuv/campNuv8.mp4', type: 'video' },
  { src: '/videos/campNuv/CampNuv13.mp4', type: 'video' },
  { src: '/videos/campNuv/campNuv14.mp4', type: 'video' },
  { src: '/videos/campNuv/campNuv15.mp4', type: 'video' },
]

// Posada Navideña — descomentar cuando haya contenido visual
// const posadaMedia: { src: string; type: 'image' | 'video' }[] = []

const ponysMedia: { src: string; type: 'image' | 'video' }[] = [
  { src: '/videos/pequeNuv/pequeNuv1.mp4', type: 'video' },
  { src: '/videos/pequeNuv/pequeNuv2.mp4', type: 'video' },
  { src: '/videos/pequeNuv/pequeNuv3.mp4', type: 'video' },
  { src: '/images/pequeNuv/pequeNuv4.jpeg', type: 'image' },
  { src: '/videos/pequeNuv/pequeNuv5.mp4', type: 'video' },
  { src: '/videos/pequeNuv/pequeNuv6.mp4', type: 'video' },
  { src: '/videos/pequeNuv/pequeNuv7.mp4', type: 'video' },
  { src: '/videos/pequeNuv/pequeNuv8.mp4', type: 'video' },
  { src: '/videos/pequeNuv/pequeNuv9.mp4', type: 'video' },
]

/* ── Hooks ──────────────────────────────────────────────── */

function useTyped(strings: string[], typeSpeed = 50, backSpeed = 25, backDelay = 2000) {
  const [text, setText] = useState('')
  const [strIdx, setStrIdx] = useState(0)
  const [charIdx, setCharIdx] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const current = strings[strIdx]
    let timeout: ReturnType<typeof setTimeout>
    if (!isDeleting && charIdx < current.length) {
      timeout = setTimeout(() => { setText(current.slice(0, charIdx + 1)); setCharIdx(charIdx + 1) }, typeSpeed)
    } else if (!isDeleting && charIdx === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), backDelay)
    } else if (isDeleting && charIdx > 0) {
      timeout = setTimeout(() => { setText(current.slice(0, charIdx - 1)); setCharIdx(charIdx - 1) }, backSpeed)
    } else if (isDeleting && charIdx === 0) {
      setIsDeleting(false)
      setStrIdx((strIdx + 1) % strings.length)
    }
    return () => clearTimeout(timeout)
  }, [charIdx, isDeleting, strIdx, strings, typeSpeed, backSpeed, backDelay])

  return text
}

/* ── Sub-components ─────────────────────────────────────── */

function Carousel({ images, autoInterval = 3500 }: { images: string[]; autoInterval?: number }) {
  const [idx, setIdx] = useState(0)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const start = () => { timerRef.current = setInterval(() => setIdx(p => (p + 1) % images.length), autoInterval) }
  const stop = () => { if (timerRef.current) clearInterval(timerRef.current) }
  useEffect(() => { start(); return stop }, [images.length])
  const go = (dir: number) => { stop(); setIdx(p => (p + dir + images.length) % images.length); start() }

  return (
    <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden group ring-1 ring-white/[0.06]">
      <div className="aspect-[4/3] sm:aspect-[16/9] relative bg-bg-card min-h-[220px]">
        {images.map((src, i) => (
          <OptImage key={src} src={src} alt={`Slide ${i + 1}`}
            className={`absolute inset-0 w-full h-full transition-all duration-1000 ${i === idx ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`} />
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/40 via-transparent to-transparent" />
      </div>
      <button onClick={() => go(-1)} className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl glass text-white flex items-center justify-center opacity-80 sm:opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-primary hover:text-bg-dark">
        <ChevronLeft size={20} />
      </button>
      <button onClick={() => go(1)} className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl glass text-white flex items-center justify-center opacity-80 sm:opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-primary hover:text-bg-dark">
        <ChevronRight size={20} />
      </button>
      <div className="absolute bottom-4 sm:bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <button key={i} onClick={() => { stop(); setIdx(i); start() }}
            className={`h-2 rounded-full transition-all duration-500 ${i === idx ? 'bg-primary w-8' : 'bg-white/40 w-2 hover:bg-white/60'}`} />
        ))}
      </div>
    </div>
  )
}

function Lightbox({ src, type, onClose }: { src: string; type: string; onClose: () => void }) {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4" onClick={onClose}>
      <motion.button initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
        onClick={onClose} className="absolute top-6 right-6 w-12 h-12 rounded-2xl glass text-white hover:text-primary flex items-center justify-center z-10 transition-colors">
        <X size={24} />
      </motion.button>
      <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ type: 'spring', bounce: 0.2 }}
        onClick={e => e.stopPropagation()} className="max-w-5xl w-full max-h-[90vh]">
        {type === 'video' ? (
          <video src={src} controls autoPlay className="w-full max-h-[85vh] rounded-2xl" />
        ) : (
          <img src={src} alt="" className="w-full max-h-[85vh] object-contain rounded-2xl" />
        )}
      </motion.div>
    </motion.div>
  )
}

function SectionLabel({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3 mb-5 sm:mb-6">
      <div className="w-8 sm:w-10 h-px bg-gradient-to-r from-primary to-transparent" />
      <span className="text-xs sm:text-sm font-semibold tracking-[0.2em] sm:tracking-[0.25em] text-primary uppercase">{text}</span>
    </div>
  )
}

function MediaCard({ item, onClick }: { item: { src: string; type: string }; onClick: () => void }) {
  return (
    <button onClick={onClick}
      className="w-full glass-card rounded-2xl overflow-hidden group cursor-pointer hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] transition-all duration-500">
      {item.type === 'video' ? (
        <div className="relative aspect-[4/3]">
          <video src={item.src} className="w-full h-full object-cover" muted loop preload="metadata" />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="w-14 h-14 rounded-full bg-primary/90 flex items-center justify-center">
              <Play size={22} className="text-bg-dark ml-1" fill="currentColor" />
            </div>
          </div>
        </div>
      ) : (
        <OptImage src={item.src} alt="" className="aspect-[4/3] group-hover:scale-105 transition-transform duration-700" />
      )}
    </button>
  )
}

function InfoCard({ img, icon: Icon, title, description, children }: { img: string; icon: typeof Trophy; title: string; description: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="glass-card rounded-2xl sm:rounded-3xl overflow-hidden hover:shadow-[0_20px_60px_rgba(0,232,123,0.08)] hover:-translate-y-1 transition-all duration-500 flex flex-col h-full">
      <div className="relative">
        <OptImage src={img} alt={title} className="w-full h-52 sm:h-56" />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-card via-transparent to-transparent" />
        <div className="absolute bottom-4 left-5 w-12 h-12 rounded-xl bg-primary/20 backdrop-blur-sm border border-primary/30 flex items-center justify-center">
          <Icon size={20} className="text-primary" />
        </div>
      </div>
      <div className="p-6 sm:p-8 flex flex-col flex-1">
        <h5 className="text-white font-bold text-lg sm:text-xl mb-2 sm:mb-3">{title}</h5>
        <p className="text-text-muted text-sm sm:text-base mb-6 leading-relaxed">{description}</p>
        <button onClick={() => setOpen(!open)}
          className="mt-auto self-start px-6 py-3 rounded-xl text-sm font-semibold tracking-wide border transition-all duration-300 flex items-center gap-2.5 group/btn border-primary/30 text-primary hover:bg-primary hover:text-bg-dark">
          {open ? 'Ver menos' : 'Ver más'}
          <ArrowRight size={14} className={`transition-transform duration-300 ${open ? 'rotate-90' : 'group-hover/btn:translate-x-0.5'}`} />
        </button>
        <AnimatePresence>
          {open && (
            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.4 }} className="overflow-hidden">
              <div className="mt-6 pt-6 border-t border-white/[0.06] space-y-4">{children}</div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

function MediaSlot({ type }: { type: 'image' | 'video' }) {
  return (
    <div className="aspect-[4/3] rounded-2xl border-2 border-dashed border-white/[0.12] bg-white/[0.02] flex flex-col items-center justify-center gap-3 hover:border-primary/30 hover:bg-primary/[0.02] transition-all duration-300 cursor-default">
      {type === 'image' ? (
        <ImagePlus size={32} className="text-white/20" />
      ) : (
        <Video size={32} className="text-white/20" />
      )}
      <span className="text-white/20 text-xs sm:text-sm font-medium tracking-wide">
        {type === 'image' ? 'Insertar imagen' : 'Insertar video'}
      </span>
    </div>
  )
}

function MediaGrid({ items, onClickItem, emptySlots = 6 }: { items: { src: string; type: 'image' | 'video' }[]; onClickItem: (item: { src: string; type: string }) => void; emptySlots?: number }) {
  const placeholders = items.length < emptySlots ? emptySlots - items.length : 0
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:gap-6">
      {items.map((item, i) => (
        <AnimatedSection key={item.src} direction="zoom" delay={Math.min(i * 0.05, 0.4)}>
          {item.type === 'video' ? (
            <button onClick={() => onClickItem(item)} className="w-full glass-card rounded-2xl overflow-hidden group cursor-pointer hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] transition-all duration-500">
              <div className="relative aspect-[4/3]">
                <LazyVideo src={item.src} className="w-full h-full" muted loop />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-14 h-14 rounded-full bg-primary/90 flex items-center justify-center">
                    <Play size={22} className="text-bg-dark ml-1" fill="currentColor" />
                  </div>
                </div>
              </div>
            </button>
          ) : (
            <button onClick={() => onClickItem(item)} className="w-full glass-card rounded-2xl overflow-hidden group cursor-pointer hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] transition-all duration-500">
              <OptImage src={item.src} alt="" className="aspect-[4/3] group-hover:scale-105 transition-transform duration-700" />
            </button>
          )}
        </AnimatedSection>
      ))}
      {Array.from({ length: placeholders }, (_, i) => (
        <AnimatedSection key={`slot-${i}`} direction="zoom" delay={Math.min((items.length + i) * 0.05, 0.4)}>
          <MediaSlot type={i % 2 === 0 ? 'image' : 'video'} />
        </AnimatedSection>
      ))}
    </div>
  )
}

/* ── Main Component ─────────────────────────────────────── */

export default function Home() {
  const typedText = useTyped(typedStrings)
  const [lightbox, setLightbox] = useState<{ src: string; type: string } | null>(null)

  return (
    <div className="noise-bg">
      {/* ═══ Video Promocional ═══ */}
      <section className="relative w-full bg-black">
        <video
          className="w-full max-h-[80vh] object-contain mx-auto"
          src="/videos/promo/promocionfinal.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
      </section>

      {/* ═══ Hero ═══ */}
      <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center scale-110" style={{ backgroundImage: `url('/images/heroes/hero2.png')` }} />
        <div className="absolute inset-0 bg-gradient-to-b from-bg-dark/60 via-bg-dark/40 to-bg-dark" />
        {/* Decorative orbs */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/8 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-secondary/8 rounded-full blur-[150px]" />

        <div className="relative z-10 max-w-5xl mx-auto px-7 sm:px-10">
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-white/[0.05] border border-white/[0.08] text-text-secondary text-xs sm:text-sm font-medium tracking-wide mb-8 sm:mb-10">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Escuela de Fútbol desde 1995
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black leading-[1.08]">
            <span className="text-white">BIENVENIDOS A</span>
            <br />
            <span className="text-gradient">ESFORZA CAÑEROS</span>
            <br />
            <span className="text-white text-xl sm:text-2xl md:text-4xl lg:text-5xl tracking-wide">ZACATEPEC</span>
            <br />
            <span className="text-gradient text-lg sm:text-xl md:text-3xl lg:text-4xl tracking-widest">CAMPUS TOLUCA AEROPUERTO</span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-8 sm:mt-10 text-lg sm:text-xl lg:text-2xl text-primary font-medium min-h-[1.8em]">
            {typedText}<span className="animate-pulse ml-0.5 text-primary/60">|</span>
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5">
            <a href="#championship" className="w-full sm:w-auto px-10 py-4.5 bg-primary text-bg-dark font-bold text-base tracking-wide rounded-2xl hover:shadow-[0_0_30px_rgba(0,232,123,0.3)] hover:scale-[1.03] transition-all duration-300 flex items-center justify-center gap-3">
              Explorar <ArrowRight size={18} />
            </a>
            <a href="#gallery-videos" className="w-full sm:w-auto px-10 py-4.5 glass text-white font-medium text-base tracking-wide rounded-2xl hover:bg-white/[0.08] transition-all duration-300 flex items-center justify-center gap-3">
              <Play size={18} /> Ver Galería
            </a>
          </motion.div>

          {/* Stats row */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.7 }}
            className="mt-14 sm:mt-20 flex flex-wrap justify-center gap-8 sm:gap-12 lg:gap-16">
            {stats.map(s => (
              <div key={s.label} className="text-center">
                <p className={`text-3xl sm:text-4xl lg:text-5xl font-black ${s.color}`}>{s.value}</p>
                <p className="text-text-muted text-xs sm:text-sm tracking-wider mt-2">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <div className="w-5 h-9 rounded-full border border-white/20 flex justify-center pt-2">
            <div className="w-1 h-2.5 bg-primary/60 rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* ═══ Invitados Especiales — Exjugadores ═══ */}
      <section className="relative py-20 sm:py-28 lg:py-36 overflow-hidden">
        <div className="absolute inset-0 bg-bg-medium" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
        <div className="absolute top-20 -right-40 w-[400px] h-[400px] bg-gold/[0.04] rounded-full blur-[150px]" />
        <div className="absolute bottom-20 -left-40 w-[350px] h-[350px] bg-yellow-500/[0.03] rounded-full blur-[130px]" />

        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
          <AnimatedSection>
            <div className="text-center mb-12 sm:mb-16 lg:mb-20">
              <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-gold/10 border border-gold/20 text-gold text-xs sm:text-sm font-medium tracking-wider mb-6 sm:mb-8">
                <Star size={14} /> Invitados Especiales
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black">
                <span className="text-gradient-gold">Exjugadores Profesionales</span>
              </h2>
              <p className="mt-5 sm:mt-6 text-text-secondary max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
                Tuvimos el honor de recibir a <strong className="text-white font-semibold">exjugadores profesionales</strong> que compartieron su experiencia y motivaron a nuestros jóvenes talentos.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-10 sm:mb-14">
            {[
              { src: '/images/invitados/invitados1.jpeg', alt: 'Invitado especial 1' },
              { src: '/images/invitados/invitado2.jpeg', alt: 'Invitado especial 2' },
              { src: '/images/invitados/invitados3.jpeg', alt: 'Invitado especial 3' },
            ].map((img, i) => (
              <AnimatedSection key={img.src} direction="zoom" delay={i * 0.1}>
                <button onClick={() => setLightbox({ src: img.src, type: 'image' })}
                  className="w-full glass-card rounded-2xl sm:rounded-3xl overflow-hidden group cursor-pointer ring-1 ring-gold/10 hover:ring-gold/30 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] transition-all duration-500">
                  <OptImage src={img.src} alt={img.alt} className="w-full aspect-[4/3] group-hover:scale-105 transition-transform duration-700" />
                </button>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection direction="zoom" delay={0.3}>
            <button onClick={() => setLightbox({ src: '/images/invitados/team1.jpeg', type: 'image' })}
              className="w-full max-w-4xl mx-auto block glass-card rounded-2xl sm:rounded-3xl overflow-hidden group cursor-pointer ring-1 ring-gold/10 hover:ring-gold/30 hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)] transition-all duration-500">
              <OptImage src="/images/invitados/team1.jpeg" alt="Foto del equipo con invitados" className="w-full aspect-[16/9] group-hover:scale-105 transition-transform duration-700" />
            </button>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══ 1. Próxima Visoría — Copa Zacatepec ═══ */}
      <section className="relative py-20 sm:py-28 lg:py-36">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary/30 to-transparent" />
        <div className="absolute top-20 -right-40 w-[400px] h-[400px] bg-secondary/[0.04] rounded-full blur-[150px]" />
        <div className="absolute bottom-20 -left-40 w-[350px] h-[350px] bg-blue-500/[0.03] rounded-full blur-[130px]" />

        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
          <AnimatedSection>
            <div className="text-center mb-12 sm:mb-16 lg:mb-20">
              <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-xs sm:text-sm font-medium tracking-wider mb-6 sm:mb-8">
                <Eye size={14} /> Oportunidad Única
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black">
                <span className="bg-gradient-to-r from-secondary via-blue-400 to-secondary bg-clip-text text-transparent">Nuestra Próxima Visoría</span>
              </h2>
              <p className="mt-5 sm:mt-6 text-text-secondary max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
                ¡Salimos el <strong className="text-white font-semibold">11 de abril de 2026</strong> a competir por la prestigiosa
                <strong className="text-secondary font-semibold"> Copa Zacatepec</strong>! Una oportunidad única para demostrar nuestro talento ante scouts profesionales.
              </p>
            </div>
          </AnimatedSection>

          {/* Hero-style featured image — only 1 image */}
          <AnimatedSection>
            <div className="relative">
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden ring-2 ring-secondary/20 shadow-[0_0_80px_rgba(59,130,246,0.12)]">
                <div className="aspect-[16/9] sm:aspect-[21/9] relative bg-bg-card">
                  {visoriaMedia.length > 0 ? (
                    visoriaMedia[0].type === 'video' ? (
                      <LazyVideo src={visoriaMedia[0].src} className="w-full h-full" muted loop autoPlay />
                    ) : (
                      <OptImage src={visoriaMedia[0].src} alt="Copa Zacatepec 2026" className="w-full h-full" />
                    )
                  ) : (
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-gradient-to-br from-secondary/5 to-blue-500/5 border-2 border-dashed border-secondary/20">
                      <ImagePlus size={48} className="text-secondary/30" />
                      <span className="text-secondary/30 text-base sm:text-lg font-semibold tracking-wide">Imagen destacada de la Visoría</span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/70 via-transparent to-transparent" />
                </div>
                {/* Overlay info */}
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10">
                  <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                    <div className="px-4 py-2 rounded-xl bg-secondary/20 backdrop-blur-md border border-secondary/30 text-secondary text-sm sm:text-base font-bold flex items-center gap-2">
                      <Calendar size={16} /> 11 de Abril, 2026
                    </div>
                    <div className="px-4 py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm sm:text-base font-bold">
                      Copa Zacatepec
                    </div>
                  </div>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white">
                    ¡Vamos por la <span className="text-secondary">Copa Zacatepec!</span>
                  </h3>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection className="mt-10 sm:mt-14">
            <div className="glass-card rounded-2xl sm:rounded-3xl p-7 sm:p-9 border border-secondary/10 max-w-3xl mx-auto text-center">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-secondary to-blue-500 flex items-center justify-center mb-6 mx-auto">
                <Eye size={28} className="text-white" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-5 leading-tight">
                Tu talento <span className="text-secondary">merece ser visto</span>
              </h3>
              <p className="text-text-secondary text-base sm:text-lg leading-relaxed mb-4">
                En Esforza Cañeros no solo formamos jugadores, <strong className="text-white font-semibold">abrimos puertas al futuro</strong>. La Copa Zacatepec es el escenario perfecto para brillar.
              </p>
              <p className="text-text-secondary text-base sm:text-lg leading-relaxed mb-8">
                Prepárate, entrena duro y <strong className="text-white font-semibold">demuestra de qué estás hecho</strong>. ¡Esta es tu oportunidad!
              </p>
              <div className="flex flex-wrap justify-center gap-3 mb-8">
                <div className="px-5 py-2.5 rounded-xl bg-secondary/10 border border-secondary/20 text-secondary text-sm font-semibold">Copa Zacatepec 2026</div>
                <div className="px-5 py-2.5 rounded-xl bg-primary/10 border border-primary/20 text-primary text-sm font-semibold">11 de Abril</div>
              </div>
              <a href="/contacto" className="inline-flex items-center gap-3 px-10 py-4 bg-secondary text-white font-bold text-base rounded-2xl hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] hover:scale-[1.03] transition-all duration-300">
                Quiero participar <ArrowRight size={18} />
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══ 2. Nuevo Campeonato — Feb 28, 2026 ═══ */}
      <section className="relative py-20 sm:py-28 lg:py-36 overflow-hidden">
        <div className="absolute inset-0 bg-bg-medium" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
        <div className="absolute top-20 -left-40 w-[400px] h-[400px] bg-gold/[0.04] rounded-full blur-[150px]" />
        <div className="absolute bottom-20 -right-40 w-[350px] h-[350px] bg-yellow-500/[0.03] rounded-full blur-[130px]" />

        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
          <AnimatedSection>
            <div className="text-center mb-12 sm:mb-16 lg:mb-20">
              <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-gold/10 border border-gold/20 text-gold text-xs sm:text-sm font-medium tracking-wider mb-6 sm:mb-8">
                <Trophy size={14} /> ¡Lo Logramos de Nuevo!
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black">
                <span className="text-gradient-gold">¡Campeones Otra Vez!</span>
              </h2>
              <p className="mt-5 sm:mt-6 text-text-secondary max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
                El <strong className="text-white font-semibold">28 de febrero de 2026</strong>, en La Hortaliza, 
                volvimos a levantar el trofeo. Una hazaña que demuestra la garra y el corazón de nuestros jugadores.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-14 items-center mb-12 sm:mb-16">
            <AnimatedSection direction="right" className="lg:col-span-7 order-2 lg:order-1">
              <MediaGrid items={campeonatoNuevoMedia} onClickItem={setLightbox} emptySlots={6} />
            </AnimatedSection>
            <AnimatedSection direction="left" className="lg:col-span-5 order-1 lg:order-2">
              <div className="glass-card rounded-2xl sm:rounded-3xl p-7 sm:p-9 border border-gold/10">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-gold to-yellow-600 flex items-center justify-center mb-6 sm:mb-8">
                  <Trophy size={28} className="text-white" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-5 leading-tight">
                  Campeones en <span className="text-gold">La Hortaliza</span>
                </h3>
                <div className="space-y-4 text-text-secondary text-base sm:text-lg leading-relaxed">
                  <p>¡Lo volvimos a lograr! El <strong className="text-white font-semibold">28 de febrero de 2026</strong> conquistamos un nuevo campeonato en La Hortaliza, demostrando una vez más que somos un equipo imparable.</p>
                  <p>Además, obtuvimos el <strong className="text-gold font-semibold">Guante de Oro</strong> al mejor portero de la temporada. ¡Orgullo total para nuestra escuela!</p>
                </div>
                <div className="mt-8 flex flex-wrap gap-3">
                  <div className="px-5 py-2.5 rounded-xl bg-gold/10 border border-gold/20 text-gold text-sm font-semibold flex items-center gap-2">
                    <Trophy size={14} /> Campeones 2026
                  </div>
                  <div className="px-5 py-2.5 rounded-xl bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 text-sm font-semibold">🧤 Guante de Oro</div>
                  <div className="px-5 py-2.5 rounded-xl bg-primary/10 border border-primary/20 text-primary text-sm font-semibold flex items-center gap-2">
                    <Calendar size={14} /> 28 Feb 2026
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ═══ 3. Posada Navideña — OCULTA POR AHORA (sin contenido visual) ═══
      <section className="relative py-20 sm:py-28 lg:py-36">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
        <div className="absolute top-20 -right-40 w-[400px] h-[400px] bg-accent/[0.04] rounded-full blur-[150px]" />
        <div className="absolute bottom-20 -left-40 w-[300px] h-[300px] bg-red-500/[0.03] rounded-full blur-[130px]" />

        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
          <AnimatedSection>
            <div className="text-center mb-12 sm:mb-16 lg:mb-20">
              <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs sm:text-sm font-medium tracking-wider mb-6 sm:mb-8">
                <PartyPopper size={14} /> Evento Especial
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black">
                <span className="bg-gradient-to-r from-red-400 via-yellow-300 to-red-400 bg-clip-text text-transparent">Posada Navideña</span>
              </h2>
              <p className="mt-5 sm:mt-6 text-text-secondary max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
                ¡Celebramos la Navidad en familia! Nuestra posada navideña es una tradición llena de alegría, 
                piñatas, ponche caliente y la mejor convivencia entre alumnos, padres y entrenadores.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-14 items-center mb-12 sm:mb-16">
            <AnimatedSection direction="right" className="lg:col-span-5">
              <div className="glass-card rounded-2xl sm:rounded-3xl p-7 sm:p-9 border border-red-500/10">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-red-500 to-yellow-500 flex items-center justify-center mb-6 sm:mb-8">
                  <PartyPopper size={28} className="text-white" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-5 leading-tight">
                  Una noche <span className="text-red-400">mágica</span> para todos
                </h3>
                <div className="space-y-4 text-text-secondary text-base sm:text-lg leading-relaxed">
                  <p>Cada fin de año organizamos nuestra tradicional <strong className="text-white font-semibold">posada navideña</strong>, donde toda la familia Cañeros se reúne para celebrar.</p>
                  <p>Piñatas, regalos, música y la mejor vibra. <strong className="text-white font-semibold">¡No te la puedes perder!</strong></p>
                </div>
                <div className="mt-8 flex flex-wrap gap-3">
                  <div className="px-5 py-2.5 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-semibold">Diciembre</div>
                  <div className="px-5 py-2.5 rounded-xl bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 text-sm font-semibold">Toda la familia</div>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="left" className="lg:col-span-7">
              <MediaGrid items={posadaMedia} onClickItem={setLightbox} emptySlots={6} />
            </AnimatedSection>
          </div>
        </div>
      </section>
      ═══ FIN Posada Navideña ═══ */}

      {/* ═══ 4. Pequeños Ponys ═══ */}
      <section className="relative py-20 sm:py-28 lg:py-36 overflow-hidden">
        <div className="absolute inset-0 bg-bg-medium" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        <div className="absolute top-20 -right-40 w-[400px] h-[400px] bg-primary/[0.04] rounded-full blur-[150px]" />
        <div className="absolute bottom-20 -left-40 w-[300px] h-[300px] bg-emerald-500/[0.03] rounded-full blur-[130px]" />

        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
          <AnimatedSection>
            <div className="text-center mb-12 sm:mb-16 lg:mb-20">
              <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs sm:text-sm font-medium tracking-wider mb-6 sm:mb-8">
                <Baby size={14} /> Cantera del Futuro
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black">
                <span className="bg-gradient-to-r from-primary via-emerald-400 to-primary bg-clip-text text-transparent">Pequeños Ponys</span>
              </h2>
              <p className="mt-5 sm:mt-6 text-text-secondary max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
                Nuestros jugadores más pequeños son el corazón de la escuela. Con alegría, energía y mucha pasión, 
                los Pequeños Ponys aprenden los valores del fútbol desde temprana edad.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-14 items-center mb-12 sm:mb-16">
            <AnimatedSection direction="right" className="lg:col-span-5">
              <div className="glass-card rounded-2xl sm:rounded-3xl p-7 sm:p-9 border border-primary/10">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-primary to-emerald-500 flex items-center justify-center mb-6 sm:mb-8">
                  <Baby size={28} className="text-white" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-5 leading-tight">
                  Los campeones <span className="text-primary">del mañana</span>
                </h3>
                <div className="space-y-4 text-text-secondary text-base sm:text-lg leading-relaxed">
                  <p>Los <strong className="text-white font-semibold">Pequeños Ponys</strong> son la categoría más joven de nuestra escuela. Aquí los niños descubren su amor por el fútbol en un ambiente seguro y divertido.</p>
                  <p>Con entrenamientos adaptados a su edad, desarrollan <strong className="text-white font-semibold">coordinación, disciplina y trabajo en equipo</strong> mientras se divierten como nunca.</p>
                </div>
                <div className="mt-8 flex flex-wrap gap-3">
                  <div className="px-5 py-2.5 rounded-xl bg-primary/10 border border-primary/20 text-primary text-sm font-semibold">Categoría infantil</div>
                  <div className="px-5 py-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-semibold">Diversión + formación</div>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="left" className="lg:col-span-7">
              <MediaGrid items={ponysMedia} onClickItem={setLightbox} emptySlots={6} />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ═══ Championship (Copa de Plata) ═══ */}
      <section id="championship" className="relative py-20 sm:py-28 lg:py-36 overflow-hidden">
        <div className="absolute inset-0 bg-bg-medium" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-gold/[0.03] rounded-full blur-[150px]" />

        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
          <AnimatedSection>
            <div className="text-center mb-12 sm:mb-16 lg:mb-20">
              <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-gold/10 border border-gold/20 text-gold text-xs sm:text-sm font-medium tracking-wider mb-6 sm:mb-8">
                <Trophy size={14} /> Logro Reciente
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black">
                <span className="text-gradient-gold">Nuevo Campeonato</span>
              </h2>
              <p className="mt-5 sm:mt-6 text-text-muted max-w-xl mx-auto italic text-sm sm:text-base leading-relaxed">
                "El talento gana partidos, pero el trabajo en equipo y la inteligencia ganan campeonatos."
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-14 items-center">
            <AnimatedSection direction="right" className="lg:col-span-7">
              <SectionLabel text="Copa de Plata" />
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5 sm:mb-8 leading-tight">
                ¡Campeones<br /><span className="text-gold">Copa de Plata!</span>
              </h3>
              <div className="space-y-4 sm:space-y-5 text-text-secondary text-base sm:text-lg leading-relaxed">
                <p>Con orgullo celebramos a la <strong className="text-white font-semibold">categoría 2009 - 2010</strong>, quienes lograron vencer a Falcons por la vía de penales y así coronarse campeones en la prestigiosa liga de Nuevos Talentos.</p>
                <p>Este triunfo, conseguido en la unidad deportiva Martín Alarcón (Metepec), marca nuestro <strong className="text-white font-semibold">sexto título</strong> en las distintas categorías, consolidando nuestra historia de éxito.</p>
              </div>
              <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4 sm:gap-5">
                <div className="px-5 sm:px-7 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl bg-gold/10 border border-gold/20 text-gold text-sm sm:text-base font-semibold">6° Título</div>
                <div className="px-5 sm:px-7 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl bg-primary/10 border border-primary/20 text-primary text-sm sm:text-base font-semibold">Cat. 2009-2010</div>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="left" className="lg:col-span-5">
              <div className="relative">
                <OptImage src="/images/champions/camp25.jpg" alt="Equipo Campeón"
                  className="w-full aspect-[4/5] rounded-3xl ring-1 ring-gold/20 glow-gold" />
                <div className="absolute -bottom-4 -right-4 w-20 h-20 rounded-2xl bg-gold/10 border border-gold/20 flex items-center justify-center backdrop-blur-sm">
                  <Trophy size={32} className="text-gold" />
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Champions gallery */}
          <AnimatedSection className="mt-16 sm:mt-24">
            <SectionLabel text="Galería de Campeones" />
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-8 sm:mb-10">Nuestros Momentos de Gloria</h3>
          </AnimatedSection>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-1.5 sm:gap-2.5 md:gap-3">
            {championImages.map((src, i) => (
              <AnimatedSection key={src} direction="zoom" delay={Math.min(i * 0.02, 0.5)}>
                <button onClick={() => setLightbox({ src, type: 'image' })}
                  className="relative group aspect-square rounded-xl overflow-hidden cursor-pointer ring-1 ring-white/[0.04] hover:ring-primary/30 transition-all duration-500">
                  <OptImage src={src} alt={`Campeón ${i + 1}`} className="w-full h-full group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-2">
                    <Trophy className="text-gold" size={18} />
                  </div>
                </button>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ Carousels ═══ */}
      <section className="relative py-20 sm:py-28 lg:py-36">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
        <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-12">
          <AnimatedSection>
            <div className="text-center mb-12 sm:mb-16">
              <SectionLabel text="Momentos Inolvidables" />
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">Lo Mejor de Nuestra Escuela</h2>
            </div>
          </AnimatedSection>
          <AnimatedSection><Carousel images={nuevoImages} autoInterval={3000} /></AnimatedSection>
          <AnimatedSection className="mt-8 sm:mt-12"><Carousel images={galleryC} autoInterval={3500} /></AnimatedSection>
        </div>
      </section>

      {/* ═══ Info Cards ═══ */}
      <section className="relative py-20 sm:py-28 lg:py-36 overflow-hidden">
        <div className="absolute inset-0 bg-bg-medium" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <div className="absolute -bottom-40 -left-40 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-primary/[0.03] rounded-full blur-[120px] sm:blur-[150px]" />

        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
          <AnimatedSection>
            <div className="text-center mb-12 sm:mb-16">
              <SectionLabel text="Información" />
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">Todo lo que necesitas saber</h2>
            </div>
          </AnimatedSection>

          <div className="flex flex-col gap-8 sm:gap-10 md:grid md:grid-cols-3 md:gap-8 lg:gap-12">
            <AnimatedSection>
              <InfoCard img="/images/cards/carta2.jpg" icon={Users} title="Nuestros Entrenadores" description="Equipo profesional con años de experiencia formando talento.">
                <div className="grid grid-cols-2 gap-3">
                  {coaches.map(c => (
                    <div key={c.name} className="text-center">
                      <OptImage src={c.img} alt={c.name} className="w-full aspect-square rounded-xl mb-2" />
                      <p className="text-white text-xs font-semibold">{c.name}</p>
                      <p className="text-text-muted text-[10px]">{c.role}</p>
                    </div>
                  ))}
                </div>
              </InfoCard>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <InfoCard img="/images/cards/carta1.jpg" icon={Clock} title="Horarios de Clases" description="Consulta los días y horarios disponibles para entrenar.">
                <div className="space-y-3">
                  {[
                    { icon: Clock, text: 'Martes 4:00pm - 6:00pm' },
                    { icon: Clock, text: 'Jueves 4:00pm - 6:00pm' },
                    { icon: Trophy, text: 'Sábados: Partidos oficiales' },
                    { icon: Users, text: '¡Ven y conviértete en un gran jugador!' },
                  ].map(({ icon: I, text }) => (
                    <div key={text} className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.04]">
                      <I size={14} className="text-primary shrink-0" />
                      <span className="text-text-secondary text-xs">{text}</span>
                    </div>
                  ))}
                </div>
              </InfoCard>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <InfoCard img="/images/cards/carta3.jpg" icon={Sparkles} title="Inscripciones" description="¡Únete hoy y forma parte del equipo campeón!">
                <div className="space-y-3">
                  {['Inscripción extra gratuita temporal', 'Mensualidad — $500 MXN', 'Con opción de beca deportiva'].map(t => (
                    <div key={t} className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.04]">
                      <span className="text-primary text-sm">⚽</span>
                      <span className="text-text-secondary text-xs">{t}</span>
                    </div>
                  ))}
                </div>
              </InfoCard>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ═══ Video Gallery ═══ */}
      <section id="gallery-videos" className="relative py-20 sm:py-28 lg:py-36">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
          <AnimatedSection>
            <div className="text-center mb-12 sm:mb-16">
              <SectionLabel text="Galería & Videos" />
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">Nuestro Día a Día</h2>
            </div>
          </AnimatedSection>

          <AnimatedSection className="mb-8 sm:mb-10">
            <div className="rounded-3xl overflow-hidden ring-1 ring-white/[0.06] relative group cursor-pointer" onClick={() => setLightbox({ src: '/videos/intro.mp4', type: 'video' })}>
              <video src="/videos/intro.mp4" className="w-full max-h-[320px] sm:max-h-[420px] lg:max-h-[480px] object-cover" muted loop autoPlay playsInline />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-full bg-primary/90 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Play size={24} className="text-bg-dark ml-1 sm:hidden" fill="currentColor" />
                  <Play size={32} className="text-bg-dark ml-1 hidden sm:block" fill="currentColor" />
                </div>
              </div>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4 lg:gap-5">
            {videoGallery.map((item, i) => (
              <AnimatedSection key={item.src} direction="zoom" delay={Math.min(i * 0.03, 0.4)}>
                <MediaCard item={item} onClick={() => setLightbox(item)} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ Contenido - Viajes ═══ */}
      <section className="relative py-20 sm:py-28 lg:py-36 overflow-hidden">
        <div className="absolute inset-0 bg-bg-medium" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
        <div className="absolute top-40 right-0 w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] bg-accent/[0.03] rounded-full blur-[120px] sm:blur-[150px]" />

        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
          <AnimatedSection>
            <div className="text-center mb-12 sm:mb-16">
              <SectionLabel text="Experiencias" />
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">Viajes, Torneos y Visorías</h2>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4 lg:gap-5">
            {contenidoItems.map((item, i) => (
              <AnimatedSection key={item.src} direction="zoom" delay={Math.min(i * 0.03, 0.4)}>
                <MediaCard item={item} onClick={() => setLightbox(item)} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ Testimonials ═══ */}
      <section className="relative py-20 sm:py-28 lg:py-36">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
        <div className="absolute top-20 -left-40 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-primary/[0.03] rounded-full blur-[120px] sm:blur-[150px]" />

        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
          <AnimatedSection>
            <div className="text-center mb-12 sm:mb-16">
              <SectionLabel text="Testimonios" />
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">Lo que dicen nuestros alumnos</h2>
            </div>
          </AnimatedSection>
          <div className="flex flex-col gap-8 sm:gap-10 md:grid md:grid-cols-3 md:gap-8 lg:gap-12">
            {testimonials.map((t, i) => (
              <AnimatedSection key={t.author} delay={i * 0.1}>
                <div className="glass-card rounded-2xl sm:rounded-3xl p-7 sm:p-9 h-full flex flex-col hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,232,123,0.06)] transition-all duration-500">
                  <Quote size={26} className="text-primary/20 mb-4 sm:mb-5" />
                  <p className="text-text-secondary text-base sm:text-lg leading-relaxed flex-1 italic">{t.text}</p>
                  <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-white/[0.06]">
                    <p className="text-white font-semibold text-base">{t.author}</p>
                    <p className="text-text-muted text-sm mt-1">{t.role}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ Profesionales ═══ */}
      <section className="relative py-20 sm:py-28 lg:py-36 overflow-hidden">
        <div className="absolute inset-0 bg-bg-medium" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary/20 to-transparent" />

        <div className="relative max-w-5xl mx-auto px-6 sm:px-10 lg:px-12">
          <AnimatedSection>
            <div className="text-center mb-12 sm:mb-16">
              <SectionLabel text="Profesionales" />
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">Palabras de Profesionales</h2>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
            {['profesional1.mp4', 'Profesional2.mp4', 'Profesional3.mp4'].map((file, i) => (
              <AnimatedSection key={file} delay={i * 0.1}>
                <button onClick={() => setLightbox({ src: `/videos/profesional/${file}`, type: 'video' })}
                  className="w-full glass-card rounded-2xl sm:rounded-3xl overflow-hidden group cursor-pointer hover:-translate-y-1 transition-all duration-500">
                  <div className="relative aspect-[3/4] sm:aspect-[3/4]">
                    <video src={`/videos/profesional/${file}`} className="w-full h-full object-cover" muted preload="metadata" />
                    <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/80 via-transparent flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-primary/90 transition-all duration-300">
                        <Play size={24} className="text-white group-hover:text-bg-dark ml-1" fill="currentColor" />
                      </div>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-white font-semibold text-sm">Jugador Profesional</p>
                      <p className="text-text-muted text-xs">Mensaje #{i + 1}</p>
                    </div>
                  </div>
                </button>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ Sponsors ═══ */}
      <section className="relative py-20 sm:py-28 lg:py-36">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
        <div className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-12">
          <AnimatedSection>
            <div className="text-center mb-12 sm:mb-16">
              <SectionLabel text="Patrocinadores" />
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">Gracias a Quienes Nos Apoyan</h2>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
            {['p2.jpg', 'p1.jpg', 'p3.jpg'].map((file, i) => (
              <AnimatedSection key={file} delay={i * 0.1} direction="zoom">
                <div className="glass-card rounded-2xl sm:rounded-3xl overflow-hidden p-3 sm:p-4 text-center hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(245,158,11,0.08)] transition-all duration-500 group">
                  <OptImage src={`/images/sponsors/${file}`} alt={`Patrocinador ${i + 1}`}
                    className="w-full aspect-[4/3] rounded-2xl group-hover:scale-[1.02] transition-transform duration-700" />
                  <p className="mt-4 text-white font-semibold text-sm">Patrocinador {i + 1}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ Lightbox ═══ */}
      <AnimatePresence>
        {lightbox && <Lightbox src={lightbox.src} type={lightbox.type} onClose={() => setLightbox(null)} />}
      </AnimatePresence>
    </div>
  )
}
