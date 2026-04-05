import { motion } from 'framer-motion'
import { Target, Eye, Heart, Trophy, Users, Award, Sparkles } from 'lucide-react'
import AnimatedSection from '../components/AnimatedSection'
import OptImage from '../components/OptImage'
import PageHeader from '../components/PageHeader'

const values = [
  {
    icon: Target,
    img: '/images/gallery/c10.jpg',
    title: 'Nuestra Misión',
    text: 'Formar deportistas integrales, con fuertes valores éticos y habilidades futbolísticas de alto nivel, que se conviertan en ciudadanos ejemplares dentro y fuera de la cancha.',
    color: 'text-primary',
    bgColor: 'bg-primary/10 border-primary/20',
  },
  {
    icon: Eye,
    img: '/images/gallery/c12.jpg',
    title: 'Nuestra Visión',
    text: 'Ser la academia de fútbol líder y un referente en la formación deportiva en toda la región, reconocida por su excelencia y su impacto positivo en la comunidad.',
    color: 'text-secondary',
    bgColor: 'bg-secondary/10 border-secondary/20',
  },
  {
    icon: Heart,
    img: '/images/gallery/c9.jpg',
    title: 'Nuestros Valores',
    text: 'Compromiso, Pasión y Trabajo en Equipo. Creemos en la dedicación total, el amor por el juego y la fuerza que nace de la colaboración genuina.',
    color: 'text-accent',
    bgColor: 'bg-accent/10 border-accent/20',
  },
]

const stats = [
  { icon: Trophy, value: '6', label: 'Títulos Ganados', color: 'text-gold' },
  { icon: Users, value: '500+', label: 'Alumnos Formados', color: 'text-primary' },
  { icon: Award, value: '30+', label: 'Años de Experiencia', color: 'text-secondary' },
  { icon: Sparkles, value: '4', label: 'Entrenadores Pro', color: 'text-accent' },
]

const timeline = [
  { year: '1995', event: 'Fundación de Esforza Cañeros Toluca' },
  { year: '2015', event: 'Primer campeonato oficial en Liga Nuevos Talentos' },
  { year: '2019', event: 'Expansión de categorías juveniles' },
  { year: '2023', event: 'Quinto título y reconocimiento regional' },
  { year: '2024', event: '¡Sexto título! Campeones Copa de Plata' },
]

export default function Nosotros() {
  return (
    <div className="noise-bg">
      <PageHeader
        title="Quiénes Somos"
        badge="Nuestra Historia"
        subtitle="Más de 30 años formando campeones con valores, disciplina y pasión por el fútbol."
      />

      {/* Intro */}
      <section className="relative py-20 sm:py-28 lg:py-36">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <div className="absolute top-20 -right-40 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-primary/[0.03] rounded-full blur-[120px] sm:blur-[150px]" />

        <div className="relative max-w-3xl mx-auto px-7 sm:px-10 text-center">
          <AnimatedSection>
            <p className="text-base sm:text-lg lg:text-xl text-text-secondary leading-loose">
              Somos una escuela de fútbol con más de <strong className="text-white font-semibold">30 años de experiencia</strong> formando jugadores de todas las edades.
              Nuestra misión es fomentar valores como el trabajo en equipo, la disciplina y el respeto, preparando a los jóvenes no solo para el campo, sino para la vida.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Mission / Vision / Values Cards */}
      <section className="relative py-20 sm:py-28 lg:py-36 overflow-hidden">
        <div className="absolute inset-0 bg-bg-medium" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
          <AnimatedSection>
            <div className="text-center mb-12 sm:mb-16 lg:mb-20">
              <div className="flex items-center justify-center gap-3 mb-5">
                <div className="w-8 sm:w-10 h-px bg-gradient-to-r from-primary to-transparent" />
                <span className="text-xs sm:text-sm font-semibold tracking-[0.2em] sm:tracking-[0.25em] text-primary uppercase">Filosofía</span>
                <div className="w-8 sm:w-10 h-px bg-gradient-to-l from-primary to-transparent" />
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">Lo que nos define</h2>
            </div>
          </AnimatedSection>

          <div className="flex flex-col gap-8 sm:gap-10 md:grid md:grid-cols-3 md:gap-8 lg:gap-12">
            {values.map((card, i) => (
              <AnimatedSection key={card.title} delay={i * 0.1}>
                <div className="glass-card rounded-2xl sm:rounded-3xl overflow-hidden h-full flex flex-col group hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)] transition-all duration-500">
                  <div className="relative">
                    <OptImage src={card.img} alt={card.title} className="w-full h-52 sm:h-60 group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-bg-card via-bg-card/30 to-transparent" />
                    <div className={`absolute bottom-4 left-5 w-12 h-12 rounded-xl ${card.bgColor} border flex items-center justify-center backdrop-blur-sm`}>
                      <card.icon size={20} className={card.color} />
                    </div>
                  </div>
                  <div className="p-6 sm:p-8 flex-1 flex flex-col">
                    <h3 className={`${card.color} font-bold text-lg sm:text-xl mb-3 sm:mb-4`}>{card.title}</h3>
                    <p className="text-text-secondary text-sm sm:text-base leading-loose flex-1">{card.text}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative py-20 sm:py-28 lg:py-36">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
        <div className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-12">
          <div className="grid grid-cols-2 gap-5 sm:gap-8 md:grid-cols-4 md:gap-8 lg:gap-10">
            {stats.map((stat, i) => (
              <AnimatedSection key={stat.label} delay={i * 0.1} direction="zoom">
                <div className="glass-card rounded-2xl sm:rounded-3xl p-6 sm:p-10 text-center hover:shadow-[0_20px_60px_rgba(0,0,0,0.2)] hover:-translate-y-1 transition-all duration-500 group">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center mx-auto mb-4 sm:mb-5 group-hover:scale-110 transition-transform duration-500">
                    <stat.icon size={22} className={stat.color} />
                  </div>
                  <p className={`text-3xl sm:text-4xl lg:text-5xl font-black ${stat.color} mb-2`}>{stat.value}</p>
                  <p className="text-text-muted text-xs sm:text-sm tracking-wide">{stat.label}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="relative py-20 sm:py-28 lg:py-36 overflow-hidden">
        <div className="absolute inset-0 bg-bg-medium" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

        <div className="relative max-w-3xl mx-auto px-6 sm:px-10">
          <AnimatedSection>
            <div className="text-center mb-12 sm:mb-16 lg:mb-20">
              <div className="flex items-center justify-center gap-3 mb-5">
                <div className="w-8 sm:w-10 h-px bg-gradient-to-r from-gold to-transparent" />
                <span className="text-xs sm:text-sm font-semibold tracking-[0.2em] sm:tracking-[0.25em] text-gold uppercase">Historia</span>
                <div className="w-8 sm:w-10 h-px bg-gradient-to-l from-gold to-transparent" />
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">Nuestra Trayectoria</h2>
            </div>
          </AnimatedSection>

          <div className="relative">
            <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-gold/40 to-transparent" />
            {timeline.map((item, i) => (
              <AnimatedSection key={item.year} delay={i * 0.1} direction="right">
                <div className="relative pl-16 sm:pl-20 pb-12 last:pb-0 group">
                  <div className="absolute left-4 sm:left-6 top-1 w-4 h-4 rounded-full bg-bg-dark border-2 border-primary group-hover:bg-primary group-hover:scale-125 transition-all duration-300" />
                  <motion.div whileHover={{ x: 4 }} className="glass-card rounded-xl sm:rounded-2xl p-5 sm:p-7 hover:shadow-lg transition-shadow duration-300">
                    <span className="text-primary font-bold text-base sm:text-lg">{item.year}</span>
                    <p className="text-text-secondary text-sm sm:text-base mt-2 leading-relaxed">{item.event}</p>
                  </motion.div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
