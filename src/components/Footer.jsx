export default function Footer() {
  const year = new Date().getFullYear()

  const cols = [
    {
      heading: 'Services',
      links: ['Web Design', 'Web Development', 'Digital Marketing', 'AI Services', 'Branding', 'Support & Hosting'],
    },
    {
      heading: 'Company',
      links: ['About Us', 'Latest Work', 'Blog', 'Careers', 'Press'],
    },
    {
      heading: 'Connect',
      links: ['LinkedIn', 'Instagram', 'Twitter / X', 'Dribbble', 'Clutch'],
    },
  ]

  return (
    <footer className="bg-[#f2f2f2] border-t border-white/10 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand col */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-8 h-8 rounded-full bg-brand-accent flex items-center justify-center">
                <span className="font-display text-brand-black text-sm leading-none">SD</span>
              </span>
              <span className="font-display text-2xl tracking-widest text-brand-white">
                SMALLDROP<span className="text-brand-accent">INC</span>
              </span>
            </div>
            <p className="font-body text-sm text-brand-white/40 leading-relaxed max-w-xs mb-6">
              A digital agency that transforms brands through innovative web design, development, and marketing solutions.
            </p>
            <div className="font-mono text-xs text-brand-muted tracking-wide">
              New York, NY · hello@smalldropinc.com
            </div>
          </div>

          {/* Link cols */}
          {cols.map((col) => (
            <div key={col.heading}>
              <h4 className="font-mono text-xs text-brand-accent tracking-[0.2em] uppercase mb-5">
                {col.heading}
              </h4>
              <ul className="space-y-3">
                {col.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="font-body text-sm text-brand-white/40 hover:text-brand-accent transition-colors"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="font-mono text-xs text-brand-white/20 tracking-wide">
            © {year} Small Drop Inc. All rights reserved.
          </span>
          <div className="flex items-center gap-6">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((l) => (
              <a key={l} href="#" className="font-mono text-xs text-brand-white/20 hover:text-brand-accent transition-colors">
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
