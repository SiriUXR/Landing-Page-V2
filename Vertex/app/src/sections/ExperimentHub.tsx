import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const features = [
  'Compare different "tiers" of builds side-by-side',
  'See real-world performance estimates — FPS in specific games or render times in software like AutoCAD — before buying a single part',
  'Save "Draft States" of builds to track price changes over time',
]

export function ExperimentHub() {
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
    <section id="experiment-hub" ref={sectionRef} className="bg-[#F8F3FF] py-[140px] md:py-[140px]">
      <div className="mx-auto max-w-[1200px] px-6">
        <p className="reveal-item font-mono text-xs tracking-[0.08em] uppercase text-[#9D74D6] mb-4">04 / Experiment Hub</p>
        <h2 className="reveal-item text-[32px] md:text-[40px] font-bold text-[#23223B] tracking-[-0.02em] leading-[1.1] mb-16">
          The Heart of the Consultant
        </h2>

        <div className="flex flex-col md:flex-row gap-16">
          <div className="flex-[55]">
            <p className="reveal-item text-[17px] text-[#6C6A86] leading-[1.7] mb-8">
              This was the heart of the "Consultant" feature. The Experiment Hub allowed users to:
            </p>
            <div className="flex flex-col">
              {features.map((f, i) => (
                <div
                  key={i}
                  className="reveal-item flex items-start gap-4 py-5 border-b border-[#E8E2F4]"
                >
                  <div className="flex-shrink-0 mt-1 w-4 h-4 rounded-full border border-[#9D74D6] flex items-center justify-center">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M2 5l2 2 4-4" stroke="#9D74D6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <p className="text-[15px] text-[#23223B] leading-[1.6]">{f}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex-[45] flex items-center">
            <div className="reveal-item relative w-full rounded-2xl bg-[#FFFFFF] border border-[#E6E1F1] p-8 md:p-10 overflow-hidden">
              {/* Animated border */}
              <div
                className="absolute inset-0 rounded-2xl animate-rotate-border"
                style={{
                  padding: '1px',
                  background: 'conic-gradient(from 0deg, #9D74D6, #C6A7EA, #9D74D6)',
                  WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  WebkitMaskComposite: 'xor',
                  maskComposite: 'exclude',
                }}
              />
              <div className="relative z-10">
                <div className="text-[56px] md:text-[72px] font-extrabold text-[#9D74D6] leading-[0.9] tracking-[-0.03em] mb-4">
                  60%
                </div>
                <p className="text-[15px] text-[#6C6A86] leading-[1.6] mb-8">
                  of builds pre-filled by the Consultant AI based on budget and primary use case.
                </p>
                <div className="pt-6 border-t border-[#E8E2F4]">
                  <div className="text-[36px] md:text-[40px] font-bold text-[#B08AE2] leading-[1] tracking-[-0.02em] mb-2">
                    +40%
                  </div>
                  <p className="text-[13px] font-mono tracking-wider uppercase text-[#6C6A86]">
                    increase in user satisfaction scores
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
