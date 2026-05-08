import { useState, useEffect } from 'react'

const CALENDLY = 'https://calendly.com/aditya-shah-ringa/ringa-sales-call'

const links = [
  { label: 'What We Build', href: '#what-we-build' },
  { label: 'Examples',      href: '#examples' },
  { label: 'How It Works',  href: '#how-it-works' },
  { label: 'Pricing',       href: '#pricing' },
]

function scrollTo(href) {
  const el = document.querySelector(href)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

function LdaMark({ className = 'w-9 h-9' }) {
  return (
    <span className={`${className} rounded-lg bg-[#1d4ed8] text-white font-heading font-extrabold text-[11px] tracking-widest flex items-center justify-center`}>
      LDA
    </span>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const handleNav = (e, href) => {
    e.preventDefault()
    setOpen(false)
    scrollTo(href)
  }

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-[#e5e7eb] shadow-sm'
          : 'bg-white border-b border-[#e5e7eb]'
      }`}
    >
      <div className="container-wide">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="font-heading font-extrabold text-xl text-[#1f2937] tracking-tight select-none flex items-center gap-2.5"
          >
            <LdaMark className="w-9 h-9" />
            <span>LDA <span className="text-[#525252] font-bold">Digital</span></span>
          </button>

          {/* Desktop links */}
          <nav className="hidden md:flex items-center gap-7">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={(e) => handleNav(e, l.href)}
                className="text-[#525252] hover:text-[#1f2937] text-sm font-medium transition-colors duration-200"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <a
              href={CALENDLY}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary rounded-full px-5"
            >
              Get a Free Mockup
            </a>
          </div>

          {/* Hamburger */}
          <button
            aria-label="Toggle menu"
            className="md:hidden p-2 text-[#1f2937]"
            onClick={() => setOpen(!open)}
          >
            <div className="flex flex-col gap-1.5 w-5">
              <span className={`block h-0.5 bg-current rounded transition-all duration-300 ${open ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block h-0.5 bg-current rounded transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
              <span className={`block h-0.5 bg-current rounded transition-all duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 bg-white border-b border-[#e5e7eb] ${
          open ? 'max-h-72' : 'max-h-0'
        }`}
      >
        <div className="container-wide py-4 flex flex-col gap-3">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={(e) => handleNav(e, l.href)}
              className="text-[#525252] hover:text-[#1f2937] text-sm font-medium py-1.5 transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href={CALENDLY}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary rounded-full self-start mt-2"
          >
            Get a Free Mockup
          </a>
        </div>
      </div>
    </header>
  )
}
