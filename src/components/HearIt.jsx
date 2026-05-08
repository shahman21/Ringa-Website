import { useFadeIn } from '../hooks/useFadeIn'

const examples = [
  {
    name: 'Miller Plumbing',
    domain: 'millerplumbing.co.uk',
    trade: 'Plumber · Manchester',
    accent: '#1d4ed8',
    headline: "Manchester's most trusted plumber.",
    sub: '⭐ 4.9 · Gas Safe · Same-day callouts',
    cta: 'Get a free quote',
    metric: '+38 leads / mo',
  },
  {
    name: 'Apex Electrical',
    domain: 'apexelectrical.co.uk',
    trade: 'Electrician · Leeds',
    accent: '#1e5fa8',
    headline: 'NICEIC-approved electricians, Leeds-wide.',
    sub: '⭐ 4.8 · 12-yr guarantee · EICR specialists',
    cta: 'Book an EICR',
    metric: '+22 EICRs / mo',
  },
  {
    name: 'Northside Roofing',
    domain: 'northsideroofing.co.uk',
    trade: 'Roofer · Sheffield',
    accent: '#0f766e',
    headline: 'Roof repairs done right, first time.',
    sub: '⭐ 5.0 · Fully insured · Free survey',
    cta: 'Book free survey',
    metric: '+£18k / mo',
  },
]

function SiteCard({ example }) {
  return (
    <div className="browser-frame">
      <div className="browser-bar">
        <span className="browser-dot bg-[#1d4ed8]" />
        <span className="browser-dot bg-[#e5e7eb]" />
        <span className="browser-dot bg-[#e5e7eb]" />
        <div className="ml-2 flex-1 bg-white border border-[#e5e7eb] rounded-md px-3 py-1">
          <span className="text-[#737373] text-xs">{example.domain}</span>
        </div>
      </div>
      <div className="p-6 bg-white">
        <div className="flex items-center gap-2 mb-3">
          <span
            className="w-7 h-7 rounded-md flex items-center justify-center text-white text-xs font-bold"
            style={{ background: example.accent }}
          >
            {example.name[0]}
          </span>
          <span className="text-[#1f2937] font-bold text-xs uppercase tracking-wider">{example.name}</span>
        </div>
        <p className="font-heading font-extrabold text-xl text-[#1f2937] leading-tight mb-1">
          {example.headline}
        </p>
        <p className="text-[#737373] text-sm mb-4">{example.sub}</p>
        <button
          className="w-full text-white font-semibold py-2.5 rounded-btn text-sm"
          style={{ background: example.accent }}
        >
          {example.cta}
        </button>
      </div>
      <div className="px-6 py-3 bg-[#f8fafc] border-t border-[#e5e7eb] flex items-center justify-between">
        <span className="text-[#737373] text-xs">{example.trade}</span>
        <span className="text-[#1f2937] text-xs font-bold">{example.metric}</span>
      </div>
    </div>
  )
}

export default function HearIt() {
  const headRef = useFadeIn()
  const gridRef = useFadeIn(0.05, 100)

  return (
    <section id="examples" className="section-pad bg-[#0a0a0a] relative overflow-hidden">
      {/* Hazard accent stripe */}
      <div className="absolute top-0 inset-x-0 h-1.5 hazard-tape opacity-60" aria-hidden="true" />
      <div
        className="absolute -top-32 -right-20 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(29,78,216,0.18) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
        aria-hidden="true"
      />

      <div className="container-wide relative z-10">
        <div ref={headRef} className="fade-up max-w-2xl mb-14">
          <p className="eyebrow mb-3">See it live</p>
          <h2 className="font-heading font-extrabold text-[clamp(2rem,5vw,3.5rem)] text-white leading-tight mb-4">
            Real sites. Real trades. Real bookings.
          </h2>
          <p className="text-white/70 text-base">
            Three landing pages we built for working trades. Each one £1,000, live in 3 days — and bringing in jobs the same month.
          </p>
        </div>

        <div ref={gridRef} className="fade-up grid grid-cols-1 md:grid-cols-3 gap-6">
          {examples.map((e) => (
            <SiteCard key={e.name} example={e} />
          ))}
        </div>

        <p className="text-white/50 text-sm text-center mt-10">
          Names anonymised on request. Happy to share live links and references on a quick call.
        </p>
      </div>
    </section>
  )
}
