import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Github, ExternalLink, X } from 'lucide-react'
import Badge from './Badge.jsx'
import { ProjectPreview } from './ProjectCard.jsx'
import { profile } from '../data/profile.js'

function Block({ title, children }) {
  return (
    <div>
      <h4 className="mb-1.5 font-mono text-xs uppercase tracking-wider text-accent">{title}</h4>
      <div className="text-sm leading-relaxed text-slate-300">{children}</div>
    </div>
  )
}

export default function ProjectModal({ project, onClose }) {
  const closeRef = useRef(null)

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <motion.div className="fixed inset-0 z-50 flex items-end justify-center bg-black/70 p-0 sm:items-center sm:p-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.15 }} onClick={onClose}>
      <motion.div role="dialog" aria-modal="true" aria-labelledby="modal-title" onClick={(e) => e.stopPropagation()} initial={{ y: 24, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 24, opacity: 0 }} transition={{ duration: 0.2 }} className="max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-t-2xl border border-line bg-surface p-5 sm:rounded-2xl sm:p-8">
        <div className="mb-5 flex items-start justify-between gap-4">
          <h3 id="modal-title" className="text-2xl font-bold text-white">{project.name}</h3>
          <button ref={closeRef} onClick={onClose} aria-label="Close project details" className="rounded-md p-1.5 text-muted hover:text-white"><X /></button>
        </div>
        <ProjectPreview project={project} large />
        <p className="mt-5 text-slate-300">{project.description}</p>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          <Block title="Problem">{project.problem}</Block>
          <Block title="Solution">{project.solution}</Block>
          <Block title="Key features"><ul className="list-disc space-y-1 pl-4">{project.features.map((f) => <li key={f}>{f}</li>)}</ul></Block>
          <Block title="Challenges">{project.challenges}</Block>
          <Block title="What I learned">{project.learned}</Block>
          <Block title="Technologies"><div className="flex flex-wrap gap-2">{project.tech.map((t) => <Badge key={t}>{t}</Badge>)}</div></Block>
        </div>
        <div className="mt-8 flex flex-wrap gap-4 text-sm font-medium">
          <a href={project.github || profile.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 rounded-lg border border-line px-4 py-2 text-slate-200 hover:border-slate-500"><Github size={16} />{project.github ? 'GitHub' : 'GitHub profile'}</a>
          {project.demo && <a href={project.demo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 rounded-lg bg-accent px-4 py-2 text-black hover:bg-[#ff746d]"><ExternalLink size={16} />Live Demo</a>}
        </div>
      </motion.div>
    </motion.div>
  )
}
