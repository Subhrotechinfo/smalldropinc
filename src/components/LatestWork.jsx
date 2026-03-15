import { useState, useEffect, useRef } from 'react'

/* ── scroll reveal ── */
function useFadeUp() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.classList.add('in-view'); obs.disconnect() } },
      { threshold: 0.08 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return ref
}

/* ── all projects ── */
const PROJECTS = [
  {
    id: 1,
    title: 'Mr. Justice',
    slug: 'mr-justice',
    category: 'Web Design',
    industry: 'Legal',
    desc: 'Blending fun and professionalism with a captivating digital presence that stands out in the legal industry.',
    services: ['Web Design', 'Branding'],
    accent: '#c3d219',
    bg: '#0f1a00',
    size: 'large',
    year: '2025',
    icon: '⚖',
  },
  {
    id: 2,
    title: 'IPRG',
    slug: 'iprg',
    category: 'Digital Marketing',
    industry: 'Real Estate',
    desc: 'Supporting a modern commercial real estate brand with a full-service digital marketing strategy to increase visibility and drive results.',
    services: ['Digital Marketing', 'SEO'],
    accent: '#4fc3f7',
    bg: '#001a2e',
    size: 'small',
    year: '2025',
    icon: '◈',
  },
  {
    id: 3,
    title: 'Vytex',
    slug: 'vytex',
    category: 'Web Design & Development',
    industry: 'Manufacturing',
    desc: 'Modernizing a digital platform to reflect leadership in vinyl windows and doors while driving dealer engagement and growth.',
    services: ['Web Design', 'Web Development'],
    accent: '#ff7043',
    bg: '#2a0a00',
    size: 'small',
    year: '2025',
    icon: '⬡',
  },
  {
    id: 4,
    title: 'Chemtob',
    slug: 'chemtob',
    category: 'Web Design',
    industry: 'Legal',
    desc: 'Providing unparalleled legal representation with a focus on client-centric outcomes and personalized service.',
    services: ['Web Design', 'Branding'],
    accent: '#b388ff',
    bg: '#1a002e',
    size: 'small',
    year: '2024',
    icon: '◎',
  },
  {
    id: 5,
    title: 'BeyondSpring',
    slug: 'beyondspring',
    category: 'Web Design & Development',
    industry: 'Life Sciences',
    desc: 'Elevating a life sciences platform with intuitive navigation and clear messaging designed to support investors, clinicians, and partners.',
    services: ['Web Design', 'Web Development', 'Branding'],
    accent: '#69f0ae',
    bg: '#001a0e',
    size: 'large',
    year: '2024',
    icon: '⊕',
  },
  {
    id: 6,
    title: 'StadiuMatch',
    slug: 'stadiumatch',
    category: 'Web Design & Development',
    industry: 'Sports & Entertainment',
    desc: 'Redefining a digital platform with an intuitive, streamlined experience designed to drive discovery and engagement in sports ticketing.',
    services: ['Web Design', 'Web Development'],
    accent: '#f06292',
    bg: '#2a001a',
    size: 'small',
    year: '2024',
    icon: '△',
  },
  {
    id: 7,
    title: 'G2 Risk Solutions',
    slug: 'g2-risk',
    category: 'Branding',
    industry: 'Finance',
    desc: 'Offering tailored risk management solutions to protect businesses and mitigate risks effectively with a powerful brand identity.',
    services: ['Branding', 'Web Design'],
    accent: '#ffd740',
    bg: '#1a1400',
    size: 'small',
    year: '2024',
    icon: '◇',
  },
  {
    id: 8,
    title: 'Ready1',
    slug: 'ready1',
    category: 'Web Design & Development',
    industry: 'Technology',
    desc: 'Empowering incident response with a cohesive platform, cutting-edge technology, and a future-proofed digital presence.',
    services: ['Web Design', 'Web Development', 'Digital Marketing'],
    accent: '#4fc3f7',
    bg: '#001829',
    size: 'small',
    year: '2024',
    icon: '⟁',
  },
  {
    id: 9,
    title: 'Fortera',
    slug: 'fortera',
    category: 'Web Design & Development',
    industry: 'Sustainability',
    desc: 'Elevating the digital identity of a climate-driven materials innovator leading the path to zero-CO₂ cement.',
    services: ['Web Design', 'Web Development', 'Branding'],
    accent: '#69f0ae',
    bg: '#002a10',
    size: 'large',
    year: '2024',
    icon: '◉',
  },
  {
    id: 10,
    title: 'ClearCOGS',
    slug: 'clearcogs',
    category: 'Web Design & Development',
    industry: 'SaaS',
    desc: 'Transforming SaaS for the restaurant industry with a streamlined, user-first website that boosts sign-ups and enterprise engagement.',
    services: ['Web Design', 'Web Development'],
    accent: '#ff7043',
    bg: '#2a1000',
    size: 'small',
    year: '2023',
    icon: '▣',
  },
  {
    id: 11,
    title: 'DDN',
    slug: 'ddn',
    category: 'Web Design & Development',
    industry: 'Technology',
    desc: 'Elevating enterprise data solutions with a modern, user-focused website that strengthens brand authority and drives growth.',
    services: ['Web Design', 'Web Development', 'SEO'],
    accent: '#c3d219',
    bg: '#1a1a00',
    size: 'small',
    year: '2023',
    icon: '◈',
  },
  {
    id: 12,
    title: 'Good2bSocial',
    slug: 'good2bsocial',
    category: 'Digital Marketing',
    industry: 'Legal Marketing',
    desc: 'Transforming the digital landscape with a user-friendly website that drives traffic and supports growth in the legal marketing space.',
    services: ['Digital Marketing', 'Web Design'],
    accent: '#b388ff',
    bg: '#1a002a',
    size: 'small',
    year: '2023',
    icon: '⬡',
  },
  {
    id: 13,
    title: 'Semperis',
    slug: 'semperis',
    category: 'Web Design & Development',
    industry: 'Cybersecurity',
    desc: 'Creating a new and unique digital environment for one of the fastest growing cybersecurity companies in the world.',
    services: ['Web Design', 'Web Development', 'Branding'],
    accent: '#4fc3f7',
    bg: '#00101f',
    size: 'large',
    year: '2023',
    icon: '⊕',
  },
  {
    id: 14,
    title: 'Square',
    slug: 'square',
    category: 'Web Design & Development',
    industry: 'Fintech',
    desc: 'Revolutionizing financial services with user-friendly solutions for payments, payroll, and more with a fresh digital experience.',
    services: ['Web Design', 'Web Development'],
    accent: '#ffd740',
    bg: '#1a1200',
    size: 'small',
    year: '2023',
    icon: '◎',
  },
  {
    id: 15,
    title: 'Bloomfire',
    slug: 'bloomfire',
    category: 'Branding',
    industry: 'SaaS',
    desc: 'Enabling teams to share knowledge effortlessly through an intuitive, collaborative platform with a vibrant brand identity.',
    services: ['Branding', 'Web Design', 'Web Development'],
    accent: '#f06292',
    bg: '#2a0012',
    size: 'small',
    year: '2022',
    icon: '△',
  },
  {
    id: 16,
    title: 'NYSC',
    slug: 'nysc',
    category: 'Web Design',
    industry: 'Health & Fitness',
    desc: 'Transforming fitness experiences with a dynamic, user-centric digital platform that drives membership and engagement.',
    services: ['Web Design', 'Digital Marketing'],
    accent: '#ff7043',
    bg: '#2a0800',
    size: 'small',
    year: '2022',
    icon: '◉',
  },
]

const CATEGORIES = ['All', 'Web Design', 'Web Design & Development', 'Digital Marketing', 'Branding']
const INDUSTRIES = ['All Industries', 'Legal', 'Real Estate', 'Technology', 'SaaS', 'Finance', 'Life Sciences', 'Sustainability', 'Cybersecurity', 'Fintech', 'Health & Fitness', 'Sports & Entertainment', 'Manufacturing', 'Legal Marketing']
const PROJECTS_PER_PAGE = 12

/* ── Project card ── */
function ProjectCard({ project, index }) {
  const [hovered, setHovered] = useState(false)
  const isLarge = project.size === 'large'

  return (
    <a
      href="#"
      className={`group relative overflow-hidden flex flex-col ${isLarge ? 'md:col-span-2' : ''}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ minHeight: isLarge ? '520px' : '360px' }}
    >
      {/* Background */}
      <div
        className="absolute inset-0 transition-all duration-700"
        style={{
          background: hovered
            ? `linear-gradient(135deg, ${project.bg} 0%, #0a0a0a 100%)`
            : 'linear-gradient(135deg, #111 0%, #0d0d0d 100%)',
        }}
      />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none transition-opacity duration-500 group-hover:opacity-[0.08]"
        style={{
          backgroundImage: 'linear-gradient(to right,#fff 1px,transparent 1px),linear-gradient(to bottom,#fff 1px,transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* Accent glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
        style={{ background: `radial-gradient(ellipse at 30% 50%, ${project.accent}12 0%, transparent 60%)` }}
      />

      {/* Top accent line */}
      <div
        className="absolute top-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-500"
        style={{ background: project.accent }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-between h-full p-8 md:p-10">
        {/* Top row */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3 flex-wrap">
              <span
                className="font-mono text-xs px-3 py-1 border tracking-widest uppercase transition-colors duration-300"
                style={{ color: project.accent, borderColor: `${project.accent}40` }}
              >
                {project.industry}
              </span>
              <span className="font-mono text-xs text-white/20">{project.year}</span>
            </div>
          </div>
          {/* Index number */}
          <span className="font-mono text-xs text-white/15 shrink-0">
            {String(index + 1).padStart(2, '0')}
          </span>
        </div>

        {/* Center — large icon */}
        <div
          className="flex-1 flex items-center justify-center py-8 select-none"
          aria-hidden="true"
        >
          <span
            className="font-display transition-all duration-500 opacity-10 group-hover:opacity-25"
            style={{
              fontSize: isLarge ? '140px' : '90px',
              color: project.accent,
              lineHeight: 1,
            }}
          >
            {project.icon}
          </span>
        </div>

        {/* Bottom content */}
        <div className="flex flex-col gap-3">
          <h3
            className="font-display leading-none transition-colors duration-300 group-hover:text-white text-white/80"
            style={{ fontSize: isLarge ? 'clamp(36px,4vw,60px)' : 'clamp(28px,3vw,42px)' }}
          >
            {project.title}
          </h3>

          {/* Description — slides up on hover */}
          <div className={`overflow-hidden transition-all duration-500 ${hovered ? 'max-h-24 opacity-100' : 'max-h-0 opacity-0'}`}>
            <p className="font-body text-sm text-white/55 leading-relaxed pt-1">
              {project.desc}
            </p>
          </div>

          {/* Services + arrow row */}
          <div className="flex items-end justify-between gap-4 pt-2">
            <div className="flex gap-2 flex-wrap">
              {project.services.map((s) => (
                <span key={s} className="font-mono text-[10px] text-white/30 tracking-wide">
                  {s}
                </span>
              ))}
            </div>
            <div
              className="shrink-0 w-10 h-10 rounded-full border flex items-center justify-center text-sm transition-all duration-300 group-hover:scale-110"
              style={{
                borderColor: hovered ? project.accent : 'rgba(255,255,255,0.1)',
                color: hovered ? project.accent : 'rgba(255,255,255,0.3)',
                background: hovered ? `${project.accent}15` : 'transparent',
              }}
            >
              →
            </div>
          </div>
        </div>
      </div>
    </a>
  )
}

/* ── Stats ticker ── */
function StatsTicker() {
  const items = ['150+ Projects', '✦', '34 Awards', '✦', '12 Years', '✦', '98% Satisfaction', '✦', '50+ Industries', '✦', '150+ Projects', '✦', '34 Awards', '✦', '12 Years', '✦', '98% Satisfaction', '✦', '50+ Industries', '✦']
  return (
    <div className="bg-[#0a0a0a] border-y border-white/10 py-4 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {items.map((item, i) => (
          <span key={i} className="font-display text-white text-lg tracking-widest mx-5 shrink-0 opacity-60">{item}</span>
        ))}
      </div>
    </div>
  )
}

/* ── Main component ── */
export default function LatestWork() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [activeIndustry, setActiveIndustry] = useState('All Industries')
  const [currentPage, setCurrentPage] = useState(1)
  const [searchQuery, setSearchQuery] = useState('')
  const [viewMode, setViewMode] = useState('grid') // grid | list
  const headerRef = useFadeUp()
  const gridRef = useFadeUp()
  const ctaRef = useFadeUp()

  const filtered = PROJECTS.filter((p) => {
    const matchCat = activeCategory === 'All' || p.category === activeCategory
    const matchInd = activeIndustry === 'All Industries' || p.industry === activeIndustry
    const matchSearch = !searchQuery ||
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.industry.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.desc.toLowerCase().includes(searchQuery.toLowerCase())
    return matchCat && matchInd && matchSearch
  })

  const totalPages = Math.ceil(filtered.length / PROJECTS_PER_PAGE)
  const paginated = filtered.slice((currentPage - 1) * PROJECTS_PER_PAGE, currentPage * PROJECTS_PER_PAGE)

  const handleCat = (cat) => { setActiveCategory(cat); setCurrentPage(1) }
  const handleInd = (ind) => { setActiveIndustry(ind); setCurrentPage(1) }

  return (
    <div className="bg-white min-h-screen">

      {/* ── HERO ── */}
      <section className="relative pt-36 pb-0 px-6 overflow-hidden bg-[#ffffff]">
        <div
          className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{
            backgroundImage: 'linear-gradient(to right, #0a0a0a 1px, transparent 1px), linear-gradient(to bottom, #0a0a0a 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />
        {/* Big accent orbs */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full pointer-events-none opacity-30"
          style={{ background: 'radial-gradient(circle,rgba(195,210,25,0.12) 0%,transparent 60%)' }} />
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle,rgba(79,195,247,0.06) 0%,transparent 60%)' }} />

        <div ref={headerRef} className="fade-up-section relative z-10 max-w-7xl mx-auto pb-20">
          <div className="flex items-center gap-3 mb-8">
            <span className="w-10 h-px bg-[#c3d219]" />
            <span className="font-mono text-xs text-[#c3d219] tracking-[0.3em] uppercase">Portfolio</span>
          </div>

          <h1 className="font-display text-[clamp(60px,12vw,160px)] leading-[0.88] text-[#000000] mb-0">
            LATEST
          </h1>
          <h1 className="font-display text-[clamp(60px,12vw,160px)] leading-[0.88] mb-6"
            style={{ WebkitTextStroke: '1px hsla(0, 4%, 5%, 0.30)', color: 'transparent' }}>
            WORK
          </h1>

          {/* Subtitle + search row */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mt-10">
            <p className="max-w-xl font-body text-[#000000]/50 text-lg leading-relaxed">
              Experiences we've created — a collection of digital work spanning web design, development,
              branding, and marketing across 50+ industries.
            </p>

            {/* Search */}
            <div className="flex items-center border border-black/15 hover:border-[#000000]/50 transition-colors min-w-[280px]">
              <span className="px-4 text-[#000000]/30 font-mono text-sm">⌕</span>
              <input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => { setSearchQuery(e.target.value); setCurrentPage(1) }}
                className="flex-1 bg-transparent py-3 pr-4 font-body text-sm text-black placeholder-black/25 outline-none"
              />
              {searchQuery && (
                <button onClick={() => setSearchQuery('')} className="px-4 text-white/30 hover:text-[#c3d219] font-mono text-xs transition-colors">✕</button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS TICKER ── */}
      <StatsTicker />

      {/* ── FILTERS ── */}
      <section className="sticky top-[72px] z-40 bg-white border-b border-black/10">
        <div className="max-w-7xl mx-auto px-6">
          {/* Category tabs */}
          <div className="flex items-center justify-between gap-4 overflow-x-auto scrollbar-hide">
            <div className="flex items-center gap-0 shrink-0">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => handleCat(cat)}
                  className={`font-mono text-xs tracking-widest uppercase px-4 py-4 transition-colors whitespace-nowrap border-b-2 ${activeCategory === cat
                      ? 'border-[#c3d219] text-[#0a0a0a]'
                      : 'border-transparent text-black/40 hover:text-black hover:border-black/20'
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Right: industry dropdown + view toggle */}
            <div className="flex items-center gap-3 shrink-0 py-2">
              <select
                value={activeIndustry}
                onChange={(e) => handleInd(e.target.value)}
                className="font-mono text-xs bg-transparent border border-black/15 text-black/60 px-3 py-2 outline-none hover:border-[#c3d219] transition-colors tracking-wide"
              >
                {INDUSTRIES.map((ind) => (
                  <option key={ind} value={ind}>{ind}</option>
                ))}
              </select>

              {/* Grid / List toggle */}
              <div className="flex items-center border border-black/10">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`px-3 py-2 text-xs font-mono transition-colors ${viewMode === 'grid' ? 'bg-[#0a0a0a] text-white' : 'text-black/40 hover:text-black'}`}
                  title="Grid view"
                >⊞</button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`px-3 py-2 text-xs font-mono transition-colors ${viewMode === 'list' ? 'bg-[#0a0a0a] text-white' : 'text-black/40 hover:text-black'}`}
                  title="List view"
                >≡</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── RESULTS COUNT ── */}
      <div className="max-w-7xl mx-auto px-6 pt-8 pb-4 flex items-center justify-between">
        <span className="font-mono text-xs text-black/35 tracking-wide">
          {filtered.length} project{filtered.length !== 1 ? 's' : ''}
          {activeCategory !== 'All' ? ` · ${activeCategory}` : ''}
          {activeIndustry !== 'All Industries' ? ` · ${activeIndustry}` : ''}
          {searchQuery ? ` · "${searchQuery}"` : ''}
        </span>
        {(activeCategory !== 'All' || activeIndustry !== 'All Industries' || searchQuery) && (
          <button
            onClick={() => { setActiveCategory('All'); setActiveIndustry('All Industries'); setSearchQuery('') }}
            className="font-mono text-xs text-[#c3d219] hover:underline tracking-widest uppercase"
          >
            Clear all ✕
          </button>
        )}
      </div>

      {/* ── PROJECTS ── */}
      <section ref={gridRef} className="fade-up-section px-6 pb-16">
        <div className="max-w-7xl mx-auto">
          {paginated.length > 0 ? (
            viewMode === 'grid' ? (
              /* Grid view */
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-black/8">
                {paginated.map((project, i) => (
                  <ProjectCard key={project.id} project={project} index={(currentPage - 1) * PROJECTS_PER_PAGE + i} />
                ))}
              </div>
            ) : (
              /* List view */
              <div className="divide-y divide-black/8">
                {paginated.map((project, i) => (
                  <a
                    key={project.id}
                    href="#"
                    className="group flex items-center justify-between gap-6 py-6 hover:bg-black/[0.02] -mx-6 px-6 transition-colors"
                  >
                    <div className="flex items-center gap-6 flex-1 min-w-0">
                      <span className="font-mono text-xs text-black/25 w-6 shrink-0">
                        {String((currentPage - 1) * PROJECTS_PER_PAGE + i + 1).padStart(2, '0')}
                      </span>
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 font-display text-lg"
                        style={{ background: `${project.accent}20`, color: project.accent }}
                      >
                        {project.icon}
                      </div>
                      <div className="min-w-0">
                        <h3 className="font-display text-2xl text-black group-hover:text-[#c3d219] transition-colors truncate">{project.title}</h3>
                        <p className="font-body text-xs text-black/45 truncate mt-0.5">{project.desc}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 shrink-0">
                      <span className="font-mono text-xs px-3 py-1 border hidden sm:block"
                        style={{ color: project.accent, borderColor: `${project.accent}40` }}>
                        {project.industry}
                      </span>
                      <span className="font-mono text-xs text-black/30">{project.year}</span>
                      <span className="text-black/20 group-hover:text-[#c3d219] group-hover:translate-x-1 transition-all">→</span>
                    </div>
                  </a>
                ))}
              </div>
            )
          ) : (
            <div className="py-32 text-center">
              <span className="font-display text-[120px] text-black/5 block leading-none">?</span>
              <p className="font-display text-2xl text-black/25 mt-4">No projects found</p>
              <button
                onClick={() => { setActiveCategory('All'); setActiveIndustry('All Industries'); setSearchQuery('') }}
                className="mt-6 font-mono text-xs text-[#c3d219] tracking-widest uppercase hover:underline"
              >
                Clear filters →
              </button>
            </div>
          )}

          {/* ── PAGINATION ── */}
          {totalPages > 1 && (
            <div className="mt-14 flex items-center justify-center gap-2">
              <button
                onClick={() => { setCurrentPage((p) => Math.max(1, p - 1)); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
                disabled={currentPage === 1}
                className="w-10 h-10 flex items-center justify-center border border-black/15 text-black/40 hover:border-[#c3d219] hover:text-[#0a0a0a] transition-colors disabled:opacity-20 disabled:pointer-events-none font-mono text-sm"
              >←</button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
                <button
                  key={n}
                  onClick={() => { setCurrentPage(n); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
                  className={`w-10 h-10 flex items-center justify-center font-mono text-xs transition-colors ${currentPage === n
                      ? 'bg-[#0a0a0a] text-white'
                      : 'border border-black/15 text-black/40 hover:border-[#c3d219] hover:text-[#0a0a0a]'
                    }`}
                >{n}</button>
              ))}
              <button
                onClick={() => { setCurrentPage((p) => Math.min(totalPages, p + 1)); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
                disabled={currentPage === totalPages}
                className="w-10 h-10 flex items-center justify-center border border-black/15 text-black/40 hover:border-[#c3d219] hover:text-[#0a0a0a] transition-colors disabled:opacity-20 disabled:pointer-events-none font-mono text-sm"
              >→</button>
            </div>
          )}
        </div>
      </section>

      {/* ── FEATURED HIGHLIGHT ── */}
      <section className="bg-[#0a0a0a] py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 50% 100%,rgba(195,210,25,0.06) 0%,transparent 60%)' }} />
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <span className="w-10 h-px bg-[#c3d219]" />
            <span className="font-mono text-xs text-[#c3d219] tracking-[0.3em] uppercase">— Our Process</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10">
            {[
              { num: '01', title: 'Discover', desc: 'We dive deep into your brand, goals, and audience. Strategy precedes every pixel.' },
              { num: '02', title: 'Design', desc: 'Human-centered design that is beautiful, functional, and conversion-focused.' },
              { num: '03', title: 'Deliver', desc: 'Precision-engineered development. Launched on time, optimized for growth.' },
            ].map(({ num, title, desc }) => (
              <div key={num} className="bg-[#0a0a0a] hover:bg-[#111] transition-colors p-10 flex flex-col gap-4 group">
                <span className="font-display text-6xl text-[#c3d219]/20 group-hover:text-[#c3d219]/40 transition-colors">{num}</span>
                <h3 className="font-display text-3xl text-white group-hover:text-[#c3d219] transition-colors">{title}</h3>
                <p className="font-body text-sm text-white/45 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section ref={ctaRef} className="fade-up-section bg-white py-24 px-6 relative overflow-hidden border-t border-black/8">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
          <span className="font-display text-[15vw] text-black/[0.025] leading-none select-none whitespace-nowrap">COLLABORATE</span>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
          <div>
            <span className="font-mono text-xs text-[#c3d219] tracking-[0.3em] uppercase block mb-4">— Start a Project</span>
            <h2 className="font-display text-[clamp(40px,7vw,90px)] leading-none text-[#0a0a0a]">
              WANT TO COLLABORATE<br />ON A FUTURE-FORWARD<br />
              <span style={{ WebkitTextStroke: '2px #c3d219', color: 'transparent' }}>PROJECT?</span>
            </h2>
          </div>
          <div className="flex flex-col gap-4 shrink-0">
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 bg-[#c3d219] text-white font-semibold px-10 py-5 text-sm tracking-wide hover:opacity-80 hover:text-[#0a0a0a] transition-colors"
            >
              Let's Talk <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
            <a
              href="#/about"
              className="inline-flex items-center gap-3 border border-black/15 text-black/60 px-10 py-5 text-sm tracking-wide hover:border-[#c3d219] hover:text-[#0a0a0a] transition-colors font-mono text-xs uppercase"
            >
              About Our Process
            </a>
          </div>
        </div>
      </section>

    </div>
  )
}
