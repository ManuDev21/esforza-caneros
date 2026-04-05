import { useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Send, CheckCircle, AlertCircle, Clock } from 'lucide-react'
import AnimatedSection from '../components/AnimatedSection'
import PageHeader from '../components/PageHeader'

const contactInfo = [
  { icon: Phone, label: 'Teléfono', value: '+52 722 367 3638', color: 'text-primary', bg: 'bg-primary/10 border-primary/20' },
  { icon: Mail, label: 'Email', value: 'Jes.rubens@hotmail.com', color: 'text-secondary', bg: 'bg-secondary/10 border-secondary/20' },
  { icon: MapPin, label: 'Dirección', value: 'P.º de La Reforma 6, San Nicolas Tolentino Otzacatipan, 50230, Méx.', color: 'text-accent', bg: 'bg-accent/10 border-accent/20' },
  { icon: Clock, label: 'Horarios', value: 'Martes y Jueves: 4:00 PM - 6:00 PM', color: 'text-gold', bg: 'bg-gold/10 border-gold/20' },
]

export default function Contacto() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      await new Promise(resolve => setTimeout(resolve, 1500))
      setStatus('sent')
      setForm({ name: '', email: '', message: '' })
      setTimeout(() => setStatus('idle'), 4000)
    } catch {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 4000)
    }
  }

  return (
    <div className="noise-bg">
      <PageHeader
        title="Contáctanos"
        badge="Estamos para ti"
        subtitle="¿Tienes dudas o quieres inscribirte? Escríbenos y te responderemos a la brevedad."
      />

      <section className="relative py-20 sm:py-28 lg:py-36">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <div className="absolute top-40 -left-40 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-primary/[0.03] rounded-full blur-[120px] sm:blur-[150px]" />
        <div className="absolute bottom-40 -right-40 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-secondary/[0.03] rounded-full blur-[120px] sm:blur-[150px]" />

        <div className="relative max-w-6xl mx-auto px-6 sm:px-10 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Form - takes more space */}
            <AnimatedSection direction="right" className="lg:col-span-3">
              <div className="glass-card rounded-2xl sm:rounded-3xl p-7 sm:p-10 lg:p-12">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 sm:w-10 h-px bg-gradient-to-r from-primary to-transparent" />
                  <span className="text-xs sm:text-sm font-semibold tracking-[0.2em] sm:tracking-[0.25em] text-primary uppercase">Mensaje</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-8 sm:mb-10">Envíanos un Mensaje</h3>

                <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-text-secondary text-xs sm:text-sm font-medium tracking-wide mb-2 sm:mb-3 uppercase">
                      Nombre Completo
                    </label>
                    <input
                      type="text" id="name" required
                      value={form.name}
                      onChange={e => setForm(p => ({ ...p, name: e.target.value }))}
                      className="w-full bg-white/[0.03] border border-white/[0.08] text-white rounded-xl px-5 py-4 text-base focus:outline-none focus:border-primary/40 focus:ring-2 focus:ring-primary/10 transition-all duration-300 placeholder:text-text-muted"
                      placeholder="Tu nombre completo"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-text-secondary text-xs sm:text-sm font-medium tracking-wide mb-2 sm:mb-3 uppercase">
                      Correo Electrónico
                    </label>
                    <input
                      type="email" id="email" required
                      value={form.email}
                      onChange={e => setForm(p => ({ ...p, email: e.target.value }))}
                      className="w-full bg-white/[0.03] border border-white/[0.08] text-white rounded-xl px-5 py-4 text-base focus:outline-none focus:border-primary/40 focus:ring-2 focus:ring-primary/10 transition-all duration-300 placeholder:text-text-muted"
                      placeholder="tu@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-text-secondary text-xs sm:text-sm font-medium tracking-wide mb-2 sm:mb-3 uppercase">
                      Mensaje
                    </label>
                    <textarea
                      id="message" required rows={5}
                      value={form.message}
                      onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
                      className="w-full bg-white/[0.03] border border-white/[0.08] text-white rounded-xl px-5 py-4 text-base focus:outline-none focus:border-primary/40 focus:ring-2 focus:ring-primary/10 transition-all duration-300 resize-none placeholder:text-text-muted"
                      placeholder="Escribe tu mensaje aquí..."
                    />
                  </div>
                  <motion.button
                    type="submit"
                    disabled={status === 'sending'}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full py-4.5 rounded-2xl font-bold text-base tracking-wide flex items-center justify-center gap-3 transition-all duration-400 ${
                      status === 'sent'
                        ? 'bg-emerald-500 text-white shadow-[0_0_30px_rgba(16,185,129,0.3)]'
                        : status === 'error'
                        ? 'bg-red-500 text-white'
                        : 'bg-primary text-bg-dark hover:shadow-[0_0_30px_rgba(0,232,123,0.3)] hover:scale-[1.01]'
                    }`}
                  >
                    {status === 'sending' ? (
                      <div className="w-5 h-5 border-2 border-bg-dark/30 border-t-bg-dark rounded-full animate-spin" />
                    ) : status === 'sent' ? (
                      <><CheckCircle size={18} /> ¡Mensaje Enviado!</>
                    ) : status === 'error' ? (
                      <><AlertCircle size={18} /> Error al enviar</>
                    ) : (
                      <><Send size={16} /> Enviar Mensaje</>
                    )}
                  </motion.button>
                </form>
              </div>
            </AnimatedSection>

            {/* Contact info sidebar */}
            <AnimatedSection direction="left" className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 sm:w-10 h-px bg-gradient-to-r from-secondary to-transparent" />
                <span className="text-xs sm:text-sm font-semibold tracking-[0.2em] sm:tracking-[0.25em] text-secondary uppercase">Info</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-8 sm:mb-10">Información</h3>

              <div className="space-y-4 sm:space-y-5">
                {contactInfo.map(({ icon: Icon, label, value, color, bg }) => (
                  <div key={label} className="glass-card rounded-xl sm:rounded-2xl p-5 sm:p-6 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 group">
                    <div className="flex items-start gap-4">
                      <div className={`w-11 h-11 sm:w-12 sm:h-12 rounded-xl ${bg} border flex items-center justify-center shrink-0`}>
                        <Icon size={18} className={color} />
                      </div>
                      <div>
                        <p className="text-text-muted text-xs sm:text-sm font-medium tracking-wide uppercase mb-1 sm:mb-1.5">{label}</p>
                        <p className="text-text-secondary text-sm sm:text-base leading-relaxed group-hover:text-white transition-colors duration-300">{value}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Map */}
              <div className="mt-8 sm:mt-10 aspect-video sm:aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden ring-1 ring-white/[0.06]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1882.1278696158258!2d-99.5711564649703!3d19.35807619041135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d275007cbac271%3A0xb544104b39ab56e4!2sEscuela%20Filial%20Ca%C3%B1eros%20Toluca!5e0!3m2!1sen!2smx!4v1752719091010!5m2!1sen!2smx"
                  className="w-full h-full border-0"
                  allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Ubicación"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  )
}
