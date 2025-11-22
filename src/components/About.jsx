import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-16">
      <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-2 gap-10 items-start">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="space-y-4"
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">About Me</h2>
          <p className="text-slate-600 leading-relaxed">
            I enjoy learning how people think and make decisions, and I’m always looking for ways to grow — whether through new ideas, teamwork, or real-world challenges. I value clarity, curiosity, and consistency. My goal is to build a career where I can solve meaningful problems, communicate well, and create positive impact for others.
          </p>
          <p className="text-slate-600 leading-relaxed">
            Outside of studies and projects, I like exploring tools for productivity, learning design basics, and reading about behavior and creativity. I try to keep things simple, thoughtful, and fun.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
          className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
        >
          <ul className="grid grid-cols-2 gap-4 text-sm text-slate-700">
            <li className="p-4 rounded-xl bg-slate-50">Curious mindset</li>
            <li className="p-4 rounded-xl bg-slate-50">Enjoys problem solving</li>
            <li className="p-4 rounded-xl bg-slate-50">Team-oriented</li>
            <li className="p-4 rounded-xl bg-slate-50">Interested in UX & behavior</li>
          </ul>
        </motion.div>
      </div>
    </section>
  )
}
