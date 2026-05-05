import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const problems = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#FF5252" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 8l8 8m0-8l-8 8" />
        <circle cx="16" cy="16" r="12" />
      </svg>
    ),
    title: 'Compatibility Anxiety',
    color: '#FF5252',
    body: 'The fear that expensive parts won\'t fit or work together. CPU socket mismatches. RAM clearance issues. One wrong click and a $3,000 build is dead on arrival.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#FFD600" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 26h20" />
        <path d="M8 26v-8l6-6 4 4 6-6v16" />
        <path d="M10 18l4-4" />
      </svg>
    ),
    title: 'The "Bottleneck" Trap',
    color: '#FFD600',
    body: 'Users often overspend on one component — typically the GPU — while neglecting another, like the CPU. The result: an inefficient, unbalanced build that bleeds performance.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#00B8D4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 20l6-8 6 6 8-12" />
        <path d="M28 8v12" />
        <path d="M24 12h8" />
      </svg>
    ),
    title: 'Price Volatility',
    color: '#00B8D4',
    body: 'Hardware prices shift daily. A build that cost $2,000 on Monday might cost $2,400 by Friday. Users struggle to hit a specific budget at the exact moment of purchase.',
  },
]

export function Problems() {
  const sectionRef = useRef<HTMLElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!cardsRef.current) return
    const cards = cardsRef.current.querySelectorAll('.problem-card')
    gsap.fromTo(
      cards,
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
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
    <section id="problems" ref={sectionRef} className="mx-auto max-w-[1200px] px-6 py-[140px] md:py-[140px]">
      <p className="font-mono text-xs tracking-[0.08em] uppercase text-[#FF5252] mb-4">01 / The Core</p>
      <h2 className="text-[32px] md:text-[40px] font-bold text-[#23223B] tracking-[-0.02em] leading-[1.1] mb-16">
        Three Friction Points
      </h2>

      <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {problems.map((p) => (
          <div
            key={p.title}
            className="problem-card bg-[#FFFFFF] rounded-xl p-8 border border-[#E6E1F1] hover:border-[#D7CDEA] hover:-translate-y-1 transition-all duration-300"
          >
            <div className="mb-6">{p.icon}</div>
            <h3 className="text-xl font-semibold text-[#23223B] tracking-[-0.01em] mb-4">{p.title}</h3>
            <p className="text-[15px] text-[#6C6A86] leading-relaxed">{p.body}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
