import { useFadeIn } from '../hooks/useFadeIn'

const steps = [
  {
    num: '01',
    title: 'Free mockup',
    desc: "Send us your business name. Within 48 hours we send back a personalised homepage mockup — your colours, your services, AI imagery for your trade. No charge. You decide if it's worth £1,000.",
  },
  {
    num: '02',
    title: '30-min brief',
    desc: "Like the mockup? We jump on a 30-minute call to nail the details: your services, your area, the jobs you actually want more of. We write the copy in your voice from there.",
  },
  {
    num: '03',
    title: 'Build + review',
    desc: "We finish the build, set up Google Business, wire in the lead automations, and send you a working preview. You point at anything you want changed. We turn it around the same day.",
  },
  {
    num: '04',
    title: 'Live in 3 days',
    desc: "Site goes live, Google starts indexing, and your phone starts pinging when leads come in. We hand you a one-page guide so you can edit anything yourself, any time.",
  },
]

export default function HowItWorks() {
  const headRef = useFadeIn()
  const stepsRef = useFadeIn(0.1, 100)

  return (
    <section id="how-it-works" className="section-pad bg-white relative overflow-hidden">
      <div className="container-wide relative z-10">
        <div ref={headRef} className="fade-up text-center mb-16">
          <p className="eyebrow mb-3 justify-center">How It Works</p>
          <h2 className="font-heading font-extrabold text-[clamp(2rem,5vw,3.5rem)] text-[#1f2937] leading-tight mb-4">
            Free mockup first.{' '}
            <span className="text-[#1d4ed8]">Pay only if you love it.</span>
          </h2>
          <p className="text-[#525252] text-base max-w-lg mx-auto">
            We do the work first. You see exactly what you'd be paying for. If it's not for you, you keep the mockup and we go our separate ways.
          </p>
        </div>

        <div ref={stepsRef} className="fade-up relative">
          {/* Connecting dotted line — desktop */}
          <div
            className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] border-t-2 border-dashed border-[#1d4ed8]/30"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
            {steps.map((s, i) => (
              <div key={s.num} className="flex flex-col items-center text-center">
                {/* Number circle */}
                <div className="relative mb-7">
                  <div
                    className="w-24 h-24 rounded-full border-2 border-[#1d4ed8] bg-white flex items-center justify-center"
                    style={{ boxShadow: '0 0 30px rgba(29,78,216,0.18)' }}
                  >
                    <span className="font-heading font-extrabold text-4xl text-[#1d4ed8]">{s.num}</span>
                  </div>
                  <div
                    className="absolute inset-0 rounded-full pointer-events-none"
                    style={{ background: 'radial-gradient(circle, rgba(29,78,216,0.10) 0%, transparent 70%)' }}
                    aria-hidden="true"
                  />
                </div>

                <h3 className="font-heading font-bold text-xl text-[#1f2937] mb-3">{s.title}</h3>
                <p className="text-[#525252] text-sm leading-relaxed max-w-xs">{s.desc}</p>

                {/* Mobile connector */}
                {i < steps.length - 1 && (
                  <div className="lg:hidden w-px h-10 border-l-2 border-dashed border-[#1d4ed8]/30 mt-6" aria-hidden="true" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
