import { useState } from 'react'
import { Menu, X, FileDown } from 'lucide-react'

const NAV_LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#works', label: 'Works' },
  { href: '#hobbies', label: 'Hobbies' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mt-4 rounded-2xl border border-slate-200/60 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 shadow-sm">
          <div className="flex items-center justify-between px-6 py-4">
            <a href="#home" className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-gradient-to-br from-[#9AC5E8] to-[#EDE7DB] border border-white shadow-inner" />
              <span className="font-semibold text-slate-800">MZWF</span>
            </a>

            <nav className="hidden md:flex items-center gap-6 text-slate-700">
              {NAV_LINKS.map((l) => (
                <a key={l.href} href={l.href} className="hover:text-slate-900 transition-colors">
                  {l.label}
                </a>
              ))}
              <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-slate-900 text-white px-4 py-2 text-sm shadow hover:shadow-md transition-shadow">
                <FileDown size={16} />
                Download CV
              </a>
            </nav>

            <button className="md:hidden inline-flex items-center justify-center rounded-lg border border-slate-300/70 p-2 text-slate-700 bg-white/70" onClick={() => setOpen((s) => !s)} aria-label="Toggle menu">
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-slate-200/70 px-6 py-3 grid gap-2 bg-white/80">
              {NAV_LINKS.map((l) => (
                <a key={l.href} href={l.href} className="py-2 text-slate-700" onClick={() => setOpen(false)}>
                  {l.label}
                </a>
              ))}
              <a href="#contact" onClick={() => setOpen(false)} className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 text-white px-4 py-2 text-sm shadow">
                <FileDown size={16} /> Download CV
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
