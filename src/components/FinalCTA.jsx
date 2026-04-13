import { useFadeIn } from '../hooks/useFadeIn'

const CALENDLY = 'https://calendly.com/aditya-shah-ringa/ringa-sales-call'

export default function FinalCTA() {
  const ref = useFadeIn()

  return (
    <section className="bg-[#3b82c4] relative overflow-hidden">
      {/* Subtle texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          backgroundImage:
            'linear-gradient(135deg, rgba(255,255,255,0.3) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(255,255,255,0.2) 0%, transparent 60%)',
        }}
        aria-hidden="true"
      />

      <div className="container-wide section-pad relative z-10">
        <div ref={ref} className="fade-up max-w-3xl mx-auto text-center">
          <h2 className="font-heading font-extrabold text-[clamp(2.5rem,7vw,5rem)] text-white leading-tight mb-5">
            Never miss another patient call.
          </h2>
          <p className="text-white/80 text-lg md:text-xl mb-10 max-w-xl mx-auto">
            Book a discovery call and we can have Ringa live at your practice within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={CALENDLY}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#3b82c4] font-bold px-8 py-4 rounded-full hover:bg-[#e8f4fd] transition-all duration-200 text-base shadow-lg"
            >
              Book Your Discovery Call
            </a>
          </div>
          <p className="text-white/60 text-sm mt-6">
            Or call the demo right now:{' '}
            <a href="tel:07473346874" className="text-white font-bold hover:underline">
              07473 346874
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
