import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, MapPin, Github, Linkedin, Instagram, Send, CheckCircle } from 'lucide-react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [loading, setLoading] = useState(false)
  const [done, setDone] = useState(false)

  const submit = async (e) => {
    e.preventDefault()
    setLoading(true)
    await new Promise(r => setTimeout(r, 1100))
    setLoading(false)
    setDone(true)
  }

  return (
    <section id="contact" className="relative py-28 md:py-36 overflow-hidden bg-[#0d1119]">
      <div className="absolute left-1/2 top-0 w-96 h-px -translate-x-1/2 bg-gradient-to-r from-transparent via-white/8 to-transparent" />
      <div className="absolute left-1/2 bottom-1/3 w-64 h-64 rounded-full bg-[#00F2A1]/4 blur-[100px] pointer-events-none -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="divider mb-4"
        >Contact</motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="font-serif text-4xl md:text-5xl font-bold tracking-tight mb-4"
          style={{ fontFamily: '"DM Serif Display", serif' }}
        >
          Let's <span className="italic" style={{ color: '#00F2A1' }}>work together</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: .15 }}
          className="font-dm text-white/35 text-[15px] max-w-lg mb-16"
        >
          Have a project in mind? Drop a message and I'll get back within 24 hours.
        </motion.p>

        <div className="grid lg:grid-cols-2 gap-14 items-start">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .65 }}
          >
            {done ? (
              <div className="rounded-3xl border border-[#00F2A1]/20 bg-[#00F2A1]/4 p-12 flex flex-col items-center text-center gap-4">
                <CheckCircle size={44} className="text-[#00F2A1]" />
                <h3 className="font-serif font-bold text-2xl" style={{ fontFamily: '"DM Serif Display", serif' }}>Message sent!</h3>
                <p className="font-dm text-white/40 text-sm">I'll get back to you very soon.</p>
              </div>
            ) : (
              <form onSubmit={submit} className="space-y-4">
                {[
                  { name: 'name', label: 'Full Name', placeholder: 'John Doe', type: 'text' },
                  { name: 'email', label: 'Email Address', placeholder: 'john@company.com', type: 'email' },
                ].map(({ name, label, placeholder, type }) => (
                  <div key={name}>
                    <label className="font-dm text-[10px] text-white/30 tracking-widest uppercase block mb-2">{label}</label>
                    <input
                      type={type} placeholder={placeholder} required
                      value={form[name]}
                      onChange={e => setForm({ ...form, [name]: e.target.value })}
                      className="w-full rounded-xl px-5 py-3.5 bg-[#0f1320] border border-white/8 font-dm text-sm text-white placeholder-white/18 focus:border-[#00F2A1]/35 focus:outline-none transition-colors duration-300"
                    />
                  </div>
                ))}
                <div>
                  <label className="font-dm text-[10px] text-white/30 tracking-widest uppercase block mb-2">Message</label>
                  <textarea
                    rows={5} placeholder="Tell me about your project..." required
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    className="w-full rounded-xl px-5 py-3.5 bg-[#0f1320] border border-white/8 font-dm text-sm text-white placeholder-white/18 focus:border-[#00F2A1]/35 focus:outline-none transition-colors duration-300 resize-none"
                  />
                </div>
                <button
                  type="submit" disabled={loading}
                  className="w-full py-4 rounded-xl bg-[#00F2A1] text-[#0b0f18] font-dm font-semibold text-sm tracking-wide flex items-center justify-center gap-2.5 hover:shadow-[0_0_36px_rgba(0,242,161,0.28)] transition-all duration-300 disabled:opacity-60"
                >
                  {loading
                    ? <span className="w-4 h-4 border-2 border-[#0b0f18]/40 border-t-[#0b0f18] rounded-full animate-spin" />
                    : <><Send size={14} /> Send Message</>
                  }
                </button>
              </form>
            )}
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .65, delay: .12 }}
            className="space-y-5"
          >
            {/* Contact info cards */}
            {[
              { icon: Mail, label: 'Email', value: 'deekshantchoudhary2006@gmail.com', href: 'mailto:deekshantchoudhary2006@gmail.com' },
              { icon: MapPin, label: 'Location', value: 'Rajasthan, India', href: null },
            ].map(({ icon: Icon, label, value, href }) => (
              <div key={label} className="flex items-center gap-4 p-5 rounded-2xl border border-white/7 bg-[#0f1320]/50 hover:border-white/12 transition-colors duration-300">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: 'rgba(0,242,161,0.08)' }}>
                  <Icon size={16} style={{ color: '#00F2A1' }} />
                </div>
                <div>
                  <div className="font-dm text-[10px] text-white/25 tracking-widest uppercase mb-0.5">{label}</div>
                  {href
                    ? <a href={href} className="font-dm text-sm text-white/60 hover:text-white transition-colors duration-200">{value}</a>
                    : <div className="font-dm text-sm text-white/60">{value}</div>
                  }
                </div>
              </div>
            ))}

            {/* Socials */}
            <div className="p-5 rounded-2xl border border-white/7 bg-[#0f1320]/50">
              <div className="font-dm text-[10px] text-white/25 tracking-widest uppercase mb-4">Follow Me</div>
              <div className="flex gap-3">
                {[
                  { icon: Github, href: 'https://github.com/newcoder-god', label: 'GitHub' },
                  { icon: Linkedin, href: 'https://linkedin.com/in/deekshant-choudhary-3b8812284', label: 'LinkedIn' },
                  { icon: Instagram, href: 'https://instagram.com/entr0pic_', label: 'Instagram' },
                ].map(({ icon: Icon, href, label }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl border border-white/8 text-white/40 hover:text-[#00F2A1] hover:border-[#00F2A1]/25 transition-all duration-300 font-dm text-xs">
                    <Icon size={13} />
                    {label}
                  </a>
                ))}
              </div>
            </div>

            {/* Available */}
            <div className="p-5 rounded-2xl border border-[#00F2A1]/15 bg-[#00F2A1]/4">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00F2A1] animate-pulse" />
                <span className="font-dm font-medium text-white text-sm">Currently Available</span>
              </div>
              <p className="font-dm text-white/35 text-xs leading-relaxed">
                Open to freelance projects and startup partnerships. Response within 24 hours.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
