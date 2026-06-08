import { Github, Linkedin, Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="py-10 border-t border-white/6">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-5">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="font-serif font-bold text-xl tracking-tight flex items-center gap-1"
          style={{ fontFamily: '"DM Serif Display", serif' }}
        >
          <span className="text-white">Deekshant</span>
          <span style={{ color: '#00F2A1' }}>.</span>
        </button>

        <p className="font-dm text-white/20 text-xs tracking-wide order-last md:order-none">
          © {new Date().getFullYear()} Deekshant Choudhary — Crafting Cinematic Digital Experiences
        </p>

        <div className="flex items-center gap-3">
          {[
            { icon: Github, href: 'https://github.com/newcoder-god' },
            { icon: Linkedin, href: 'https://linkedin.com/in/deekshant-choudhary-3b8812284' },
            { icon: Instagram, href: 'https://instagram.com/entr0pic_' },
          ].map(({ icon: Icon, href }, i) => (
            <a key={i} href={href} target="_blank" rel="noopener noreferrer"
              className="w-8 h-8 rounded-full border border-white/8 flex items-center justify-center text-white/30 hover:text-[#00F2A1] hover:border-[#00F2A1]/25 transition-all duration-300">
              <Icon size={13} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
