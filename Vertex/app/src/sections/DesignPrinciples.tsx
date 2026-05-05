import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import clarityImg from '@/assets/principle_clarity.png'
import assistanceImg from '@/assets/principle_assistance.png'
import aestheticImg from '@/assets/principle_aesthetic.png'

gsap.registerPlugin(ScrollTrigger)

const principles = [
  {
    title: 'Clarity over Complexity',
    body: 'Use visual cues rather than just technical jargon. A motherboard isn\'t a "Z790 ATX DDR5" — it\'s a canvas. We translated specs into spatial, visual language.',
    image: clarityImg,
  },
  {
    title: 'Proactive Assistance',
    body: 'The app catches errors before the user even realizes they made one. No pop-ups. No alerts. Just quiet, color-coded confidence woven into every interaction.',
    image: assistanceImg,
  },
  {
    title: 'Aesthetic Utility',
    body: 'The user base includes designers and streamers. The UI itself needed to reflect a high-end, tech-forward aesthetic. Every pixel serves a function; every function looks deliberate.',
    image: aestheticImg,
  },
]

export function DesignPrinciples() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return
    const items = sectionRef.current.querySelectorAll('.principle-block')
    items.forEach((item) => {
      const text = item.querySelector('.principle-text')
      const imgWrap = item.querySelector('.principle-image-wrap')
      const imgOverlay = item.querySelector('.principle-image-overlay')

      if (text) {
        gsap.fromTo(
          text,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: item,
              start: 'top 80%',
            },
          }
        )
      }

      if (imgWrap && imgOverlay) {
        gsap.to(imgOverlay, {
          xPercent: 100,
          duration: 1,
          ease: 'power3.inOut',
          scrollTrigger: {
            trigger: item,
            start: 'top 75%',
          },
        })
      }
    })

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [])

  return (
    <section
      id="principles"
      ref={sectionRef}
      className="mx-auto max-w-[1200px] px-6 py-[140px] md:py-[140px]"
    >
      <div className="border-l-2 border-[#9D74D6] pl-8 mb-20">
        <p className="font-mono text-xs tracking-[0.08em] uppercase text-[#9D74D6] mb-4">02 / Design Principles</p>
        <h2 className="text-[32px] md:text-[40px] font-bold text-[#23223B] tracking-[-0.02em] leading-[1.1]">
          Three Pillars
        </h2>
      </div>

      <div className="flex flex-col gap-20">
        {principles.map((p, i) => (
          <div
            key={p.title}
            className={`principle-block flex flex-col ${
              i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            } gap-12 items-center`}
          >
            <div className="principle-text flex-1">
              <h3 className="text-xl md:text-2xl font-semibold text-[#23223B] tracking-[-0.01em] mb-4">
                {p.title}
              </h3>
              <p className="text-[17px] text-[#6C6A86] leading-[1.7]">{p.body}</p>
            </div>
            <div className="principle-image-wrap relative flex-1 w-full overflow-hidden rounded-xl aspect-video">
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="principle-image-overlay absolute inset-0 bg-[#F4EDFF]" />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
