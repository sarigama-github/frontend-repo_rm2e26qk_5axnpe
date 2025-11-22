import { motion } from 'framer-motion'
import hobbiesData from '../data/hobbies.json'
import { BookOpen, Music, Dumbbell } from 'lucide-react'

const ICONS = {
  dumbbell: Dumbbell,
  book: BookOpen,
  music: Music
}

export default function Hobbies() {
  const hobbies = hobbiesData

  return (
    <section id="hobbies" className="py-16">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-6">Hobbies</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {hobbies.map((h, i) => {
            const Icon = ICONS[h.icon] || BookOpen
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: i * 0.05 }}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition will-change-transform"
                whileHover={{ scale: 1.02, rotate: 0 }}
              >
                <motion.div
                  className="h-12 w-12 rounded-xl bg-[#EAF3FB] text-[#3B82F6] flex items-center justify-center mb-4"
                  whileHover={{ rotate: [0, -6, 6, 0] }}
                  transition={{ duration: 0.6 }}
                >
                  <Icon />
                </motion.div>
                <h3 className="font-semibold text-slate-900">{h.name}</h3>
                <p className="text-sm text-slate-600 mt-1">{h.desc}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
