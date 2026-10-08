import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'
import Badge from './Badge.jsx'
import { profile } from '../data/profile.js'

// Browser-window preview. Shows the screenshot if provided, otherwise a clean placeholder-free mock.
export function ProjectPreview({ project, large = false }) {
  return (
    <div className="overflow-hidden rounded-lg border border-line bg-bg">
      <div className="flex items-center gap-1.5 border-b border-line px-3 py-2" aria-hidden="true">
        <span className="h-2.5 w-2.5 rounded-full bg-line" /><span className="h-2.5 w-2.5 rounded-full bg-line" /><span className="h-2.5 w-2.5 rounded-full bg-line" />
      </div>
      {project.image ? (
        <img src={project.image} alt={`${project.name} screenshot`} loading="lazy" className="aspect-[16/9] w-full object-cover" />
      ) : (
        <div className={`flex aspect-[16/9] flex-col items-center justify-center gap-2 bg-[radial-gradient(circle_at_30%_20%,#ff5a5214,transparent_60%)] p-4 text-center`}>
          <span className={`font-mono text-accent ${large ? 'text-lg' : 'text-sm'}`}>{'</>'}</span>
          <span className={`font-semibold text-white ${large ? 'text-2xl' : 'text-base'}`}>{project.name}</span>
          <span className="font-mono text-xs text-muted">{project.tech.slice(0, 3).join(' · ')}</span>
        </div>
      )}
    </div>
  )
}

export default function ProjectCard({ project, onOpen }) {
  const githubHref = project.github || profile.github
  return (
    <motion.article whileHover={{ y: -4 }} transition={{ duration: 0.2 }} className="flex flex-col rounded-xl border border-line bg-surface p-4 transition-colors hover:border-slate-600">
      <button onClick={() => onOpen(project)} className="text-left" aria-label={`View details for ${project.name}`}>
        <ProjectPreview project={project} />
        <h3 className="mt-5 text-xl font-semibold text-white">{project.name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">{project.description}</p>
      </button>
      <div className="mt-4 flex flex-wrap gap-2">{project.tech.map((t) => <Badge key={t}>{t}</Badge>)}</div>
      <div className="mt-5 flex gap-4 pt-1 text-sm font-medium">
        <a href={githubHref} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-slate-300 hover:text-white">
          <Github size={16} />{project.github ? 'GitHub' : 'GitHub profile'}
        </a>
        {project.demo && (
          <a href={project.demo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-accent hover:underline">
            <ExternalLink size={16} />Live Demo
          </a>
        )}
        <button onClick={() => onOpen(project)} className="ml-auto text-muted hover:text-white">Details →</button>
      </div>
    </motion.article>
  )
}
