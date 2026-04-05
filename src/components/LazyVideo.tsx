import { useState, useRef, useEffect } from 'react'

interface LazyVideoProps {
  src: string
  className?: string
  muted?: boolean
  loop?: boolean
  autoPlay?: boolean
  playsInline?: boolean
  controls?: boolean
  onClick?: () => void
}

export default function LazyVideo({ src, className = '', muted = true, loop = false, autoPlay = false, playsInline = true, controls = false, onClick }: LazyVideoProps) {
  const [inView, setInView] = useState(false)
  const [loaded, setLoaded] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); observer.disconnect() } },
      { rootMargin: '400px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`} onClick={onClick} style={{ contentVisibility: 'auto' }}>
      {/* Skeleton */}
      <div className={`absolute inset-0 bg-gradient-to-br from-bg-card to-bg-elevated transition-opacity duration-500 ${loaded ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.03] to-transparent"
            style={{ animation: loaded ? 'none' : 'shimmer 1.5s infinite' }}
          />
        </div>
      </div>
      {inView && (
        <video
          src={src}
          className="w-full h-full object-cover"
          muted={muted}
          loop={loop}
          autoPlay={autoPlay}
          playsInline={playsInline}
          controls={controls}
          preload="metadata"
          onLoadedData={() => setLoaded(true)}
        />
      )}
    </div>
  )
}
