import { motion } from 'framer-motion'

interface PageHeaderProps {
  title: string
  subtitle?: string
  badge?: string
}

export default function PageHeader({ title, subtitle, badge }: PageHeaderProps) {
  return (
    <header className="relative flex items-center justify-center text-center pt-36 sm:pt-44 lg:pt-48 pb-20 sm:pb-32 lg:pb-36 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{ backgroundImage: `url('/images/heroes/hero2.png')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-bg-dark/85 via-bg-dark/75 to-bg-dark" />

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-48 sm:w-72 h-48 sm:h-72 bg-primary/5 rounded-full blur-[80px] sm:blur-[100px]" />
      <div className="absolute bottom-10 right-10 w-56 sm:w-96 h-56 sm:h-96 bg-secondary/5 rounded-full blur-[80px] sm:blur-[120px]" />

      <div className="relative z-10 max-w-3xl mx-auto px-6 sm:px-10">
        {badge && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs sm:text-sm font-medium tracking-wider mb-6 sm:mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            {badge}
          </motion.div>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black"
        >
          <span className="text-gradient">{title}</span>
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-6 sm:mt-8 text-base sm:text-lg lg:text-xl text-text-secondary max-w-xl mx-auto leading-relaxed"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </header>
  )
}
