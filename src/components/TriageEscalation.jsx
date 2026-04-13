import { useFadeIn } from '../hooks/useFadeIn'

const handles = [
  'Routine bookings',
  'Treatment enquiries',
  'Pricing questions',
  'NHS registration',
  'Aftercare queries',
  'Hygiene bookings',
]

const escalates = [
  'Severe pain with swelling',
  'Fever with dental symptoms',
  'Trauma or accident',
  'Knocked-out tooth',
  'Heavy post-extraction bleeding',
]

export default function TriageEscalation() {
  const headRef = useFadeIn()
  const colsRef = useFadeIn(0.1, 100)
  const noteRef = useFadeIn(0.1, 50)

  return (
    <section className="section-pad bg-[#f7f9fc]">
      <div className="container-wide">
        <div ref={headRef} className="fade-up mb-14 max-w-2xl">
          <p className="text-[#3b82c4] text-xs font-semibold uppercase tracking-widest mb-3">Triage and Escalation</p>
          <h2 className="font-heading font-extrabold text-[clamp(2rem,5vw,3.5rem)] leading-tight text-[#1f2937] mb-4">
            Smart enough to know when to escalate.
          </h2>
          <p className="text-[#6b7280] text-base">
            Ringa doesn't just answer calls — it triages them.
          </p>
        </div>

        <div ref={colsRef} className="fade-up grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Handles */}
          <div className="card p-6">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-8 h-8 rounded-full bg-[#e8f4fd] flex items-center justify-center">
                <svg className="w-4 h-4 text-[#3b82c4]" fill="none" viewBox="0 0 24 24">
                  <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
                </svg>
              </div>
              <h3 className="font-heading font-bold text-lg text-[#1f2937]">Ringa handles</h3>
            </div>
            <ul className="flex flex-col gap-3">
              {handles.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-[#6b7280]">
                  <svg className="w-4 h-4 text-[#3b82c4] flex-shrink-0" fill="none" viewBox="0 0 24 24">
                    <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Escalates */}
          <div className="card p-6">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-8 h-8 rounded-full bg-amber-50 flex items-center justify-center">
                <svg className="w-4 h-4 text-amber-500" fill="none" viewBox="0 0 24 24">
                  <path d="M12 9v2m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="font-heading font-bold text-lg text-[#1f2937]">Ringa escalates</h3>
            </div>
            <ul className="flex flex-col gap-3">
              {escalates.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-[#6b7280]">
                  <svg className="w-4 h-4 text-amber-500 flex-shrink-0" fill="none" viewBox="0 0 24 24">
                    <path d="M12 9v2m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Note */}
        <div ref={noteRef} className="fade-up">
          <div className="rounded-card bg-[#e8f4fd] border border-[#3b82c4]/20 p-5">
            <p className="text-[#1f2937] text-sm leading-relaxed">
              <strong className="text-[#3b82c4]">Every escalation is instant</strong> — Ringa transfers the call and sends your team a WhatsApp alert with the patient details and reason.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
