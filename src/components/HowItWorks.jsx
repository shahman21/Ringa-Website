import { useFadeIn } from '../hooks/useFadeIn'

const steps = [
  {
    num: '01',
    title: 'We set it up',
    desc: 'Tell us about your practice. We train Ringa on your services, your team, your hours and your booking process. It takes 24 hours.',
  },
  {
    num: '02',
    title: 'It answers every call and WhatsApp',
    desc: 'Once live, Ringa picks up every call and responds to every WhatsApp. It books appointments, takes messages and passes anything urgent straight to your team.',
  },
  {
    num: '03',
    title: 'No patient goes unanswered',
    desc: 'At 8pm, on a Saturday, while you are chair-side with a patient. Ringa picks up so nobody has to try elsewhere.',
  },
]

export default function HowItWorks() {
  const headRef = useFadeIn()
  const stepsRef = useFadeIn(0.1, 100)

  return (
    <section className="section-pad bg-white relative overflow-hidden">
      <div className="container-wide relative z-10">
        <div ref={headRef} className="fade-up text-center mb-16">
          <p className="text-[#3b82c4] text-xs font-semibold uppercase tracking-widest mb-3">How It Works</p>
          <h2 className="font-heading font-extrabold text-[clamp(2rem,5vw,3.5rem)] text-[#1f2937] leading-tight mb-4">
            Up and running in 24 hours.
          </h2>
          <p className="text-[#6b7280] text-base max-w-lg mx-auto">
            We handle the setup. Your practice starts answering every call.
          </p>
        </div>

        <div ref={stepsRef} className="fade-up relative">
          {/* Connecting dotted line — desktop */}
          <div
            className="hidden lg:block absolute top-12 left-[16.67%] right-[16.67%] border-t-2 border-dashed border-[#3b82c4]/25"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {steps.map((s, i) => (
              <div key={s.num} className="flex flex-col items-center text-center">
                {/* Number circle */}
                <div className="relative mb-7">
                  <div
                    className="w-24 h-24 rounded-full border-2 border-[#3b82c4] bg-white flex items-center justify-center"
                    style={{ boxShadow: '0 0 30px rgba(59,130,196,0.15)' }}
                  >
                    <span className="font-heading font-extrabold text-4xl text-[#3b82c4]">{s.num}</span>
                  </div>
                  <div
                    className="absolute inset-0 rounded-full pointer-events-none"
                    style={{ background: 'radial-gradient(circle, rgba(59,130,196,0.08) 0%, transparent 70%)' }}
                    aria-hidden="true"
                  />
                </div>

                <h3 className="font-heading font-bold text-xl text-[#1f2937] mb-3">{s.title}</h3>
                <p className="text-[#6b7280] text-sm leading-relaxed max-w-xs">{s.desc}</p>

                {/* Mobile connector */}
                {i < steps.length - 1 && (
                  <div className="lg:hidden w-px h-10 border-l-2 border-dashed border-[#3b82c4]/25 mt-6" aria-hidden="true" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
