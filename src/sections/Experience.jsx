import SectionHeading from '../components/SectionHeading.jsx'
import Reveal from '../components/Reveal.jsx'
import { experience } from '../data/profile.js'

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-5 py-20" aria-labelledby="exp-title">
      <SectionHeading eyebrow="04 / experience" title="Experience" id="exp-title" />
      <ol className="relative ml-2 border-l border-line">
        {experience.map((e, i) => (
          <li key={e.title} className="mb-10 ml-8 last:mb-0">
            <span className="absolute -left-[7px] mt-1.5 h-3.5 w-3.5 rounded-full border-2 border-accent bg-bg" aria-hidden="true" />
            <Reveal delay={i * 0.05}>
              <h3 className="text-lg font-semibold text-white">{e.title}</h3>
              <p className="font-mono text-sm text-accent">{e.org}</p>
              <p className="mt-2 max-w-2xl text-muted">{e.text}</p>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  )
}
