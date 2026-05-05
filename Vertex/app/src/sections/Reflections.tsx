import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function Reflections() {
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
    <section id="reflections" ref={sectionRef} className="mx-auto max-w-[800px] px-6 py-[120px] md:py-[120px]">
      <p className="reveal-item font-mono text-xs tracking-[0.08em] uppercase text-[#6C6A86] mb-4">06 / Reflections</p>
      <h2 className="reveal-item text-[32px] md:text-[40px] font-bold text-[#23223B] tracking-[-0.02em] leading-[1.1] mb-12">
        Project Takeaways
      </h2>

      <p className="reveal-item text-[17px] md:text-[19px] text-[#6C6A86] leading-[1.8] mb-12">
        VERTEX proved that technical tools don't have to look "industrial." By applying a background in freelance graphic design and civil engineering precision, the project showed that data-heavy applications can still be intuitive and visually stunning. The most significant takeaway was the importance of the Research phase — understanding that the user's biggest fear isn't the price, but the mistake.
      </p>

      <div className="reveal-item pt-8 border-t border-[#E6E1F1] text-center mb-20">
        <p className="text-[28px] md:text-[32px] font-bold text-[#9D74D6] leading-[1.2]">
          "The user's biggest fear isn't the price. It's the mistake."
        </p>
      </div>

      <div className="reveal-item">
        <h3 className="text-xl md:text-2xl font-semibold text-[#23223B] tracking-[-0.01em] mb-4">
          Final Notes
        </h3>
        <p className="text-[17px] text-[#6C6A86] leading-[1.7]">
          As a 4-month case study, VERTEX stands as a solid portfolio piece that combines UX research, technical logic, and market awareness. It transitions from a simple "PC Part Picker" clone into a genuine consultant tool that empowers users to build with confidence.
        </p>
      </div>
    </section>
  )
}
