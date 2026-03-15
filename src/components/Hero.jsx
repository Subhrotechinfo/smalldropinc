import { useEffect, useRef } from 'react'

export default function Hero() {
  const heroRef = useRef(null)

  useEffect(() => {
    const el = heroRef.current
    if (!el) return
    const onMove = (e) => {
      const { clientX, clientY } = e
      const x = (clientX / window.innerWidth - 0.5) * 20
      const y = (clientY / window.innerHeight - 0.5) * 20
      el.style.setProperty('--px', `${x}px`)
      el.style.setProperty('--py', `${y}px`)
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-brand-black noise-overlay"
      style={{ '--px': '0px', '--py': '0px' }}
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(to right, #0a0a0a 1px, transparent 1px), linear-gradient(to bottom, #0a0a0a 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      {/* Glowing orb */}
      <div
        className="absolute top-1/4 right-1/4 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(26,26,255,0.07) 0%, transparent 70%)',
          transform: 'translate(calc(var(--px) * 0.5), calc(var(--py) * 0.5))',
          transition: 'transform 0.3s ease',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20">
        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-8 animate-fade-up" style={{ animationDelay: '0.1s', opacity: 0 }}>
          <span className="w-12 h-px bg-brand-accent" />
          <span className="font-mono text-xs text-brand-accent tracking-[0.3em] uppercase">Digital Agency — Est. 2024</span>
        </div>

        {/* Main headline */}
        <div className="overflow-hidden mb-2">
          <h1
            className="font-display text-[clamp(60px,14vw,180px)] leading-[0.9] text-brand-white animate-fade-up"
            style={{ animationDelay: '0.2s', opacity: 0 }}
          >
            TRANS
          </h1>
        </div>
        <div className="overflow-hidden mb-2">
          <h1
            className="font-display text-[clamp(60px,14vw,180px)] leading-[0.9] text-stroke animate-fade-up"
            style={{ animationDelay: '0.35s', opacity: 0 }}
          >
            FORMING
          </h1>
        </div>
        <div className="overflow-hidden">
          <h1
            className="font-display text-[clamp(60px,14vw,180px)] leading-[0.9] text-brand-accent animate-fade-up"
            style={{ animationDelay: '0.5s', opacity: 0 }}
          >
            BRANDS.
          </h1>
        </div>

        {/* Sub row */}
        <div
          className="mt-12 flex flex-col md:flex-row items-start md:items-end gap-8 md:gap-16 animate-fade-up"
          style={{ animationDelay: '0.7s', opacity: 0 }}
        >
          <p className="max-w-md font-body text-brand-white/60 text-lg leading-relaxed">
            At Small Drop we go beyond being a digital agency. We craft eye-catching brand experiences,
            user-focused websites, and tailored marketing strategies for brands that want to stand out.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#work"
              className="group inline-flex items-center gap-3 bg-brand-accent text-[#0a0a0a] font-semibold px-8 py-4 text-sm tracking-wide hover:opacity-80 transition-opacity"
            >
              View Our Work
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-3 border border-brand-white/20 text-brand-white px-8 py-4 text-sm tracking-wide hover:border-brand-accent hover:text-brand-accent transition-colors"
            >
              Start a Project
            </a>
          </div>
        </div>
      </div>

      {/* Stats row */}
      <div
        className="relative z-10 border-t border-brand-white/10 animate-fade-up"
        style={{ animationDelay: '0.9s', opacity: 0 }}
      >
        <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { num: '150+', label: 'Projects Delivered' },
            { num: '8+', label: 'Years of Craft' },
            { num: '40+', label: 'Awards Won' },
            { num: '98%', label: 'Client Satisfaction' },
          ].map(({ num, label }) => (
            <div key={label} className="flex flex-col gap-1">
              <span className="font-display text-4xl text-brand-accent">{num}</span>
              <span className="font-body text-xs text-brand-white/50 uppercase tracking-widest">{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce z-10">
        <span className="font-mono text-xs text-brand-white/30 tracking-widest">SCROLL</span>
        <div className="w-px h-10 bg-gradient-to-b from-brand-white/30 to-transparent" />
      </div>
    </section>
  )
}
