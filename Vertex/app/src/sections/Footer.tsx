export function Footer() {
  const handleTop = (e: React.MouseEvent) => {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="border-t border-[#E6E1F1]">
      <div className="mx-auto max-w-[1200px] px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-mono text-xs tracking-[0.08em] uppercase text-[#6C6A86]">
          Vertex UI Development
        </span>
        <span className="text-sm text-[#6C6A86]">
          Project VERTEX — 2024
        </span>
        <a
          href="#hero"
          onClick={handleTop}
          className="text-sm text-[#6C6A86] hover:text-[#9D74D6] transition-colors"
        >
          Back to Top
        </a>
      </div>
    </footer>
  )
}
