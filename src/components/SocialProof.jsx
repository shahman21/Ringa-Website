const trades = [
  'Plumbers',
  'Electricians',
  'Roofers',
  'Builders',
  'Gas Engineers',
  'Joiners',
  'Decorators',
  'Landscapers',
  'Tilers',
  'Plasterers',
  'Locksmiths',
  'Heating Engineers',
  'Drainage Specialists',
  'Window Fitters',
]

const Dot = () => (
  <span className="mx-4 text-[#1d4ed8] text-xs opacity-70">/</span>
)

function Track() {
  const doubled = [...trades, ...trades]
  return (
    <div className="marquee-track">
      {doubled.map((b, i) => (
        <span key={i} className="inline-flex items-center whitespace-nowrap text-sm text-[#525252] font-semibold uppercase tracking-wider">
          {b}
          <Dot />
        </span>
      ))}
    </div>
  )
}

export default function SocialProof() {
  return (
    <div className="bg-[#f8fafc] border-y border-[#e5e7eb] py-4 overflow-hidden">
      <div className="flex items-center gap-6">
        <div className="hidden sm:flex items-center gap-2 flex-shrink-0 pl-6 pr-4 border-r border-[#e5e7eb]">
          <div className="w-1.5 h-1.5 rounded-full bg-[#1d4ed8] animate-pulse" />
          <span className="text-[#525252] text-xs font-semibold uppercase tracking-wider whitespace-nowrap">We build for</span>
        </div>
        <div className="flex-1 overflow-hidden relative">
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#f8fafc] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#f8fafc] to-transparent z-10 pointer-events-none" />
          <Track />
        </div>
      </div>
    </div>
  )
}
