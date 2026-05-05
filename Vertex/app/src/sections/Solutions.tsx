import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const builds = [
  { label: 'Small Form Factor', image: '/img-4.jpg' },
  { label: 'Custom Water Cooling', image: '/img-5.jpg' },
  { label: 'All-White Aesthetic', image: '/img-6.jpg' },
  { label: 'Compact Workstation', image: '/img-7.jpg' },
]

export function Solutions() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return
    const items = sectionRef.current.querySelectorAll('.reveal-item')
    gsap.fromTo(
      items,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      }
    )
    return () => {
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger === sectionRef.current) t.kill()
      })
    }
  }, [])

  return (
    <section id="solutions" ref={sectionRef} className="mx-auto max-w-[1200px] px-6 py-[140px] md:py-[140px]">
      <p className="reveal-item font-mono text-xs tracking-[0.08em] uppercase text-[#9D74D6] mb-4">05 / Solutions</p>
      <h2 className="reveal-item text-[32px] md:text-[40px] font-bold text-[#23223B] tracking-[-0.02em] leading-[1.1] mb-16">
        Solutions & Exploration
      </h2>

      {/* Compatibility Logic Engine */}
      <div className="reveal-item bg-[#FFFFFF] border border-[#E6E1F1] rounded-2xl p-8 md:p-12 mb-16">
        <h3 className="text-xl md:text-2xl font-semibold text-[#23223B] tracking-[-0.01em] mb-4">
          Compatibility Logic Engine
        </h3>
        <p className="text-[17px] text-[#6C6A86] leading-[1.7] mb-8">
          We implemented a Compatibility Logic Engine that flagged issues in real-time with color-coded alerts: <span className="text-[#FF5252] font-medium">Red</span> for "Won't Work," <span className="text-[#FFD600] font-medium">Yellow</span> for "Warning / Bottleneck," and <span className="text-[#00E676] font-medium">Green</span> for "Optimal." We also integrated a "Quick-Swap" feature that suggested the best-performing alternative if a part went out of stock.
        </p>
        <div className="flex flex-wrap gap-4">
          <span className="font-mono text-xs tracking-wider uppercase px-4 py-2 rounded bg-[rgba(255,82,82,0.1)] border border-[#FF5252] text-[#FF5252]">
            [Won't Work]
          </span>
          <span className="font-mono text-xs tracking-wider uppercase px-4 py-2 rounded bg-[rgba(255,214,0,0.1)] border border-[#FFD600] text-[#FFD600]">
            [Warning]
          </span>
          <span className="font-mono text-xs tracking-wider uppercase px-4 py-2 rounded bg-[rgba(0,230,118,0.1)] border border-[#00E676] text-[#00E676]">
            [Optimal]
          </span>
        </div>
      </div>

      {/* Sparking Curiosity */}
      <div className="reveal-item mb-16">
        <h3 className="text-xl md:text-2xl font-semibold text-[#23223B] tracking-[-0.01em] mb-4">
          Sparking Curiosity
        </h3>
        <p className="text-[17px] text-[#6C6A86] leading-[1.7] mb-8">
          We wanted users to play with their builds. By including a "Build of the Week" gallery and community templates, we encouraged users to look at configurations they might not have considered — like Small Form Factor (SFF) builds or custom water-cooling loops.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {builds.map((b) => (
            <div key={b.label} className="relative aspect-square rounded-lg overflow-hidden group">
              <img
                src={b.image}
                alt={b.label}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <span className="absolute bottom-3 left-3 font-mono text-[11px] tracking-wider uppercase text-white drop-shadow-lg">
                {b.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* The "What if(s)?" */}
      <div className="reveal-item">
        <h3 className="text-xl md:text-2xl font-semibold text-[#23223B] tracking-[-0.01em] mb-4">
          The "What if(s)?"
        </h3>
        <p className="text-[17px] text-[#6C6A86] leading-[1.7] mb-8">
          This section of the app allowed for hypothetical scenarios. Users could ask:
        </p>
        <div className="flex flex-col gap-6">
          <div className="bg-[#FFFFFF] border border-[#E6E1F1] border-l-4 border-l-[#9D74D6] rounded-r-xl px-8 py-6">
            <p className="text-lg md:text-xl font-medium text-[#23223B] leading-[1.5]">
              What if I upgrade to a 4K monitor later? Will my current GPU handle it?
            </p>
          </div>
          <div className="bg-[#FFFFFF] border border-[#E6E1F1] border-l-4 border-l-[#B08AE2] rounded-r-xl px-8 py-6">
            <p className="text-lg md:text-xl font-medium text-[#23223B] leading-[1.5]">
              What if I switch to an all-white aesthetic? How much will that "tax" my budget?
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
