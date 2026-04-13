import { useState } from 'react'
import { useFadeIn } from '../hooks/useFadeIn'

const CALENDLY = 'https://calendly.com/aditya-shah-ringa/ringa-sales-call'

const contactDetails = [
  {
    label: 'Email',
    value: 'adi@ringa.co.uk',
    href: 'mailto:adi@ringa.co.uk',
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24">
        <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: 'Phone',
    value: '07473 346874',
    href: 'tel:07473346874',
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24">
        <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: 'Website',
    value: 'tryringa.co.uk',
    href: 'https://tryringa.co.uk',
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24">
        <path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
]

const inputClass = 'w-full bg-white border border-[#e5e8ed] text-[#1f2937] rounded-btn px-4 py-3 text-sm focus:outline-none focus:border-[#3b82c4] transition-colors duration-200 placeholder-[#9ca3af]'

export default function Contact() {
  const headRef = useFadeIn()
  const formRef = useFadeIn(0.1, 50)
  const infoRef = useFadeIn(0.1, 150)

  const [form, setForm] = useState({ name: '', business: '', email: '', phone: '', message: '' })
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
          <p className="text-[#3b82c4] text-xs font-semibold uppercase tracking-widest mb-3">Contact</p>
          <h2 className="font-heading font-extrabold text-[clamp(2rem,5vw,3.5rem)] text-[#1f2937] leading-tight mb-4">
            Get in touch.
          </h2>
          <p className="text-[#6b7280] text-base max-w-lg">
            We reply within a few hours. If it is urgent, just call.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <div ref={formRef} className="fade-up">
            {submitted ? (
              <div className="card p-10 flex flex-col items-center justify-center text-center gap-4 min-h-[400px]">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center"
                  style={{ background: 'rgba(59,130,196,0.1)', border: '1px solid rgba(59,130,196,0.3)' }}
                >
                  <svg className="w-8 h-8 text-[#3b82c4]" fill="none" viewBox="0 0 24 24">
                    <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-heading font-bold text-xl text-[#1f2937] mb-2">Thanks!</h3>
                  <p className="text-[#6b7280] text-sm">We will be in touch within 24 hours.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[#6b7280] text-xs font-semibold uppercase tracking-wide mb-1.5">Name</label>
                    <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Jane Smith" required className={inputClass} />
                  </div>
                  <div>
                    <label className="block text-[#6b7280] text-xs font-semibold uppercase tracking-wide mb-1.5">Practice Name</label>
                    <input type="text" name="business" value={form.business} onChange={handleChange} placeholder="Smiles Dental Manchester" required className={inputClass} />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[#6b7280] text-xs font-semibold uppercase tracking-wide mb-1.5">Email</label>
                    <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="jane@business.co.uk" required className={inputClass} />
                  </div>
                  <div>
                    <label className="block text-[#6b7280] text-xs font-semibold uppercase tracking-wide mb-1.5">Phone</label>
                    <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="07700 900000" className={inputClass} />
                  </div>
                </div>
                <div>
                  <label className="block text-[#6b7280] text-xs font-semibold uppercase tracking-wide mb-1.5">Message</label>
                  <textarea name="message" value={form.message} onChange={handleChange} placeholder="Tell us about your practice..." rows={5} className={`${inputClass} resize-none`} />
                </div>
                <button
                  type="submit"
                  disabled={sending}
                  className="btn-primary self-start px-8 py-3 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {sending ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>

          {/* Info + Calendly */}
          <div ref={infoRef} className="fade-up flex flex-col gap-6">
            <div className="card p-6">
              <h3 className="font-semibold text-[#1f2937] mb-4">Contact details</h3>
              <div className="flex flex-col gap-3">
                {contactDetails.map((d) => (
                  <a
                    key={d.label}
                    href={d.href}
                    className="flex items-center gap-3 text-[#6b7280] hover:text-[#3b82c4] transition-colors duration-200 group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#e8f4fd] border border-[#3b82c4]/20 flex items-center justify-center text-[#3b82c4] flex-shrink-0 group-hover:bg-[#3b82c4]/20 transition-colors duration-200">
                      {d.icon}
                    </div>
                    <div>
                      <p className="text-[#9ca3af] text-[10px] uppercase tracking-widest font-semibold">{d.label}</p>
                      <p className="text-sm font-medium">{d.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Calendly embed */}
            <div className="card overflow-hidden flex-1" style={{ minHeight: '450px' }}>
              <iframe
                src={`${CALENDLY}?embed_type=Inline&hide_event_type_details=1&hide_gdpr_banner=1&background_color=ffffff&text_color=1f2937&primary_color=3b82c4`}
                width="100%"
                height="100%"
                style={{ minHeight: '450px', border: 'none', display: 'block' }}
                title="Book a demo with Ringa"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
