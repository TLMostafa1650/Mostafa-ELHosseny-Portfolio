import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import SectionHeading from '../components/SectionHeading.jsx'
import Reveal from '../components/Reveal.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import ProjectModal from '../components/ProjectModal.jsx'
import { projects } from '../data/projects.js'

export default function Projects() {
  const [active, setActive] = useState(null)
  return (
    <section id="projects" className="mx-auto max-w-6xl px-5 py-20" aria-labelledby="projects-title">
      <SectionHeading eyebrow="03 / projects" title="Featured projects" id="projects-title" />
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.id} delay={(i % 2) * 0.08}><ProjectCard project={p} onOpen={setActive} /></Reveal>
        ))}
      </div>
      <AnimatePresence>{active && <ProjectModal project={active} onClose={() => setActive(null)} />}</AnimatePresence>
    </section>
  )
}
