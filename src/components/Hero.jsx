import { useEffect, useRef, useState } from 'react'

const CALENDLY = 'https://calendly.com/aditya-shah-ringa/ringa-sales-call'

const chatMessages = [
  { from: 'user', text: "Hi I've got really bad toothache",                                                          delay: 800  },
  { from: 'ai',   text: "I'm sorry to hear that — let me check our emergency slots for you today. Can I take your name and date of birth?", delay: 2200 },
]

function PhoneMockup() {
  const [shown, setShown] = useState([])

  useEffect(() => {
    const timers = chatMessages.map((msg, i) =>
      setTimeout(() => setShown((prev) => [...prev, i]), msg.delay)
    )
    const reset = setTimeout(() => setShown([]), chatMessages[chatMessages.length - 1].delay + 3500)
    return () => { timers.forEach(clearTimeout); clearTimeout(reset) }
  }, [])

  // Re-run loop
  useEffect(() => {
    if (shown.length === chatMessages.length) {
      const timer = setTimeout(() => setShown([]), 4000)
      return () => clearTimeout(timer)
    }
  }, [shown])

  return (
    <div className="phone-frame mx-auto lg:mx-0">
      {/* Status bar */}
      <div className="flex items-center justify-between px-4 pt-2 pb-1">
        <span className="text-[10px] text-[#6b7280] font-medium">9:41</span>
        <div className="flex items-center gap-1">
          <div className="flex gap-0.5 items-end">
            {[3,4,5,4,3].map((h,i) => (
              <div key={i} className="w-0.5 bg-[#6b7280] rounded-sm" style={{ height: `${h}px` }} />
            ))}
          </div>
          <svg className="w-3 h-3 text-[#6b7280]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M1.5 8.5a13 13 0 0121 0M5 12a10 10 0 0114 0M8.5 15.5a6 6 0 017 0M12 19h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none"/>
          </svg>
          <div className="w-5 h-2.5 border border-[#6b7280] rounded-sm flex items-center px-0.5">
            <div className="w-3/4 h-1.5 bg-[#3b82c4] rounded-sm" />
          </div>
        </div>
      </div>

      <div className="phone-screen flex flex-col">
        {/* Chat header */}
        <div className="bg-[#f7f9fc] border-b border-[#e5e8ed] px-4 py-3 flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#3b82c4] to-[#1e5fa8] flex items-center justify-center flex-shrink-0">
            <span className="text-white text-xs font-bold">🦷</span>
          </div>
          <div>
            <p className="text-[#1f2937] text-xs font-semibold">Ringa AI</p>
            <div className="flex items-center gap-1">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
              <p className="text-[#6b7280] text-[10px]">Always available</p>
            </div>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-hidden px-3 py-4 flex flex-col gap-2.5">
          {chatMessages.map((msg, i) =>
            shown.includes(i) ? (
              <div
                key={i}
                className={`chat-bubble flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}
                style={{ animationDelay: '0ms' }}
              >
                <div
                  className={`max-w-[80%] px-3 py-2 rounded-2xl text-[10px] leading-relaxed ${
                    msg.from === 'ai'
                      ? 'bg-[#e8f4fd] text-[#1f2937] rounded-tl-sm'
                      : 'bg-[#3b82c4] text-white font-medium rounded-tr-sm'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ) : null
          )}

          {/* Typing indicator */}
          {shown.length < chatMessages.length && shown.length > 0 && (
            <div className="flex justify-start">
              <div className="bg-[#e8f4fd] px-3 py-2 rounded-2xl rounded-tl-sm flex items-center gap-1">
                {[0, 0.2, 0.4].map((d, i) => (
                  <div
                    key={i}
                    className="w-1.5 h-1.5 bg-[#3b82c4] rounded-full opacity-60"
                    style={{ animation: `bounce 1s ${d}s ease-in-out infinite` }}
                  />
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Input bar */}
        <div className="bg-[#f7f9fc] border-t border-[#e5e8ed] px-3 py-2 flex items-center gap-2">
          <div className="flex-1 bg-white border border-[#e5e8ed] rounded-full px-3 py-1.5">
            <span className="text-[#9ca3af] text-[10px]">Message...</span>
          </div>
          <div className="w-6 h-6 rounded-full bg-[#3b82c4] flex items-center justify-center">
            <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
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
          background: 'radial-gradient(circle, rgba(59,130,196,0.12) 0%, transparent 70%)',
          filter: 'blur(40px)',
          animation: 'floatSlow 8s ease-in-out infinite',
        }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/3 right-[5%] w-72 h-72 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(59,130,196,0.08) 0%, transparent 70%)',
          filter: 'blur(50px)',
          animation: 'floatMedium 6s ease-in-out infinite',
        }}
        aria-hidden="true"
      />

      <div className="container-wide relative z-10 pt-24 pb-16">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left content */}
          <div ref={contentRef} className="fade-up flex-1 max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-[#e8f4fd] border border-[#3b82c4]/20 text-[#3b82c4] text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-[#3b82c4] animate-pulse" />
              Now onboarding UK dental practices
            </div>

            <h1 className="font-heading font-extrabold text-[clamp(3rem,8vw,6rem)] leading-[1.05] text-[#1f2937] mb-6">
              Your dental practice,{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #3b82c4, #1e5fa8)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                always reachable.
              </span>
            </h1>

            <p className="text-[#6b7280] text-lg leading-relaxed mb-8 max-w-xl">
              Ringa answers every patient call and WhatsApp 24/7, booking appointments, taking messages and making sure no patient goes to voicemail. Built for independent UK dental practices.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <a
                href={CALENDLY}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary rounded-full px-6 py-3 text-base"
              >
                Book a Discovery Call
              </a>
              <a
                href="tel:07473346874"
                className="btn-outline-teal rounded-full px-6 py-3 text-base"
              >
                Call the Demo: 07473 346874
              </a>
            </div>

            <div className="flex items-center gap-3 text-[#6b7280] text-sm">
              <div className="flex -space-x-2">
                {['D', 'S', 'P', 'J'].map((l, i) => (
                  <div
                    key={l}
                    className="w-7 h-7 rounded-full border-2 border-white flex items-center justify-center text-[10px] font-bold text-white"
                    style={{ background: ['#3b82c4','#1e5fa8','#6366f1','#0ea5e9'][i] }}
                  >
                    {l}
                  </div>
                ))}
              </div>
              Built for NHS and private dental practices in the UK
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
        style={{ background: 'linear-gradient(to bottom, transparent, #f7f9fc)' }}
        aria-hidden="true"
      />

      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }
      `}</style>
    </section>
  )
}
