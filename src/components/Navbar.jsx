import { useState, useEffect, useRef } from 'react'

const SERVICE_LINKS = [
  { label: 'Web Design', href: '#/web-design', page: 'web-design' },
  { label: 'Web Development', href: '#/web-development', page: 'web-development' },
  { label: 'Digital Marketing', href: '#', page: '' },
  { label: 'AI Services', href: '#', page: '' },
  { label: 'Branding', href: '#', page: '' },
  { label: 'Support & Hosting', href: '#', page: '' },
]

export default function Navbar({ page = 'home' }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const servicesRef = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target)) {
        setServicesOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const servicePages = ['web-design', 'web-development']
  const isServicePage = servicePages.includes(page)

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-white/95 backdrop-blur-md border-b border-black/10 shadow-sm' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="group flex items-center gap-2">
          <span className="w-8 h-8 rounded-full bg-brand-accent flex items-center justify-center">
            <span className="font-display text-brand-black text-sm leading-none">SD</span>
          </span>
          <span className="font-display text-2xl tracking-widest text-brand-white group-hover:text-brand-accent transition-colors">
            SMALLDROP<span className="text-brand-accent">INC</span>
          </span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden lg:flex items-center gap-8">
          {/* Latest Work */}
          <li>
            <a href="#/work"
              className={`font-body text-sm transition-colors tracking-wide uppercase ${page === 'work' ? 'text-brand-accent' : 'text-brand-white/70 hover:text-brand-accent'}`}>
              Latest Work
            </a>
          </li>

          {/* Services dropdown */}
          <li ref={servicesRef} className="relative pt-px">
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className={`font-body text-sm transition-colors tracking-wide uppercase flex items-center self-auto gap-1.5 ${isServicePage ? 'text-brand-accent' : 'text-brand-white/70 hover:text-brand-accent'}`}
            >
              Services 
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none"
                className={`transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`}>
                <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            {/* Dropdown panel */}
            <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-3 w-56 bg-white border border-black/10 shadow-xl transition-all duration-200 ${
              servicesOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'
            }`}>
              <div className="py-2">
                {SERVICE_LINKS.map((s) => (
                  <a key={s.label} href={s.href}
                    onClick={() => setServicesOpen(false)}
                    className={`block px-5 py-2.5 font-body text-sm tracking-wide hover:bg-[#f5f5f3] hover:text-[#c3d219] transition-colors ${
                      (s.page && page === s.page) ? 'text-[#c3d219] bg-[#f5f5f3]' : 'text-black/70'
                    }`}>
                    {s.label}
                  </a>
                ))}
              </div>
              {/* Bottom accent */}
              <div className="h-0.5 bg-[#c3d219]" />
            </div>
          </li>

          <li>
            <a href="#/about"
              className={`font-body text-sm transition-colors tracking-wide uppercase ${page === 'about' ? 'text-brand-accent' : 'text-brand-white/70 hover:text-brand-accent'}`}>
              About Us
            </a>
          </li>
          <li>
            <a href="#/blog"
              className={`font-body text-sm transition-colors tracking-wide uppercase ${page === 'blog' ? 'text-brand-accent' : 'text-brand-white/70 hover:text-brand-accent'}`}>
              Blog
            </a>
          </li>
        </ul>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden lg:inline-flex items-center gap-2 bg-brand-accent text-brand-black font-body font-semibold text-sm px-6 py-3 hover:opacity-80 hover:text-white transition-colors tracking-wide"
        >
          Get in Touch
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M1 13L13 1M13 1H5M13 1V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>

        {/* Hamburger */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-brand-white transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-brand-white transition-all ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-brand-white transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-500 overflow-hidden bg-white border-t border-black/10 ${
          menuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="px-6 py-4 flex flex-col gap-1">
          <li>
            <a href="#/work" onClick={() => setMenuOpen(false)}
              className="font-body text-black/70 hover:text-[#c3d219] transition-colors text-base tracking-wide block py-2">
              Latest Work
            </a>
          </li>
          {/* Services group */}
          <li>
            <span className="font-body text-black/40 text-xs tracking-widest uppercase block pt-3 pb-1">Services</span>
            <ul className="pl-3 border-l-2 border-[#c3d219]/30 flex flex-col gap-1">
              {SERVICE_LINKS.map((s) => (
                <li key={s.label}>
                  <a href={s.href} onClick={() => setMenuOpen(false)}
                    className="font-body text-black/60 hover:text-[#c3d219] transition-colors text-sm tracking-wide block py-1.5">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </li>
          <li>
            <a href="#/about" onClick={() => setMenuOpen(false)}
              className="font-body text-black/70 hover:text-[#c3d219] transition-colors text-base tracking-wide block py-2 mt-1">
              About Us
            </a>
          </li>
          <li>
            <a href="#/blog" onClick={() => setMenuOpen(false)}
              className="font-body text-black/70 hover:text-[#c3d219] transition-colors text-base tracking-wide block py-2">
              Blog
            </a>
          </li>
          <li className="pt-3">
            <a href="#contact" onClick={() => setMenuOpen(false)}
              className="inline-block bg-[#c3d219] text-[#0a0a0a] font-semibold px-6 py-3 text-sm tracking-wide hover:bg-black hover:text-white transition-colors">
              Get in Touch →
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}
