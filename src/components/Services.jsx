const services = [
  {
    num: '01',
    title: 'Renowned, Award-Winning Web Design',
    desc: 'Our dedicated design team combines custom human-centered design with conversion-focused practices and SEO optimization. We embrace your input at every step to ensure your website looks just as you imagined.',
    link: 'Web Design',
    icon: '◈',
  },
  {
    num: '02',
    title: 'Proven Digital Marketing Strategy',
    desc: 'Our certified team works with you to create and execute digital marketing solutions best suited to your goals — SEO, content marketing, paid advertising, social media, and email campaigns that build sustainable growth.',
    link: 'Digital Marketing',
    icon: '◎',
  },
  {
    num: '03',
    title: 'Comprehensive Brand Solutions',
    desc: 'Work with the best brand marketing team to fuel your business brand. We deliver robust, holistic brand strategies that create the foundation for your marketing initiatives to grow your business for years to come.',
    link: 'Branding',
    icon: '⬡',
  },
  {
    num: '04',
    title: 'Innovative & Future-Proof Web Development',
    desc: 'Utilizing the latest technology and best practices, our development team brings your designs to life by delivering a seamless front and back-end experience optimized for conversions — built for now and the future.',
    link: 'Web Development',
    icon: '⟁',
  },
]

export default function Services() {
  return (
    <section id="services" className="bg-brand-gray py-24 px-6 relative overflow-hidden border-y border-black/8">
      {/* Decorative line */}
      <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-brand-accent/20 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <span className="font-mono text-xs text-brand-accent tracking-[0.3em] uppercase block mb-4">
            — Our Capabilities
          </span>
          <h2 className="font-display text-[clamp(40px,7vw,90px)] leading-none">
            <span className="text-brand-white">WHAT WE</span><br />
            <span className="text-stroke-accent">DO BEST</span>
          </h2>
        </div>

        <div className="divide-y divide-white/10">
          {services.map((s, i) => (
            <div
              key={s.num}
              className="group py-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start hover:bg-white/2 transition-colors -mx-6 px-6"
            >
              <div className="lg:col-span-1">
                <span className="font-mono text-xs text-brand-accent/50">{s.num}</span>
              </div>
              <div className="lg:col-span-1 text-3xl text-brand-white/30 group-hover:text-brand-accent transition-colors">
                {s.icon}
              </div>
              <div className="lg:col-span-4">
                <h3 className="font-display text-2xl md:text-3xl text-brand-white group-hover:text-brand-accent transition-colors leading-tight">
                  {s.title}
                </h3>
              </div>
              <div className="lg:col-span-5">
                <p className="font-body text-sm text-brand-white/50 leading-relaxed mb-6">
                  {s.desc}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-brand-accent font-mono text-xs tracking-widest uppercase hover:gap-4 transition-all"
                >
                  Learn more <span>→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
