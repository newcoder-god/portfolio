import { motion } from 'framer-motion'

const skills = [
  { name: 'React.js', level: 90 },
  { name: 'Next.js', level: 85 },
  { name: 'Tailwind CSS', level: 95 },
  { name: 'JavaScript', level: 88 },
  { name: 'Framer Motion', level: 82 },
  { name: 'UI/UX Design', level: 80 },
]

const tags = [
  'HTML', 'CSS', 'JavaScript', 'React.js', 'Next.js', 'Tailwind CSS',
  'Framer Motion', 'Responsive Design', 'UI/UX Design', 'Git & GitHub',
  'Vercel', 'AI-assisted Dev', 'Glassmorphism', 'Landing Pages', 'Frontend Dev'
]

export default function Skills() {
  return (
    <section id="skills" className="relative py-28 md:py-36 overflow-hidden bg-[#0d1119]">
      <div className="absolute left-1/2 top-0 w-96 h-px -translate-x-1/2 bg-gradient-to-r from-transparent via-white/8 to-transparent" />
      <div className="absolute left-1/2 bottom-0 w-96 h-px -translate-x-1/2 bg-gradient-to-r from-transparent via-white/8 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="divider mb-4"
        >Tech Stack</motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="font-serif text-4xl md:text-5xl font-bold tracking-tight mb-16"
          style={{ fontFamily: '"DM Serif Display", serif' }}
        >
          Tools I <span className="italic" style={{ color: '#00F2A1' }}>master</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Skill bars */}
          <div className="space-y-6">
            {skills.map((s, i) => (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: .55, delay: i * .08 }}
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="font-dm font-medium text-sm text-white/70">{s.name}</span>
                  <span className="font-dm text-xs text-[#00F2A1]">{s.level}%</span>
                </div>
                <div className="h-1 rounded-full bg-white/7 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${s.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.1, delay: .2 + i * .08, ease: [.22,1,.36,1] }}
                    className="h-full rounded-full"
                    style={{ background: 'linear-gradient(90deg, #00F2A1, #00c8ff)' }}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Tag cloud */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: .6, delay: .2 }}
            className="flex flex-wrap gap-3 content-start"
          >
            {tags.map((tag, i) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, scale: .85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: .4, delay: i * .04 }}
                className="font-dm text-sm px-4 py-2 rounded-full border border-white/8 text-white/45 hover:border-[#00F2A1]/35 hover:text-[#00F2A1] transition-all duration-250 cursor-default"
              >
                {tag}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
