export default function HearIt() {
  return (
    <section id="demo" className="bg-[#3b82c4] py-24 md:py-32">
      <div className="container-wide">
        <div className="max-w-[700px] mx-auto text-center">
          <p className="text-white/70 text-xs font-semibold uppercase tracking-widest mb-4">
            Live Demo
          </p>
          <h2 className="font-heading font-extrabold text-[clamp(2.5rem,6vw,4rem)] text-white leading-tight mb-4">
            Hear Ringa in action.
          </h2>
          <p className="text-white/80 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
            Call now and speak to Ringa directly. It answers exactly as it would for your patients, then offers to book you in for a discovery call with Adi.
          </p>

          <a
            href="tel:+447473346874"
            className="inline-flex items-center gap-3 bg-white text-[#3b82c4] font-bold text-lg px-8 py-4 rounded-full hover:bg-[#e8f4fd] transition-all duration-200 shadow-lg"
          >
            <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24">
              <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Call Ringa: 07473 346874
          </a>

          <p className="text-white/60 text-sm mt-6">
            Free call · No commitment · Book a discovery call in under 2 minutes
          </p>
        </div>
      </div>
    </section>
  )
}
