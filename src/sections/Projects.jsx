
import { motion } from 'framer-motion'
import { ArrowUpRight, ExternalLink } from 'lucide-react'

const projects = [
  {
    num: '01',
    title: 'FitCore Gym',
    category: 'Premium Fitness Website',
    desc: 'Premium cinematic gym website built with React and Tailwind CSS featuring smooth animations, responsive layouts, membership plans, trainer showcases, and modern fitness branding.',
    tags: ['React', 'Tailwind', 'Framer Motion'],
    color: '#7DA0CA',
    link: 'https://fitcore-gym-plum.vercel.app',
  },
  {
    num: '02',
    title: 'Maison Solis',
    category: 'Luxury Restaurant Website',
    desc: 'A premium fine-dining restaurant website featuring cinematic visuals, elegant menu showcases, immersive storytelling, reservation experiences, chef highlights, and responsive modern design.',
    tags: ['React', 'Tailwind', 'Framer Motion'],
    color: '#5483B3',
    link: 'https://maison-solis.vercel.app',
  },
  {
    num: '03',
    title: 'Startup Landing Page',
    category: 'Coming Soon',
    desc: 'A modern startup landing page focused on conversion, premium UI systems, feature showcases, trust-building sections, and scalable design.',
    tags: ['React', 'Tailwind', 'Vercel'],
    color: '#C1E8FF',
    link: '#',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="relative py-28 md:py-36 overflow-hidden">
      <div className="absolute right-0 bottom-1/4 w-80 h-80 rounded-full bg-[#7DA0CA]/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-16">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="divider mb-4"
              style={{ justifyContent: 'flex-start' }}
            >
              <span>Portfolio</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: .7 }}
              className="font-serif text-4xl md:text-5xl font-bold tracking-tight leading-tight"
              style={{ fontFamily: '"DM Serif Display", serif' }}
            >
              Selected{' '}
              <span className="italic" style={{ color: '#7DA0CA' }}>
                Work
              </span>
            </motion.h2>
          </div>

          <motion.a
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            href="https://github.com/newcoder-god"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-dm text-sm text-white/40 hover:text-[#7DA0CA] transition-colors duration-300 mb-1"
          >
            All on GitHub <ExternalLink size={12} />
          </motion.a>
        </div>

        {/* Projects */}
        <div className="space-y-5">
          {projects.map((p, i) => (
            <motion.a
              key={p.num}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: .65, delay: i * .1 }}
              className="group relative rounded-2xl border border-white/7 bg-[#0f1320]/40 hover:border-white/12 transition-all duration-500 overflow-hidden cursor-pointer block"
            >
              {/* Accent line */}
              <div
                className="absolute left-0 top-0 bottom-0 w-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: p.color }}
              />

              <div className="p-6 md:p-8 flex flex-col sm:flex-row gap-6 items-start sm:items-center">

                {/* Number */}
                <div
                  className="font-serif font-bold text-5xl shrink-0 w-16 leading-none opacity-[.07] select-none"
                  style={{
                    fontFamily: '"DM Serif Display", serif',
                    color: p.color
                  }}
                >
                  {p.num}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-3 mb-2">

                    <h3 className="font-dm font-semibold text-white text-[17px] group-hover:text-[#7DA0CA] transition-colors duration-300">
                      {p.title}
                    </h3>

                    <span className="font-dm text-[10px] text-white/25 tracking-widest uppercase px-2.5 py-0.5 rounded-full border border-white/8">
                      {p.category}
                    </span>

                  </div>

                  <p className="font-dm text-[rgba(232,232,232,0.45)] text-[13px] leading-relaxed mb-4 max-w-xl">
                    {p.desc}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {p.tags.map(tag => (
                      <span
                        key={tag}
                        className="font-dm text-[11px] px-3 py-1 rounded-full"
                        style={{
                          background: `${p.color}12`,
                          border: `1px solid ${p.color}22`,
                          color: p.color
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Arrow */}
                <div className="hidden sm:flex w-11 h-11 rounded-full border border-white/8 items-center justify-center shrink-0 group-hover:border-[#7DA0CA]/30 group-hover:bg-[#7DA0CA]/10 transition-all duration-300">
                  <ArrowUpRight
                    size={16}
                    className="text-white/20 group-hover:text-[#7DA0CA] transition-colors duration-300"
                  />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

