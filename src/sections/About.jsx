import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Download } from 'lucide-react'

export default function About() {
  const ref = useRef(null)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) e.target.classList.add('in') }, { threshold: .12 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="about" className="relative py-28 md:py-36 overflow-hidden">
      <div className="absolute left-0 top-1/2 w-72 h-72 rounded-full bg-[#00F2A1]/4 blur-[110px] pointer-events-none -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="divider mb-14"
        >
          Who am I?
        </motion.div>

        <div ref={ref} className="reveal grid md:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left: Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl">
              <img
                src="/profile.jpeg"
                alt="Deekshant Choudhary"
                className="w-full aspect-[3/4] object-cover object-top"
                style={{ filter: 'grayscale(10%) contrast(1.05)' }}
              />
              <div className="absolute bottom-0 right-0 w-16 h-16 bg-[#00F2A1] rounded-tl-3xl" style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 100%)' }} />
            </div>

            <div className="absolute -bottom-5 -left-4 bg-[#11151f] border border-white/10 rounded-2xl px-6 py-4">
              <div className="font-serif font-bold text-4xl" style={{ color: '#00F2A1', fontFamily: '"DM Serif Display", serif' }}>2+</div>
              <div className="font-dm text-[11px] text-white/35 mt-0.5">Years Experience</div>
            </div>
          </div>

          {/* Right: Text */}
          <div className="md:pl-4">
            <h2 className="font-serif text-3xl md:text-4xl xl:text-5xl font-bold leading-tight mb-6 tracking-tight"
              style={{ fontFamily: '"DM Serif Display", serif' }}>
              I'm Deekshant Choudhary,
              <br />
              <span className="italic" style={{ color: '#00F2A1' }}>a Web Developer</span>
            </h2>

            <p className="font-dm text-[rgba(232,232,232,0.45)] text-[15px] leading-[1.9] mb-4">
              A freelance web developer focused on creating premium digital experiences for businesses and startups. I specialize in cinematic UI design, responsive layouts, smooth animations, and elegant user experiences.
            </p>
            <p className="font-dm text-[rgba(232,232,232,0.45)] text-[15px] leading-[1.9] mb-10">
              My goal is to create websites that feel modern, interactive, premium, and <span className="text-white">visually unforgettable</span>.
            </p>

            <div className="grid grid-cols-2 gap-x-8 gap-y-4 mb-10 pb-10 border-b border-white/7">
              {[
                { label: 'Name', value: 'Deekshant Choudhary' },
                { label: 'From', value: 'Rajasthan, India' },
                { label: 'Role', value: 'Freelance Developer' },
                { label: 'Email', value: 'deekshant...@gmail.com' },
              ].map(({ label, value }) => (
                <div key={label}>
                  <span className="font-dm text-[11px] text-white/30 tracking-widest uppercase block mb-0.5">{label}</span>
                  <span className="font-dm text-sm text-white/70">{value}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-7 py-3 rounded-full bg-[#00F2A1] text-[#0b0f18] font-dm font-semibold text-sm hover:shadow-[0_0_32px_rgba(0,242,161,0.28)] transition-all duration-300"
              >
                Hire Me
              </button>
              <button className="flex items-center gap-2 px-7 py-3 rounded-full border border-white/12 text-white/55 font-dm text-sm hover:border-white/25 hover:text-white transition-all duration-300">
                <Download size={13} />
                Download CV
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}