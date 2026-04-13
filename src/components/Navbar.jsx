import { useState, useEffect } from 'react'

const CALENDLY = 'https://calendly.com/aditya-shah-ringa/ringa-sales-call'

const links = [
  { label: 'What We Handle', href: '#what-we-handle' },
  { label: 'Hear It', href: '#demo' },
  { label: 'Integrations', href: '#integrations' },
  { label: 'Pricing', href: '#pricing' },
]

function scrollTo(href) {
  const el = document.querySelector(href)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
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
          ? 'bg-white/95 backdrop-blur-md border-b border-[#e5e8ed] shadow-sm'
          : 'bg-white border-b border-[#e5e8ed]'
      }`}
    >
      <div className="container-wide">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="font-heading font-extrabold text-2xl text-[#3b82c4] tracking-tight select-none flex items-center gap-2"
          >
            🦷 Ringa
          </button>

          {/* Desktop links */}
          <nav className="hidden md:flex items-center gap-7">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={(e) => handleNav(e, l.href)}
                className="text-[#6b7280] hover:text-[#1f2937] text-sm font-medium transition-colors duration-200"
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
              Book a Discovery Call
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
        className={`md:hidden overflow-hidden transition-all duration-300 bg-white border-b border-[#e5e8ed] ${
          open ? 'max-h-72' : 'max-h-0'
        }`}
      >
        <div className="container-wide py-4 flex flex-col gap-3">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={(e) => handleNav(e, l.href)}
              className="text-[#6b7280] hover:text-[#1f2937] text-sm font-medium py-1.5 transition-colors"
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
            Book a Discovery Call
          </a>
        </div>
      </div>
    </header>
  )
}
