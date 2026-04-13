import { useFadeIn } from '../hooks/useFadeIn'

const stats = [
  { value: '40%',  label: 'of dental calls go unanswered',          tag: 'Missed Patients' },
  { value: '£150', label: 'average missed appointment value',         tag: 'Lost Revenue' },
  { value: '£25k', label: 'in missed patient revenue per year for a typical practice', tag: 'Missed Revenue' },
  { value: '68%',  label: "of patients won't leave a voicemail",     tag: 'Lost Forever' },
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
              <p className="text-[#3b82c4] text-xs font-semibold uppercase tracking-widest mb-3">The Problem</p>
              <h2 className="font-heading font-extrabold text-[clamp(2rem,5vw,3.5rem)] leading-tight text-[#1f2937] mb-5">
                Every missed call is a patient going elsewhere.
              </h2>
              <p className="text-[#6b7280] text-base leading-relaxed max-w-lg">
                You are with a patient. The phone rings. By the time you call back, they have already booked at the practice down the road. This happens to dental practices every day.
              </p>
            </div>

            <div ref={statsRef} className="fade-up grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <div
                  key={s.value}
                  className="card-dark p-5 hover:border-[#3b82c4]/30 hover:-translate-y-0.5 transition-all duration-300"
                >
                  <p className="font-heading font-extrabold text-4xl text-[#3b82c4] leading-none mb-1">
                    {s.value}
                  </p>
                  <p className="text-[#1e5fa8] text-[10px] font-semibold uppercase tracking-widest mb-2">{s.tag}</p>
                  <p className="text-[#6b7280] text-xs leading-snug">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — image */}
          <div ref={imgRef} className="fade-up relative">
            <div
              className="rounded-card overflow-hidden border border-[#e5e8ed]"
              style={{ boxShadow: '0 0 40px rgba(59,130,196,0.1), 0 24px 60px rgba(0,0,0,0.08)' }}
            >
              <img
                src="https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?w=800&q=80"
                alt="Dentist with patient"
                className="w-full h-80 object-cover"
                style={{ filter: 'brightness(0.95)' }}
                loading="lazy"
              />
              <div
                className="absolute inset-0 rounded-card pointer-events-none"
                style={{
                  background: 'linear-gradient(135deg, rgba(59,130,196,0.05) 0%, rgba(255,255,255,0.1) 100%)',
                }}
              />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 bg-white border border-[#3b82c4]/20 rounded-card p-4 shadow-[0_4px_24px_rgba(59,130,196,0.15)]">
              <p className="text-[#3b82c4] font-heading font-extrabold text-2xl">24/7</p>
              <p className="text-[#6b7280] text-xs mt-0.5">every patient call answered, every day of the year</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
