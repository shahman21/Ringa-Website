import { useFadeIn } from '../hooks/useFadeIn'

const CALENDLY = 'https://calendly.com/aditya-shah-ringa/ringa-sales-call'

const integrations = [
  { category: 'Booking',       tools: ['Calendly', 'Google Calendar'] },
  { category: 'Communication', tools: ['WhatsApp Business', 'SMS'] },
  { category: 'CRM',           tools: ['Salesforce', 'HubSpot'] },
]

export default function Integrations() {
  const headRef = useFadeIn()
  const gridRef = useFadeIn(0.1, 100)

  return (
    <section id="integrations" className="section-pad bg-white">
      <div className="container-wide">
        <div ref={headRef} className="fade-up mb-14">
          <p className="text-[#3b82c4] text-xs font-semibold uppercase tracking-widest mb-3">Integrations</p>
          <h2 className="font-heading font-extrabold text-[clamp(2rem,5vw,3.5rem)] text-[#1f2937] leading-tight mb-4">
            Works with what you already use.
          </h2>
          <p className="text-[#6b7280] text-base max-w-lg">
            Ringa connects to the practice management software your team already runs on. No switching. No setup headaches.
          </p>
        </div>

        <div ref={gridRef} className="fade-up grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
          {integrations.map((group) => (
            <div key={group.category} className="card p-5">
              <p className="text-[#3b82c4] text-[10px] font-semibold uppercase tracking-widest mb-4 pb-3 border-b border-[#e5e8ed]">
                {group.category}
              </p>
              <div className="flex flex-col gap-2">
                {group.tools.map((tool) => (
                  <div
                    key={tool}
                    className="flex items-center gap-2 px-3 py-2 bg-[#f7f9fc] border border-[#e5e8ed] rounded-btn hover:border-[#3b82c4]/30 hover:bg-[#e8f4fd] transition-all duration-200 cursor-default"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-[#3b82c4]/60 flex-shrink-0" />
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
              Direct integration with dental practice management systems like Dentally and SOE is on our roadmap.
            </p>
            <p className="text-[#6b7280] text-sm">
              For now, Ringa works alongside your existing system using Calendly for appointment booking.
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
