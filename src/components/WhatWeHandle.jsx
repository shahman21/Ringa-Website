import { useFadeIn } from '../hooks/useFadeIn'

const categories = [
  {
    icon: '🎬',
    title: 'The page itself',
    items: [
      'Smooth scroll animations',
      'Hero section with your story',
      'Services list, tailored to your trade',
      'Reviews wall pulled from Google',
      'About + accreditations section',
      'Contact + map + hours',
    ],
  },
  {
    icon: '🎨',
    title: 'The look',
    items: [
      'AI-generated hero imagery for your trade',
      'Custom brand colours and fonts',
      'Trade accreditation badges',
      'Real photos of your work (or AI fill-ins)',
      "Logo refresh if yours is from 2008",
      "Mobile layout designed first, not as an afterthought",
    ],
  },
  {
    icon: '📲',
    title: 'Lead tools',
    items: [
      'Two-tap quote form',
      'WhatsApp click-to-chat',
      'Click-to-call on every section',
      'Stripe deposit link (for bigger jobs)',
      'Lead alerts straight to your phone',
      'Automated text + email reply',
    ],
  },
  {
    icon: '📈',
    title: 'Get found',
    items: [
      'Google Business profile setup',
      'Local SEO done properly',
      'Bing Places + Apple Maps listings',
      'Schema markup for trades',
      'Service-area targeting',
      'Trustpilot / Checkatrade integration',
    ],
  },
  {
    icon: '🔧',
    title: 'The build',
    items: [
      'Live in 3 days, start to finish',
      'Free homepage mockup before you pay',
      "We write the copy in your voice",
      "One round of revisions included",
      "Custom domain registered (or yours migrated)",
      "Hosting + SSL + security included",
    ],
  },
  {
    icon: '🤝',
    title: 'Aftercare',
    items: [
      '12 months hosting included',
      'Edits within 24 hours',
      'WhatsApp support — no ticket forms',
      'Monthly performance summary',
      'No contracts, no exit fees',
      'You own everything we build',
    ],
  },
]

export default function WhatWeHandle() {
  const headRef = useFadeIn()
  const gridRef = useFadeIn(0.1, 100)
  const calloutRef = useFadeIn(0.1, 50)

  return (
    <section id="what-we-build" className="section-pad bg-[#f8fafc]">
      <div className="container-wide">
        <div ref={headRef} className="fade-up mb-14">
          <p className="eyebrow mb-3">What's in £1,000</p>
          <h2 className="font-heading font-extrabold text-[clamp(2rem,5vw,3.5rem)] leading-tight text-[#1f2937] mb-4">
            Everything you need to look pro and{' '}
            <span className="text-[#1d4ed8]">get booked.</span>
          </h2>
          <p className="text-[#525252] text-base max-w-xl">
            One flat price. No upsells, no add-on hosting fees, no "premium animation pack" we forgot to mention. Here's what £1,000 actually buys you:
          </p>
        </div>

        <div ref={gridRef} className="fade-up grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
          {categories.map((cat) => (
            <div key={cat.title} className="card p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{cat.icon}</span>
                <h3 className="font-heading font-bold text-lg text-[#1f2937]">{cat.title}</h3>
              </div>
              <ul className="flex flex-col gap-1.5">
                {cat.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-[#525252]">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#1d4ed8] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Callout */}
        <div ref={calloutRef} className="fade-up">
          <div className="rounded-card bg-[#0f172a] p-6 md:p-8 flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-[#1d4ed8] flex items-center justify-center flex-shrink-0 mt-0.5">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24">
                <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <p className="text-white text-base leading-relaxed">
              <strong>You own everything we build.</strong> Your domain, your hosting, your code, your imagery, your Google Business profile. No lock-in, no held-hostage exit fees. If you ever leave us, you take the lot.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
