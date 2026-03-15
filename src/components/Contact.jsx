export default function Contact() {
  return (
    <section id="contact" className="bg-[#0a0a0a] py-24 px-6 relative overflow-hidden">
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden"
        aria-hidden="true"
      >
        <span className="font-display text-[20vw] text-white/[0.03] leading-none select-none whitespace-nowrap">
          SMALLDROP
        </span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <span className="font-mono text-xs text-brand-accent tracking-[0.3em] uppercase block mb-6">
          — Let's Build Together
        </span>
        <h2 className="font-display text-[clamp(50px,10vw,130px)] leading-none text-white mb-8">
          START YOUR<br />PROJECT
        </h2>
        <p className="font-body text-white/50 text-lg max-w-lg mx-auto mb-12 leading-relaxed">
          Ready to transform your digital presence? Let's build something remarkable together.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:hello@smalldropinc.com"
            className="group inline-flex items-center justify-center gap-3 bg-brand-accent text-[#0a0a0a] font-semibold px-10 py-5 text-sm tracking-wide hover:opacity-80 transition-opacity"
          >
            Get in Touch
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
          <a
            href="#work"
            className="inline-flex items-center justify-center gap-3 border-2 border-white/20 text-white font-semibold px-10 py-5 text-sm tracking-wide hover:bg-white/10 transition-colors"
          >
            See Our Work
          </a>
        </div>
        <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-8 text-white/30 font-mono text-xs tracking-widest uppercase">
          <span>hello@smalldropinc.com</span>
          <span className="hidden sm:block">·</span>
          <span>+1 (616) 525-5263</span>
          <span className="hidden sm:block">·</span>
          <span>New York, NY</span>
        </div>
      </div>
    </section>
  )
}
