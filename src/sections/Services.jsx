import { motion } from 'framer-motion'

const services = [
  {
    icon: '⬡',
    title: 'Modern Website Development',
    desc: 'Full-stack websites built with React, Next.js and Tailwind — fast, scalable, production-ready.',
  },
  {
    icon: '◈',
    title: 'Cinematic UI Design',
    desc: 'Premium dark interfaces with glassmorphism, layered depth, and cinematic visual hierarchy.',
  },
  {
    icon: '▣',
    title: 'Landing Pages',
    desc: 'High-converting landing pages with compelling CTAs, bold typography and luxury aesthetics.',
  },
  {
    icon: '⬙',
    title: 'Responsive Web Design',
    desc: 'Pixel-perfect layouts that look flawless on every screen — mobile, tablet, and desktop.',
  },
  {
    icon: '⬡',
    title: 'Smooth Animations',
    desc: 'Framer Motion-powered micro-interactions and scroll animations that bring UIs to life.',
  },
  {
    icon: '◈',
    title: 'Business Websites',
    desc: 'Professional business sites for startups and brands that need to stand out from the crowd.',
  },
]

export default function Services() {
  return (
    <section id="services" className="relative py-28 md:py-36 overflow-hidden">
      <div className="absolute right-0 top-1/2 w-80 h-80 rounded-full bg-[#00F2A1]/3 blur-[130px] pointer-events-none -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="divider mb-4 md:justify-start"
              style={{ justifyContent: 'flex-start' }}
            >
              <span>What I Do</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: .7 }}
              className="font-serif text-4xl md:text-5xl font-bold tracking-tight leading-tight"
              style={{ fontFamily: '"DM Serif Display", serif' }}
            >
              My{' '}
              <span className="italic" style={{ color: '#00F2A1' }}>Services</span>
            </motion.h2>
          </div>

          {/* Ghost watermark text */}
          <div className="font-serif font-bold text-7xl md:text-8xl opacity-[.04] pointer-events-none select-none"
            style={{ fontFamily: '"DM Serif Display", serif' }}>
            SERVICES
          </div>
        </div>

        {/* 3×2 grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: .6, delay: i * .08 }}
              className="service-card rounded-2xl p-7 bg-[#0f1320]/50 group cursor-default"
            >
              {/* Icon */}
              <div className="w-11 h-11 rounded-xl border border-white/8 flex items-center justify-center mb-5 group-hover:border-[#00F2A1]/30 transition-colors duration-300"
                style={{ background: 'rgba(0,242,161,0.06)' }}>
                <span className="text-xl" style={{ color: '#00F2A1' }}>{s.icon}</span>
              </div>

              <h3 className="font-dm font-semibold text-white text-[15px] mb-3 leading-snug">
                {s.title}
              </h3>
              <p className="font-dm text-[rgba(232,232,232,0.38)] text-[13px] leading-relaxed">
                {s.desc}
              </p>

              {/* Hover arrow */}
              <div className="mt-5 flex items-center gap-2 text-[#00F2A1] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="font-dm text-[11px] tracking-widest uppercase">Learn more</span>
                <svg width="16" height="6" viewBox="0 0 16 6" fill="none">
                  <path d="M0 3H14M11 1L14 3L11 5" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
