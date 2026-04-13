import { useFadeIn } from '../hooks/useFadeIn'

const team = [
  {
    name: 'Adi Shah',
    role: 'CEO & Co-Founder',
    photo: '/IMG_9200.JPG',
    color: '#3b82c4',
    bio: 'Adi spent the better part of a week trying to get through to his NHS dentist with a toothache. Every call went unanswered and he eventually had to look elsewhere. That experience got him thinking about how many practices were losing patients simply because nobody could pick up the phone. He brings tech experience from Virgin Media O2 and client-facing experience from the Department for Work and Pensions, and leads product, strategy and customer experience at Ringa.',
  },
  {
    name: 'Drew Robertson',
    role: 'CTO & Co-Founder',
    photo: '/Drew.jpeg',
    color: '#1e5fa8',
    bio: 'Drew chipped a tooth and spent an afternoon trying to get through to a dental practice near him. Several calls, no answer. He ended up finding a walk-in clinic because it was the only option. That experience informed how he thinks about the problem Ringa is solving. Previously a software engineer at TheTradeDesk processing billions of events daily, he owns everything from the voice AI to the integrations that connect it to your existing tools.',
  },
  {
    name: 'Lhamo',
    role: 'Co-Founder & Head of Sales',
    photo: '/lhamo.jpeg',
    color: '#0ea5e9',
    bio: 'When Lhamo\'s family moved house, his mum spent several weeks trying to register with a local NHS dentist. The calls rarely got through and the process took far longer than it should have. It stuck with him. He co-founded Ringa so practices can actually be reached by the patients who are trying to get to them. He leads all new client conversations and brings that personal understanding to every one.',
  },
]

export default function Team() {
  const headRef = useFadeIn()
  const cardsRef = useFadeIn(0.1, 100)

  return (
    <section id="team" className="section-pad bg-[#f7f9fc]">
      <div className="container-wide">
        <div ref={headRef} className="fade-up mb-14">
          <p className="text-[#3b82c4] text-xs font-semibold uppercase tracking-widest mb-3">The Team</p>
          <h2 className="font-heading font-extrabold text-[clamp(2rem,5vw,3.5rem)] text-[#1f2937] leading-tight">
            Built by engineers.{' '}
            <span className="text-[#3b82c4]">Sold by people who get it.</span>
          </h2>
        </div>

        <div ref={cardsRef} className="fade-up grid grid-cols-1 md:grid-cols-3 gap-6">
          {team.map((m) => (
            <div
              key={m.name}
              className="card flex flex-col overflow-hidden border-t-2 group hover:-translate-y-1 transition-all duration-300"
              style={{ borderTopColor: m.color }}
            >
              {/* Photo */}
              <div className="relative overflow-hidden bg-[#f7f9fc]" style={{ height: '300px' }}>
                <img
                  src={m.photo}
                  alt={m.name}
                  className="w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500"
                  style={{ objectFit: 'cover', objectPosition: 'center 15%' }}
                />
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{ background: 'linear-gradient(to top, rgba(247,249,252,0.6) 0%, transparent 50%)' }}
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
                <p className="text-[#6b7280] text-sm leading-relaxed">{m.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
