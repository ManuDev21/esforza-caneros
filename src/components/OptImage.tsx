import { useState, useRef, useEffect } from 'react'

interface OptImageProps {
  src: string
  alt: string
  className?: string
  onClick?: () => void
}

export default function OptImage({ src, alt, className = '', onClick }: OptImageProps) {
  const [loaded, setLoaded] = useState(false)
  const [inView, setInView] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); observer.disconnect() } },
      { rootMargin: '600px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`} onClick={onClick} style={{ contentVisibility: 'auto' }}>
      {/* Skeleton placeholder */}
      <div
        className={`absolute inset-0 bg-gradient-to-br from-bg-card to-bg-elevated transition-opacity duration-500 ${loaded ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
      >
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.03] to-transparent"
            style={{ animation: loaded ? 'none' : 'shimmer 1.5s infinite' }}
          />
        </div>
      </div>
      {inView && (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          onLoad={() => setLoaded(true)}
          className={`w-full h-full object-cover transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'}`}
        />
      )}
    </div>
  )
}
