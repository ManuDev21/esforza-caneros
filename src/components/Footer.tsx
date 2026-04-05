import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, ArrowUpRight } from 'lucide-react'

const socials = [
  { href: 'https://www.facebook.com/share/1Dj8h1cPET/?mibextid=wwXIfr', label: 'Facebook', color: 'hover:bg-[#1877F2]', icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg> },
  { href: 'https://www.instagram.com/zacatepec_toluca?igsh=cm12b3Y3enIwMHp5', label: 'Instagram', color: 'hover:bg-[#E4405F]', icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg> },
  { href: 'https://www.tiktok.com/@caneros.toluca?_t=ZS-8vtcwOIRNWZ&_r=1', label: 'TikTok', color: 'hover:bg-white hover:text-black', icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.73a8.19 8.19 0 004.76 1.52v-3.4a4.85 4.85 0 01-1-.16z"/></svg> },
]

const footerLinks = [
  { to: '/', label: 'Inicio' },
  { to: '/nosotros', label: 'Nosotros' },
  { to: '/faq', label: 'FAQ' },
  { to: '/contacto', label: 'Contacto' },
  { to: '/promociones', label: 'Promociones' },
]

export default function Footer() {
  return (
    <footer className="relative bg-bg-medium border-t border-white/[0.04]">
      {/* Gradient top line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 pt-16 sm:pt-24 pb-10 sm:pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 sm:gap-14 lg:gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6 sm:mb-8 group">
              <img src="/images/misc/logo1.png" alt="Logo" className="w-10 sm:w-11 group-hover:scale-110 transition-transform duration-500" />
              <div>
                <p className="text-white font-bold text-sm sm:text-base tracking-[0.12em]">ESFORZA</p>
                <p className="text-primary text-[10px] sm:text-xs tracking-[0.2em]">CAÑEROS</p>
              </div>
            </Link>
            <p className="text-text-muted text-sm sm:text-base leading-relaxed mb-6 sm:mb-8">
              Formando a los campeones del mañana con disciplina, pasión y trabajo en equipo desde hace más de 30 años.
            </p>
            <div className="flex gap-3">
              {socials.map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                  className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-white/[0.05] border border-white/[0.08] text-text-secondary flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5 hover:text-white ${s.color}`}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h5 className="text-xs sm:text-sm font-semibold tracking-[0.2em] text-text-muted uppercase mb-5 sm:mb-6">Navegación</h5>
            <ul className="space-y-3 sm:space-y-4">
              {footerLinks.map(l => (
                <li key={l.to}>
                  <Link to={l.to} className="text-text-secondary text-sm sm:text-base hover:text-primary transition-colors duration-300 flex items-center gap-2.5 group">
                    <span className="w-1 h-1 rounded-full bg-text-muted group-hover:bg-primary transition-colors" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h5 className="text-xs sm:text-sm font-semibold tracking-[0.2em] text-text-muted uppercase mb-5 sm:mb-6">Contacto</h5>
            <ul className="space-y-4 sm:space-y-5">
              {[
                { icon: Phone, text: '+52 722 367 3638' },
                { icon: Mail, text: 'Jes.rubens@hotmail.com' },
                { icon: MapPin, text: 'P.º de La Reforma 6, San Nicolas Tolentino, Méx.' },
              ].map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-start gap-3">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Icon size={16} className="text-primary" />
                  </div>
                  <span className="text-text-secondary text-sm sm:text-base leading-relaxed">{text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Map */}
          <div>
            <h5 className="text-xs sm:text-sm font-semibold tracking-[0.2em] text-text-muted uppercase mb-5 sm:mb-6">Ubicación</h5>
            <div className="aspect-video sm:aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/[0.06]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1882.1278696158258!2d-99.5711564649703!3d19.35807619041135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d275007cbac271%3A0xb544104b39ab56e4!2sEscuela%20Filial%20Ca%C3%B1eros%20Toluca!5e0!3m2!1sen!2smx!4v1752719091010!5m2!1sen!2smx"
                className="w-full h-full border-0"
                allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Ubicación"
              />
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="section-divider mt-10 sm:mt-12 mb-6 sm:mb-8" />
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
          <p className="text-text-muted text-xs tracking-wide">
            © 2025 Manuel Rodríguez Calderón — Esforza Cañeros Toluca
          </p>
          <a
            href="https://github.com/ManuDev21"
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.03] border border-white/[0.06] text-text-secondary text-xs hover:text-white hover:bg-white/[0.06] transition-all duration-300 group"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
            GitHub
            <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
        </div>
      </div>
    </footer>
  )
}
