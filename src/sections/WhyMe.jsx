import { Code2, Smartphone, MousePointerClick, TrendingUp } from 'lucide-react'
import SectionHeading from '../components/SectionHeading.jsx'
import Reveal from '../components/Reveal.jsx'
import Card from '../components/Card.jsx'
import { why } from '../data/profile.js'

const icons = [Code2, Smartphone, MousePointerClick, TrendingUp]

export default function WhyMe() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20" aria-labelledby="why-title">
      <SectionHeading eyebrow="05 / why me" title="Why work with me" id="why-title" />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {why.map((w, i) => {
          const Icon = icons[i]
          return (
            <Reveal key={w.title} delay={i * 0.05}>
              <Card className="h-full">
                <Icon className="mb-4 text-accent" size={22} aria-hidden="true" />
                <h3 className="font-semibold text-white">{w.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{w.text}</p>
              </Card>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
