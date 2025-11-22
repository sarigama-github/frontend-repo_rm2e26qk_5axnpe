import { motion } from 'framer-motion'
import { Instagram, Linkedin } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-16">
      <div className="mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="grid md:grid-cols-2 gap-10"
        >
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">Contact</h2>
            <p className="mt-2 text-slate-600">Feel free to reach out — I’d love to connect.</p>
            <div className="mt-4 flex items-center gap-3">
              <a href="https://instagram.com" target="_blank" className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-3 py-2 text-sm text-slate-700 hover:bg-slate-50"><Instagram size={16}/>Instagram</a>
              <a href="https://linkedin.com" target="_blank" className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-3 py-2 text-sm text-slate-700 hover:bg-slate-50"><Linkedin size={16}/>LinkedIn</a>
            </div>
          </div>

          <form className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm grid grid-cols-1 gap-4">
            <div>
              <label className="block text-sm text-slate-600 mb-1">Name</label>
              <input type="text" className="w-full rounded-lg border border-slate-300 px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-[#9AC5E8]" placeholder="Your name"/>
            </div>
            <div>
              <label className="block text-sm text-slate-600 mb-1">Email</label>
              <input type="email" className="w-full rounded-lg border border-slate-300 px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-[#9AC5E8]" placeholder="you@example.com"/>
            </div>
            <div>
              <label className="block text-sm text-slate-600 mb-1">Message</label>
              <textarea rows="4" className="w-full rounded-lg border border-slate-300 px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-[#9AC5E8]" placeholder="Write a message..." />
            </div>
            <button type="submit" className="inline-flex justify-center rounded-full bg-slate-900 text-white px-4 py-2 text-sm hover:opacity-90">Send Message</button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
