import { motion } from 'framer-motion'

const works = [
  {
    title: 'Behavior Notes',
    desc: 'A short write-up exploring decision-making and motivation.',
    link: '#',
    file: '#'
  },
  {
    title: 'Campus Project',
    desc: 'Collaborative project focusing on research and communication.',
    link: '#',
    file: '#'
  },
  {
    title: 'Design Exercise',
    desc: 'Simple UI concepts with soft colors and clean layout.',
    link: '#',
    file: '#'
  }
]

const container = {
  hidden: { opacity: 0 },
  visible: (i = 1) => ({
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 * i }
  })
}

const item = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 }
}

export default function Works() {
  return (
    <section id="works" className="py-16 bg-gradient-to-b from-[#F8F6F1] to-transparent">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex items-end justify-between mb-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">Works & Competitions</h2>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-3 gap-6"
        >
          {works.map((w, i) => (
            <motion.div key={i} variants={item} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-slate-900">{w.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{w.desc}</p>
              <div className="mt-4 flex items-center gap-3">
                <a href={w.link} className="inline-flex items-center justify-center rounded-full bg-slate-900 text-white px-4 py-2 text-sm hover:opacity-90 transition">
                  View Details
                </a>
                <a href={w.file} download className="inline-flex items-center justify-center rounded-full border border-slate-300 px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 transition">
                  Download Work
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
