import { motion } from 'framer-motion'

interface FloatingBallsProps {
  count?: number
  className?: string
}

/**
 * Decorative floating soccer balls with 3D-ish motion.
 * Use as a background layer (absolute positioned).
 */
export default function FloatingBalls({ count = 6, className = '' }: FloatingBallsProps) {
  const balls = Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: 24 + Math.random() * 28,
    duration: 12 + Math.random() * 10,
    delay: Math.random() * 5,
    xOffset: -20 + Math.random() * 40,
    yOffset: -40 + Math.random() * 80,
  }))

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      {balls.map((b) => (
        <motion.div
          key={b.id}
          className="absolute"
          style={{
            left: `${b.x}%`,
            top: `${b.y}%`,
            fontSize: b.size,
            filter: 'drop-shadow(0 6px 12px rgba(0,0,0,0.4))',
          }}
          animate={{
            x: [0, b.xOffset, -b.xOffset / 2, 0],
            y: [0, b.yOffset, b.yOffset / 2, 0],
            rotate: [0, 180, 360],
            scale: [1, 1.1, 0.95, 1],
          }}
          transition={{
            duration: b.duration,
            delay: b.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <span className="opacity-25 select-none" style={{ display: 'inline-block' }}>⚽</span>
        </motion.div>
      ))}
    </div>
  )
}
