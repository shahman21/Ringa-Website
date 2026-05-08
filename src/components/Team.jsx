import { useFadeIn } from '../hooks/useFadeIn'

const team = [
  {
    name: 'Lhamo',
    role: 'Co-founder · Client lead',
    photo: '/lhamo.jpeg',
    color: '#1d4ed8',
    bio: "Lhamo runs the first conversation with every client and stays the main point of contact through the build. Background in B2B sales and account management. He's the one who'll walk you through the brief, agree the scope, and make sure nothing gets lost between you and the team.",
  },
  {
    name: 'Drew Robertson',
    role: 'Co-founder · Engineering',
    photo: '/Drew.jpeg',
    color: '#1f2937',
    bio: "Drew handles the build — code, hosting, performance, SEO. Previously a software engineer at TheTradeDesk. He cares about the dull-but-important things: how fast a site loads on a mid-range phone, whether forms actually submit, whether Google can index the content properly.",
  },
  {
    name: 'Adi Shah',
    role: 'Co-founder · Design & strategy',
    photo: '/IMG_9200.JPG',
    color: '#1e40af',
    bio: "Adi works on design, copy, and what each site needs to do for the trade it's built for. Previously in product roles at Virgin Media O2 and DWP. He spends most of his time turning a half-hour conversation into a site that reads like the trade who runs it.",
  },
]

export default function Team() {
  const headRef = useFadeIn()
  const cardsRef = useFadeIn(0.1, 100)

  return (
    <section id="team" className="section-pad bg-[#f8fafc]">
      <div className="container-wide">
        <div ref={headRef} className="fade-up mb-14">
          <p className="eyebrow mb-3">The Team</p>
          <h2 className="font-heading font-extrabold text-[clamp(2rem,5vw,3.5rem)] text-[#1f2937] leading-tight">
            Three of us.{' '}
            <span className="text-[#1d4ed8]">No middle men.</span>
          </h2>
          <p className="text-[#525252] text-base max-w-lg mt-4">
            LDA is named after the three of us — Lhamo, Drew, Adi. You'll talk to one of us on the discovery call, and the same person will run your build. No account managers, no project coordinators, no chains of email.
          </p>
        </div>

        <div ref={cardsRef} className="fade-up grid grid-cols-1 md:grid-cols-3 gap-6">
          {team.map((m) => (
            <div
              key={m.name}
              className="card flex flex-col overflow-hidden border-t-2 group hover:-translate-y-1 transition-all duration-300"
              style={{ borderTopColor: m.color }}
            >
              {/* Photo */}
              <div className="relative overflow-hidden bg-[#f8fafc]" style={{ height: '300px' }}>
                <img
                  src={m.photo}
                  alt={m.name}
                  className="w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500"
                  style={{ objectFit: 'cover', objectPosition: 'center 15%' }}
                />
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{ background: 'linear-gradient(to top, rgba(250,250,249,0.6) 0%, transparent 50%)' }}
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-heading font-bold text-xl text-[#1f2937] mb-0.5">{m.name}</h3>
                <p
                  className="text-xs font-semibold uppercase tracking-widest mb-4"
                  style={{ color: m.color }}
                >
                  {m.role}
                </p>
                <p className="text-[#525252] text-sm leading-relaxed">{m.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
