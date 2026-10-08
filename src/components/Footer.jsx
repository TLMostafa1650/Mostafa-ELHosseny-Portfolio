import { profile } from '../data/profile.js'

export default function Footer() {
  const link = 'text-sm text-muted hover:text-white'
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-mono text-lg font-semibold text-white">Mostafa<span className="text-accent">.dev</span></p>
          <p className="mt-1 text-sm text-muted">Frontend Developer building modern web experiences.</p>
        </div>
        <ul className="flex gap-6">
          <li><a className={link} href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a></li>
          {profile.linkedin && <li><a className={link} href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a></li>}
          {profile.email && <li><a className={link} href={`mailto:${profile.email}`}>Email</a></li>}
        </ul>
      </div>
      <p className="border-t border-line py-5 text-center text-xs text-muted">© 2026 Mostafa El-Hosseny. All rights reserved.</p>
    </footer>
  )
}
