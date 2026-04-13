import { useFadeIn } from '../hooks/useFadeIn'

const CALENDLY = 'https://calendly.com/aditya-shah-ringa/ringa-sales-call'

const reviews = [
  {
    quote: "We were missing 30% of our calls after 5pm and losing patients to practices that could answer. Ringa fixed that in 24 hours. Our emergency line is now answered every time.",
    name: 'Dr. Priya Sharma',
    role: 'Principal Dentist',
    practice: 'Whitesmile Dental, Manchester',
    initial: 'P',
    color: '#3b82c4',
  },
  {
    quote: "The thing that surprised me most was how natural it sounds. Patients genuinely don't know it's AI. It knows our services, our pricing, our team. It feels like part of the practice.",
    name: 'Sarah Mitchell',
    role: 'Practice Manager',
    practice: 'Oakhurst Dental, Leeds',
    initial: 'S',
    color: '#1e5fa8',
  },
  {
    quote: "We run a private implant clinic and our enquiry volume was overwhelming reception. Ringa handles all initial enquiries, gives pricing information and books consultations. It paid for itself in the first week.",
    name: 'James Thornton',
    role: 'Owner',
    practice: 'Brightside Implant Clinic, Birmingham',
    initial: 'J',
    color: '#0ea5e9',
  },
]

export default function Reviews() {
  const headRef = useFadeIn()
  const cardsRef = useFadeIn(0.1, 100)

  return (
    <section className="section-pad bg-white">
      <div className="container-wide">
        <div ref={headRef} className="fade-up mb-12">
          <p className="text-[#3b82c4] text-xs font-semibold uppercase tracking-widest mb-3">What practices say</p>
          <h2 className="font-heading font-extrabold text-[clamp(2rem,5vw,3.5rem)] text-[#1f2937] leading-tight mb-4">
            What dental practices are saying.
          </h2>
          <p className="text-[#6b7280] text-base max-w-lg">
            From NHS practices to private clinics, Ringa works across UK dentistry.
          </p>
        </div>

        <div ref={cardsRef} className="fade-up grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <div
              key={r.name}
              className="card p-6 flex flex-col border-t-2"
              style={{ borderTopColor: r.color }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-amber-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-[#6b7280] text-sm leading-relaxed mb-6 flex-1">
                "{r.quote}"
              </p>

              <div className="border-t border-[#e5e8ed] pt-4 flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
                  style={{ background: r.color }}
                >
                  {r.initial}
                </div>
                <div>
                  <p className="text-[#1f2937] text-sm font-semibold">{r.name}</p>
                  <p className="text-[#6b7280] text-xs">{r.role} · {r.practice}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
