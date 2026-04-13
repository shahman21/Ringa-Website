import { useState } from 'react'
import { useFadeIn } from '../hooks/useFadeIn'

// Swap this URL for the real Loom embed when ready
const LOOM_URL = 'https://www.loom.com/embed/placeholder'

export default function VideoDemo() {
  const ref = useFadeIn()
  const [playing, setPlaying] = useState(false)

  return (
    <section className="section-pad bg-[#f7f9fc]">
      <div className="container-wide">
        <div ref={ref} className="fade-up text-center mb-12">
          <p className="text-[#3b82c4] text-xs font-semibold uppercase tracking-widest mb-3">See It Live</p>
          <h2 className="font-heading font-extrabold text-[clamp(2rem,5vw,3.5rem)] text-[#1f2937] leading-tight mb-4">
            Hear it for yourself.
          </h2>
          <p className="text-[#6b7280] text-base max-w-lg mx-auto">
            A real patient call, handled by Ringa from start to finish.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-card overflow-hidden border border-[#e5e8ed] shadow-card">
            {!playing ? (
              /* Placeholder / thumbnail */
              <div
                className="relative bg-[#e8f4fd] flex items-center justify-center cursor-pointer group"
                style={{ aspectRatio: '16/9' }}
                onClick={() => setPlaying(true)}
              >
                {/* Fake waveform background */}
                <div className="absolute inset-0 flex items-end justify-center gap-0.5 px-8 pb-10 opacity-20">
                  {Array.from({ length: 80 }).map((_, i) => (
                    <div
                      key={i}
                      className="bg-[#3b82c4] rounded-full flex-1"
                      style={{ height: `${20 + Math.sin(i * 0.4) * 15 + Math.random() * 20}%` }}
                    />
                  ))}
                </div>

                <div className="relative z-10 flex flex-col items-center gap-4">
                  {/* Play button */}
                  <div
                    className="w-20 h-20 rounded-full bg-[#3b82c4] flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                    style={{ boxShadow: '0 0 40px rgba(59,130,196,0.35)' }}
                  >
                    <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <div className="text-center">
                    <p className="text-[#1f2937] font-heading font-bold text-xl">Ringa Live Demo</p>
                    <p className="text-[#6b7280] text-sm mt-1">Watch a real patient call from start to finish</p>
                  </div>
                </div>

                {/* Duration badge */}
                <div className="absolute bottom-4 right-4 bg-white/80 text-[#1f2937] text-xs font-medium px-2 py-1 rounded">
                  ~2 min
                </div>
              </div>
            ) : (
              <div style={{ aspectRatio: '16/9' }}>
                <iframe
                  src={LOOM_URL}
                  className="w-full h-full"
                  frameBorder="0"
                  allowFullScreen
                  title="Ringa Live Demo"
                />
              </div>
            )}
          </div>

          <p className="text-center text-[#6b7280] text-sm mt-6">
            Rather call than watch?{' '}
            <a href="tel:07473346874" className="text-[#3b82c4] hover:text-[#1e5fa8] font-semibold transition-colors">
              Try it on 07473 346874
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
