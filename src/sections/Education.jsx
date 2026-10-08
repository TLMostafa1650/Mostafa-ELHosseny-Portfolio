import { GraduationCap } from 'lucide-react'
import Reveal from '../components/Reveal.jsx'
import Card from '../components/Card.jsx'

export default function Education() {
  return (
    <section id="education" className="mx-auto max-w-6xl px-5 py-10" aria-labelledby="edu-title">
      <Reveal>
        <Card className="relative flex flex-col gap-5 overflow-hidden sm:flex-row sm:items-center">
          <GraduationCap size={120} strokeWidth={1} className="pointer-events-none absolute -right-6 -bottom-6 text-line" aria-hidden="true" />
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-line bg-bg text-accent"><GraduationCap /></div>
          <div className="relative">
            <h2 id="edu-title" className="text-lg font-semibold text-white">Faculty of Computer and Data Science — Alexandria University</h2>
            <p className="mt-1 text-muted">Computer Science · Data Science Specialization</p>
          </div>
        </Card>
      </Reveal>
    </section>
  )
}
