import { useState, useEffect, useRef } from 'react'

/* ── scroll reveal hook ── */
function useFadeUp() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.classList.add('in-view'); obs.disconnect() } },
      { threshold: 0.1 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return ref
}

/* ── data ── */
const categories = [
  'All',
  'Creative & Branding',
  'Digital Marketing',
  'Privacy & Security',
  'SEO',
  'Support',
  'Web Design & Development',
  'News & Trends',
  'Portfolio Examples',
  'AI',
  'Media',
]

const FEATURED_POSTS = [
  {
    id: 1,
    title: 'Instagram Best Practices: Enhance Your Brand with Smart Strategies',
    category: 'Digital Marketing',
    date: 'Mar 10, 2026',
    readTime: '6 min read',
    excerpt: 'Learn how to use Instagram\'s latest features to amplify your brand voice, grow your audience, and drive real business results through data-backed creative strategies.',
    accent: '#e8ff00',
    featured: true,
    size: 'large',
  },
  {
    id: 2,
    title: 'Tools to Level Up Your Marketing in 2025',
    category: 'Digital Marketing',
    date: 'Feb 28, 2026',
    readTime: '5 min read',
    excerpt: 'A curated roundup of the best marketing tools available today — from AI-powered analytics to automation platforms that save hours every week.',
    accent: '#4fc3f7',
    featured: true,
    size: 'small',
  },
  {
    id: 3,
    title: 'Web Design Refresh: Why Your Business Needs a New Look',
    category: 'Web Design & Development',
    date: 'Feb 20, 2026',
    readTime: '8 min read',
    excerpt: 'Discover the signals that tell you it\'s time for a website redesign, what to prioritize, and how a fresh digital presence can accelerate growth.',
    accent: '#b388ff',
    featured: true,
    size: 'small',
  },
  {
    id: 4,
    title: 'Privacy-First Marketing: Consumer Trust and Business Growth',
    category: 'Privacy & Security',
    date: 'Feb 14, 2026',
    readTime: '7 min read',
    excerpt: 'As third-party cookies fade out, privacy-first strategies aren\'t just ethical — they\'re your competitive edge. Here\'s how to adapt your marketing approach.',
    accent: '#69f0ae',
    featured: true,
    size: 'small',
  },
  {
    id: 5,
    title: 'Top SaaS Marketing Trends Shaping the Year for 2025',
    category: 'News & Trends',
    date: 'Jan 30, 2026',
    readTime: '6 min read',
    excerpt: 'From PLG to community-led growth, these SaaS marketing trends are rewriting the playbook for acquisition, retention, and expansion in competitive markets.',
    accent: '#ff7043',
    featured: true,
    size: 'small',
  },
]

const ALL_POSTS = [
  {
    id: 6,
    title: 'AI Wireframes: Revolutionizing Design Efficiency',
    category: 'AI',
    date: 'Mar 5, 2026',
    readTime: '5 min read',
    excerpt: 'How AI-generated wireframes are compressing design timelines from weeks to hours without sacrificing quality or creative depth.',
    accent: '#e8ff00',
  },
  {
    id: 7,
    title: 'Tech Websites Built to Drive Engagement and Adoption',
    category: 'Web Design & Development',
    date: 'Mar 1, 2026',
    readTime: '9 min read',
    excerpt: 'How Small Drop turns digital experiences into measurable results for B2B tech brands navigating complex buyer journeys.',
    accent: '#4fc3f7',
  },
  {
    id: 8,
    title: 'Website Trust in the Age of AI',
    category: 'AI',
    date: 'Feb 25, 2026',
    readTime: '6 min read',
    excerpt: 'Trust signals have evolved. Learn how AI systems interpret and rank your site\'s credibility — and what you can do to stay ahead.',
    accent: '#b388ff',
  },
  {
    id: 9,
    title: 'Designing Websites for Multi-Stakeholder B2B Buying Groups',
    category: 'Web Design & Development',
    date: 'Feb 18, 2026',
    readTime: '7 min read',
    excerpt: 'B2B buying isn\'t a solo act. Your website needs to speak to every stakeholder — from the end user to the CFO signing off on the deal.',
    accent: '#69f0ae',
  },
  {
    id: 10,
    title: 'AI Signals That Predict Website Conversion Issues',
    category: 'AI',
    date: 'Feb 12, 2026',
    readTime: '5 min read',
    excerpt: 'Before a conversion problem becomes a revenue problem, AI can surface the early warning signs hidden in your behavioral data.',
    accent: '#ff7043',
  },
  {
    id: 11,
    title: 'The Complete Guide to a Website Redesign',
    category: 'Web Design & Development',
    date: 'Feb 8, 2026',
    readTime: '12 min read',
    excerpt: 'When to do it, what questions to ask, how to measure success — the only website redesign guide you\'ll ever need.',
    accent: '#f06292',
  },
  {
    id: 12,
    title: 'Website Strategy for Enterprise Organizations',
    category: 'Web Design & Development',
    date: 'Feb 3, 2026',
    readTime: '10 min read',
    excerpt: 'How to align your site architecture, content strategy, and UX with enterprise-scale business goals and compliance requirements.',
    accent: '#e8ff00',
  },
  {
    id: 13,
    title: 'AI-Driven Website Benchmarking: Getting a Real Advantage',
    category: 'AI',
    date: 'Jan 28, 2026',
    readTime: '6 min read',
    excerpt: 'Stop guessing how you stack up against competitors. AI benchmarking tools now provide granular, actionable competitive intelligence in real time.',
    accent: '#4fc3f7',
  },
  {
    id: 14,
    title: 'Designing for the Future: Key UI/UX Shifts Every Brand Needs to Know',
    category: 'News & Trends',
    date: 'Jan 22, 2026',
    readTime: '8 min read',
    excerpt: 'The UI/UX landscape is shifting fast. From spatial computing to motion-first design, here\'s what forward-thinking brands are investing in right now.',
    accent: '#b388ff',
  },
  {
    id: 15,
    title: 'SEO in 2026: What Actually Moves the Needle',
    category: 'SEO',
    date: 'Jan 18, 2026',
    readTime: '9 min read',
    excerpt: 'With AI Overviews eating clicks and zero-click searches on the rise, here\'s the modern SEO playbook that still delivers organic growth.',
    accent: '#69f0ae',
  },
  {
    id: 16,
    title: 'Building a Brand Identity That Lasts a Decade',
    category: 'Creative & Branding',
    date: 'Jan 12, 2026',
    readTime: '7 min read',
    excerpt: 'Great brands don\'t just look good today — they\'re built with longevity in mind. Here\'s the framework our creative team uses with every client.',
    accent: '#ff7043',
  },
  {
    id: 17,
    title: 'Support & Hosting: The Silent Backbone of Your Digital Presence',
    category: 'Support',
    date: 'Jan 5, 2026',
    readTime: '5 min read',
    excerpt: 'Downtime costs more than you think. Learn why proactive support and managed hosting are non-negotiable for serious digital brands.',
    accent: '#f06292',
  },
]

const POSTS_PER_PAGE = 9

/* ── Gradient placeholder for blog post thumbnails ── */
function PostThumb({ accent, size = 'normal', category }) {
  const shapes = {
    'AI': '◈',
    'Digital Marketing': '◎',
    'Web Design & Development': '⟁',
    'News & Trends': '△',
    'SEO': '◇',
    'Creative & Branding': '⬡',
    'Privacy & Security': '⊕',
    'Support': '⊞',
    'Portfolio Examples': '▣',
    'Media': '◉',
  }
  const icon = shapes[category] || '◈'
  return (
    <div
      className={`relative overflow-hidden w-full ${size === 'large' ? 'h-72 md:h-96' : 'h-44'} flex items-center justify-center`}
      style={{ background: `linear-gradient(135deg, ${accent}18 0%, #111 60%, ${accent}08 100%)` }}
    >
      {/* grid */}
      <div className="absolute inset-0 opacity-10"
        style={{ backgroundImage: 'linear-gradient(to right,#fff 1px,transparent 1px),linear-gradient(to bottom,#fff 1px,transparent 1px)', backgroundSize: '32px 32px' }} />
      {/* icon */}
      <span className="font-display text-7xl opacity-20 select-none" style={{ color: accent }}>{icon}</span>
      {/* corner accent */}
      <div className="absolute bottom-0 right-0 w-24 h-24" style={{ background: `linear-gradient(135deg, transparent 50%, ${accent}20 50%)` }} />
      {/* top-left accent line */}
      <div className="absolute top-0 left-0 w-12 h-0.5" style={{ background: accent }} />
    </div>
  )
}

/* ── Featured hero strip ── */
function FeaturedStrip({ posts }) {
  const [big, ...small] = posts
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-white/10 mb-px">
      {/* Big featured */}
      <a href="#" className="group bg-brand-black hover:bg-brand-gray transition-colors flex flex-col">
        <PostThumb accent={big.accent} size="large" category={big.category} />
        <div className="p-8 flex flex-col gap-3 flex-1">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs px-3 py-1 border tracking-widest uppercase"
              style={{ color: big.accent, borderColor: `${big.accent}40` }}>
              {big.category}
            </span>
            <span className="font-mono text-xs text-brand-white/30">{big.date}</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl leading-tight text-brand-white group-hover:text-brand-accent transition-colors">
            {big.title}
          </h2>
          <p className="font-body text-sm text-brand-white/50 leading-relaxed flex-1">{big.excerpt}</p>
          <div className="flex items-center gap-2 text-brand-accent font-mono text-xs tracking-widest uppercase mt-2 group-hover:gap-4 transition-all">
            Read Article <span>→</span>
          </div>
        </div>
      </a>

      {/* Small 4 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/10">
        {small.map((p) => (
          <a key={p.id} href="#" className="group bg-brand-black hover:bg-brand-gray transition-colors flex flex-col">
            <PostThumb accent={p.accent} size="small" category={p.category} />
            <div className="p-6 flex flex-col gap-2 flex-1">
              <span className="font-mono text-xs tracking-widest uppercase" style={{ color: p.accent }}>
                {p.category}
              </span>
              <h3 className="font-display text-xl leading-tight text-brand-white group-hover:text-brand-accent transition-colors">
                {p.title}
              </h3>
              <p className="font-body text-xs text-brand-white/40 leading-relaxed flex-1 line-clamp-3">{p.excerpt}</p>
              <div className="flex items-center justify-between mt-2">
                <span className="font-mono text-xs text-brand-white/30">{p.readTime}</span>
                <span className="font-mono text-xs text-brand-accent opacity-0 group-hover:opacity-100 transition-opacity">→</span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}

/* ── Post card ── */
function PostCard({ post }) {
  return (
    <a href="#" className="group bg-brand-black hover:bg-brand-gray border border-white/10 hover:border-brand-accent/30 transition-all flex flex-col">
      <PostThumb accent={post.accent} size="small" category={post.category} />
      <div className="p-6 flex flex-col gap-3 flex-1">
        <div className="flex items-center justify-between">
          <span className="font-mono text-xs px-2 py-0.5 border tracking-widest uppercase"
            style={{ color: post.accent, borderColor: `${post.accent}30` }}>
            {post.category}
          </span>
          <span className="font-mono text-xs text-brand-white/25">{post.readTime}</span>
        </div>
        <h3 className="font-display text-xl leading-tight text-brand-white group-hover:text-brand-accent transition-colors">
          {post.title}
        </h3>
        <p className="font-body text-xs text-brand-white/45 leading-relaxed flex-1 line-clamp-3">{post.excerpt}</p>
        <div className="flex items-center justify-between pt-3 border-t border-white/10 mt-auto">
          <span className="font-mono text-xs text-brand-white/30">{post.date}</span>
          <span className="font-mono text-xs text-brand-accent/0 group-hover:text-brand-accent transition-colors tracking-widest uppercase">
            Read →
          </span>
        </div>
      </div>
    </a>
  )
}

/* ── Newsletter ── */
function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const ref = useFadeUp()
  return (
    <section ref={ref} className="fade-up-section py-20 px-6 bg-brand-gray border-y border-white/10">
      <div className="max-w-3xl mx-auto text-center">
        <span className="font-mono text-xs text-brand-accent tracking-[0.3em] uppercase block mb-4">— Stay in the Loop</span>
        <h2 className="font-display text-[clamp(32px,5vw,64px)] leading-none text-brand-white mb-4">
          SIGN UP FOR<br />
          <span className="text-stroke-accent">EMAIL UPDATES</span>
        </h2>
        <p className="font-body text-sm text-brand-white/50 mb-8 leading-relaxed">
          Subscribe to receive the latest insights on web design, digital marketing, and industry trends — straight to your inbox.
        </p>
        {submitted ? (
          <div className="flex items-center justify-center gap-3 text-brand-accent font-mono text-sm tracking-widest uppercase">
            <span className="text-xl">✦</span> You're subscribed. Thanks!
          </div>
        ) : (
          <div className="flex flex-col sm:flex-row gap-0 max-w-lg mx-auto border border-white/20 hover:border-brand-accent/50 transition-colors">
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-transparent px-6 py-4 font-body text-sm text-brand-white placeholder-brand-white/25 outline-none"
            />
            <button
              onClick={() => email && setSubmitted(true)}
              className="bg-brand-accent text-brand-black font-mono text-xs tracking-widest uppercase px-8 py-4 hover:opacity-80 transition-colors shrink-0"
            >
              Subscribe
            </button>
          </div>
        )}
        <p className="font-mono text-xs text-brand-white/20 mt-4 leading-relaxed">
          By subscribing, you consent to receive email communication from Small Drop Inc. You may opt out at any time.
        </p>
      </div>
    </section>
  )
}

/* ── Main Blog Page ── */
export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [currentPage, setCurrentPage] = useState(1)
  const [searchQuery, setSearchQuery] = useState('')
  const headerRef = useFadeUp()
  const gridRef = useFadeUp()

  const filtered = ALL_POSTS.filter((p) => {
    const matchCat = activeCategory === 'All' || p.category === activeCategory
    const matchSearch = !searchQuery || p.title.toLowerCase().includes(searchQuery.toLowerCase()) || p.category.toLowerCase().includes(searchQuery.toLowerCase())
    return matchCat && matchSearch
  })

  const totalPages = Math.ceil(filtered.length / POSTS_PER_PAGE)
  const paginated = filtered.slice((currentPage - 1) * POSTS_PER_PAGE, currentPage * POSTS_PER_PAGE)

  const handleCat = (cat) => {
    setActiveCategory(cat)
    setCurrentPage(1)
  }

  return (
    <div className="bg-brand-black min-h-screen">

      {/* ── HERO HEADER ── */}
      <section className="relative pt-36 pb-16 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{ backgroundImage: 'linear-gradient(to right,#f5f5f0 1px,transparent 1px),linear-gradient(to bottom,#f5f5f0 1px,transparent 1px)', backgroundSize: '80px 80px' }} />
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle,rgba(232,255,0,0.06) 0%,transparent 65%)' }} />

        <div ref={headerRef} className="fade-up-section relative z-10 max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-10 h-px bg-brand-accent" />
            <span className="font-mono text-xs text-brand-accent tracking-[0.3em] uppercase">Blog</span>
          </div>
          <h1 className="font-display text-[clamp(56px,12vw,160px)] leading-[0.88] text-brand-white">
            OUR POINT<br />
            <span className="text-stroke">OF VIEW ON</span><br />
            <span className="text-brand-accent">DIGITAL.</span>
          </h1>
          <p className="mt-8 max-w-xl font-body text-brand-white/50 text-lg leading-relaxed">
            Insights, trends, and perspectives on web design, development, and digital marketing from the Small Drop team.
          </p>

          {/* Search bar */}
          <div className="mt-8 flex items-center gap-0 max-w-md border border-white/20 hover:border-brand-accent/50 transition-colors">
            <span className="px-4 text-brand-white/30 font-mono text-sm">⌕</span>
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => { setSearchQuery(e.target.value); setCurrentPage(1) }}
              className="flex-1 bg-transparent py-3 pr-4 font-body text-sm text-brand-white placeholder-brand-white/25 outline-none"
            />
            {searchQuery && (
              <button onClick={() => setSearchQuery('')} className="px-4 text-brand-white/30 hover:text-brand-accent font-mono text-xs transition-colors">✕</button>
            )}
          </div>
        </div>
      </section>

      {/* ── FEATURED POSTS ── */}
      <section className="px-6 pb-0">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <span className="font-mono text-xs text-brand-accent tracking-[0.3em] uppercase">— Featured</span>
            <div className="flex-1 h-px bg-white/10" />
          </div>
          <FeaturedStrip posts={FEATURED_POSTS} />
        </div>
      </section>

      {/* ── CATEGORY FILTER ── */}
      <section className="sticky top-[72px] z-40 bg-brand-black/95 backdrop-blur-md border-y border-white/10 py-0 px-6">
        <div className="max-w-7xl mx-auto overflow-x-auto scrollbar-hide">
          <div className="flex items-center gap-0 min-w-max py-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCat(cat)}
                className={`font-mono text-xs tracking-widest uppercase px-5 py-4 transition-colors whitespace-nowrap border-b-2 ${
                  activeCategory === cat
                    ? 'text-brand-accent border-brand-accent'
                    : 'text-brand-white/40 border-transparent hover:text-brand-white hover:border-white/20'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── POSTS GRID ── */}
      <section ref={gridRef} className="fade-up-section py-16 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Results count */}
          <div className="flex items-center justify-between mb-8">
            <span className="font-mono text-xs text-brand-white/30 tracking-wide">
              {filtered.length} article{filtered.length !== 1 ? 's' : ''}
              {activeCategory !== 'All' ? ` in "${activeCategory}"` : ''}
              {searchQuery ? ` matching "${searchQuery}"` : ''}
            </span>
            {(activeCategory !== 'All' || searchQuery) && (
              <button
                onClick={() => { setActiveCategory('All'); setSearchQuery('') }}
                className="font-mono text-xs text-brand-accent/60 hover:text-brand-accent transition-colors tracking-widest uppercase"
              >
                Clear filters ✕
              </button>
            )}
          </div>

          {paginated.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10">
              {paginated.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <div className="py-24 text-center">
              <span className="font-display text-8xl text-brand-white/5 block mb-6">?</span>
              <p className="font-display text-2xl text-brand-white/30">No articles found</p>
              <button
                onClick={() => { setActiveCategory('All'); setSearchQuery('') }}
                className="mt-6 font-mono text-xs text-brand-accent tracking-widest uppercase hover:underline"
              >
                Clear filters →
              </button>
            </div>
          )}

          {/* ── PAGINATION ── */}
          {totalPages > 1 && (
            <div className="mt-12 flex items-center justify-center gap-2">
              <button
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="w-10 h-10 flex items-center justify-center border border-white/20 text-brand-white/50 hover:border-brand-accent hover:text-brand-accent transition-colors disabled:opacity-20 disabled:pointer-events-none font-mono text-sm"
              >
                ←
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
                <button
                  key={n}
                  onClick={() => setCurrentPage(n)}
                  className={`w-10 h-10 flex items-center justify-center font-mono text-xs transition-colors ${
                    currentPage === n
                      ? 'bg-brand-accent text-brand-black'
                      : 'border border-white/20 text-brand-white/50 hover:border-brand-accent hover:text-brand-accent'
                  }`}
                >
                  {n}
                </button>
              ))}
              <button
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                className="w-10 h-10 flex items-center justify-center border border-white/20 text-brand-white/50 hover:border-brand-accent hover:text-brand-accent transition-colors disabled:opacity-20 disabled:pointer-events-none font-mono text-sm"
              >
                →
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ── NEWSLETTER ── */}
      <Newsletter />

      {/* ── COLLABORATE CTA ── */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center">
          <span className="font-display text-[18vw] text-white/[0.015] leading-none select-none">INSIGHTS</span>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <span className="font-mono text-xs text-brand-accent tracking-[0.3em] uppercase block mb-4">— Work With Us</span>
            <h2 className="font-display text-[clamp(36px,6vw,80px)] leading-none text-brand-white">
              WANT TO COLLABORATE<br />ON A FUTURE-FORWARD<br />
              <span className="text-brand-accent">PROJECT?</span>
            </h2>
          </div>
          <div className="shrink-0">
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 bg-brand-accent text-brand-black font-semibold px-10 py-5 text-sm tracking-wide hover:opacity-80 transition-colors"
            >
              Let's Talk <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
            <p className="font-mono text-xs text-brand-white/30 mt-4 max-w-xs leading-relaxed">
              We collaborate with innovative brands to create cutting-edge digital experiences.
            </p>
          </div>
        </div>
      </section>

    </div>
  )
}
