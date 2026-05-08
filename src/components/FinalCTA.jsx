import { useFadeIn } from '../hooks/useFadeIn'

const CALENDLY = 'https://calendly.com/aditya-shah-ringa/ringa-sales-call'

export default function FinalCTA() {
  const ref = useFadeIn()

  return (
    <section className="bg-[#0f172a] relative overflow-hidden">
      {/* Hazard tape stripe along the top */}
      <div className="absolute top-0 inset-x-0 h-2 hazard-tape opacity-90" aria-hidden="true" />

      {/* Glow orbs */}
      <div
        className="absolute -top-32 left-1/4 w-[480px] h-[480px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(29,78,216,0.30) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-32 right-0 w-[420px] h-[420px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(29,78,216,0.18) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
        aria-hidden="true"
      />

      <div className="container-wide section-pad relative z-10">
        <div ref={ref} className="fade-up max-w-3xl mx-auto text-center">
          <h2 className="font-heading font-extrabold text-[clamp(2.5rem,7vw,5rem)] text-white leading-[1.05] mb-5">
            See your business with{' '}
            <span className="text-[#1d4ed8]">a proper website.</span>
          </h2>
          <p className="text-white/75 text-lg md:text-xl mb-10 max-w-xl mx-auto">
            Send us your business name. Within 48 hours we'll send back a free, personalised homepage mockup. If you love it, it's £1,000 to make it real. If not, you keep it.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={CALENDLY}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1d4ed8] hover:bg-[#1e40af] text-white font-bold px-8 py-4 rounded-full transition-all duration-200 text-base shadow-blueprint"
            >
              Get My Free Mockup
            </a>
            <a
              href="tel:07473346874"
              className="border border-white/40 text-white font-bold px-8 py-4 rounded-full hover:bg-white hover:text-[#1f2937] transition-all duration-200 text-base"
            >
              Or call: 07473 346874
            </a>
          </div>
          <p className="text-white/50 text-sm mt-6">
            £1,000 flat · Live in 3 days · UK only · You own everything
          </p>
        </div>
      </div>
    </section>
  )
}
