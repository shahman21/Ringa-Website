import { useState } from 'react'
import { useFadeIn } from '../hooks/useFadeIn'

const CALENDLY = 'https://calendly.com/aditya-shah-ringa/ringa-sales-call'

const included = [
  { title: 'A premium landing page',     desc: "Built around your van, your work and your colours — with smooth scroll animations that look like an agency spent six weeks on it." },
  { title: 'Custom AI-generated imagery', desc: "Hero photography, services illustrations and brand visuals — generated and edited so it actually fits your trade, not stock-site clichés." },
  { title: 'Lead-capture quote form',     desc: "Two-tap quote requests sent straight to your phone over WhatsApp the moment somebody fills it in." },
  { title: 'Click-to-call everywhere',    desc: "On every section. Customer in a panic about a leak doesn't have to scroll — one tap and your phone rings." },
  { title: 'Google Business profile setup', desc: "Done properly, so when somebody types your trade plus your town, you actually show up on Google Maps." },
  { title: 'Automated lead follow-up',    desc: "Auto text + email reply the second a lead comes in. They get a response while you're still up the ladder." },
  { title: '1-year hosting + domain',     desc: "Fast, secure hosting and your domain — paid for, set up and live for a full year. No monthly fees." },
  { title: 'Live in 3 days',              desc: "From discovery call to live site in 72 hours. Most agencies are still writing the proposal." },
]

const honesty = [
  'One stunning lead-gen page — not a 20-page corporate site',
  "No customer login portals or member dashboards",
  "No e-commerce checkout or product catalogue",
  "No CMS or blog (we can add one later if you really need it)",
]

const faqs = [
  {
    q: 'Is it really £1,000 — no surprises?',
    a: "Yes. £1,000 includes the build, the AI imagery, the Google Business setup, lead automations and 12 months of hosting + domain. After year one, hosting + domain is around £15/month or you can move it elsewhere — you own everything.",
  },
  {
    q: "I haven't got a website at all. Is that a problem?",
    a: "It's the opposite of a problem — it's the easiest setup we do. About 1 in 4 trades have no website at all. We'll register your domain, sort everything out and you'll go from invisible on Google to ranking locally inside a few weeks.",
  },
  {
    q: "What's a 'free mockup' and what's the catch?",
    a: "Send us your business name. Within 48 hours we'll send back a personalised mockup of your homepage — your colours, your services, AI-generated imagery for your trade. You see exactly what you'd get before paying a penny. If you like it, it's £1,000 to make it real. If you don't, you keep the mockup. No catch.",
  },
  {
    q: "Why so cheap? Other agencies quote £5k–£15k.",
    a: "Because we built our process around AI tooling. What used to take an agency three to eight weeks now takes us three days. We pass the savings on. The end result is the same visual quality — that's how we keep margins fair on £1,000.",
  },
  {
    q: 'Will it actually rank on Google?',
    a: "Yes — local SEO and Google Business setup are built into every site. Most trades start ranking for local searches like 'plumber in [your town]' within 4–8 weeks of going live.",
  },
  {
    q: "Do I own the website when it's done?",
    a: "Completely. Your domain, your code, your imagery, your Google Business profile. If you ever leave us, you walk out with the lot.",
  },
  {
    q: "What if I want more pages later?",
    a: "Each extra page is £250 — services pages, area pages, an about page, whatever. Most trades start with the single page, then add as the leads come in.",
  },
]

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-[#e5e7eb]">
      <button
        className="w-full flex items-center justify-between py-4 text-left gap-4 group"
        onClick={() => setOpen(!open)}
      >
        <span className="text-[#1f2937] text-sm font-medium group-hover:text-[#1d4ed8] transition-colors duration-200">{q}</span>
        <div
          className={`flex-shrink-0 w-6 h-6 rounded-full border border-[#1d4ed8] flex items-center justify-center text-[#1d4ed8] text-sm font-light transition-transform duration-300 ${open ? 'rotate-45' : ''}`}
        >
          +
        </div>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${open ? 'max-h-72 pb-4' : 'max-h-0'}`}>
        <p className="text-[#525252] text-sm leading-relaxed">{a}</p>
      </div>
    </div>
  )
}

export default function Pricing() {
  const headRef = useFadeIn()
  const cardRef = useFadeIn(0.1, 100)
  const honestyRef = useFadeIn(0.1, 80)
  const faqRef = useFadeIn(0.1, 50)

  return (
    <section id="pricing" className="section-pad bg-white">
      <div className="container-wide">
        <div ref={headRef} className="fade-up mb-14">
          <p className="eyebrow mb-3">Pricing</p>
          <h2 className="font-heading font-extrabold text-[clamp(2rem,5vw,3.5rem)] text-[#1f2937] leading-tight mb-4">
            One offer. One price.{' '}
            <span className="text-[#1d4ed8]">No haggling.</span>
          </h2>
          <p className="text-[#525252] text-base max-w-lg">
            We build one thing and we charge one price. £1,000 buys a premium, AI-built landing page designed to win you jobs. That's it.
          </p>
        </div>

        {/* Single offer card */}
        <div ref={cardRef} className="fade-up max-w-3xl mx-auto mb-14">
          <div
            className="relative rounded-card border-2 border-[#1d4ed8] bg-white p-8 md:p-10"
            style={{ boxShadow: '0 0 60px rgba(29,78,216,0.15), 0 24px 60px rgba(15,23,42,0.08)' }}
          >
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
              <span className="bg-[#1d4ed8] text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider whitespace-nowrap">
                The whole offer
              </span>
            </div>

            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8 pb-8 border-b border-[#e5e7eb]">
              <div>
                <p className="text-[#525252] text-xs uppercase tracking-widest font-bold mb-2">The Landing Page</p>
                <h3 className="font-heading font-extrabold text-3xl text-[#1f2937] leading-tight mb-2">
                  Premium AI-built site for your trade.
                </h3>
                <p className="text-[#525252] text-sm">
                  One page. Built in 3 days. Rank locally. Capture leads. Look like a million quid.
                </p>
              </div>
              <div className="flex items-baseline gap-2 flex-shrink-0">
                <span className="font-heading font-extrabold text-6xl text-[#1f2937] leading-none">£1,000</span>
                <span className="text-[#737373] text-sm">one-off</span>
              </div>
            </div>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {included.map((f) => (
                <li key={f.title} className="flex items-start gap-3 text-sm text-[#525252]">
                  <div className="w-5 h-5 rounded-full bg-[#eff6ff] border border-[#1d4ed8]/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-[#1d4ed8]" fill="none" viewBox="0 0 10 8">
                      <path d="M1 4l3 3 5-6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[#1f2937] font-semibold mb-0.5">{f.title}</p>
                    <p className="text-[#525252] text-xs leading-relaxed">{f.desc}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={CALENDLY}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex-1 py-3 text-base"
              >
                Get a Free Mockup
              </a>
              <a href="#examples" className="btn-outline-white flex-1 py-3 text-base">
                See Our Work
              </a>
            </div>
            <p className="text-[#737373] text-xs text-center mt-4">
              We'll send a personalised homepage mockup of your business within 48 hours. No charge. No commitment.
            </p>
          </div>
        </div>

        {/* What it doesn't do — honesty banner */}
        <div ref={honestyRef} className="fade-up max-w-3xl mx-auto mb-20">
          <div className="rounded-card border border-[#e5e7eb] bg-[#f8fafc] p-6 md:p-7">
            <div className="flex items-start gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-[#0f172a] flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24">
                  <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <p className="text-[#1f2937] font-bold mb-0.5">What this isn't</p>
                <p className="text-[#525252] text-sm">Being honest is more useful than overselling. Here's what £1,000 doesn't get you:</p>
              </div>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pl-11">
              {honesty.map((h) => (
                <li key={h} className="flex items-center gap-2 text-sm text-[#525252]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#737373] flex-shrink-0" />
                  {h}
                </li>
              ))}
            </ul>
          </div>
        </div>

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
