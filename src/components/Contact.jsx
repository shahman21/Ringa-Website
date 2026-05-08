import { useState } from 'react'
import { useFadeIn } from '../hooks/useFadeIn'

const CALENDLY = 'https://calendly.com/aditya-shah-ringa/ringa-sales-call'

const contactDetails = [
  {
    label: 'Email',
    value: 'hello@ldadigital.co.uk',
    href: 'mailto:hello@ldadigital.co.uk',
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24">
        <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: 'WhatsApp / Phone',
    value: '07473 346874',
    href: 'tel:07473346874',
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24">
        <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: 'Where',
    value: 'Manchester, working UK-wide',
    href: '#',
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z M12 13a3 3 0 100-6 3 3 0 000 6z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
]

const inputClass = 'w-full bg-white border border-[#e5e7eb] text-[#1f2937] rounded-btn px-4 py-3 text-sm focus:outline-none focus:border-[#1d4ed8] transition-colors duration-200 placeholder-[#9ca3af]'

const trades = ['Plumber','Electrician','Builder','Roofer','Gas engineer','Joiner','Decorator','Landscaper','Other']

export default function Contact() {
  const headRef = useFadeIn()
  const formRef = useFadeIn(0.1, 50)
  const infoRef = useFadeIn(0.1, 150)

  const [form, setForm] = useState({ name: '', business: '', trade: '', email: '', phone: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)

  const handleChange = (e) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSending(true)
    await new Promise((r) => setTimeout(r, 900))
    setSending(false)
    setSubmitted(true)
  }

  return (
    <section id="contact" className="section-pad bg-white">
      <div className="container-wide">
        <div ref={headRef} className="fade-up mb-14">
          <p className="eyebrow mb-3">Contact</p>
          <h2 className="font-heading font-extrabold text-[clamp(2rem,5vw,3.5rem)] text-[#1f2937] leading-tight mb-4">
            Get your free mockup.
          </h2>
          <p className="text-[#525252] text-base max-w-lg">
            Tell us a bit about your trade and we'll send a personalised homepage mockup back within 48 hours. No charge, no commitment. If you love it, it's £1,000 to make it real.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <div ref={formRef} className="fade-up">
            {submitted ? (
              <div className="card p-10 flex flex-col items-center justify-center text-center gap-4 min-h-[400px]">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center"
                  style={{ background: 'rgba(29,78,216,0.10)', border: '1px solid rgba(29,78,216,0.30)' }}
                >
                  <svg className="w-8 h-8 text-[#1d4ed8]" fill="none" viewBox="0 0 24 24">
                    <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-heading font-bold text-xl text-[#1f2937] mb-2">Got it. Cheers.</h3>
                  <p className="text-[#525252] text-sm">Your free mockup will land in your inbox within 48 hours.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[#525252] text-xs font-semibold uppercase tracking-wide mb-1.5">Your name</label>
                    <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Mike Miller" required className={inputClass} />
                  </div>
                  <div>
                    <label className="block text-[#525252] text-xs font-semibold uppercase tracking-wide mb-1.5">Business name</label>
                    <input type="text" name="business" value={form.business} onChange={handleChange} placeholder="Miller Plumbing Ltd" required className={inputClass} />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[#525252] text-xs font-semibold uppercase tracking-wide mb-1.5">Your trade</label>
                    <select name="trade" value={form.trade} onChange={handleChange} required className={inputClass}>
                      <option value="">Select...</option>
                      {trades.map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-[#525252] text-xs font-semibold uppercase tracking-wide mb-1.5">Phone</label>
                    <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="07700 900000" className={inputClass} />
                  </div>
                </div>
                <div>
                  <label className="block text-[#525252] text-xs font-semibold uppercase tracking-wide mb-1.5">Email</label>
                  <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="mike@millerplumbing.co.uk" required className={inputClass} />
                </div>
                <div>
                  <label className="block text-[#525252] text-xs font-semibold uppercase tracking-wide mb-1.5">Tell us about your business</label>
                  <textarea name="message" value={form.message} onChange={handleChange} placeholder="Where you're based, what jobs you want more of, anything else useful..." rows={5} className={`${inputClass} resize-none`} />
                </div>
                <button
                  type="submit"
                  disabled={sending}
                  className="btn-primary self-start px-8 py-3 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {sending ? 'Sending...' : 'Send me my free mockup'}
                </button>
              </form>
            )}
          </div>

          {/* Info + Calendly */}
          <div ref={infoRef} className="fade-up flex flex-col gap-6">
            <div className="card p-6">
              <h3 className="font-semibold text-[#1f2937] mb-4">Or get hold of us direct</h3>
              <div className="flex flex-col gap-3">
                {contactDetails.map((d) => (
                  <a
                    key={d.label}
                    href={d.href}
                    className="flex items-center gap-3 text-[#525252] hover:text-[#1d4ed8] transition-colors duration-200 group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#eff6ff] border border-[#1d4ed8]/25 flex items-center justify-center text-[#1d4ed8] flex-shrink-0 group-hover:bg-[#1d4ed8] group-hover:text-white transition-colors duration-200">
                      {d.icon}
                    </div>
                    <div>
                      <p className="text-[#737373] text-[10px] uppercase tracking-widest font-semibold">{d.label}</p>
                      <p className="text-sm font-medium">{d.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Calendly embed */}
            <div className="card overflow-hidden flex-1" style={{ minHeight: '450px' }}>
              <iframe
                src={`${CALENDLY}?embed_type=Inline&hide_event_type_details=1&hide_gdpr_banner=1&background_color=ffffff&text_color=1f2937&primary_color=ff6b00`}
                width="100%"
                height="100%"
                style={{ minHeight: '450px', border: 'none', display: 'block' }}
                title="Book a discovery call with LDA Digital"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
