import { useState, useEffect, useRef } from 'react'

/* ── scroll reveal ── */
function useFadeUp(threshold = 0.1) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.classList.add('in-view'); obs.disconnect() } },
      { threshold }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return ref
}

/* ── data ── */
const PROCESS_STEPS = [
  {
    num: '01',
    title: 'Identify',
    icon: '◎',
    color: '#c3d219',
    desc: 'We start with a conversation to identify your business goals and objectives for your website — truly getting to know you and your brand needs. Together we draft a timeline and project plan ideal to deliver an innovative web design enriched in future-forward technology.',
    detail: 'Discovery call · Goal mapping · Timeline planning · Project brief',
  },
  {
    num: '02',
    title: 'Research',
    icon: '⟁',
    color: '#4fc3f7',
    desc: 'To honor our partnership of tailored strategy and design, we conduct extensive research on your industry, competitors, and audience — including interviews with internal stakeholders to ensure the design is successful for your business.',
    detail: 'Industry analysis · Competitor audit · Audience research · Stakeholder interviews',
  },
  {
    num: '03',
    title: 'UX / UI',
    icon: '◈',
    color: '#b388ff',
    desc: 'Once research is complete, we lay the foundation by creating a sitemap and wireframe mapping out key features, functionalities, and structure of your new website. With your approval, this guides our team through completing your design.',
    detail: 'Sitemap · Wireframes · User flows · Prototype · Approval checkpoints',
  },
  {
    num: '04',
    title: 'Content Strategy',
    icon: '⬡',
    color: '#ff7043',
    desc: 'Working collaboratively with your team, we determine what content is necessary and valuable to your customers — and where to place it to help drive conversions and build sustainable growth for your business.',
    detail: 'Content audit · Messaging hierarchy · SEO foundations · Conversion planning',
  },
  {
    num: '05',
    title: 'Design',
    icon: '△',
    color: '#69f0ae',
    desc: 'With your input and business goals in mind, we bring your brand to life through custom human-facing graphics and visual elements targeted toward your audience — created in future-forward technology, guaranteeing a successful new web design.',
    detail: 'Visual design · Component library · Brand alignment · Responsive mockups · Final delivery',
  },
]

const EXPERTISE = [
  { title: 'UX / UI Design', icon: '◎', desc: 'Human-centered interfaces that convert visitors into customers.' },
  { title: 'Creative Direction', icon: '△', desc: 'Strategic visual vision that sets your brand apart from the competition.' },
  { title: 'Mobile Responsive Design', icon: '⬡', desc: 'Pixel-perfect experiences across every device and screen size.' },
]

const RELATED_WORK = [
  {
    title: 'Samsung Next',
    slug: 'samsung-next',
    desc: 'This venture capital firm at Samsung builds, grows, and scales great ideas. Our talented design team created a new web design for the firm.',
    industry: 'Venture Capital',
    accent: '#4fc3f7',
    bg: '#001829',
    icon: '◈',
  },
  {
    title: 'SOURCE',
    slug: 'source',
    desc: 'Like the self-sufficient solar-powered water condenser, our team helped transform the human relationship to water through a freshly designed eCommerce platform.',
    industry: 'CleanTech',
    accent: '#69f0ae',
    bg: '#00200e',
    icon: '⊕',
  },
  {
    title: 'Dataiku',
    slug: 'dataiku',
    desc: 'We helped take big data even further by enhancing this billion-dollar software company\'s online presence with cutting-edge video and design.',
    industry: 'Enterprise AI',
    accent: '#b388ff',
    bg: '#16002a',
    icon: '⟁',
  },
]

const STATS = [
  { num: '150+', label: 'Sites Designed' },
  { num: '34', label: 'Design Awards' },
  { num: '98%', label: 'Client Satisfaction' },
  { num: '12+', label: 'Years Experience' },
]

const AWARDS = [
  { name: 'CSS Design Awards', wins: '20', icon: '★' },
  { name: 'Awwwards', wins: '12', icon: '✦' },
  { name: 'Webby Awards', wins: '02', icon: '◉' },
]

const FAQS = [
  {
    q: 'How long does a web design project take?',
    a: 'Most projects are completed within 8–16 weeks depending on complexity. After our initial discovery call, we provide a detailed timeline tailored to your scope and goals.',
  },
  {
    q: 'What makes Small Drop\'s web design different?',
    a: 'We combine conversion-focused strategy with award-winning creative execution. Every design is custom — never templated — and built with your specific audience and business goals in mind.',
  },
  {
    q: 'Do you work with existing brands or only new ones?',
    a: 'Both. We work with established brands looking for a redesign and new companies building their digital presence from scratch. Our process adapts to where you are.',
  },
  {
    q: 'Is SEO included in the web design process?',
    a: 'Yes. SEO best practices are baked into our design and content strategy from day one — including site structure, page speed optimization, and semantic markup.',
  },
  {
    q: 'What industries do you specialize in?',
    a: 'We\'ve designed for 50+ industries including fintech, healthcare, SaaS, legal, e-commerce, life sciences, and more. Our research-first approach means we get up to speed on any industry fast.',
  },
]

/* ── FAQ item ── */
function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-black/8">
      <button
        className="w-full flex items-center justify-between gap-4 py-6 text-left group"
        onClick={() => setOpen(!open)}
      >
        <span className="font-display text-xl text-[#0a0a0a] group-hover:text-[#c3d219] transition-colors leading-tight">{q}</span>
        <span
          className="w-8 h-8 rounded-full border border-black/15 flex items-center justify-center font-mono text-sm shrink-0 transition-all duration-300 group-hover:border-[#c3d219] group-hover:text-[#c3d219]"
          style={{ transform: open ? 'rotate(45deg)' : 'rotate(0deg)' }}
        >+</span>
      </button>
      <div className={`overflow-hidden transition-all duration-400 ${open ? 'max-h-48 pb-6' : 'max-h-0'}`}>
        <p className="font-body text-sm text-black/55 leading-relaxed max-w-2xl">{a}</p>
      </div>
    </div>
  )
}

/* ── Related work card ── */
function WorkCard({ project }) {
  const [hovered, setHovered] = useState(false)
  return (
    <a
      href="#"
      className="group relative overflow-hidden flex flex-col"
      style={{ minHeight: '340px' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className="absolute inset-0 transition-all duration-700"
        style={{ background: hovered ? `linear-gradient(135deg, ${project.bg} 0%, #0a0a0a 100%)` : 'linear-gradient(135deg,#111 0%,#0d0d0d 100%)' }}
      />
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{ backgroundImage: 'linear-gradient(to right,#fff 1px,transparent 1px),linear-gradient(to bottom,#fff 1px,transparent 1px)', backgroundSize: '40px 40px' }}
      />
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
        style={{ background: `radial-gradient(ellipse at 30% 60%,${project.accent}12 0%,transparent 60%)` }} />
      <div className="absolute top-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-500"
        style={{ background: project.accent }} />

      <div className="relative z-10 flex flex-col justify-between h-full p-8">
        <div className="flex items-center justify-between">
          <span className="font-mono text-xs px-3 py-1 border tracking-widest uppercase"
            style={{ color: project.accent, borderColor: `${project.accent}40` }}>
            {project.industry}
          </span>
          <span className="font-display text-5xl opacity-10 group-hover:opacity-20 transition-opacity"
            style={{ color: project.accent }}>{project.icon}</span>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="font-display text-4xl text-white group-hover:text-white transition-colors"
            style={{ color: hovered ? project.accent : 'white' }}>
            {project.title}
          </h3>
          <p className={`font-body text-sm text-white/50 leading-relaxed transition-all duration-500 ${hovered ? 'opacity-100' : 'opacity-0'}`}>
            {project.desc}
          </p>
          <div className="flex items-center gap-2 pt-2 font-mono text-xs tracking-widest uppercase"
            style={{ color: project.accent }}>
            View Case Study <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
          </div>
        </div>
      </div>
    </a>
  )
}

/* ── Main ── */
export default function WebDesign() {
  const [activeStep, setActiveStep] = useState(0)
  const heroRef = useFadeUp()
  const processRef = useFadeUp()
  const expertiseRef = useFadeUp()
  const workRef = useFadeUp()
  const statsRef = useFadeUp()
  const awardsRef = useFadeUp()
  const faqRef = useFadeUp()
  const ctaRef = useFadeUp()

  return (
    <div className="bg-white min-h-screen">

      {/* ══ HERO ══ */}
      <section className="relative min-h-[90vh] flex flex-col justify-end overflow-hidden bg-[#ffffff] pb-0 pt-32">
        <div
          className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{
            backgroundImage: 'linear-gradient(to right, #0a0a0a 1px, transparent 1px), linear-gradient(to bottom, #0a0a0a 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />
        {/* Grid bg
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{ backgroundImage: 'linear-gradient(to right,#fff 1px,transparent 1px),linear-gradient(to bottom,#fff 1px,transparent 1px)', backgroundSize: '80px 80px' }} /> */}

        {/* Orbs */}
        <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle,rgba(195,210,25,0.09) 0%,transparent 60%)' }} />
        <div className="absolute bottom-1/3 left-1/4 w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle,rgba(79,195,247,0.06) 0%,transparent 60%)' }} />

        <div ref={heroRef} className="fade-up-section relative z-10 max-w-7xl mx-auto px-6 w-full pb-20">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-8 font-mono text-xs text-black/30 tracking-widest uppercase">
            <a href="#" className="hover:text-[#c3d219] transition-colors">Home</a>
            <span>/</span>
            <a href="#" className="hover:text-[#c3d219] transition-colors">Services</a>
            <span>/</span>
            <span className="text-[#c3d219]">Web Design</span>
          </div>

          {/* Service badge */}
          <div className="flex items-center gap-3 mb-8">
            <span className="w-10 h-px bg-[#c3d219]" />
            <span className="font-mono text-xs text-[#c3d219] tracking-[0.3em] uppercase">Service</span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-[clamp(52px,10vw,140px)] leading-[0.88] text-black mb-0">
            RENOWNED,
          </h1>
          <h1 className="font-display text-[clamp(52px,10vw,140px)] leading-[0.88] mb-0"
            style={{ WebkitTextStroke: '1px hsla(0, 4%, 5%, 0.30)', color: 'transparent' }}>
            AWARD-WINNING
          </h1>
          <h1 className="font-display text-[clamp(52px,10vw,140px)] leading-[0.88] text-[#c3d219]">
            WEB DESIGN
          </h1>

          {/* Sub row */}
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
            <div>
              <p className="font-body text-lg text-black/60 leading-relaxed mb-6">
                <strong className="text-black font-semibold">Elevate your digital presence</strong> with compelling,
                future-proof website designs. Our web design team is where you should turn when you need a strategic
                vision to set you apart from the competition while creating future growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contact"
                  className="group inline-flex items-center gap-3 bg-[#c3d219] text-[#0a0a0a] font-semibold px-8 py-4 text-sm tracking-wide hover:opacity-80 transition-colors">
                  Start a Project <span className="group-hover:translate-x-1 transition-transform">→</span>
                </a>
                <a href="#process"
                  className="inline-flex items-center gap-3 border border-border-[#c3d219]/20 text-[#c3d219] px-8 py-4 text-sm tracking-wide hover:border-[#c3d219] hover:text-[#c3d219] transition-colors">
                  Our Process ↓
                </a>
              </div>
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-2 gap-px bg-white/10">
              {STATS.map(({ num, label }) => (
                <div key={label} className="bg-[#0a0a0a] p-6 hover:bg-[#111] transition-colors group">
                  <span className="font-display text-4xl text-[#c3d219] group-hover:scale-110 transition-transform inline-block">{num}</span>
                  <p className="font-mono text-xs text-white/35 uppercase tracking-widest mt-1">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent pointer-events-none" />
      </section>

      {/* ══ INTRO SPLIT ══ */}
      <section className="py-24 px-6 bg-white border-b border-black/8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="font-mono text-xs text-[#c3d219] tracking-[0.3em] uppercase block mb-6">— Our Philosophy</span>
            <h2 className="font-display text-[clamp(36px,5vw,68px)] leading-none text-[#0a0a0a] mb-8">
              YOUR WEBSITE IS YOUR<br />
              <span style={{ WebkitTextStroke: '2px #c3d219', color: 'transparent' }}>BRAND'S STORY</span>
            </h2>
            <p className="font-body text-black/60 leading-relaxed mb-6">
              Your website is a powerful extension of your brand's story, and we bring that story to life through
              a collaborative web design process. Your team is involved in every step to create a frictionless
              and delightful experience for your customers.
            </p>
            <p className="font-body text-black/55 leading-relaxed">
              Our designers immerse themselves in your industry and brand aesthetic to deliver a website designed
              to compel your target audience — representing your business while achieving your goals for
              continued future success.
            </p>
          </div>

          {/* Visual — decorative asymmetric boxes */}
          <div className="relative h-[420px] hidden lg:block">
            {[
              { top: '0%', left: '5%', w: '55%', h: '62%', bg: '#0a0a0a', accent: '#c3d219', label: 'Strategy' },
              { top: '20%', left: '45%', w: '50%', h: '55%', bg: '#f0f0ee', accent: '#4fc3f7', label: 'Design' },
              { top: '60%', left: '10%', w: '40%', h: '38%', bg: '#c3d219', accent: '#0a0a0a', label: 'Launch' },
            ].map(({ top, left, w, h, bg, accent, label }) => (
              <div key={label} className="absolute flex flex-col justify-between p-6 transition-transform hover:-translate-y-1 duration-300"
                style={{ top, left, width: w, height: h, background: bg, border: `1px solid ${accent}20` }}>
                <div className="w-6 h-0.5" style={{ background: accent }} />
                <span className="font-display text-2xl" style={{ color: accent }}>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ EXPERTISE LINKS ══ */}
      <section ref={expertiseRef} className="fade-up-section py-16 px-6 bg-[#f5f5f3] border-b border-black/8">
        <div className="max-w-7xl mx-auto">
          <span className="font-mono text-xs text-[#c3d219] tracking-[0.3em] uppercase block mb-8">— Additional Website Design Expertise</span>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-black/8">
            {EXPERTISE.map((e) => (
              <a key={e.title} href="#"
                className="group bg-[#f5f5f3] hover:bg-white transition-colors p-8 flex flex-col gap-4">
                <span className="text-3xl text-[#c3d219]/50 group-hover:text-[#c3d219] transition-colors font-display">{e.icon}</span>
                <h3 className="font-display text-2xl text-[#0a0a0a] group-hover:text-[#c3d219] transition-colors">{e.title}</h3>
                <p className="font-body text-sm text-black/50 leading-relaxed flex-1">{e.desc}</p>
                <span className="font-mono text-xs text-[#c3d219] opacity-0 group-hover:opacity-100 transition-opacity tracking-widest uppercase">
                  Learn more →
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ══ PROCESS ══ */}
      <section ref={processRef} id="process" className="fade-up-section py-24 px-6 bg-white border-b border-black/8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <span className="font-mono text-xs text-[#c3d219] tracking-[0.3em] uppercase block mb-4">— How We Work</span>
              <h2 className="font-display text-[clamp(36px,6vw,80px)] leading-none text-[#0a0a0a]">
                OUR PROCESS TO<br />
                <span style={{ WebkitTextStroke: '2px #0a0a0a', color: 'transparent' }}>REIMAGINED</span><br />
                WEB DESIGN
              </h2>
            </div>
            <p className="max-w-sm font-body text-sm text-black/50 leading-relaxed">
              Five deliberate steps that transform a conversation into a high-performing digital experience.
            </p>
          </div>

          {/* Step selector — desktop */}
          <div className="hidden lg:grid grid-cols-5 gap-px bg-black/8 mb-0">
            {PROCESS_STEPS.map((step, i) => (
              <button key={step.num}
                onClick={() => setActiveStep(i)}
                className={`group p-6 flex flex-col gap-3 text-left transition-all duration-300 ${activeStep === i ? 'bg-[#0a0a0a]' : 'bg-white hover:bg-[#f5f5f3]'}`}>
                <span className="font-mono text-xs tracking-widest" style={{ color: activeStep === i ? step.color : 'rgba(0,0,0,0.25)' }}>{step.num}</span>
                <span className="font-display text-xl" style={{ color: activeStep === i ? step.color : '#0a0a0a' }}>{step.icon}</span>
                <span className={`font-display text-xl leading-tight transition-colors ${activeStep === i ? 'text-white' : 'text-[#0a0a0a] group-hover:text-[#c3d219]'}`}>
                  {step.title}
                </span>
              </button>
            ))}
          </div>

          {/* Active step detail — desktop */}
          <div className="hidden lg:block">
            {PROCESS_STEPS.map((step, i) => (
              <div key={step.num}
                className={`transition-all duration-300 overflow-hidden ${activeStep === i ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="bg-[#0a0a0a] p-10 grid grid-cols-2 gap-12 items-center">
                  <div>
                    <p className="font-body text-white/65 leading-relaxed text-base">{step.desc}</p>
                  </div>
                  <div className="flex flex-col gap-3">
                    <span className="font-mono text-xs tracking-widest uppercase mb-2" style={{ color: step.color }}>Deliverables</span>
                    <div className="flex flex-wrap gap-2">
                      {step.detail.split(' · ').map((d) => (
                        <span key={d} className="font-mono text-xs border px-3 py-1.5 text-white/50"
                          style={{ borderColor: `${step.color}30` }}>
                          {d}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile accordion */}
          <div className="lg:hidden flex flex-col divide-y divide-black/8">
            {PROCESS_STEPS.map((step, i) => (
              <div key={step.num} className="py-6">
                <button
                  className="w-full flex items-center justify-between gap-4"
                  onClick={() => setActiveStep(activeStep === i ? -1 : i)}
                >
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-xs text-black/30">{step.num}</span>
                    <span className="font-display text-xl" style={{ color: step.color }}>{step.icon}</span>
                    <span className="font-display text-2xl text-[#0a0a0a]">{step.title}</span>
                  </div>
                  <span className="font-mono text-sm text-black/30 transition-transform duration-300"
                    style={{ transform: activeStep === i ? 'rotate(45deg)' : 'none' }}>+</span>
                </button>
                <div className={`overflow-hidden transition-all duration-400 ${activeStep === i ? 'max-h-64 pt-4' : 'max-h-0'}`}>
                  <p className="font-body text-sm text-black/55 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ AWARDS ══ */}
      <section ref={awardsRef} className="fade-up-section py-20 px-6 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-12">
            <div>
              <span className="font-mono text-xs text-[#c3d219] tracking-[0.3em] uppercase block mb-4">— Recognition</span>
              <h2 className="font-display text-[clamp(32px,5vw,64px)] leading-none text-white">
                WE'VE EARNED SOME<br />
                <span className="text-[#c3d219]">GREAT AWARDS</span>
              </h2>
            </div>
            <a href="#/work"
              className="group inline-flex items-center gap-2 border border-white/20 text-white/60 hover:border-[#c3d219] hover:text-[#c3d219] transition-colors px-6 py-3 font-mono text-xs tracking-widest uppercase shrink-0">
              View Our Work <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10">
            {AWARDS.map(({ name, wins, icon }) => (
              <div key={name} className="bg-[#0a0a0a] hover:bg-[#111] transition-colors p-10 flex flex-col gap-4 group">
                <span className="font-display text-7xl text-[#c3d219]/15 group-hover:text-[#c3d219]/30 transition-colors leading-none">{wins}</span>
                <div className="flex items-center gap-3">
                  <span className="text-[#c3d219] text-xl">{icon}</span>
                  <span className="font-display text-2xl text-white group-hover:text-[#c3d219] transition-colors">{name}</span>
                </div>
                <p className="font-mono text-xs text-white/25 tracking-wide">Awards Won</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ RELATED WORK ══ */}
      <section ref={workRef} className="fade-up-section py-24 px-6 bg-[#0a0a0a] border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="font-mono text-xs text-[#c3d219] tracking-[0.3em] uppercase block mb-4">— Portfolio</span>
              <h2 className="font-display text-[clamp(36px,6vw,80px)] leading-none text-white">
                RELATED WEB<br />
                <span style={{ WebkitTextStroke: '1px rgba(255,255,255,0.25)', color: 'transparent' }}>DESIGN WORK</span>
              </h2>
            </div>
            <a href="#/work"
              className="group inline-flex items-center gap-2 text-white/40 hover:text-[#c3d219] transition-colors font-body text-sm tracking-wide shrink-0">
              More work <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10">
            {RELATED_WORK.map((project) => (
              <WorkCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* ══ STATS BAR ══ */}
      <section ref={statsRef} className="fade-up-section py-20 px-6 bg-white border-y border-black/8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-black/8">
            {[
              { num: '50+', label: 'Industries Served' },
              { num: '8+', label: 'Years Designing' },
              { num: '260', label: 'Cups of Coffee Daily' },
              { num: '100+', label: 'Team Members' },
            ].map(({ num, label }) => (
              <div key={label} className="bg-white hover:bg-[#f5f5f3] transition-colors p-10 group text-center">
                <span className="font-display text-5xl text-[#0a0a0a] group-hover:text-[#c3d219] transition-colors block">{num}</span>
                <span className="font-mono text-xs text-black/35 uppercase tracking-widest mt-2 block">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ TESTIMONIAL ══ */}
      <section className="py-24 px-6 bg-[#f5f5f3]">
        <div className="max-w-4xl mx-auto text-center">
          <span className="font-display text-8xl text-[#c3d219]/30 leading-none block mb-6">"</span>
          <blockquote className="font-display text-[clamp(22px,3vw,36px)] text-[#0a0a0a] leading-tight mb-8">
            Small Drop 100% gets who we are and what we need. Their creative process is iterative and comprehensive —
            they have become a true extension of our team.
          </blockquote>
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#c3d219] flex items-center justify-center font-display text-[#0a0a0a] text-lg">MZ</div>
            <div className="text-left">
              <p className="font-body font-semibold text-sm text-[#0a0a0a]">Michele Zamora</p>
              <p className="font-mono text-xs text-black/40">AVP, Marketing Ops at Vortex Security</p>
            </div>
          </div>
        </div>
      </section>

      {/* ══ FAQ ══ */}
      <section ref={faqRef} className="fade-up-section py-24 px-6 bg-white border-t border-black/8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div>
            <span className="font-mono text-xs text-[#c3d219] tracking-[0.3em] uppercase block mb-4">— Common Questions</span>
            <h2 className="font-display text-[clamp(32px,4vw,56px)] leading-none text-[#0a0a0a]">
              FREQUENTLY<br />
              <span style={{ WebkitTextStroke: '2px #c3d219', color: 'transparent' }}>ASKED</span>
            </h2>
            <p className="font-body text-sm text-black/50 mt-6 leading-relaxed">
              Have a question not listed here? Reach out directly — we're always happy to talk through your project.
            </p>
            <a href="#contact"
              className="inline-flex items-center gap-2 mt-6 font-mono text-xs text-[#c3d219] tracking-widest uppercase hover:underline">
              Contact Us →
            </a>
          </div>
          <div className="lg:col-span-2">
            {FAQS.map((faq) => (
              <FaqItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* ══ CTA ══ */}
      <section ref={ctaRef} id="contact" className="fade-up-section bg-[#0a0a0a] py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 50% 100%,rgba(195,210,25,0.07) 0%,transparent 60%)' }} />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
          <span className="font-display text-[16vw] text-white/[0.025] leading-none select-none">DESIGN</span>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12">
          <div>
            <span className="font-mono text-xs text-[#c3d219] tracking-[0.3em] uppercase block mb-4">— Want to collaborate?</span>
            <h2 className="font-display text-[clamp(40px,7vw,100px)] leading-none text-white">
              START YOUR<br />
              <span className="text-[#c3d219]">WEB DESIGN</span><br />
              PROJECT
            </h2>
          </div>
          <div className="flex flex-col gap-4 shrink-0 min-w-[260px]">
            <a href="mailto:hello@smalldropinc.com"
              className="group inline-flex items-center justify-center gap-3 bg-[#c3d219] text-[#0a0a0a] font-semibold px-10 py-5 text-sm tracking-wide hover:opacity-80 transition-colors">
              Let's Talk <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
            <a href="#/work"
              className="inline-flex items-center justify-center gap-3 border border-white/15 text-white/50 px-10 py-5 text-sm tracking-wide hover:border-[#c3d219] hover:text-[#c3d219] transition-colors font-mono text-xs uppercase">
              View Our Work
            </a>
            <div className="pt-2 border-t border-white/10">
              <p className="font-mono text-xs text-white/25 leading-relaxed">
                hello@smalldropinc.com<br />
               +1 (616) 525-5263
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
