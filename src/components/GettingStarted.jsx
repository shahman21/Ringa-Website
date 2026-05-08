import { useFadeIn } from '../hooks/useFadeIn'

const rows = [
  { label: 'Price',                    lda: '£1,000 flat',           diy: '£29/mo + your time',   agency: '£5,000–£15,000' },
  { label: 'Time until live',          lda: '3 days',                diy: '4–8 weekends',         agency: '8–12 weeks' },
  { label: 'Free mockup before paying', lda: 'Yes',                  diy: 'N/A',                  agency: 'Almost never' },
  { label: 'Premium animations',       lda: 'Included',              diy: 'No',                   agency: '£3k+ add-on' },
  { label: 'Custom AI imagery',        lda: 'Included',              diy: 'Generic stock',        agency: '£500+ photoshoot' },
  { label: 'Built for tradespeople',   lda: "Yes — that's all we do", diy: 'Generic templates',   agency: 'Sometimes' },
  { label: 'Google Business + local SEO', lda: 'Standard',           diy: 'Paid add-on',          agency: 'Extra fee' },
  { label: 'Lead automations',         lda: 'Included',              diy: 'DIY',                  agency: 'Extra monthly fee' },
  { label: "Edits while you're working", lda: 'WhatsApp us',         diy: 'You log in and learn', agency: 'Email a ticket' },
  { label: 'Who owns it',              lda: 'You — fully',           diy: 'You',                  agency: 'Often locked in' },
]

const Yes = () => (
  <span className="inline-flex w-5 h-5 rounded-full bg-[#eff6ff] border border-[#1d4ed8]/30 items-center justify-center">
    <svg className="w-3 h-3 text-[#1d4ed8]" fill="none" viewBox="0 0 10 8">
      <path d="M1 4l3 3 5-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </span>
)

export default function GettingStarted() {
  const headRef = useFadeIn()
  const tableRef = useFadeIn(0.05, 100)

  return (
    <section id="why-lda" className="section-pad bg-[#f8fafc]">
      <div className="container-wide">
        <div ref={headRef} className="fade-up mb-12">
          <p className="eyebrow mb-3">Why LDA</p>
          <h2 className="font-heading font-extrabold text-[clamp(2rem,5vw,3.5rem)] text-[#1f2937] leading-tight mb-4">
            Better than DIY.{' '}
            <span className="text-[#1d4ed8]">Faster than an agency.</span>
          </h2>
          <p className="text-[#525252] text-base max-w-lg">
            Most tradespeople end up with one of two things: a £29/mo template builder they don't have time to learn, or an agency that takes three months and quotes five figures. We built LDA Digital to be the sensible third option — agency-quality, £1,000 flat, three days.
          </p>
        </div>

        <div ref={tableRef} className="fade-up overflow-x-auto">
          <table className="w-full bg-white rounded-card border border-[#e5e7eb] overflow-hidden text-sm">
            <thead>
              <tr className="bg-[#f8fafc] border-b border-[#e5e7eb]">
                <th className="text-left text-[#737373] text-[11px] font-bold uppercase tracking-widest px-5 py-4 min-w-[180px]"></th>
                <th className="text-left px-5 py-4 min-w-[170px]">
                  <div className="flex items-center gap-2">
                    <span className="w-7 h-6 rounded-md bg-[#1d4ed8] text-white flex items-center justify-center text-[9px] tracking-widest font-extrabold">LDA</span>
                    <span className="text-[#1f2937] font-bold">LDA Digital</span>
                  </div>
                </th>
                <th className="text-left text-[#525252] font-semibold px-5 py-4 min-w-[170px]">DIY builder</th>
                <th className="text-left text-[#525252] font-semibold px-5 py-4 min-w-[170px]">Traditional agency</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={r.label} className={i % 2 === 0 ? 'bg-white' : 'bg-[#f8fafc]/60'}>
                  <td className="text-[#1f2937] font-semibold px-5 py-4 border-b border-[#e5e7eb]">
                    {r.label}
                  </td>
                  <td className="px-5 py-4 border-b border-[#e5e7eb]">
                    <div className="flex items-center gap-2">
                      <Yes />
                      <span className="text-[#1f2937] font-medium">{r.lda}</span>
                    </div>
                  </td>
                  <td className="px-5 py-4 border-b border-[#e5e7eb] text-[#737373]">{r.diy}</td>
                  <td className="px-5 py-4 border-b border-[#e5e7eb] text-[#737373]">{r.agency}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
