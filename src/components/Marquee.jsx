export default function Marquee() {
  const items = [
    'Web Design', '✦', 'Web Development', '✦', 'Digital Marketing',
    '✦', 'AI Services', '✦', 'Branding', '✦', 'UI/UX Design',
    '✦', 'Web Design', '✦', 'Web Development', '✦', 'Digital Marketing',
    '✦', 'AI Services', '✦', 'Branding', '✦', 'UI/UX Design', '✦',
  ]

  return (
    <div className="bg-brand-white py-4 overflow-hidden border-y border-brand-white/10">
      <div className="flex animate-marquee whitespace-nowrap">
        {items.map((item, i) => (
          <span key={i} className="font-display text-brand-black text-xl tracking-widest mx-4 shrink-0">
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
