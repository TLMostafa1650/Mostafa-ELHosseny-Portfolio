import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Button from '../components/Button.jsx'
import { profile, heroTech } from '../data/profile.js'

const code = [
  ['const', ' developer', ' = {'],
  ['', '  name', ': "Mostafa",'],
  ['', '  stack', ': ["React", "JS", "Tailwind"],'],
  ['', '  focus', ': ["UI", "a11y", "performance"],'],
  ['', '  status', ': "open to opportunities",'],
  ['', '', '}'],
]

function CodeWindow() {
  return (
    <div className="relative">
      <div className="absolute -inset-4 -z-10 rounded-3xl bg-accent/5 blur-2xl" aria-hidden="true" />
      <div className="overflow-hidden rounded-xl border border-line bg-surface shadow-2xl">
        <div className="flex items-center gap-1.5 border-b border-line px-4 py-3" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" /><span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" /><span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
          <span className="ml-3 font-mono text-xs text-muted">developer.js</span>
        </div>
        <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-7 sm:text-sm" aria-label="Code snippet describing Mostafa's stack">
          {code.map((l, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 + i * 0.08, duration: 0.3 }}>
              <span className="text-accent">{l[0]}</span><span className="text-sky-300">{l[1]}</span><span className="text-slate-300">{l[2]}</span>
            </motion.div>
          ))}
        </pre>
        <div className="border-t border-line bg-bg/50 p-5" aria-hidden="true">
          <div className="grid grid-cols-3 gap-3">
            {[0, 1, 2].map((n) => <div key={n} className="h-12 rounded-md border border-line bg-surface" />)}
          </div>
          <div className="mt-3 h-2 w-2/3 rounded bg-line" /><div className="mt-2 h-2 w-1/2 rounded bg-line" />
        </div>
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-16 sm:pt-40">
      <div className="grid-bg absolute inset-0 -z-10" aria-hidden="true" />
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 lg:grid-cols-[1.1fr_1fr]">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1 text-xs text-slate-300">
            <span className="h-2 w-2 rounded-full bg-emerald-400" aria-hidden="true" />Available for Frontend Opportunities
          </span>
          <h1 className="mt-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Building modern interfaces that feel as good as they look.
          </h1>
          <p className="mt-3 text-lg font-semibold text-accent">Frontend Developer</p>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
            I build responsive, accessible, and high-performance web experiences using React and modern frontend technologies.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button href="#projects">View My Projects</Button>
            {profile.resume && <Button href={profile.resume} variant="secondary" download>Download Resume</Button>}
            <Button href="#contact" variant="ghost">Let's Work Together <ArrowRight size={16} /></Button>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
          <CodeWindow />
        </motion.div>
      </div>
      <ul className="mx-auto mt-16 flex max-w-6xl flex-wrap gap-x-3 gap-y-2 px-5 font-mono text-sm text-muted" aria-label="Core technologies">
        {heroTech.map((t, i) => (
          <li key={t} className="flex items-center gap-3">{t}{i < heroTech.length - 1 && <span aria-hidden="true" className="text-accent">•</span>}</li>
        ))}
      </ul>
    </section>
  )
}
