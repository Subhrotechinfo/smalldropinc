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
    title: 'Understand',
    icon: '◎',
    color: '#c3d219',
    desc: 'With your website being an essential part of your brand, the first step is to understand and learn from you — your brand, business needs, and pain points. From there, we develop a timeline and project plan to launch your website.',
    detail: 'Brand discovery · Pain point mapping · Scope definition · Timeline planning',
  },
  {
    num: '02',
    title: 'Research',
    icon: '⟁',
    color: '#4fc3f7',
    desc: 'After having a firm grasp of your brand and business goals, we create a tailored strategy to launch your website by completing thorough market research on your industry and competitors.',
    detail: 'Market research · Competitor analysis · Industry benchmarking · Strategy brief',
  },
  {
    num: '03',
    title: 'User Experience',
    icon: '◈',
    color: '#b388ff',
    desc: 'The market research helps us generate the user experience that attracts your target audience. Optimizing your website to the key features, functionalities, and structure for your customer\'s needs delivers an impactful experience.',
    detail: 'Sitemaps · User flows · Wireframes · Prototype · Usability testing',
  },
  {
    num: '04',
    title: 'User Interface',
    icon: '⬡',
    color: '#ff7043',
    desc: 'User interface goes hand in hand with UX. We create an easy and intuitive experience to guide users through your website with minimal effort to drive conversions for business growth.',
    detail: 'UI design · Component library · Interaction design · Accessibility · Brand alignment',
  },
  {
    num: '05',
    title: 'Design',
    icon: '△',
    color: '#69f0ae',
    desc: 'Website development is nothing without an engaging web design. Our digital team takes the research, UX and UI elements and delivers on modern, sophisticated custom design elements that add to conversions and business success.',
    detail: 'Visual design · Responsive layouts · Design system · Motion design · Client approval',
  },
  {
    num: '06',
    title: 'Develop',
    icon: '◉',
    color: '#ffd740',
    desc: 'Our development team fuses beautiful website design with custom-coded high-end technology resulting in a future-forward website that brings your digital vision to life.',
    detail: 'Front-end dev · Back-end dev · CMS integration · API connections · Performance optimization',
  },
  {
    num: '07',
    title: 'Quality Assurance',
    icon: '⊕',
    color: '#f06292',
    desc: 'With the launch of your website our digital team conducts a rigorous QA process ensuring there are no flaws or glitches in speed, functionality, or security so your online presence is nothing but successful.',
    detail: 'Cross-browser testing · Load testing · Security audit · SEO validation · Launch',
  },
]

const CAPABILITIES = [
  { title: 'Application Development', icon: '◉', desc: 'Custom web applications built to scale with your business and your users.' },
  { title: 'E-Commerce Development', icon: '⬡', desc: 'High-converting online stores with seamless checkout and product experiences.' },
  { title: 'WordPress Development', icon: '◈', desc: 'Enterprise-grade WordPress builds that are fast, secure, and easy to manage.' },
]

const TECH_STACK = [
  { category: 'Front-End', items: ['React', 'Next.js', 'Vue.js', 'TypeScript', 'Tailwind CSS'] },
  { category: 'Back-End', items: ['Node.js', 'Python', 'PHP', 'Laravel', 'GraphQL'] },
  { category: 'CMS', items: ['WordPress', 'Contentful', 'Sanity', 'Strapi', 'Webflow'] },
  { category: 'Infrastructure', items: ['AWS', 'Vercel', 'Docker', 'CI/CD', 'Cloudflare'] },
]

const RELATED_WORK = [
  {
    title: 'Samsung SIC',
    desc: 'This global organization within Samsung\'s Device Solutions division enlisted our services to create a new website to showcase their focus on identifying and nurturing new technologies.',
    industry: 'Technology',
    accent: '#4fc3f7',
    bg: '#001829',
    icon: '◈',
  },
  {
    title: 'Top Rank',
    desc: 'We helped Top Rank further expand its brand while introducing the sport of boxing to a new generation of fans through a new website design.',
    industry: 'Sports',
    accent: '#ff7043',
    bg: '#2a0a00',
    icon: '△',
  },
  {
    title: 'Drum Corps International',
    desc: 'Our custom platform made it easy for users to find tickets, news, and events for elite marching bands worldwide.',
    industry: 'Entertainment',
    accent: '#b388ff',
    bg: '#16002a',
    icon: '⊕',
  },
]

const STATS = [
  { num: '150+', label: 'Sites Developed' },
  { num: '7', label: 'Tech Frameworks' },
  { num: '99.9%', label: 'Uptime Delivered' },
  { num: '2×', label: 'Avg. Speed Gain' },
]

const FAQS = [
  {
    q: 'What technologies does Small Drop use for web development?',
    a: 'We work across the modern stack — React, Next.js, Vue, Node.js, Python, PHP, and more. We recommend the right technology based on your project goals, not a one-size-fits-all approach.',
  },
  {
    q: 'Do you handle both front-end and back-end development?',
    a: 'Yes. Our full-stack team handles everything from pixel-perfect front-end interfaces to robust back-end systems, APIs, databases, and third-party integrations.',
  },
  {
    q: 'Can you rebuild or upgrade my existing website?',
    a: 'Absolutely. Many of our projects are full redesigns or platform migrations. We\'ll audit your current site, identify gaps, and build a better version — often improving performance by 2× or more.',
  },
  {
    q: 'How do you ensure website security?',
    a: 'Security is built in from day one — not bolted on at the end. Our QA process includes security audits, HTTPS enforcement, dependency scanning, and compliance with modern security best practices.',
  },
  {
    q: 'Will my website be mobile-friendly?',
    a: 'Every website we build is fully responsive and tested across all major devices and browsers. Mobile performance is a core requirement, not an afterthought.',
  },
  {
    q: 'What does the post-launch support look like?',
    a: 'We offer ongoing support and hosting packages tailored to your needs. From monitoring and maintenance to continuous feature development, we stay with you after launch.',
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
      <div className={`overflow-hidden transition-all duration-400 ${open ? 'max-h-40 pb-6' : 'max-h-0'}`}>
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
      <div className="absolute inset-0 transition-all duration-700"
        style={{ background: hovered ? `linear-gradient(135deg,${project.bg} 0%,#0a0a0a 100%)` : 'linear-gradient(135deg,#111 0%,#0d0d0d 100%)' }} />
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{ backgroundImage: 'linear-gradient(to right,#fff 1px,transparent 1px),linear-gradient(to bottom,#fff 1px,transparent 1px)', backgroundSize: '40px 40px' }} />
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
          <h3 className="font-display text-4xl transition-colors duration-300"
            style={{ color: hovered ? project.accent : 'white' }}>{project.title}</h3>
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
export default function WebDevelopment() {
  const [activeStep, setActiveStep] = useState(0)
  const heroRef = useFadeUp()
  const introRef = useFadeUp()
  const capRef = useFadeUp()
  const processRef = useFadeUp()
  const techRef = useFadeUp()
  const workRef = useFadeUp()
  const statsRef = useFadeUp()
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
        {/* Grid */}
        {/* <div className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{ backgroundImage: 'linear-gradient(to right,#fff 1px,transparent 1px),linear-gradient(to bottom,#fff 1px,transparent 1px)', backgroundSize: '80px 80px' }} /> */}
        {/* Orbs */}
        <div className="absolute top-0 left-0 w-[700px] h-[700px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle,rgba(195,210,25,0.08) 0%,transparent 60%)' }} />
        <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle,rgba(79,195,247,0.06) 0%,transparent 60%)' }} />
        {/* Animated code lines */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.04]">
          {['const website = new SmallDrop()', 'import { future } from "web"', 'return <Digital experience />', '// built to last', 'deploy({ env: "production" })'].map((line, i) => (
            <div key={i} className="font-mono text-xs text-white whitespace-nowrap absolute"
              style={{ top: `${15 + i * 15}%`, left: `${5 + i * 8}%`, animationDelay: `${i * 0.4}s` }}>
              {line}
            </div>
          ))}
        </div>

        <div ref={heroRef} className="fade-up-section relative z-10 max-w-7xl mx-auto px-6 w-full pb-20">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-8 font-mono text-xs text-black/30 tracking-widest uppercase">
            <a href="#" className="hover:text-[#c3d219] transition-colors">Home</a>
            <span>/</span>
            <a href="#" className="hover:text-[#c3d219] transition-colors">Services</a>
            <span>/</span>
            <span className="text-[#c3d219]">Web Development</span>
          </div>

          <div className="flex items-center gap-3 mb-8">
            <span className="w-10 h-px bg-[#c3d219]" />
            <span className="font-mono text-xs text-[#c3d219] tracking-[0.3em] uppercase">Service</span>
          </div>

          <h1 className="font-display text-[clamp(48px,9vw,130px)] leading-[0.88] text-black mb-0">INNOVATIVE &</h1>
          <h1 className="font-display text-[clamp(48px,9vw,130px)] leading-[0.88] mb-0"
            style={{ WebkitTextStroke: '1px hsla(0, 4%, 5%, 0.30)', color: 'transparent' }}>
            FUTURE-PROOF
          </h1>
          <h1 className="font-display text-[clamp(48px,9vw,130px)] leading-[0.88] text-[#c3d219]">
            WEB DEV.
          </h1>

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
            <div>
              <p className="font-body text-lg text-black/60 leading-relaxed mb-6">
                In today's world your website plays a crucial role beyond just being an online presence.
                It serves as a core element in your marketing and business strategy. We bring software technology
                and top-notch solutions customized to align with your business objectives.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contact"
                  className="group inline-flex items-center gap-3 bg-[#c3d219] text-[#0a0a0a] font-semibold px-8 py-4 text-sm tracking-wide hover:bg-white transition-colors">
                  Start a Project <span className="group-hover:translate-x-1 transition-transform">→</span>
                </a>
                <a href="#process"
                  className="inline-flex items-center gap-3 border border-white/20 text-white px-8 py-4 text-sm tracking-wide hover:border-[#c3d219] hover:text-[#c3d219] transition-colors">
                  Our Process ↓
                </a>
              </div>
            </div>

            {/* Stats grid */}
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

        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent pointer-events-none" />
      </section>

      {/* ══ INTRO ══ */}
      <section ref={introRef} className="fade-up-section py-24 px-6 bg-white border-b border-black/8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <span className="font-mono text-xs text-[#c3d219] tracking-[0.3em] uppercase block mb-6">— Our Approach</span>
            <h2 className="font-display text-[clamp(36px,5vw,68px)] leading-none text-[#0a0a0a] mb-8">
              FROM IDEA<br />
              <span style={{ WebkitTextStroke: '2px #c3d219', color: 'transparent' }}>TO PRODUCT</span>
            </h2>
            <p className="font-body text-black/60 leading-relaxed mb-6">
              As your trusted web development partner, we bring software technology and top-notch solutions to the
              forefront — customized to align with your business objectives. Our skilled team excels in both
              front-end and back-end development ensuring your website not only looks impressive but is also
              secure, efficient, and equipped for future growth.
            </p>
            <p className="font-body text-black/55 leading-relaxed">
              By choosing Small Drop you can anticipate a transformation that distinguishes you from competitors
              and positions your brand for continuous success. Count on us to craft a website that not only
              meets but surpasses your expectations.
            </p>
          </div>

          {/* Visual — terminal-style code block aesthetic */}
          <div className="bg-[#0a0a0a] p-8 rounded-none border border-white/10 font-mono text-sm">
            {/* Terminal bar */}
            <div className="flex items-center gap-2 mb-6 pb-4 border-b border-white/10">
              <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
              <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
              <span className="w-3 h-3 rounded-full bg-[#28c840]" />
              <span className="ml-4 text-white/20 text-xs">smalldrop — web development</span>
            </div>
            <div className="space-y-3 text-xs leading-relaxed">
              <p><span className="text-[#4fc3f7]">const</span> <span className="text-[#c3d219]">project</span> <span className="text-white/40">=</span> <span className="text-white/60">{'{'}</span></p>
              <p className="pl-4"><span className="text-[#b388ff]">frontend</span><span className="text-white/40">:</span> <span className="text-[#69f0ae]">'React + Next.js'</span><span className="text-white/40">,</span></p>
              <p className="pl-4"><span className="text-[#b388ff]">backend</span><span className="text-white/40">:</span> <span className="text-[#69f0ae]">'Node.js + APIs'</span><span className="text-white/40">,</span></p>
              <p className="pl-4"><span className="text-[#b388ff]">design</span><span className="text-white/40">:</span> <span className="text-[#69f0ae]">'Custom + Award-Winning'</span><span className="text-white/40">,</span></p>
              <p className="pl-4"><span className="text-[#b388ff]">performance</span><span className="text-white/40">:</span> <span className="text-[#ffd740]">99.9</span><span className="text-white/40">,</span></p>
              <p className="pl-4"><span className="text-[#b388ff]">security</span><span className="text-white/40">:</span> <span className="text-[#ff7043]">true</span><span className="text-white/40">,</span></p>
              <p className="pl-4"><span className="text-[#b388ff]">scalable</span><span className="text-white/40">:</span> <span className="text-[#ff7043]">true</span><span className="text-white/40">,</span></p>
              <p><span className="text-white/60">{'}'}</span></p>
              <p className="mt-4 pt-4 border-t border-white/10">
                <span className="text-[#4fc3f7]">await</span> <span className="text-white/60">SmallDrop</span><span className="text-white/40">.</span><span className="text-[#c3d219]">build</span><span className="text-white/60">(project)</span>
              </p>
              <p><span className="text-[#69f0ae]">✓ Deployed successfully to production</span></p>
            </div>
          </div>
        </div>
      </section>

      {/* ══ CAPABILITIES ══ */}
      <section ref={capRef} className="fade-up-section py-16 px-6 bg-[#f5f5f3] border-b border-black/8">
        <div className="max-w-7xl mx-auto">
          <span className="font-mono text-xs text-[#c3d219] tracking-[0.3em] uppercase block mb-8">— Trusted Capabilities</span>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-black/8">
            {CAPABILITIES.map((c) => (
              <a key={c.title} href="#"
                className="group bg-[#f5f5f3] hover:bg-white transition-colors p-8 flex flex-col gap-4">
                <span className="text-3xl text-[#c3d219]/50 group-hover:text-[#c3d219] transition-colors font-display">{c.icon}</span>
                <h3 className="font-display text-2xl text-[#0a0a0a] group-hover:text-[#c3d219] transition-colors">{c.title}</h3>
                <p className="font-body text-sm text-black/50 leading-relaxed flex-1">{c.desc}</p>
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
              <span className="font-mono text-xs text-[#c3d219] tracking-[0.3em] uppercase block mb-4">— How We Build</span>
              <h2 className="font-display text-[clamp(36px,6vw,80px)] leading-none text-[#0a0a0a]">
                EFFECTIVE WEB<br />
                <span style={{ WebkitTextStroke: '2px #0a0a0a', color: 'transparent' }}>DEVELOPMENT</span><br />
                PROCESS
              </h2>
            </div>
            <p className="max-w-sm font-body text-sm text-black/50 leading-relaxed">
              Seven deliberate steps that take your project from discovery to a live, high-performance website.
            </p>
          </div>

          {/* Step selector desktop */}
          <div className="hidden lg:grid grid-cols-7 gap-px bg-black/8">
            {PROCESS_STEPS.map((step, i) => (
              <button key={step.num}
                onClick={() => setActiveStep(i)}
                className={`group p-5 flex flex-col gap-2 text-left transition-all duration-300 ${activeStep === i ? 'bg-[#0a0a0a]' : 'bg-white hover:bg-[#f5f5f3]'}`}>
                <span className="font-mono text-xs tracking-widest" style={{ color: activeStep === i ? step.color : 'rgba(0,0,0,0.25)' }}>{step.num}</span>
                <span className="font-display text-lg" style={{ color: activeStep === i ? step.color : '#0a0a0a' }}>{step.icon}</span>
                <span className={`font-display text-base leading-tight transition-colors ${activeStep === i ? 'text-white' : 'text-[#0a0a0a] group-hover:text-[#c3d219]'}`}>
                  {step.title}
                </span>
              </button>
            ))}
          </div>

          {/* Active step detail desktop */}
          <div className="hidden lg:block">
            {PROCESS_STEPS.map((step, i) => (
              <div key={step.num}
                className={`transition-all duration-300 overflow-hidden ${activeStep === i ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="bg-[#0a0a0a] p-10 grid grid-cols-2 gap-12 items-center">
                  <p className="font-body text-white/65 leading-relaxed">{step.desc}</p>
                  <div className="flex flex-col gap-3">
                    <span className="font-mono text-xs tracking-widest uppercase mb-1" style={{ color: step.color }}>Deliverables</span>
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
          <div className="lg:hidden flex flex-col divide-y divide-black/8 mt-2">
            {PROCESS_STEPS.map((step, i) => (
              <div key={step.num} className="py-5">
                <button
                  className="w-full flex items-center justify-between gap-4"
                  onClick={() => setActiveStep(activeStep === i ? -1 : i)}
                >
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-xs text-black/30">{step.num}</span>
                    <span className="font-display text-xl" style={{ color: step.color }}>{step.icon}</span>
                    <span className="font-display text-xl text-[#0a0a0a]">{step.title}</span>
                  </div>
                  <span className="font-mono text-sm text-black/30 transition-transform duration-300 shrink-0"
                    style={{ transform: activeStep === i ? 'rotate(45deg)' : 'none' }}>+</span>
                </button>
                <div className={`overflow-hidden transition-all duration-400 ${activeStep === i ? 'max-h-48 pt-4' : 'max-h-0'}`}>
                  <p className="font-body text-sm text-black/55 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ TECH STACK ══ */}
      <section ref={techRef} className="fade-up-section py-24 px-6 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <span className="font-mono text-xs text-[#c3d219] tracking-[0.3em] uppercase block mb-4">— Technology</span>
              <h2 className="font-display text-[clamp(36px,6vw,80px)] leading-none text-white">
                OUR TECH<br />
                <span className="text-[#c3d219]">STACK</span>
              </h2>
            </div>
            <p className="max-w-sm font-body text-sm text-white/40 leading-relaxed">
              We use the right tools for each project — not a one-size-fits-all approach.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
            {TECH_STACK.map(({ category, items }) => (
              <div key={category} className="bg-[#0a0a0a] hover:bg-[#111] transition-colors p-8 group">
                <span className="font-mono text-xs text-[#c3d219] tracking-widest uppercase block mb-5">{category}</span>
                <ul className="flex flex-col gap-3">
                  {items.map((item) => (
                    <li key={item} className="flex items-center gap-3 group/item">
                      <span className="w-1 h-1 rounded-full bg-[#c3d219]/40 group-hover/item:bg-[#c3d219] transition-colors shrink-0" />
                      <span className="font-body text-sm text-white/55 group-hover/item:text-white/80 transition-colors">{item}</span>
                    </li>
                  ))}
                </ul>
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
                RELATED WORK<br />
                <span style={{ WebkitTextStroke: '1px rgba(255,255,255,0.25)', color: 'transparent' }}>WE CREATED</span>
              </h2>
            </div>
            <a href="#/work"
              className="group inline-flex items-center gap-2 text-white/40 hover:text-[#c3d219] transition-colors font-body text-sm tracking-wide shrink-0">
              More work <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10">
            {RELATED_WORK.map((project) => (
              <WorkCard key={project.title} project={project} />
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
              { num: '12+', label: 'Years Building' },
              { num: '100+', label: 'Team Members' },
              { num: '∞', label: 'Lines of Code' },
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
            Small Drop's team did an amazing job delivering a massive shift for us in branding and website
            functionality in a very short window. One of the best teams I've ever worked with in my career.
          </blockquote>
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#c3d219] flex items-center justify-center font-display text-[#0a0a0a] text-lg">JO</div>
            <div className="text-left">
              <p className="font-body font-semibold text-sm text-[#0a0a0a]">James Ortiz</p>
              <p className="font-mono text-xs text-black/40">VP Marketing at Luminary Media</p>
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
              Still have questions? We'd love to talk through your project requirements in detail.
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
          <span className="font-display text-[14vw] text-white/[0.025] leading-none select-none">DEVELOP</span>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12">
          <div>
            <span className="font-mono text-xs text-[#c3d219] tracking-[0.3em] uppercase block mb-4">— Ready to build?</span>
            <h2 className="font-display text-[clamp(40px,7vw,100px)] leading-none text-white">
              START YOUR<br />
              <span className="text-[#c3d219]">WEB DEVELOPMENT</span><br />
              PROJECT
            </h2>
          </div>
          <div className="flex flex-col gap-4 shrink-0 min-w-[260px]">
            <a href="mailto:hello@smalldropinc.com"
              className="group inline-flex items-center justify-center gap-3 bg-[#c3d219] text-[#0a0a0a] font-semibold px-10 py-5 text-sm tracking-wide hover:opacity-80 transition-colors">
              Let's Talk <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
            <a href="#/web-design"
              className="inline-flex items-center justify-center gap-3 border border-white/15 text-white/50 px-10 py-5 text-sm tracking-wide hover:border-[#c3d219] hover:text-[#c3d219] transition-colors font-mono text-xs uppercase">
              See Web Design Too
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
