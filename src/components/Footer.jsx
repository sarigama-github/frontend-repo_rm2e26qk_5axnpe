import { FileDown } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="py-10">
      <div className="mx-auto max-w-6xl px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-slate-600">© 2025 Muhammad Zahron Widy Fernanda. All rights reserved.</p>
        <a href="#" className="inline-flex items-center gap-2 rounded-full bg-slate-900 text-white px-4 py-2 text-sm shadow hover:opacity-90">
          <FileDown size={16} /> Download CV
        </a>
      </div>
    </footer>
  )
}
