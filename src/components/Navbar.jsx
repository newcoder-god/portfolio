import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const links = ['Home', 'About', 'Services', 'Projects', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const go = (id) => {
    const el = document.getElementById(id === 'Home' ? 'hero' : id.toLowerCase())
    el?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: .7, ease: [.22,1,.36,1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'py-3 bg-[#0b0f18]/85 backdrop-blur-2xl border-b border-white/5' : 'py-6'}`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-lg bg-[#00F2A1] flex items-center justify-center">
            <span className="font-serif font-black text-[#0b0f18] text-sm leading-none">D</span>
          </div>
          <span className="font-dm font-semibold text-white tracking-wide text-sm hidden sm:block">Deekshant</span>
        </button>

        {/* Desktop */}
        <nav className="hidden md:flex items-center gap-9">
          {links.map(l => (
            <button key={l} onClick={() => go(l)} className="nl font-dm text-[13px] text-[rgba(232,232,232,0.5)] hover:text-white transition-colors duration-300 tracking-wide">
              {l}
            </button>
          ))}
        </nav>

        {/* CTA */}
        <button
          onClick={() => go('Contact')}
          className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-full text-[#0b0f18] bg-[#00F2A1] font-dm font-semibold text-xs tracking-wide hover:shadow-[0_0_28px_rgba(0,242,161,0.35)] transition-all duration-300"
        >
          Hire Me
        </button>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-white/60 hover:text-white transition-colors">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden bg-[#0b0f18]/95 backdrop-blur-xl border-t border-white/5"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {links.map((l, i) => (
                <motion.button
                  key={l}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * .06 }}
                  onClick={() => go(l)}
                  className="text-left font-dm text-lg text-white/70 hover:text-[#00F2A1] transition-colors"
                >
                  {l}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
