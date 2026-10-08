import SectionHeading from '../components/SectionHeading.jsx'
import Reveal from '../components/Reveal.jsx'
import Card from '../components/Card.jsx'
import { profile, stats } from '../data/profile.js'

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-5 py-20" aria-labelledby="about-title">
      <SectionHeading eyebrow="01 / about" title="A little about me" id="about-title" />
      <div className="grid items-start gap-10 lg:grid-cols-[320px_1fr]">
        <Reveal>
          <img src={profile.photo} alt="Portrait of Mostafa El-Hosseny" width="720" height="1002" loading="lazy" className="aspect-[4/5] w-full max-w-xs rounded-xl border border-line object-cover object-top" />
        </Reveal>
        <Reveal delay={0.1}>
          <div className="space-y-4 text-lg leading-relaxed text-slate-300">
            <p>I'm a Computer &amp; Data Science student at Alexandria University, specializing in Data Science while focusing professionally on Frontend Development.</p>
            <p>I work with React and modern JavaScript to turn designs into responsive, reusable, and maintainable interfaces. I enjoy UI implementation, consuming REST APIs, and solving the small problems that make an interface feel right.</p>
            <p>I use Git and GitHub for every project, from solo builds to team work, and I'm looking for internships and junior roles where I can keep growing.</p>
          </div>
          <dl className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {stats.map((s) => (
              <Card key={s.label} className="!p-5">
                <dt className="sr-only">{s.label}</dt>
                <dd className="text-2xl font-bold text-white">{s.value}</dd>
                <p className="mt-1 text-sm text-muted" aria-hidden="true">{s.label}</p>
              </Card>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  )
}
