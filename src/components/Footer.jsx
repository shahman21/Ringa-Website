const navLinks = [
  { label: 'What We Build', href: '#what-we-build' },
  { label: 'Examples',      href: '#examples' },
  { label: 'How It Works',  href: '#how-it-works' },
  { label: 'Why LDA',       href: '#why-lda' },
  { label: 'Pricing',       href: '#pricing' },
  { label: 'Contact',       href: '#contact' },
]

const trades = ['Plumbers', 'Electricians', 'Builders', 'Roofers', 'Gas Engineers', 'Joiners', 'Decorators', 'Landscapers']

function scrollTo(e, href) {
  e.preventDefault()
  const el = document.querySelector(href)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

function LdaMark() {
  return (
    <span className="w-10 h-10 rounded-lg bg-[#1d4ed8] text-white font-heading font-extrabold text-[11px] tracking-widest flex items-center justify-center">
      LDA
    </span>
  )
}

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-[#1f2937]">
      {/* Hazard stripe accent */}
      <div className="h-1.5 hazard-tape opacity-80" aria-hidden="true" />

      <div className="container-wide py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <span className="font-heading font-extrabold text-2xl text-white mb-3 tracking-tight flex items-center gap-2.5">
              <LdaMark />
              <span>LDA <span className="text-[#9ca3af] font-bold">Digital</span></span>
            </span>
            <p className="text-[#9ca3af] text-sm leading-relaxed max-w-xs">
              Premium landing pages for UK tradespeople. £1,000 flat. Live in 3 days. Free mockup before you pay.
            </p>
          </div>

          {/* Nav links */}
          <div>
            <p className="text-[#737373] text-[10px] uppercase tracking-widest font-bold mb-4">Site</p>
            <div className="flex flex-col gap-2.5">
              {navLinks.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={(e) => scrollTo(e, l.href)}
                  className="text-[#9ca3af] hover:text-[#1d4ed8] text-sm transition-colors duration-200 w-fit"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          {/* Trades */}
          <div>
            <p className="text-[#737373] text-[10px] uppercase tracking-widest font-bold mb-4">Built for</p>
            <div className="flex flex-col gap-2.5">
              {trades.map((t) => (
                <span key={t} className="text-[#9ca3af] text-sm">{t}</span>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[#737373] text-[10px] uppercase tracking-widest font-bold mb-4">Get in touch</p>
            <div className="flex flex-col gap-2.5">
              <a href="mailto:hello@ldadigital.co.uk" className="text-[#9ca3af] hover:text-[#1d4ed8] text-sm transition-colors duration-200">
                hello@ldadigital.co.uk
              </a>
              <a href="tel:07473346874" className="text-[#9ca3af] hover:text-[#1d4ed8] text-sm transition-colors duration-200">
                07473 346874
              </a>
              <a href="https://ldadigital.co.uk" className="text-[#9ca3af] hover:text-[#1d4ed8] text-sm transition-colors duration-200">
                ldadigital.co.uk
              </a>
              <span className="text-[#9ca3af] text-sm">Manchester · UK-wide</span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#1f2937] pt-6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-[#737373] text-xs">© 2026 LDA Digital. All rights reserved.</p>
          <p className="text-[#737373] text-xs">Built for UK tradespeople 🇬🇧</p>
        </div>
      </div>
    </footer>
  )
}
