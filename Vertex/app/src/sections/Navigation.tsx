import { useEffect, useState } from 'react'

const navLinks = [
  { label: 'Overview', target: '#hero' },
  { label: 'Problem', target: '#problems' },
  { label: 'Principles', target: '#principles' },
  { label: 'Journey', target: '#journey' },
  { label: 'Solutions', target: '#solutions' },
  { label: 'Reflections', target: '#reflections' },
]

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    e.preventDefault()
    setMobileOpen(false)
    const el = document.querySelector(target)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[rgba(255,255,255,0.88)] backdrop-blur-xl border-b border-[#E6E1F1]'
            : 'bg-transparent'
        }`}
      >
        <div className="mx-auto max-w-[1200px] px-6 py-4 flex items-center justify-between">
          <a
            href="#hero"
            onClick={(e) => handleClick(e, '#hero')}
            className="font-mono text-xs tracking-[0.08em] uppercase text-[#6C6A86] hover:text-[#9D74D6] transition-colors"
          >
            Vertex UI
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.target}
                onClick={(e) => handleClick(e, link.target)}
                className="font-mono text-xs tracking-[0.08em] uppercase text-[#6C6A86] hover:text-[#2C2850] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <button
            className="md:hidden text-[#6C6A86] hover:text-[#2C2850]"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {mobileOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-[rgba(255,255,255,0.97)] backdrop-blur-xl flex flex-col items-center justify-center gap-8 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.target}
              onClick={(e) => handleClick(e, link.target)}
              className="font-mono text-sm tracking-[0.08em] uppercase text-[#6C6A86] hover:text-[#2C2850] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </>
  )
}
