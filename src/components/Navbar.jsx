import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Github, Linkedin, Menu, X } from 'lucide-react'
import Button from './Button.jsx'
import useScrolled from '../hooks/useScrolled.js'
import { profile, navLinks } from '../data/profile.js'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const scrolled = useScrolled()
  const iconCls = 'rounded-md p-2 text-slate-300 transition-colors hover:text-white'

  return (
    <header className={`fixed inset-x-0 top-0 z-40 border-b transition-all duration-300 ${scrolled ? 'border-line bg-bg/90 py-2 backdrop-blur' : 'border-transparent py-4'}`}>
      <nav aria-label="Main" className="mx-auto flex max-w-6xl items-center justify-between px-5">
        <a href="#home" className="font-mono text-lg font-semibold text-white">
          Mostafa<span className="text-accent">.dev</span>
        </a>

        <ul className="hidden items-center gap-7 lg:flex">
          {navLinks.map((l) => (
            <li key={l.href}><a href={l.href} className="text-sm text-muted transition-colors hover:text-white">{l.label}</a></li>
          ))}
        </ul>

        <div className="hidden items-center gap-1 lg:flex">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className={iconCls}><Github size={20} /></a>
          {profile.linkedin && <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={iconCls}><Linkedin size={20} /></a>}
          {profile.resume && <Button href={profile.resume} variant="secondary" className="ml-2 !py-2" download>Resume</Button>}
        </div>

        <button className="rounded-md p-2 text-slate-200 lg:hidden" onClick={() => setOpen((o) => !o)} aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? 'Close menu' : 'Open menu'}>
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div id="mobile-menu" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.2 }} className="overflow-hidden border-t border-line bg-bg lg:hidden">
            <ul className="flex flex-col px-5 py-3">
              {navLinks.map((l) => (
                <li key={l.href}><a href={l.href} onClick={() => setOpen(false)} className="block py-3 text-slate-200">{l.label}</a></li>
              ))}
              <li className="flex items-center gap-2 py-3">
                <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className={iconCls}><Github size={20} /></a>
                {profile.linkedin && <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={iconCls}><Linkedin size={20} /></a>}
                {profile.resume && <Button href={profile.resume} variant="secondary" download>Resume</Button>}
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
