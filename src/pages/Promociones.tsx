import { motion } from 'framer-motion'
import { Star, Ticket, Percent, Shirt, ArrowRight } from 'lucide-react'
import AnimatedSection from '../components/AnimatedSection'
import OptImage from '../components/OptImage'
import PageHeader from '../components/PageHeader'

const promos = [
  {
    icon: Ticket,
    title: 'Inscripción Gratis',
    description: '¡Tu aventura comienza ahora! Inscríbete este mes y no pagues nada por tu registro. Promoción por tiempo limitado.',
    badge: 'Tiempo limitado',
    gradient: 'from-primary to-emerald-400',
    glowColor: 'rgba(0,232,123,0.15)',
  },
  {
    icon: Percent,
    title: '50% en Mensualidad',
    description: 'Paga solo la mitad de tu mensualidad durante toda tu estancia. ¡Un ahorro increíble para nuevos ingresos!',
    badge: 'Nuevos ingresos',
    gradient: 'from-secondary to-blue-400',
    glowColor: 'rgba(59,130,246,0.15)',
  },
  {
    icon: Shirt,
    title: '50% en Uniforme',
    description: 'Equípate como los profesionales. Obtén tu uniforme de entrenamiento a mitad de precio al inscribirte.',
    badge: 'Al inscribirte',
    gradient: 'from-accent to-purple-400',
    glowColor: 'rgba(139,92,246,0.15)',
  },
]

const sponsors = [
  { src: '/images/sponsors/promotora.jpg', name: 'Promotora Zacatepec' },
  { src: '/images/sponsors/p1.jpg', name: 'Patrocinador 1' },
  { src: '/images/sponsors/p2.jpg', name: 'Patrocinador 2' },
  { src: '/images/sponsors/p3.jpg', name: 'Patrocinador 3' },
]

export default function Promociones() {
  return (
    <div className="noise-bg">
      <PageHeader
        title="Promociones Exclusivas"
        badge="Ofertas Especiales"
        subtitle="¡Aprovecha estas ofertas por tiempo limitado y únete a la familia de campeones!"
      />

      {/* Promo Cards */}
      <section className="relative py-20 sm:py-28 lg:py-36">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
        <div className="absolute top-20 -left-40 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-gold/[0.03] rounded-full blur-[120px] sm:blur-[150px]" />
        <div className="absolute bottom-20 -right-40 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-accent/[0.03] rounded-full blur-[120px] sm:blur-[150px]" />

        <div className="relative max-w-6xl mx-auto px-6 sm:px-10 lg:px-12">
          <AnimatedSection>
            <div className="text-center mb-12 sm:mb-16 lg:mb-20">
              <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-gold/10 border border-gold/20 text-gold text-xs sm:text-sm font-medium tracking-wider mb-6 sm:mb-8">
                <Star size={14} fill="currentColor" /> Promociones Activas
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
                Ofertas que no puedes perderte
              </h2>
            </div>
          </AnimatedSection>

          <div className="flex flex-col gap-8 sm:gap-10 md:grid md:grid-cols-3 md:gap-8 lg:gap-12">
            {promos.map((promo, i) => (
              <AnimatedSection key={promo.title} delay={i * 0.12}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="relative group h-full"
                >
                  <div
                    className="glass-card rounded-2xl sm:rounded-3xl p-7 sm:p-8 lg:p-10 h-full flex flex-col transition-shadow duration-500"
                    style={{ boxShadow: `0 0 0 rgba(0,0,0,0)` }}
                    onMouseEnter={e => (e.currentTarget.style.boxShadow = `0 25px 60px ${promo.glowColor}`)}
                    onMouseLeave={e => (e.currentTarget.style.boxShadow = `0 0 0 rgba(0,0,0,0)`)}
                  >
                    {/* Gradient accent top */}
                    <div className={`absolute top-0 left-8 right-8 h-px bg-gradient-to-r ${promo.gradient} opacity-40`} />

                    {/* Icon */}
                    <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br ${promo.gradient} flex items-center justify-center mb-6 sm:mb-8 group-hover:scale-110 transition-transform duration-500`}>
                      <promo.icon size={26} className="text-white" />
                    </div>

                    {/* Badge */}
                    <span className="inline-block self-start px-4 py-2 rounded-lg bg-white/[0.05] border border-white/[0.08] text-text-muted text-xs font-medium tracking-wider uppercase mb-5 sm:mb-6">
                      {promo.badge}
                    </span>

                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">{promo.title}</h3>
                    <p className="text-text-secondary text-sm sm:text-base leading-relaxed flex-1">{promo.description}</p>

                    <div className="mt-8 sm:mt-10 pt-6 sm:pt-7 border-t border-white/[0.06]">
                      <a href="/contacto" className={`inline-flex items-center gap-2.5 text-base font-semibold bg-gradient-to-r ${promo.gradient} bg-clip-text text-transparent group/link`}>
                        Inscríbete ahora
                        <ArrowRight size={16} className="text-primary group-hover/link:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsors */}
      <section className="relative py-20 sm:py-28 lg:py-36 overflow-hidden">
        <div className="absolute inset-0 bg-bg-medium" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

        <div className="relative max-w-5xl mx-auto px-6 sm:px-10 lg:px-12">
          <AnimatedSection>
            <div className="text-center mb-12 sm:mb-16 lg:mb-20">
              <div className="flex items-center justify-center gap-3 mb-5">
                <div className="w-8 sm:w-10 h-px bg-gradient-to-r from-gold to-transparent" />
                <span className="text-xs sm:text-sm font-semibold tracking-[0.2em] sm:tracking-[0.25em] text-gold uppercase">Patrocinadores</span>
                <div className="w-8 sm:w-10 h-px bg-gradient-to-l from-gold to-transparent" />
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
                Gracias a Quienes Nos Apoyan
              </h2>
              <p className="mt-4 sm:mt-6 text-text-secondary text-base sm:text-lg max-w-lg mx-auto leading-relaxed">
                Nuestros patrocinadores hacen posible que sigamos formando a los campeones del mañana.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-2 gap-5 sm:gap-8 md:grid-cols-4 md:gap-6 lg:gap-10">
            {sponsors.map((s, i) => (
              <AnimatedSection key={s.name} delay={i * 0.1} direction="zoom">
                <div className="glass-card rounded-2xl sm:rounded-3xl overflow-hidden p-4 sm:p-5 group hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(245,158,11,0.08)] transition-all duration-500">
                  <OptImage src={s.src} alt={s.name}
                    className="w-full aspect-square sm:aspect-[4/3] rounded-xl sm:rounded-2xl group-hover:scale-[1.03] transition-transform duration-700" />
                  <p className="mt-4 sm:mt-5 text-center text-white text-xs sm:text-sm font-medium pb-1 sm:pb-2">{s.name}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 sm:py-28 lg:py-36">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <div className="max-w-2xl mx-auto px-6 sm:px-10 text-center">
          <AnimatedSection>
            <div className="glass-card rounded-2xl sm:rounded-3xl p-8 sm:p-12 lg:p-16">
              <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto mb-6 sm:mb-8">
                <Star size={28} className="text-white" fill="currentColor" />
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-5">¿Listo para comenzar?</h2>
              <p className="text-text-secondary text-base sm:text-lg max-w-md mx-auto mb-8 sm:mb-10 leading-relaxed">
                No dejes pasar esta oportunidad. Inscríbete hoy y forma parte de la familia Cañeros Toluca.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5">
                <a href="/contacto"
                  className="w-full sm:w-auto px-10 py-4.5 bg-primary text-bg-dark font-bold text-base tracking-wide rounded-2xl hover:shadow-[0_0_30px_rgba(0,232,123,0.3)] hover:scale-[1.03] transition-all duration-300 flex items-center justify-center gap-3">
                  Contáctanos <ArrowRight size={18} />
                </a>
                <a href="/faq"
                  className="w-full sm:w-auto px-10 py-4.5 glass text-white font-medium text-base tracking-wide rounded-2xl hover:bg-white/[0.08] transition-all duration-300 text-center">
                  Ver Preguntas Frecuentes
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
