import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const underlineRef = useRef<HTMLSpanElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    // Underline draw animation
    if (underlineRef.current) {
      gsap.fromTo(
        underlineRef.current,
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 60%',
          },
        }
      )
    }

    // Canvas wireframe mesh
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animId: number
    let mouseX = 0
    let mouseY = 0
    let time = 0

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }
    window.addEventListener('mousemove', onMouseMove)

    const draw = () => {
      time += 0.005
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const cx = canvas.width / 2
      const cy = canvas.height / 2
      const rotX = (mouseY - cy) * 0.0001
      const rotY = (mouseX - cx) * 0.0001

      const cols = 18
      const rows = 12
      const spacing = 60
      const startX = cx - (cols * spacing) / 2
      const startY = cy - (rows * spacing) / 2

      ctx.strokeStyle = 'rgba(157, 116, 214, 0.14)'
      ctx.lineWidth = 0.8

      for (let i = 0; i <= cols; i++) {
        for (let j = 0; j <= rows; j++) {
          const x = startX + i * spacing
          const y = startY + j * spacing

          // Perspective distortion
          const distX = x - cx
          const distY = y - cy
          const dist = Math.sqrt(distX * distX + distY * distY)
          const maxDist = Math.sqrt(cx * cx + cy * cy)
          const n = dist / maxDist

          const wave = Math.sin(time + i * 0.3 + j * 0.2) * 8
          const px = x + distX * rotY + wave * (1 - n)
          const py = y + distY * rotX + wave * (1 - n)

          // Draw horizontal line
          if (i < cols) {
            const nx = startX + (i + 1) * spacing
            const ndistX = nx - cx
            const nwave = Math.sin(time + (i + 1) * 0.3 + j * 0.2) * 8
            const npx = nx + ndistX * rotY + nwave * (1 - n)
            const npy = py

            const pulse = 0.08 + Math.sin(time * 2 + i + j) * 0.04
            ctx.strokeStyle = `rgba(157, 116, 214, ${pulse})`
            ctx.beginPath()
            ctx.moveTo(px, py)
            ctx.lineTo(npx, npy)
            ctx.stroke()
          }

          // Draw vertical line
          if (j < rows) {
            const ny = startY + (j + 1) * spacing
            const ndistY = ny - cy
            const nwave = Math.sin(time + i * 0.3 + (j + 1) * 0.2) * 8
            const npx = px
            const npy = ny + ndistY * rotX + nwave * (1 - n)

            const pulse = 0.08 + Math.sin(time * 2 + i + j) * 0.04
            ctx.strokeStyle = `rgba(157, 116, 214, ${pulse})`
            ctx.beginPath()
            ctx.moveTo(px, py)
            ctx.lineTo(npx, npy)
            ctx.stroke()
          }
        }
      }

      animId = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMouseMove)
    }
  }, [])

  const handleExplore = (e: React.MouseEvent) => {
    e.preventDefault()
    document.querySelector('#problems')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
        style={{ opacity: 1 }}
      />
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(255,255,255,0) 0%, rgba(248,241,255,0.85) 72%)',
        }}
      />

      <div className="relative z-10 mx-auto max-w-[900px] px-6 text-center">
        <p className="font-mono text-xs tracking-[0.08em] uppercase text-[#9D74D6] mb-6">
          Vertex UI / Case Study
        </p>

        <h1 className="text-[48px] md:text-[72px] font-extrabold text-[#23223B] leading-[0.95] tracking-[-0.03em] mb-6">
          PROJECT{' '}
          <span className="relative inline-block">
            VERTEX
            <span
              ref={underlineRef}
              className="absolute left-0 -bottom-2 h-[3px] w-full bg-[#9D74D6] origin-left"
              style={{ transform: 'scaleX(0)' }}
            />
          </span>
        </h1>

        <p className="text-lg md:text-xl text-[#6C6A86] max-w-[600px] mx-auto mb-10 leading-relaxed">
          The bridge between hardware complexity and human confidence.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 mb-10">
          <span className="font-mono text-xs tracking-[0.08em] uppercase text-[#6C6A86]">
            Role: Lead UX Designer & Researcher
          </span>
          <span className="hidden md:block w-px h-4 bg-[#DCD5EC]" />
          <span className="font-mono text-xs tracking-[0.08em] uppercase text-[#6C6A86]">
            Duration: 4 Months
          </span>
          <span className="hidden md:block w-px h-4 bg-[#DCD5EC]" />
          <span className="font-mono text-xs tracking-[0.08em] uppercase text-[#6C6A86]">
            Platform: iOS / Android / Web
          </span>
        </div>

        <a
          href="#problems"
          onClick={handleExplore}
          className="inline-block font-mono text-sm tracking-wider uppercase text-[#9D74D6] border border-[#9D74D6] rounded-full px-8 py-3.5 hover:bg-[#9D74D6] hover:text-[#FFFFFF] transition-all duration-300"
        >
          Explore the Study
        </a>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <svg
          className="animate-bounce-chevron text-[#6C6A86]"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </div>
    </section>
  )
}
