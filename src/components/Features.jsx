import { useFadeIn } from '../hooks/useFadeIn'

const features = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24">
        <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Answers every patient call',
    desc: 'Picks up in two rings, any time of day or night. No engaged tone, no voicemail. Every patient gets through and gets helped.',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24">
        <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Handles WhatsApp',
    desc: 'Replies to patient messages in seconds, day or night. Takes messages, answers basic questions and forwards anything urgent to your team immediately.',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" stroke="currentColor" strokeWidth="1.8" />
        <line x1="16" y1="2" x2="16" y2="6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <line x1="8" y1="2" x2="8" y2="6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <line x1="3" y1="10" x2="21" y2="10" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    ),
    title: 'Books appointments',
    desc: 'Takes the patient\'s details, finds a suitable slot and confirms the booking. Reminders sent automatically so you see fewer no-shows.',
  },
]

export default function Features() {
  const headRef = useFadeIn()
  const gridRef = useFadeIn(0.1, 100)
  const bannerRef = useFadeIn(0.1, 50)

  return (
    <section id="how-it-works" className="section-pad bg-[#f7f9fc]">
      <div className="container-wide">
        <div ref={headRef} className="fade-up mb-14">
          <p className="text-[#3b82c4] text-xs font-semibold uppercase tracking-widest mb-3">Features</p>
          <h2 className="font-heading font-extrabold text-[clamp(2rem,5vw,3.5rem)] leading-tight text-[#1f2937] mb-4">
            Every patient call answered.{' '}
            <span className="text-[#3b82c4]">Even when you can't pick up.</span>
          </h2>
          <p className="text-[#6b7280] text-base max-w-lg">
            Ringa works alongside your team, picking up the calls that would otherwise go unanswered and turning them into booked appointments.
          </p>
        </div>

        <div ref={gridRef} className="fade-up grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
          {features.map((f) => (
            <div
              key={f.title}
              className="card p-6 group cursor-default"
            >
              <div className="w-10 h-10 rounded-xl bg-[#e8f4fd] border border-[#3b82c4]/20 flex items-center justify-center text-[#3b82c4] mb-4 group-hover:bg-[#3b82c4]/20 group-hover:border-[#3b82c4]/40 transition-all duration-300">
                {f.icon}
              </div>
              <h3 className="font-heading font-bold text-lg text-[#1f2937] mb-2">{f.title}</h3>
              <p className="text-[#6b7280] text-sm leading-relaxed">{f.desc}</p>
              <div className="mt-4 h-px w-0 group-hover:w-full bg-gradient-to-r from-[#3b82c4] to-transparent transition-all duration-500 ease-out" />
            </div>
          ))}
        </div>

        {/* Blue banner */}
        <div ref={bannerRef} className="fade-up">
          <div className="rounded-card bg-[#3b82c4] p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-5">
            <div className="flex items-center gap-4">
              <div className="w-11 h-11 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24">
                  <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <p className="text-white font-semibold text-base md:text-lg">
                Call <strong>07473 346874</strong> right now. Ask it anything about booking an appointment.{' '}
                <span className="font-normal opacity-80">That is the live product.</span>
              </p>
            </div>
            <a
              href="tel:07473346874"
              className="flex-shrink-0 bg-white text-[#3b82c4] font-semibold px-6 py-3 rounded-btn hover:bg-[#e8f4fd] transition-all duration-200 text-sm whitespace-nowrap"
            >
              Call Now
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
