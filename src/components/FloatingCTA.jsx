import { useState, useEffect } from 'react'

const CALENDLY = 'https://calendly.com/aditya-shah-ringa/ringa-sales-call'

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handler = () => {
      const heroHeight = window.innerHeight
      setVisible(window.scrollY > heroHeight * 0.8)
    }
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <a
      href={CALENDLY}
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-6 right-6 z-40 btn-primary rounded-full px-6 py-3 shadow-blueprint transition-all duration-300 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      Get a Free Mockup
    </a>
  )
}
