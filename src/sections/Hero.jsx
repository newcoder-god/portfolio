import { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, Mail, MapPin, Github, Linkedin, Instagram } from 'lucide-react'

const WORDS = ['Web Developer', 'UI Designer', 'React Expert', 'Creative Coder']

export default function Hero() {
  const [wordIdx, setWordIdx] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)
  const timeout = useRef(null)

  useEffect(() => {
    const word = WORDS[wordIdx]
    if (!deleting && displayed.length < word.length) {
      timeout.current = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), 80)
    } else if (!deleting && displayed.length === word.length) {
      timeout.current = setTimeout(() => setDeleting(true), 2200)
    } else if (deleting && displayed.length > 0) {
      timeout.current = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45)
    } else if (deleting && displayed.length === 0) {
      setDeleting(false)
      setWordIdx((wordIdx + 1) % WORDS.length)
    }
    return () => clearTimeout(timeout.current)
  }, [displayed, deleting, wordIdx])

  return (
    <section id="hero" className="relative min-h-screen flex flex-col overflow-hidden">

      <div className="flex-1 grid lg:grid-cols-2 min-h-screen">

        {/* Left: Text */}
        <div className="flex flex-col justify-center px-8 md:px-16 lg:px-20 pt-28 pb-16 relative z-10">

          <motion.div
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .6, delay: .3 }}
            className="inline-flex items-center gap-2.5 mb-10 w-fit"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#00F2A1] animate-pulse" />
            <span className="font-dm text-[11px] text-[rgba(232,232,232,0.4)] tracking-[.22em] uppercase">Available for work</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .6, delay: .4 }}
            className="font-dm text-[rgba(232,232,232,0.45)] text-base mb-3 tracking-wide"
          >
            Hi There! 👋
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .75, delay: .5, ease: [.22,1,.36,1] }}
            className="font-serif text-5xl md:text-6xl xl:text-7xl font-bold leading-[1.08] tracking-tight mb-4"
            style={{ fontFamily: '"DM Serif Display", serif' }}
          >
            I am{' '}
            <span style={{ color: '#00F2A1' }}>
              {displayed}<span className="typed-cursor">|</span>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .65, delay: .65 }}
            className="font-dm text-[rgba(232,232,232,0.45)] text-lg md:text-xl mb-10 leading-snug max-w-sm"
          >
            Crafting cinematic digital experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .6, delay: .78 }}
            className="flex flex-wrap gap-4 mb-14"
          >
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-7 py-3.5 rounded-full bg-[#00F2A1] text-[#0b0f18] font-dm font-semibold text-sm tracking-wide hover:shadow-[0_0_36px_rgba(0,242,161,0.3)] transition-all duration-300"
            >
              Contact Me
            </button>
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-7 py-3.5 rounded-full border border-white/12 text-white/60 font-dm text-sm tracking-wide hover:border-white/30 hover:text-white transition-all duration-300"
            >
              View Work
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ duration: .6, delay: .95 }}
            className="flex flex-wrap items-center gap-6 pt-6 border-t border-white/7"
          >
            {[
              { icon: Mail, label: 'Email', value: 'deekshantchoudhary2006@gmail.com', href: 'mailto:deekshantchoudhary2006@gmail.com' },
              { icon: MapPin, label: 'Location', value: 'Rajasthan, India', href: null },
            ].map(({ icon: Icon, label, value, href }) => (
              <div key={label} className="flex items-start gap-3">
                <Icon size={14} className="text-[#00F2A1] mt-0.5 shrink-0" />
                <div>
                  <div className="font-dm text-[10px] text-white/30 tracking-widest uppercase mb-0.5">{label}</div>
                  {href
                    ? <a href={href} className="font-dm text-xs text-white/55 hover:text-white transition-colors duration-200">{value}</a>
                    : <div className="font-dm text-xs text-white/55">{value}</div>
                  }
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right: Photo */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: .35, ease: [.22,1,.36,1] }}
          className="relative hidden lg:block"
        >
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0b0f18] to-transparent z-10 pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0b0f18] to-transparent z-10 pointer-events-none" />

          <img
            src="/profile.jpeg"
            alt="Deekshant Choudhary"
            className="w-full h-full object-cover object-top"
            style={{ filter: 'grayscale(15%) contrast(1.05)' }}
          />

          <motion.div
            initial={{ opacity: 0, scale: .85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.1 }}
            className="absolute bottom-24 left-12 z-20 bg-[#0b0f18]/90 backdrop-blur-lg border border-white/10 rounded-2xl px-5 py-4"
          >
            <div className="font-serif font-bold text-3xl" style={{ color: '#00F2A1', fontFamily: '"DM Serif Display", serif' }}>3</div>
            <div className="font-dm text-[11px] text-white/40 mt-0.5">Projects Completed</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: .85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.25 }}
            className="absolute top-32 right-10 z-20 bg-[#0b0f18]/90 backdrop-blur-lg border border-white/10 rounded-2xl px-5 py-4"
          >
            <div className="font-serif font-bold text-3xl" style={{ color: '#00F2A1', fontFamily: '"DM Serif Display", serif' }}>100%</div>
            <div className="font-dm text-[11px] text-white/40 mt-0.5">Client Satisfaction</div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, x: -16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.3 }}
        className="hidden xl:flex fixed left-6 top-1/2 -translate-y-1/2 flex-col items-center gap-4 z-40"
      >
        <div className="w-px h-16 bg-white/10" />
        {[
          { icon: Github, href: 'https://github.com/newcoder-god' },
          { icon: Linkedin, href: 'https://linkedin.com/in/deekshant-choudhary-3b8812284' },
          { icon: Instagram, href: 'https://instagram.com/entr0pic_' },
        ].map(({ icon: Icon, href }, i) => (
          <a key={i} href={href} target="_blank" rel="noopener noreferrer"
            className="text-white/25 hover:text-[#00F2A1] transition-colors duration-300">
            <Icon size={16} />
          </a>
        ))}
        <div className="w-px h-16 bg-white/10" />
      </motion.div>

      <motion.button
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 group"
      >
        <span className="font-dm text-[10px] text-white/20 tracking-[.25em] uppercase">Scroll</span>
        <motion.div animate={{ y: [0, 5, 0] }} transition={{ duration: 1.8, repeat: Infinity }}>
          <ArrowDown size={13} className="text-[#00F2A1]/50" />
        </motion.div>
      </motion.button>
    </section>
  )
}