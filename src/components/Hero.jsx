import { useEffect, useRef, useState } from 'react'

const CALENDLY = 'https://calendly.com/aditya-shah-ringa/ringa-sales-call'

const leadSequence = [
  { delay: 600,  step: 'name'    },
  { delay: 1400, step: 'job'     },
  { delay: 2300, step: 'submit'  },
  { delay: 3000, step: 'success' },
]

function PhoneMockup() {
  const [stage, setStage] = useState(0)

  useEffect(() => {
    const timers = leadSequence.map((s, i) =>
      setTimeout(() => setStage(i + 1), s.delay)
    )
    const reset = setTimeout(() => setStage(0), leadSequence[leadSequence.length - 1].delay + 3500)
    return () => { timers.forEach(clearTimeout); clearTimeout(reset) }
  }, [])

  useEffect(() => {
    if (stage === leadSequence.length) {
      const timer = setTimeout(() => setStage(0), 4000)
      return () => clearTimeout(timer)
    }
  }, [stage])

  const showSuccess = stage >= 4
  const nameTyped   = stage >= 1 ? 'Sarah Mitchell' : ''
  const jobTyped    = stage >= 2 ? 'Boiler not heating water' : ''
  const buttonHot   = stage >= 3

  return (
    <div className="phone-frame mx-auto lg:mx-0">
      {/* Status bar */}
      <div className="flex items-center justify-between px-4 pt-2 pb-1">
        <span className="text-[10px] text-white/80 font-medium">9:41</span>
        <div className="flex items-center gap-1">
          <div className="flex gap-0.5 items-end">
            {[3,4,5,4,3].map((h,i) => (
              <div key={i} className="w-0.5 bg-white/80 rounded-sm" style={{ height: `${h}px` }} />
            ))}
          </div>
          <div className="w-5 h-2.5 border border-white/80 rounded-sm flex items-center px-0.5">
            <div className="w-3/4 h-1.5 bg-white/80 rounded-sm" />
          </div>
        </div>
      </div>

      <div className="phone-screen flex flex-col">
        {/* Browser-like top */}
        <div className="bg-[#f8fafc] border-b border-[#e5e7eb] px-4 py-2.5 flex items-center gap-2">
          <div className="flex gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1d4ed8]" />
            <span className="w-1.5 h-1.5 rounded-full bg-[#e5e7eb]" />
            <span className="w-1.5 h-1.5 rounded-full bg-[#e5e7eb]" />
          </div>
          <div className="flex-1 bg-white border border-[#e5e7eb] rounded-md px-2 py-0.5">
            <span className="text-[#737373] text-[9px]">millerplumbing.co.uk</span>
          </div>
        </div>

        {/* Trade hero */}
        <div className="px-4 pt-4 pb-3 bg-white">
          <div className="flex items-center gap-1.5 mb-2">
            <span className="w-5 h-5 rounded bg-[#1d4ed8] flex items-center justify-center">
              <span className="text-[8px] text-white font-bold">M</span>
            </span>
            <span className="text-[9px] font-bold text-[#1f2937]">MILLER PLUMBING</span>
          </div>
          <p className="font-heading font-extrabold text-[13px] leading-tight text-[#1f2937] mb-1">
            Manchester's most trusted plumber.
          </p>
          <p className="text-[8px] text-[#737373] leading-snug">
            ⭐ 4.9 · Gas Safe · Same-day callouts
          </p>
        </div>

        {/* Lead form */}
        <div className="flex-1 px-4 pb-4 bg-[#f8fafc] border-t border-[#e5e7eb] pt-3 relative">
          {showSuccess ? (
            <div className="chat-bubble flex flex-col items-center justify-center text-center h-full pt-6">
              <div className="w-9 h-9 rounded-full bg-[#1d4ed8] flex items-center justify-center mb-2">
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24">
                  <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <p className="text-[#1f2937] font-bold text-[10px] mb-0.5">Quote request sent</p>
              <p className="text-[#737373] text-[8px] leading-snug">Mike will text you back within 30 mins.</p>
              <div className="mt-2.5 w-full bg-white border border-[#e5e7eb] rounded-md px-2 py-1.5 text-left">
                <p className="text-[#737373] text-[7px] uppercase tracking-wider font-semibold">New lead · just now</p>
                <p className="text-[#1f2937] text-[9px] font-semibold mt-0.5">Sarah · Boiler not heating water</p>
              </div>
            </div>
          ) : (
            <>
              <p className="text-[#1f2937] text-[9px] font-semibold mb-2">Get a free quote</p>
              <div className="space-y-1.5">
                <div className="bg-white border border-[#e5e7eb] rounded-md px-2 py-1.5">
                  <p className="text-[#737373] text-[7px] uppercase tracking-wider font-semibold">Your name</p>
                  <p className="text-[#1f2937] text-[9px] font-medium min-h-[12px]">
                    {nameTyped}
                    {stage === 0 && <span className="inline-block w-px h-2.5 bg-[#1d4ed8] align-middle animate-pulse ml-0.5" />}
                  </p>
                </div>
                <div className="bg-white border border-[#e5e7eb] rounded-md px-2 py-1.5">
                  <p className="text-[#737373] text-[7px] uppercase tracking-wider font-semibold">What's the job?</p>
                  <p className="text-[#1f2937] text-[9px] font-medium min-h-[12px]">
                    {jobTyped}
                    {stage === 1 && <span className="inline-block w-px h-2.5 bg-[#1d4ed8] align-middle animate-pulse ml-0.5" />}
                  </p>
                </div>
                <button
                  className={`w-full text-white text-[9px] font-bold py-2 rounded-md transition-all duration-200 ${
                    buttonHot ? 'bg-[#1d4ed8] scale-95' : 'bg-[#1d4ed8]'
                  }`}
                >
                  Send quote request
                </button>
                <p className="text-[#737373] text-[7px] text-center pt-0.5">No spam. Reply within 30 mins.</p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default function Hero() {
  const contentRef = useRef(null)

  useEffect(() => {
    const el = contentRef.current
    if (!el) return
    const t = setTimeout(() => el.classList.add('in-view'), 200)
    return () => clearTimeout(t)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden grid-overlay bg-white">
      {/* Orbs */}
      <div
        className="absolute top-1/4 right-[15%] w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(29,78,216,0.14) 0%, transparent 70%)',
          filter: 'blur(40px)',
          animation: 'floatSlow 8s ease-in-out infinite',
        }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/3 right-[5%] w-72 h-72 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(29,78,216,0.10) 0%, transparent 70%)',
          filter: 'blur(50px)',
          animation: 'floatMedium 6s ease-in-out infinite',
        }}
        aria-hidden="true"
      />

      <div className="container-wide relative z-10 pt-24 pb-16">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left content */}
          <div ref={contentRef} className="fade-up flex-1 max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-[#eff6ff] border border-[#1d4ed8]/25 text-[#1e40af] text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-[#1d4ed8] animate-pulse" />
              Free homepage mockup · £1,000 flat · Live in 3 days
            </div>

            <h1 className="font-heading font-extrabold text-[clamp(3rem,8vw,6rem)] leading-[1.02] text-[#1f2937] mb-6">
              A website that{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #1d4ed8, #1e40af)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                wins you jobs.
              </span>
            </h1>

            <p className="text-[#525252] text-lg leading-relaxed mb-8 max-w-xl">
              A premium, AI-built landing page for your trade. Custom imagery, smooth animations, lead-capture forms, Google ranking. £1,000 flat. Live in 3 days.{' '}
              <span className="text-[#1f2937] font-semibold">Free homepage mockup before you pay a penny.</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <a
                href={CALENDLY}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary rounded-full px-6 py-3 text-base"
              >
                Get a Free Mockup
              </a>
              <a
                href="#examples"
                className="btn-outline-dark rounded-full px-6 py-3 text-base"
              >
                See Our Work
              </a>
            </div>

            <div className="flex items-center gap-3 text-[#525252] text-sm">
              <div className="flex -space-x-2">
                {['M', 'J', 'P', 'T'].map((l, i) => (
                  <div
                    key={l}
                    className="w-7 h-7 rounded-full border-2 border-white flex items-center justify-center text-[10px] font-bold text-white"
                    style={{ background: ['#1d4ed8','#1e40af','#1f2937','#3b82f6'][i] }}
                  >
                    {l}
                  </div>
                ))}
              </div>
              Trusted by UK trades · No tech skills needed on your side
            </div>
          </div>

          {/* Right — phone mockup */}
          <div className="flex-shrink-0 flex items-center justify-center lg:justify-end">
            <div
              className="fade-up"
              style={{ transitionDelay: '200ms' }}
              ref={(el) => { if (el) setTimeout(() => el.classList.add('in-view'), 400) }}
            >
              <PhoneMockup />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 inset-x-0 h-32 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, #f8fafc)' }}
        aria-hidden="true"
      />
    </section>
  )
}
