const navLinks = [
  { label: 'What We Handle', href: '#what-we-handle' },
  { label: 'How It Works',   href: '#how-it-works' },
  { label: 'Integrations',   href: '#integrations' },
  { label: 'Pricing',        href: '#pricing' },
  { label: 'Contact',        href: '#contact' },
]

function scrollTo(e, href) {
  e.preventDefault()
  const el = document.querySelector(href)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

export default function Footer() {
  return (
    <footer className="bg-[#1f2937] border-t border-[#374151]">
      <div className="container-wide py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <span className="font-heading font-extrabold text-3xl text-[#3b82c4] block mb-2 tracking-tight">🦷 Ringa</span>
            <p className="text-[#9ca3af] text-sm">Your practice, always reachable.</p>
          </div>

          {/* Nav links */}
          <div>
            <p className="text-[#6b7280] text-[10px] uppercase tracking-widest font-semibold mb-4">Navigation</p>
            <div className="flex flex-col gap-2.5">
              {navLinks.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={(e) => scrollTo(e, l.href)}
                  className="text-[#9ca3af] hover:text-white text-sm transition-colors duration-200 w-fit"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[#6b7280] text-[10px] uppercase tracking-widest font-semibold mb-4">Get in touch</p>
            <div className="flex flex-col gap-2.5">
              <a href="mailto:adi@ringa.co.uk" className="text-[#9ca3af] hover:text-[#3b82c4] text-sm transition-colors duration-200">
                adi@ringa.co.uk
              </a>
              <a href="tel:07473346874" className="text-[#9ca3af] hover:text-[#3b82c4] text-sm transition-colors duration-200">
                07473 346874
              </a>
              <a href="https://tryringa.co.uk" className="text-[#9ca3af] hover:text-[#3b82c4] text-sm transition-colors duration-200">
                tryringa.co.uk
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#374151] pt-6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-[#6b7280] text-xs">© 2025 Ringa. All rights reserved.</p>
          <p className="text-[#6b7280] text-xs">Built for UK dental practices 🇬🇧</p>
        </div>
      </div>
    </footer>
  )
}
