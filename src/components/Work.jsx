import { useState } from 'react'

const projects = [
  {
    title: 'Nexus Finance',
    category: 'Web Design & Development',
    desc: 'Revolutionizing financial services with user-friendly solutions for payments, payroll, and more.',
    color: 'hsla(98, 21%, 93%, 0.99)',
    accent: '#e8ff00',
    tag: 'Fintech',
  },
  {
    title: 'Vertex Security',
    category: 'Branding & Development',
    desc: 'Creating a new digital environment for one of the fastest growing cybersecurity companies.',
    color: 'hsla(98, 21%, 93%, 0.99)',
    accent: '#4fc3f7',
    tag: 'Cybersecurity',
  },
  {
    title: 'Bloomkraft',
    category: 'UI/UX & Branding',
    desc: 'Enabling teams to share knowledge effortlessly through an intuitive, collaborative platform.',
    color: 'hsla(98, 21%, 93%, 0.99)',
    accent: '#b388ff',
    tag: 'SaaS',
  },
  {
    title: 'PeakForm',
    category: 'Web Design',
    desc: 'Transforming fitness experiences with a dynamic, user-centric digital platform.',
    color: 'hsla(98, 21%, 93%, 0.99)',
    accent: '#69f0ae',
    tag: 'Health & Fitness',
  },
  {
    title: 'Luminary Media',
    category: 'Digital Marketing',
    desc: 'Delivering comprehensive media solutions to amplify brands across digital channels.',
    color: 'hsla(98, 21%, 93%, 0.99)',
    accent: '#ff7043',
    tag: 'Media',
  },
  {
    title: 'Orion Cable',
    category: 'Web Development',
    desc: 'Partnering with a premier cable provider to create a streamlined online presence.',
    color: 'hsla(98, 21%, 93%, 0.99)',
    accent: '#29b6f6',
    tag: 'Telecom',
  },
]

export default function Work() {
  const [hovered, setHovered] = useState(null)

  return (
    <section id="work" className="bg-brand-black py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="font-mono text-xs text-brand-accent tracking-[0.3em] uppercase block mb-4">
              — Selected Work
            </span>
            <h2 className="font-display text-[clamp(40px,7vw,90px)] leading-none text-brand-white">
              EXPERIENCES<br />
              <span className="text-stroke">WE'VE CREATED</span>
            </h2>
          </div>
          <a
            href="#"
            className="group inline-flex items-center gap-2 text-brand-white/60 hover:text-brand-accent transition-colors font-body text-sm tracking-wide shrink-0"
          >
            View all work
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>

        {/* Project grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10">
          {projects.map((p, i) => (
            <div
              key={p.title}
              className="group relative overflow-hidden bg-brand-black p-8 flex flex-col justify-between min-h-[320px] hover:bg-brand-gray transition-colors duration-300"
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Background color block */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `linear-gradient(135deg, ${p.color} 0%, #0a0a0a 100%)` }}
              />

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <span
                    className="font-mono text-xs px-3 py-1 border tracking-widest uppercase"
                    style={{ color: p.accent, borderColor: `${p.accent}40` }}
                  >
                    {p.tag}
                  </span>
                  <span className="font-mono text-xs text-brand-white/30">0{i + 1}</span>
                </div>

                <h3 className="font-display text-4xl text-brand-white mb-2 group-hover:text-brand-accent transition-colors">
                  {p.title}
                </h3>
                <p className="font-body text-xs text-brand-white/40 uppercase tracking-widest mb-4">
                  {p.category}
                </p>
                <p className="font-body text-sm text-brand-white/60 leading-relaxed">
                  {p.desc}
                </p>
              </div>

              <div className="relative z-10 mt-6 flex items-center gap-2 text-brand-white/40 group-hover:text-brand-accent transition-colors">
                <span className="font-mono text-xs tracking-widest uppercase">View Case Study</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>

              {/* Corner accent */}
              <div
                className="absolute bottom-0 right-0 w-16 h-16 opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ background: `linear-gradient(135deg, transparent 50%, ${p.accent}20 50%)` }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
