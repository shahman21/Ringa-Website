import { useFadeIn } from '../hooks/useFadeIn'

const DEMO_PHONE = 'tel:07473346874'
const CALENDLY = 'https://calendly.com/aditya-shah-ringa/ringa-sales-call'

const steps = [
  {
    num: '01',
    title: 'Call the demo',
    desc: 'Call 07473 346874 right now and hear Ringa in action. Ask it to book an appointment. That is the live product.',
    cta: { label: 'Call Now', href: DEMO_PHONE },
  },
  {
    num: '02',
    title: 'Book a discovery call',
    desc: 'If you like what you hear, book a free 15 minute call with our team. We will learn about your practice and exactly what you need.',
    cta: { label: 'Book a Discovery Call', href: CALENDLY, external: true },
  },
  {
    num: '03',
    title: 'We build your version',
    desc: 'We train Ringa on your practice specifically: your team, your services, your hours and your booking process.',
    cta: null,
  },
  {
    num: '04',
    title: 'Go live in 24 hours',
    desc: 'Ringa answers every call and every WhatsApp from day one. You just start seeing more bookings.',
    cta: null,
  },
]

export default function GettingStarted() {
  const headRef = useFadeIn()
  const stepsRef = useFadeIn(0.1, 100)

  return (
    <section id="how-we-work" className="section-pad bg-white">
      <div className="container-wide">
        <div ref={headRef} className="fade-up mb-16">
          <p className="text-[#3b82c4] text-xs font-semibold uppercase tracking-widest mb-3">How We Work</p>
          <h2 className="font-heading font-extrabold text-[clamp(2rem,5vw,3.5rem)] text-[#1f2937] leading-tight mb-4">
            Getting started is simple.
          </h2>
          <p className="text-[#6b7280] text-base max-w-lg">
            Every setup is different. We build yours around how your practice works.
          </p>
        </div>

        <div ref={stepsRef} className="fade-up">
          {/* Desktop: horizontal with connecting line */}
          <div className="hidden lg:block relative mb-4">
            <div
              className="absolute top-12 left-[12.5%] right-[12.5%] border-t-2 border-dashed border-[#3b82c4]/25"
              aria-hidden="true"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {steps.map((s, i) => (
              <div key={s.num} className="flex flex-col items-start lg:items-center lg:text-center">
                {/* Number circle */}
                <div className="relative mb-6 flex-shrink-0">
                  <div
                    className="w-24 h-24 rounded-full border-2 border-[#3b82c4] bg-white flex items-center justify-center"
                    style={{ boxShadow: '0 0 28px rgba(59,130,196,0.15)' }}
                  >
                    <span className="font-heading font-extrabold text-3xl text-[#3b82c4]">{s.num}</span>
                  </div>
                </div>

                {/* Card */}
                <div className="card-dark p-5 w-full flex flex-col gap-3 hover:border-[#3b82c4]/25 transition-all duration-300">
                  <h3 className="font-heading font-bold text-lg text-[#1f2937]">{s.title}</h3>
                  <p className="text-[#6b7280] text-sm leading-relaxed">{s.desc}</p>
                  {s.cta && (
                    <a
                      href={s.cta.href}
                      {...(s.cta.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                      className="mt-1 inline-flex items-center gap-1.5 text-[#3b82c4] hover:text-[#1e5fa8] text-sm font-semibold transition-colors duration-200 group"
                    >
                      {s.cta.label}
                      <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-200" fill="none" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </a>
                  )}
                </div>

                {/* Mobile connector */}
                {i < steps.length - 1 && (
                  <div className="lg:hidden w-px h-8 border-l-2 border-dashed border-[#3b82c4]/25 mt-4 self-center" aria-hidden="true" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
