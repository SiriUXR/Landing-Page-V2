import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function DevelopmentJourney() {
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
    <section id="journey" ref={sectionRef} className="mx-auto max-w-[1200px] px-6 py-[140px] md:py-[140px]">
      <p className="reveal-item font-mono text-xs tracking-[0.08em] uppercase text-[#FFD600] mb-4">03 / The Journey</p>
      <h2 className="reveal-item text-[32px] md:text-[40px] font-bold text-[#23223B] tracking-[-0.02em] leading-[1.1] mb-16">
        Development Journey
      </h2>

      {/* Growing Pains */}
      <div className="reveal-item flex flex-col md:flex-row gap-12 mb-16">
        <div className="flex-[3]">
          <h3 className="text-xl md:text-2xl font-semibold text-[#23223B] tracking-[-0.01em] mb-4">
            Growing Pains
          </h3>
          <p className="text-[17px] text-[#6C6A86] leading-[1.7]">
            One of the biggest hurdles was balancing the Consultant side of the app with the Marketplace side. We didn't want the app to feel like a pushy salesperson; it needed to feel like a knowledgeable friend. Narrowing down the "Logical Core" — the algorithm that suggests parts — required constant tweaking to ensure it wasn't biased toward expensive brands.
          </p>
        </div>
        <div className="flex-[2] flex items-start">
          <div className="border-l-4 border-[#FFD600] pl-6">
            <p className="text-[24px] md:text-[28px] font-bold text-[#FFD600] leading-[1.3]">
              "It needed to feel like a knowledgeable friend, not a pushy salesperson."
            </p>
          </div>
        </div>
      </div>

      {/* Challenges in the Lab */}
      <div className="reveal-item bg-[#FFFFFF] border border-[#E6E1F1] rounded-2xl p-8 md:p-12">
        <h3 className="text-xl md:text-2xl font-semibold text-[#23223B] tracking-[-0.01em] mb-4">
          Challenges in the Lab
        </h3>
        <p className="text-[17px] text-[#6C6A86] leading-[1.7] mb-8">
          "The Lab" represented the prototyping phase where we tested the Virtual Builder. The main challenge was mobile screen real estate. How do you show a detailed 3D motherboard, a list of 20 compatible CPUs, and a budget tracker all on one 6-inch screen? We went through multiple iterations of "expandable cards" and "layered navigation" to solve this.
        </p>

        <div className="flex gap-4 overflow-x-auto scroll-snap-x scrollbar-hide pb-2">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="scroll-snap-start flex-shrink-0 w-[280px] md:w-[320px] rounded-xl bg-[#F6F2FD] border border-[#E6E1F1] aspect-[9/19] flex items-center justify-center"
            >
              <div className="text-center px-6">
                <div className="font-mono text-xs uppercase tracking-wider text-[#6C6A86] mb-2">
                  Iteration {i}
                </div>
                <div className="text-sm text-[#23223B]">
                  {i === 1 && 'Expandable Cards v1'}
                  {i === 2 && 'Expandable Cards v2'}
                  {i === 3 && 'Layered Navigation'}
                </div>
                <div className="mt-4 flex justify-center gap-2">
                  {i === 1 && (
                    <>
                      <div className="w-8 h-12 bg-[#FFFFFF] border border-[#DDD5EE] rounded" />
                      <div className="w-8 h-12 bg-[#FFFFFF] border border-[#DDD5EE] rounded" />
                      <div className="w-8 h-12 bg-[#FFFFFF] border border-[#DDD5EE] rounded" />
                    </>
                  )}
                  {i === 2 && (
                    <>
                      <div className="w-8 h-8 bg-[#FFFFFF] border border-[#DDD5EE] rounded-full" />
                      <div className="w-8 h-8 bg-[#FFFFFF] border border-[#DDD5EE] rounded-full" />
                    </>
                  )}
                  {i === 3 && (
                    <>
                      <div className="w-10 h-10 bg-[#FFFFFF] border border-[#9D74D6]/30 rounded-lg flex items-center justify-center">
                        <div className="w-4 h-0.5 bg-[#9D74D6]" />
                      </div>
                      <div className="w-10 h-10 bg-[#FFFFFF] border border-[#9D74D6]/30 rounded-lg flex items-center justify-center">
                        <div className="w-4 h-0.5 bg-[#9D74D6]" />
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
