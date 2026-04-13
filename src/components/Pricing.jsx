import { useState } from 'react'
import { useFadeIn } from '../hooks/useFadeIn'

const CALENDLY = 'https://calendly.com/aditya-shah-ringa/ringa-sales-call'

const plans = [
  {
    name: 'Starter',
    price: '£199',
    setup: '+ £150 setup',
    featured: false,
    features: [
      'WhatsApp messages and enquiries',
      'Appointment booking via Calendly',
      'Practice information answering',
      'Message taking and WhatsApp forwarding to your team',
      'Business hours only',
      'Email support',
    ],
  },
  {
    name: 'Core',
    price: '£399',
    setup: '+ £299 setup',
    featured: true,
    badge: 'Most Popular',
    features: [
      'Voice calls and WhatsApp',
      '24/7 availability',
      'Appointment booking via Calendly',
      'Message taking and WhatsApp forwarding to your team',
      'Monthly call summary report',
      'Priority support direct to founders',
    ],
  },
  {
    name: 'Pro',
    price: '£699',
    setup: '+ £499 setup',
    featured: false,
    features: [
      'Everything in Core',
      'Multi-location support',
      'CRM integration',
      'Custom AI voice and personality',
      'Dedicated account manager',
    ],
  },
]

const faqs = [
  {
    q: 'Will patients know they\'re talking to AI?',
    a: "Most don't unless you tell them. Ringa sounds natural and uses your practice name throughout every call.",
  },
  {
    q: 'Can it handle dental emergencies?',
    a: "Ringa takes the patient's name and number and sends an immediate WhatsApp alert to your team. It does not give clinical advice or assess symptoms — that is always handled by your clinical staff.",
  },
  {
    q: 'Does it work with our booking system?',
    a: 'Ringa uses Calendly for appointment booking, which sits alongside any existing system. Direct integration with Dentally, SOE and R4 is on our roadmap.',
  },
  {
    q: 'What happens with clinical questions?',
    a: 'Anything clinical — symptoms, pain, treatment advice, aftercare — Ringa takes a message and your team calls the patient back. Ringa never gives clinical advice of any kind.',
  },
  {
    q: 'How long does setup take?',
    a: '24 hours. We learn your practice, train Ringa on your specific workflow and go live. You do not need any technical knowledge.',
  },
  {
    q: 'Can I cancel anytime?',
    a: 'Yes. No contracts, no notice periods, no awkward conversations.',
  },
]

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-[#e5e8ed]">
      <button
        className="w-full flex items-center justify-between py-4 text-left gap-4 group"
        onClick={() => setOpen(!open)}
      >
        <span className="text-[#1f2937] text-sm font-medium group-hover:text-[#3b82c4] transition-colors duration-200">{q}</span>
        <div
          className={`flex-shrink-0 w-6 h-6 rounded-full border border-[#3b82c4] flex items-center justify-center text-[#3b82c4] text-sm font-light transition-transform duration-300 ${open ? 'rotate-45' : ''}`}
        >
          +
        </div>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${open ? 'max-h-40 pb-4' : 'max-h-0'}`}>
        <p className="text-[#6b7280] text-sm leading-relaxed">{a}</p>
      </div>
    </div>
  )
}

export default function Pricing() {
  const headRef = useFadeIn()
  const plansRef = useFadeIn(0.1, 100)
  const faqRef = useFadeIn(0.1, 50)

  return (
    <section id="pricing" className="section-pad bg-white">
      <div className="container-wide">
        <div ref={headRef} className="fade-up mb-14">
          <p className="text-[#3b82c4] text-xs font-semibold uppercase tracking-widest mb-3">Pricing</p>
          <h2 className="font-heading font-extrabold text-[clamp(2rem,5vw,3.5rem)] text-[#1f2937] leading-tight mb-4">
            Simple, transparent pricing.
          </h2>
          <p className="text-[#6b7280] text-base max-w-lg">
            Book a call. We will have it live within 24 hours.
          </p>
        </div>

        {/* Plans */}
        <div ref={plansRef} className="fade-up grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`relative flex flex-col p-7 rounded-card border transition-all duration-300 shadow-card hover:shadow-card-hover hover:-translate-y-0.5 ${
                p.featured
                  ? 'border-[#3b82c4] bg-white'
                  : 'border-[#e5e8ed] bg-white'
              }`}
              style={p.featured ? { boxShadow: '0 0 40px rgba(59,130,196,0.12), 0 24px 60px rgba(0,0,0,0.06)' } : {}}
            >
              {p.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="bg-[#3b82c4] text-white text-xs font-bold px-4 py-1 rounded-full whitespace-nowrap">
                    {p.badge}
                  </span>
                </div>
              )}

              <div className="mb-7">
                <p className="text-[#6b7280] text-xs uppercase tracking-widest font-semibold mb-3">{p.name}</p>
                <div className="flex items-end gap-1.5 mb-1">
                  <span className="font-heading font-extrabold text-5xl text-[#1f2937] leading-none">{p.price}</span>
                  <span className="text-[#6b7280] text-sm mb-1">/month</span>
                </div>
                <p className="text-[#6b7280] text-xs">{p.setup}</p>
              </div>

              <ul className="flex flex-col gap-3 flex-1 mb-8">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-sm text-[#6b7280]">
                    <div className="w-4 h-4 rounded-full bg-[#e8f4fd] border border-[#3b82c4]/30 flex items-center justify-center flex-shrink-0">
                      <svg className="w-2.5 h-2.5 text-[#3b82c4]" fill="none" viewBox="0 0 10 8">
                        <path d="M1 4l3 3 5-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href={CALENDLY}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full text-center font-semibold py-3 rounded-btn text-sm transition-all duration-200 ${
                  p.featured
                    ? 'bg-[#3b82c4] text-white hover:bg-[#1e5fa8]'
                    : 'border border-[#e5e8ed] text-[#1f2937] hover:border-[#3b82c4] hover:text-[#3b82c4]'
                }`}
              >
                Book a Discovery Call
              </a>
            </div>
          ))}
        </div>

        {/* Trust line */}
        <p className="text-center text-[#9ca3af] text-sm mb-20">
          Not sure which plan is right for you?{' '}
          <a
            href={CALENDLY}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#6b7280] hover:text-[#3b82c4] underline underline-offset-2 transition-colors duration-200"
          >
            Book a discovery call
          </a>{' '}
          and we will recommend the best fit for your practice.
        </p>

        {/* FAQ */}
        <div ref={faqRef} className="fade-up max-w-3xl mx-auto">
          <h3 className="font-heading font-bold text-2xl text-[#1f2937] mb-8">Frequently asked questions</h3>
          {faqs.map((f) => (
            <FaqItem key={f.q} q={f.q} a={f.a} />
          ))}
        </div>
      </div>
    </section>
  )
}
