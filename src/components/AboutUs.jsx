import { useEffect, useRef, useState } from 'react'

/* ── tiny reusable hook: fade-up on scroll ── */
function useFadeUp() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add('in-view'); obs.disconnect() } },
      { threshold: 0.15 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return ref
}

/* ── data ── */
const stats = [
  { num: '5', label: 'Stars on Google' },
  { num: '34', label: 'Agency Awards' },
  { num: '05', label: 'Global Locations' },
  { num: '100+', label: 'Employees' },
  { num: '260', label: 'Cups of Coffee Daily' },
  { num: '∞', label: 'Ways to Get it Done' },
]

const awards = [
  { name: 'CSS Design Awards', count: '20', color: '#e8ff00' },
  { name: 'Awwwards', count: '12', color: '#efd054' },
  { name: 'The Webby Awards', count: '02', color: '#4fc3f7' },
]

const leadership = [
  { name: 'Alex Smith', role: 'President & Founder', initials: 'AS', color: '#98a505' },
  { name: 'Morgan Johnson', role: 'Managing Director', initials: 'MJ', color: '#4fc3f7' },
  { name: 'Jordan Francis', role: 'Chief Creative Officer', initials: 'JF', color: '#b388ff' },
  { name: 'Taylor Brown', role: 'Head of Technology', initials: 'TB', color: '#69f0ae' },
]

const services = [
  'Renowned, Award-Winning Web Design',
  'Comprehensive and Cohesive Brand Solutions',
  'Proven Digital Marketing Strategy & Execution',
  'Innovative & Future-Proof Web Development',
  'Your Reliable Website Support + Hosting',
  'Latest Work',
]

const clients = [
  { name: 'Northwell Health', stat: '$11B annual operating budget · 2M+ patients treated' },
  { name: 'Samsung SIC', stat: '$300M Samsung Automotive Innovation Fund' },
  { name: 'Citigroup', stat: 'Serving 110M+ banking consumer clients' },
  { name: 'Optimum by Altice', stat: '4% revenue growth year-over-year' },
  { name: 'Warner Music', stat: 'One of the Big Three labels · $4B annual revenue' },
  { name: 'Popular', stat: '$41B in assets · 8,000 staff globally' },
  { name: 'Assurant', stat: '4th largest public offering (2004) · $1.76B' },
  { name: 'Activision', stat: '352M active players/month · $20.4B annual sales' },
  { name: 'Midea', stat: "World's largest producer of major appliances" },
  { name: 'LabCorp', stat: '2.5M+ patient specimens tested weekly' },
  { name: 'MoroccanOil', stat: 'Products in 65+ countries · 100,000 salons' },
  { name: 'United Nations', stat: 'Climate technology in developing countries' },
]

const offices = [
  { city: 'New York', address: '59-18 Madison St, ', phone: '(616) 525-5263' },
  { city: 'Miami', address: '150 SW 7th Street', phone: '(905) 963-9837' },
  { city: 'Los Angeles', address: '7415 W Centinela Ave', phone: '(874) 388-9824' },
  { city: 'London', address: 'Elgar St', phone: '+44 20 4125 0321' },
  { city: 'Tel Aviv', address: 'Willy Brandt 2-4', phone: '+972 3 951 0000' },
]

const agencyColors = ['#e8ff00','#4fc3f7','#b388ff','#69f0ae','#ff7043','#f06292']

/* ── section wrapper ── */
function Section({ children, className = '' }) {
  const ref = useFadeUp()
  return (
    <section
      ref={ref}
      className={`fade-up-section ${className}`}
    >
      {children}
    </section>
  )
}

export default function AboutUs() {
  const [activeTeam, setActiveTeam] = useState(null)

  return (
    <div className="bg-brand-black min-h-screen">

      {/* ── HERO ── */}
      <section className="relative min-h-[90vh] flex flex-col justify-end overflow-hidden pt-32 pb-0">
        {/* grid bg */}
        <div className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{ backgroundImage: 'linear-gradient(to right,#f5f5f0 1px,transparent 1px),linear-gradient(to bottom,#f5f5f0 1px,transparent 1px)', backgroundSize: '80px 80px' }} />

        {/* accent blob */}
        <div className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle,rgba(232,255,0,0.07) 0%,transparent 65%)' }} />

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="flex items-center gap-3 mb-8 animate-fade-up" style={{ opacity: 0, animationDelay: '0.1s' }}>
            <span className="w-10 h-px bg-brand-accent" />
            <span className="font-mono text-xs text-brand-accent tracking-[0.3em] uppercase">About Us</span>
          </div>

          <h1
            className="font-display text-[clamp(64px,13vw,170px)] leading-[0.88] text-brand-white mb-0 animate-fade-up"
            style={{ opacity: 0, animationDelay: '0.2s' }}
          >
            ABOUT
          </h1>
          <h1
            className="font-display text-[clamp(64px,13vw,170px)] leading-[0.88] text-stroke mb-8 animate-fade-up"
            style={{ opacity: 0, animationDelay: '0.35s' }}
          >
            SMALL
          </h1>
          <h1
            className="font-display text-[clamp(64px,13vw,170px)] leading-[0.88] text-brand-accent animate-fade-up"
            style={{ opacity: 0, animationDelay: '0.5s' }}
          >
            DROP.
          </h1>

          {/* sub headline */}
          <p
            className="mt-10 max-w-3xl font-body text-xl text-brand-white/60 leading-relaxed animate-fade-up"
            style={{ opacity: 0, animationDelay: '0.65s' }}
          >
            Our full-service digital agency is driven by a diverse, multicultural team across multiple global
            locations. We bring together individuals who are passionate about tackling challenges, pushing
            boundaries, and never settling for less than perfection.
          </p>

          {/* CTA row */}
          <div
            className="mt-8 flex items-center gap-6 animate-fade-up"
            style={{ opacity: 0, animationDelay: '0.8s' }}
          >
            <a href="#contact" className="group inline-flex items-center gap-3 bg-brand-accent text-brand-black font-semibold px-8 py-4 text-sm tracking-wide hover:opacity-80 transition-colors">
              Start a Project <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
            <a href="#work" className="font-mono text-xs text-brand-white/40 hover:text-brand-accent transition-colors tracking-widest uppercase">
              See Our Work →
            </a>
          </div>
        </div>

        {/* bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-brand-black to-transparent pointer-events-none" />
      </section>

      {/* ── INTRO SPLIT ── */}
      <Section className="py-28 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <span className="font-mono text-xs text-brand-accent tracking-[0.3em] uppercase block mb-6">— What We Do</span>
            <h2 className="font-display text-[clamp(36px,5vw,70px)] leading-none text-brand-white">
              AMONG 50,000+<br />
              <span className="text-stroke">DIGITAL AGENCIES,</span><br />
              THERE IS ONLY<br />
              <span className="text-brand-accent">1 SMALL DROP.</span>
            </h2>
          </div>
          <div className="flex flex-col gap-8 pt-4">
            <p className="font-body text-brand-white/60 leading-relaxed">
              We have partnered with Fortune 500 companies, SMBs, start-ups, and passionate individuals since
              2024 to unlock potential value via technology, creativity, and business-minded critical thinking.
              We take pride in delivering innovative and unique digital experiences that make a huge impact.
            </p>
            <div className="border-l-2 border-brand-accent pl-6">
              <p className="font-body text-brand-white/80 leading-relaxed italic">
                "We believe in making your experience more memorable — the most effective way to forge a strong
                connection between your brand and your clients."
              </p>
            </div>
            <p className="font-body text-brand-white/50 leading-relaxed text-sm">
              We help create custom solutions ranging from dynamic web designs to cutting-edge marketing
              strategies. We believe our digital work will transcend future trends.
            </p>
          </div>
        </div>
      </Section>

      {/* ── SERVICES LIST ── */}
      <Section className="py-20 px-6 bg-brand-gray">
        <div className="max-w-7xl mx-auto">
          <span className="font-mono text-xs text-brand-accent tracking-[0.3em] uppercase block mb-10">— What We Offer</span>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10">
            {services.map((s, i) => (
              <a
                key={s}
                href="#"
                className="group bg-brand-gray hover:bg-brand-black p-8 flex items-start justify-between gap-4 transition-colors"
              >
                <div>
                  <span className="font-mono text-xs text-brand-accent/40 block mb-3">0{i + 1}</span>
                  <span className="font-display text-xl text-brand-white group-hover:text-brand-accent transition-colors leading-tight">{s}</span>
                </div>
                <span className="text-brand-white/20 group-hover:text-brand-accent group-hover:translate-x-1 transition-all mt-1 shrink-0">→</span>
              </a>
            ))}
          </div>
        </div>
      </Section>

      {/* ── STATS ── */}
      <Section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 50% 50%,rgba(232,255,0,0.04) 0%,transparent 70%)' }} />
        <div className="relative z-10 max-w-7xl mx-auto">
          <span className="font-mono text-xs text-brand-accent tracking-[0.3em] uppercase block mb-4">— The Truth of Our Agency</span>
          <h2 className="font-display text-[clamp(36px,6vw,80px)] leading-none text-brand-white mb-16">
            OUR NUMBERS<br /><span className="text-stroke">SPEAK LOUD</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-white/10">
            {stats.map(({ num, label }) => (
              <div key={label} className="bg-brand-black p-8 flex flex-col gap-2 hover:bg-brand-gray transition-colors group">
                <span className="font-display text-5xl text-brand-accent group-hover:scale-110 transition-transform inline-block origin-left">{num}</span>
                <span className="font-mono text-xs text-brand-white/40 uppercase tracking-widest leading-tight">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── LEADERSHIP ── */}
      <Section className="py-24 px-6 bg-brand-gray">
        <div className="max-w-7xl mx-auto">
          <span className="font-mono text-xs text-brand-accent tracking-[0.3em] uppercase block mb-4">— The People Behind the Work</span>
          <h2 className="font-display text-[clamp(36px,6vw,80px)] leading-none text-brand-white mb-16">
            OUR<br /><span className="text-stroke-accent">LEADERSHIP</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
            {leadership.map((p, i) => (
              <div
                key={p.name}
                className="bg-brand-gray hover:bg-brand-black group transition-colors p-8 flex flex-col gap-4"
                onMouseEnter={() => setActiveTeam(i)}
                onMouseLeave={() => setActiveTeam(null)}
              >
                {/* Avatar */}
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center text-brand-black font-display text-3xl transition-transform group-hover:scale-105"
                  style={{ background: p.color }}
                >
                  {p.initials}
                </div>
                <div>
                  <h3 className="font-display text-2xl text-brand-white group-hover:text-brand-accent transition-colors">{p.name}</h3>
                  <p className="font-mono text-xs text-brand-muted mt-1 tracking-wide uppercase">{p.role}</p>
                </div>
                {/* Social links placeholder */}
                <div className="flex gap-3 mt-auto">
                  {['in', 'x', 'gh'].map((s) => (
                    <a
                      key={s}
                      href="#"
                      className="w-8 h-8 border border-white/10 flex items-center justify-center font-mono text-xs text-brand-white/30 hover:border-brand-accent hover:text-brand-accent transition-colors"
                    >
                      {s}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── AWARDS ── */}
      <Section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <span className="font-mono text-xs text-brand-accent tracking-[0.3em] uppercase block mb-4">— Recognition</span>
          <h2 className="font-display text-[clamp(36px,6vw,80px)] leading-none text-brand-white mb-16">
            GREAT AWARDS<br /><span className="text-stroke">ALONG THE WAY</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10">
            {awards.map(({ name, count, color }) => (
              <div key={name} className="bg-brand-black hover:bg-brand-gray transition-colors p-10 flex flex-col gap-4 group">
                <span className="font-display text-8xl leading-none" style={{ color }}>{count}</span>
                <div>
                  <span className="font-display text-2xl text-brand-white group-hover:text-brand-accent transition-colors">{name}</span>
                  <p className="font-mono text-xs text-brand-muted mt-2 tracking-wide">Awards Won</p>
                </div>
                {/* fake award badge */}
                <div className="mt-auto w-12 h-12 rounded-full border-2 flex items-center justify-center" style={{ borderColor: color }}>
                  <span className="font-mono text-xs" style={{ color }}>★</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── AGENCY LIFE (color grid) ── */}
      <Section className="py-24 px-6 bg-brand-gray overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <span className="font-mono text-xs text-brand-accent tracking-[0.3em] uppercase block mb-4">— Inside Small Drop</span>
          <h2 className="font-display text-[clamp(36px,6vw,80px)] leading-none text-brand-white mb-16">
            AGENCY<br /><span className="text-stroke-accent">LIFE</span>
          </h2>

          {/* Mosaic grid — colored placeholder tiles */}
          <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
            {[...Array(12)].map((_, i) => {
              const tall = i === 0 || i === 5 || i === 7
              return (
                <div
                  key={i}
                  className={`relative overflow-hidden ${tall ? 'row-span-2' : ''}`}
                  style={{ minHeight: tall ? '280px' : '130px' }}
                >
                  <div
                    className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity"
                    style={{ background: agencyColors[i % agencyColors.length] }}
                  />
                  <div
                    className="absolute inset-0 flex items-end p-3"
                    style={{ background: 'linear-gradient(to top,rgba(10,10,10,0.6),transparent)' }}
                  >
                    <span className="font-mono text-xs text-white/40 tracking-widest">
                      {['TEAM', 'WORK', 'DESIGN', 'BUILD', 'CREATE', 'SHIP', 'CRAFT', 'CODE', 'BRAND', 'PITCH', 'REVIEW', 'LAUNCH'][i]}
                    </span>
                  </div>
                  {/* Geometric fill stand-in */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background: `linear-gradient(135deg, ${agencyColors[i % agencyColors.length]}15, ${agencyColors[(i + 2) % agencyColors.length]}08)`,
                      borderTop: `2px solid ${agencyColors[i % agencyColors.length]}20`,
                    }}
                  />
                </div>
              )
            })}
          </div>

          {/* Join us CTA */}
          <div className="mt-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-t border-white/10 pt-12">
            <div>
              <h3 className="font-display text-4xl text-brand-white mb-2">JOIN THE SQUAD</h3>
              <p className="font-body text-brand-white/50 text-sm">We're always looking for extraordinary people.</p>
            </div>
            <a
              href="#"
              className="group inline-flex items-center gap-3 border border-brand-accent text-brand-accent px-8 py-4 text-sm font-mono tracking-widest uppercase hover:bg-brand-accent hover:text-brand-black transition-colors"
            >
              View Job Openings <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>
        </div>
      </Section>

      {/* ── FEATURED CLIENTS ── */}
      <Section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <span className="font-mono text-xs text-brand-accent tracking-[0.3em] uppercase block mb-4">— Who We've Worked With</span>
          <h2 className="font-display text-[clamp(36px,6vw,80px)] leading-none text-brand-white mb-16">
            FEATURED<br /><span className="text-stroke">CLIENTS</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 divide-y divide-white/10 border border-white/10">
            {clients.map((c, i) => (
              <div
                key={c.name}
                className={`group p-8 hover:bg-brand-gray transition-colors flex flex-col gap-2 ${i % 3 !== 2 ? 'lg:border-r lg:border-white/10' : ''}`}
              >
                <span className="font-mono text-xs text-brand-accent/40 mb-1">0{i + 1}</span>
                <h4 className="font-display text-2xl text-brand-white group-hover:text-brand-accent transition-colors">{c.name}</h4>
                <p className="font-body text-xs text-brand-white/40 leading-relaxed">{c.stat}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── COLLABORATION CTA ── */}
      <Section className="py-24 px-6 bg-brand-gray relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center">
          <span className="font-display text-[20vw] text-brand-white/[0.02] leading-none select-none whitespace-nowrap">
            COLLABORATE
          </span>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <span className="font-mono text-xs text-brand-accent tracking-[0.3em] uppercase block mb-6">— Let's Connect</span>
          <h2 className="font-display text-[clamp(40px,8vw,100px)] leading-none text-brand-white mb-6">
            WANT TO WORK ON A<br />
            <span className="text-brand-accent">FUTURE-FORWARD</span><br />
            PROJECT?
          </h2>
          <p className="font-body text-brand-white/50 max-w-lg mx-auto mb-10 leading-relaxed">
            We collaborate with innovative brands to create cutting-edge digital experiences. Let's connect.
          </p>
          <a
            href="#contact"
            className="group inline-flex items-center gap-3 bg-brand-accent text-brand-black font-semibold px-12 py-5 text-sm tracking-wide hover:opacity-80 transition-colors"
          >
            Let's Talk <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>
      </Section>

      {/* ── OFFICES ── */}
      <Section className="py-24 px-6 border-t border-white/10" id="contact">
        <div className="max-w-7xl mx-auto">
          <span className="font-mono text-xs text-brand-accent tracking-[0.3em] uppercase block mb-4">— Where to Find Us</span>
          <h2 className="font-display text-[clamp(36px,6vw,80px)] leading-none text-brand-white mb-16">
            OUR<br /><span className="text-stroke">OFFICES</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px bg-white/10">
            {offices.map(({ city, address, phone }) => (
              <div key={city} className="bg-brand-black hover:bg-brand-gray transition-colors p-8 flex flex-col gap-3 group">
                <span className="w-2 h-2 rounded-full bg-brand-accent group-hover:scale-150 transition-transform" />
                <h4 className="font-display text-2xl text-brand-white group-hover:text-brand-accent transition-colors mt-2">{city}</h4>
                <p className="font-body text-xs text-brand-white/40 leading-relaxed">{address}</p>
                <a
                  href={`tel:${phone.replace(/[^0-9+]/g, '')}`}
                  className="font-mono text-xs text-brand-accent/70 hover:text-brand-accent transition-colors mt-auto"
                >
                  {phone}
                </a>
              </div>
            ))}
          </div>

          {/* email */}
          <div className="mt-12 text-center">
            <p className="font-body text-brand-white/40 text-sm mb-3">Reach us directly</p>
            <a
              href="mailto:hello@smalldropinc.com"
              className="font-display text-[clamp(24px,4vw,56px)] text-brand-white hover:text-brand-accent transition-colors"
            >
              hello@smalldropinc.com
            </a>
          </div>
        </div>
      </Section>

    </div>
  )
}
