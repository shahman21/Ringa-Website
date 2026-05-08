import { useFadeIn } from '../hooks/useFadeIn'

const stats = [
  { value: '1 in 4', label: 'UK trades have no website at all — invisible on Google',  tag: 'Invisible'   },
  { value: '~50%',   label: 'of trade sites take 3+ seconds to load on mobile, killing 40% of leads', tag: 'Too Slow' },
  { value: '£5–15k', label: 'agencies charge for animated landing pages — we charge £1,000', tag: 'Overpriced' },
  { value: '8 wks',  label: 'typical agency build time. Ours is 3 days — start to live',     tag: 'Too Slow Again' },
]

export default function Problem() {
  const textRef = useFadeIn()
  const statsRef = useFadeIn(0.1, 150)
  const imgRef = useFadeIn(0.1, 100)

  return (
    <section className="section-pad bg-white">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <div ref={textRef} className="fade-up mb-10">
              <p className="eyebrow mb-3">The Problem</p>
              <h2 className="font-heading font-extrabold text-[clamp(2rem,5vw,3.5rem)] leading-tight text-[#1f2937] mb-5">
                You're losing jobs to trades with a better website.
              </h2>
              <p className="text-[#525252] text-base leading-relaxed max-w-lg">
                Somebody in your area just opened Google Maps and typed "plumber near me." They clicked the first site that loaded fast, looked the part, and let them get a quote in two taps. If that's not yours, the job is gone — to a tradesperson with worse reviews and a better website.
              </p>
            </div>

            <div ref={statsRef} className="fade-up grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <div
                  key={s.value}
                  className="card-tint p-5 hover:border-[#1d4ed8]/40 hover:-translate-y-0.5 transition-all duration-300"
                >
                  <p className="font-heading font-extrabold text-4xl text-[#1d4ed8] leading-none mb-1">
                    {s.value}
                  </p>
                  <p className="text-[#1f2937] text-[10px] font-bold uppercase tracking-widest mb-2">{s.tag}</p>
                  <p className="text-[#525252] text-xs leading-snug">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — image */}
          <div ref={imgRef} className="fade-up relative">
            <div
              className="rounded-card overflow-hidden border border-[#e5e7eb]"
              style={{ boxShadow: '0 0 40px rgba(29,78,216,0.10), 0 24px 60px rgba(15,23,42,0.10)' }}
            >
              <img
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=900&q=80"
                alt="Tradesperson on a job"
                className="w-full h-80 object-cover"
                loading="lazy"
              />
              <div
                className="absolute inset-0 rounded-card pointer-events-none"
                style={{
                  background: 'linear-gradient(135deg, rgba(29,78,216,0.06) 0%, rgba(255,255,255,0.1) 100%)',
                }}
              />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 bg-white border border-[#1d4ed8]/25 rounded-card p-4 shadow-[0_8px_28px_rgba(29,78,216,0.18)]">
              <p className="text-[#1d4ed8] font-heading font-extrabold text-2xl">3 days · £1,000</p>
              <p className="text-[#525252] text-xs mt-0.5">brief to live. Free mockup before you pay.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
