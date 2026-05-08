import { useFadeIn } from '../hooks/useFadeIn'

const CALENDLY = 'https://calendly.com/aditya-shah-ringa/ringa-sales-call'

const integrations = [
  { category: 'Find You',     tools: ['Google Business', 'Google Maps', 'Bing Places', 'Apple Maps'] },
  { category: 'Trust',        tools: ['Checkatrade', 'Trustpilot', 'Gas Safe', 'NICEIC'] },
  { category: 'Capture Leads', tools: ['Quote forms', 'WhatsApp click-to-chat', 'Calendly bookings', 'Stripe deposits'] },
  { category: 'Follow Up',    tools: ['Auto SMS reply', 'Email drip', 'Lead alerts to your phone', 'Zapier (any CRM)'] },
]

export default function Integrations() {
  const headRef = useFadeIn()
  const gridRef = useFadeIn(0.1, 100)

  return (
    <section id="integrations" className="section-pad bg-white">
      <div className="container-wide">
        <div ref={headRef} className="fade-up mb-14">
          <p className="eyebrow mb-3">Integrations</p>
          <h2 className="font-heading font-extrabold text-[clamp(2rem,5vw,3.5rem)] text-[#1f2937] leading-tight mb-4">
            Plays nice with the tools you already use.
          </h2>
          <p className="text-[#525252] text-base max-w-lg">
            Your LDA site plugs into the platforms tradespeople actually use to find work, build trust, and turn enquiries into booked jobs. All wired up as part of the £1,000 build.
          </p>
        </div>

        <div ref={gridRef} className="fade-up grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
          {integrations.map((group) => (
            <div key={group.category} className="card p-5">
              <p className="text-[#1d4ed8] text-[10px] font-bold uppercase tracking-widest mb-4 pb-3 border-b border-[#e5e7eb]">
                {group.category}
              </p>
              <div className="flex flex-col gap-2">
                {group.tools.map((tool) => (
                  <div
                    key={tool}
                    className="flex items-center gap-2 px-3 py-2 bg-[#f8fafc] border border-[#e5e7eb] rounded-btn hover:border-[#1d4ed8]/30 hover:bg-[#eff6ff] transition-all duration-200 cursor-default"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-[#1d4ed8]/70 flex-shrink-0" />
                    <span className="text-[#1f2937] text-sm font-medium">{tool}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="card p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="text-[#1f2937] font-semibold mb-1">
              Use something different? We've probably already integrated it.
            </p>
            <p className="text-[#525252] text-sm">
              Tell us what you run on. If we haven't built it yet, we will — usually as part of the build, no extra charge.
            </p>
          </div>
          <a
            href={CALENDLY}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-white flex-shrink-0"
          >
            Talk to us
          </a>
        </div>
      </div>
    </section>
  )
}
