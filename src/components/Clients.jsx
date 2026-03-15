const clients = [
  { name: 'Northwell Health', stat: '$11B annual budget' },
  { name: 'Samsung SIC', stat: 'Global innovation leader' },
  { name: 'Citigroup', stat: '100M+ banking clients' },
  { name: 'Optimum', stat: '4% YoY revenue growth' },
  { name: 'Warner Music', stat: '$4B annual revenue' },
  { name: 'Activision', stat: '352M monthly players' },
  { name: 'LabCorp', stat: '2.5M+ tests weekly' },
  { name: 'United Nations', stat: 'Global climate tech' },
]

const testimonials = [
  {
    quote: "Small Drop 100% gets who we are and what we need. Their creative process is iterative and comprehensive — they have become a true extension of our team who has delivered some truly amazing results.",
    name: "Michele Zamora",
    role: "AVP, Marketing Ops at Vortex Security",
    initials: "MZ",
  },
  {
    quote: "It was important that we found a partner, not just a vendor — one that would challenge our assumptions and work with us as thought partners. We found all that and more with Small Drop.",
    name: "Tiffany Cheng",
    role: "Head of Scaled Onboarding at Nexus Finance",
    initials: "TC",
  },
  {
    quote: "Small Drop's team delivered a massive shift for us in branding and website functionality in a very short window. One of the best teams I've ever worked with in my career.",
    name: "James O'Connor",
    role: "VP Marketing at Luminary Media",
    initials: "JO",
  },
]

export default function Clients() {
  return (
    <section className="bg-brand-black py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="mb-16">
          <span className="font-mono text-xs text-brand-accent tracking-[0.3em] uppercase block mb-4">
            — Featured Clients
          </span>
          <h2 className="font-display text-[clamp(40px,7vw,90px)] leading-none text-brand-white">
            TRUSTED BY<br />
            <span className="text-stroke">THE BEST</span>
          </h2>
        </div>

        {/* Client logos / names grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 border border-white/10 mb-24">
          {clients.map((c, i) => (
            <div
              key={c.name}
              className="group p-8 border-b border-r border-white/10 hover:bg-brand-gray transition-colors flex flex-col gap-2"
            >
              <span className="font-display text-xl text-brand-white/40 group-hover:text-brand-accent transition-colors leading-tight">
                {c.name}
              </span>
              <span className="font-mono text-xs text-brand-white/0 group-hover:text-brand-white/70 transition-colors tracking-wide">
                {c.stat}
              </span>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="mb-8">
          <span className="font-mono text-xs text-brand-accent tracking-[0.3em] uppercase block mb-4">
            — What Clients Say
          </span>
          <h2 className="font-display text-[clamp(30px,5vw,60px)] leading-none text-brand-white mb-16">
            IMPACTFUL OUTCOMES
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-brand-black p-8 flex flex-col gap-6 hover:bg-brand-gray transition-colors">
              <span className="font-display text-6xl text-brand-accent leading-none">"</span>
              <p className="font-body text-brand-white/70 text-sm leading-relaxed flex-1">
                {t.quote}
              </p>
              <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                <div className="w-10 h-10 rounded-full bg-brand-accent flex items-center justify-center shrink-0">
                  <span className="font-mono text-xs font-bold text-brand-black">{t.initials}</span>
                </div>
                <div>
                  <div className="font-body font-semibold text-sm text-brand-white">{t.name}</div>
                  <div className="font-mono text-xs text-brand-muted">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
