import { useFadeIn } from '../hooks/useFadeIn'

const CALENDLY = 'https://calendly.com/aditya-shah-ringa/ringa-sales-call'

const features = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
    title: 'Smooth scroll animations',
    desc: "Premium motion built around your tools, your van, your work. The kind of thing agencies charge £8k for. AI-powered, agency-quality, included as standard.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24">
        <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Loads in under 2 seconds',
    desc: "Modern code, no WordPress bloat. Loads fast on a phone with one bar of signal — which is where your customers actually are when they need a tradesperson.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z M12 13a3 3 0 100-6 3 3 0 000 6z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Ranks on Google locally',
    desc: "Google Business profile setup, schema markup, location targeting — all included. So when someone searches your trade plus your town, you actually appear.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24">
        <rect x="5" y="3" width="14" height="18" rx="2" stroke="currentColor" strokeWidth="1.8" />
        <path d="M9 7h6M9 11h6M9 15h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
    title: 'Quote forms that convert',
    desc: "Two-tap quote requests with WhatsApp lead alerts. The second somebody fills it in, your phone pings — even if you're up a ladder.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24">
        <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Auto lead follow-up',
    desc: "Automated text + email reply the moment a lead comes in. They get a friendly response in seconds. Nobody slips through the cracks while you're on a job.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24">
        <path d="M5 3v4M3 5h4M6 17v4M4 19h4M13 3l3.5 7.5L24 12l-7.5 1.5L13 21l-3.5-7.5L2 12l7.5-1.5L13 3z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Custom AI imagery',
    desc: "Hero photography, brand visuals and service illustrations — all generated and edited around your trade. No 2014 stock-photo of a smiling man with a wrench.",
  },
]

export default function Features() {
  const headRef = useFadeIn()
  const gridRef = useFadeIn(0.1, 100)
  const bannerRef = useFadeIn(0.1, 50)

  return (
    <section id="features" className="section-pad bg-[#f8fafc]">
      <div className="container-wide">
        <div ref={headRef} className="fade-up mb-14">
          <p className="eyebrow mb-3">What's in every site</p>
          <h2 className="font-heading font-extrabold text-[clamp(2rem,5vw,3.5rem)] leading-tight text-[#1f2937] mb-4">
            Built to win jobs.{' '}
            <span className="text-[#1d4ed8]">Not to win design awards.</span>
          </h2>
          <p className="text-[#525252] text-base max-w-lg">
            Every £1,000 LDA Digital site comes with the lot — animations, lead tools, Google ranking, automations. We don't charge extra for things that should be there from day one.
          </p>
        </div>

        <div ref={gridRef} className="fade-up grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {features.map((f) => (
            <div
              key={f.title}
              className="card p-6 group cursor-default"
            >
              <div className="w-10 h-10 rounded-xl bg-[#eff6ff] border border-[#1d4ed8]/25 flex items-center justify-center text-[#1d4ed8] mb-4 group-hover:bg-[#1d4ed8] group-hover:text-white group-hover:border-[#1d4ed8] transition-all duration-300">
                {f.icon}
              </div>
              <h3 className="font-heading font-bold text-lg text-[#1f2937] mb-2">{f.title}</h3>
              <p className="text-[#525252] text-sm leading-relaxed">{f.desc}</p>
              <div className="mt-4 h-px w-0 group-hover:w-full bg-gradient-to-r from-[#1d4ed8] to-transparent transition-all duration-500 ease-out" />
            </div>
          ))}
        </div>

        {/* Banner */}
        <div ref={bannerRef} className="fade-up">
          <div className="rounded-card bg-[#0f172a] p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-5 relative overflow-hidden">
            <div className="absolute -right-10 top-0 bottom-0 w-40 hazard-tape opacity-15" aria-hidden="true" />
            <div className="flex items-center gap-4 relative z-10">
              <div className="w-11 h-11 rounded-xl bg-[#1d4ed8] flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24">
                  <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <p className="text-white font-semibold text-base md:text-lg max-w-xl">
                Send us your business name. We'll send a free, personalised homepage mockup{' '}
                <span className="font-normal text-white/70">within 48 hours. No charge, no commitment.</span>
              </p>
            </div>
            <a
              href={CALENDLY}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 bg-[#1d4ed8] hover:bg-[#1e40af] text-white font-semibold px-6 py-3 rounded-btn transition-all duration-200 text-sm whitespace-nowrap relative z-10"
            >
              Get Free Mockup
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
