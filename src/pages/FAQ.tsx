import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, MessageCircle } from 'lucide-react'
import AnimatedSection from '../components/AnimatedSection'
import PageHeader from '../components/PageHeader'

const faqs = [
  {
    question: '¿Cuál es la edad mínima para inscribirse?',
    answer: 'La edad mínima es de 5 años. Aceptamos a niños y jóvenes con ganas de aprender y divertirse en un ambiente seguro y profesional.',
  },
  {
    question: '¿Qué material necesito llevar?',
    answer: 'Ropa deportiva cómoda, espinilleras, tenis de fútbol, botella de agua para hidratación y un balón de fútbol del tamaño adecuado para tu categoría (No. 3, 4 o 5).',
  },
  {
    question: '¿Dónde están ubicadas las instalaciones?',
    answer: 'Nos encontramos en P.º de La Reforma No° 6, San Nicolas Tolentino Otzacatipan, 50230 San Nicolás Tolentino, Méx. ¡Te esperamos!',
  },
  {
    question: '¿Cuáles son los horarios de entrenamiento?',
    answer: 'Nuestros entrenamientos regulares son los martes y jueves de 4:00 PM a 6:00 PM. Los sábados se juegan partidos oficiales contra otras escuelas.',
  },
  {
    question: '¿Cuánto cuesta la inscripción y la mensualidad?',
    answer: 'Actualmente tenemos una promoción de inscripción GRATUITA por tiempo limitado. La mensualidad es de $500 MXN y contamos con opciones de becas deportivas.',
  },
  {
    question: '¿Se necesita experiencia previa?',
    answer: 'No, en absoluto. Damos la bienvenida a todos los niveles, desde principiantes que quieren aprender los fundamentos hasta jugadores avanzados que buscan perfeccionar su técnica.',
  },
  {
    question: '¿Puedo asistir a una clase de prueba?',
    answer: '¡Claro que sí! Ofrecemos una semana completa de prueba gratuita para que conozcas a los entrenadores, las instalaciones y nuestra metodología sin ningún compromiso.',
  },
]

function AccordionItem({ faq, isOpen, toggle, index }: { faq: typeof faqs[0]; isOpen: boolean; toggle: () => void; index: number }) {
  return (
    <AnimatedSection delay={index * 0.06}>
      <div className={`glass-card rounded-2xl overflow-hidden transition-all duration-500 ${isOpen ? 'ring-1 ring-primary/20 shadow-[0_0_30px_rgba(0,232,123,0.05)]' : 'hover:ring-1 hover:ring-white/[0.08]'}`}>
        <button onClick={toggle} className="w-full flex items-center justify-between p-5 sm:p-7 text-left gap-4 group">
          <div className="flex items-center gap-4">
            <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-300 ${isOpen ? 'bg-primary/10 border border-primary/20' : 'bg-white/[0.04] border border-white/[0.06]'}`}>
              <span className={`text-xs sm:text-sm font-bold transition-colors duration-300 ${isOpen ? 'text-primary' : 'text-text-muted'}`}>
                {String(index + 1).padStart(2, '0')}
              </span>
            </div>
            <span className={`font-semibold text-base sm:text-lg transition-colors duration-300 ${isOpen ? 'text-primary' : 'text-white group-hover:text-white/90'}`}>
              {faq.question}
            </span>
          </div>
          <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }} className="shrink-0">
            <ChevronDown size={20} className={`transition-colors duration-300 ${isOpen ? 'text-primary' : 'text-text-muted'}`} />
          </motion.div>
        </button>
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
              <div className="px-5 pb-5 pl-[60px] sm:px-7 sm:pb-7 sm:pl-[80px] text-text-secondary text-sm sm:text-base leading-relaxed">
                {faq.answer}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </AnimatedSection>
  )
}

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0)

  return (
    <div className="noise-bg">
      <PageHeader
        title="Preguntas Frecuentes"
        badge="FAQ"
        subtitle="Resolvemos tus dudas más comunes sobre nuestra escuela de fútbol."
      />

      <section className="relative py-20 sm:py-28 lg:py-36">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <div className="absolute top-40 -right-40 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-primary/[0.03] rounded-full blur-[120px] sm:blur-[150px]" />
        <div className="absolute bottom-40 -left-40 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-secondary/[0.03] rounded-full blur-[120px] sm:blur-[150px]" />

        <div className="relative max-w-3xl mx-auto px-6 sm:px-10">
          <div className="space-y-4 sm:space-y-5">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                faq={faq}
                index={i}
                isOpen={openIdx === i}
                toggle={() => setOpenIdx(openIdx === i ? null : i)}
              />
            ))}
          </div>

          {/* CTA */}
          <AnimatedSection className="mt-14 sm:mt-20">
            <div className="glass-card rounded-2xl sm:rounded-3xl p-8 sm:p-12 text-center">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-5 sm:mb-6">
                <MessageCircle size={24} className="text-primary" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">¿Aún tienes preguntas?</h3>
              <p className="text-text-secondary text-sm sm:text-base mb-6 sm:mb-8 max-w-md mx-auto leading-relaxed">
                No dudes en contactarnos. Estamos aquí para ayudarte en todo lo que necesites.
              </p>
              <a
                href="/contacto"
                className="inline-flex items-center gap-2.5 px-8 py-4 bg-primary text-bg-dark font-bold text-base rounded-2xl hover:shadow-[0_0_30px_rgba(0,232,123,0.25)] hover:scale-[1.03] transition-all duration-300"
              >
                Contáctanos
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
