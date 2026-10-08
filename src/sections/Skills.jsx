import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading.jsx'
import Reveal from '../components/Reveal.jsx'
import Card from '../components/Card.jsx'
import { skills } from '../data/profile.js'

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-5 py-20" aria-labelledby="skills-title">
      <SectionHeading eyebrow="02 / skills" title="Tools I work with" id="skills-title" />
      <div className="grid gap-5 md:grid-cols-2">
        {Object.entries(skills).map(([group, items], i) => (
          <Reveal key={group} delay={i * 0.05}>
            <Card className="h-full">
              <h3 className="mb-4 font-semibold text-white">{group}</h3>
              <ul className="flex flex-wrap gap-2">
                {items.map((s) => (
                  <motion.li key={s} whileHover={{ y: -2 }} className="rounded-md border border-line bg-bg px-3 py-1.5 text-sm text-slate-300 transition-colors hover:border-accent/60 hover:text-white">{s}</motion.li>
                ))}
              </ul>
            </Card>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
