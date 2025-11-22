import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="pt-28 pb-12 md:pt-36">
      <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-[320px_1fr] gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="flex md:block justify-center"
        >
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=crop&q=80&w=480"
              srcSet="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=crop&q=80&w=240 240w, https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=crop&q=80&w=480 480w, https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=crop&q=80&w=720 720w"
              sizes="(min-width: 768px) 288px, 160px"
              alt="Profile"
              className="h-40 w-40 md:h-72 md:w-72 rounded-full object-cover border-4 border-white shadow-lg"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#9AC5E8]/30 to-[#EDE7DB]/30 mix-blend-overlay" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.8, ease: 'easeOut' }}
          className="space-y-5"
        >
          <div>
            <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-slate-900">
              Muhammad Zahron Widy Fernanda
            </h1>
            <p className="mt-3 text-slate-600 max-w-2xl">
              An individual who is enthusiastic about self-development, exploring creative ideas, and understanding human behavior.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
