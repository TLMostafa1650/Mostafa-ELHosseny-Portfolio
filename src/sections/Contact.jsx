import { useState } from 'react'
import { Github, Linkedin, Mail } from 'lucide-react'
import Button from '../components/Button.jsx'
import Reveal from '../components/Reveal.jsx'
import { profile } from '../data/profile.js'

const emailOk = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)

function validate(v) {
  const e = {}
  if (v.name.trim().length < 2) e.name = 'Please enter your name.'
  if (!emailOk(v.email)) e.email = 'Please enter a valid email address.'
  if (v.message.trim().length < 10) e.message = 'Message should be at least 10 characters.'
  return e
}

export default function Contact() {
  const [values, setValues] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('')

  const onChange = (e) => setValues((v) => ({ ...v, [e.target.name]: e.target.value }))

  const onSubmit = (e) => {
    e.preventDefault()
    const errs = validate(values)
    setErrors(errs)
    if (Object.keys(errs).length) { setStatus(''); return }
    if (profile.email) {
      // No backend: opens the visitor's email app with the message pre-filled.
      const subject = encodeURIComponent(`Portfolio message from ${values.name}`)
      const body = encodeURIComponent(`${values.message}\n\n— ${values.name} (${values.email})`)
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
      setStatus('Opening your email app to send the message…')
    } else {
      setStatus('This form is not connected to an email service yet. Please reach out through GitHub for now.')
    }
  }

  const field = 'mt-1.5 w-full rounded-lg border border-line bg-bg px-4 py-2.5 text-slate-100 placeholder:text-slate-600'
  const err = (k) => errors[k] && <p id={`${k}-err`} role="alert" className="mt-1 text-xs text-accent">{errors[k]}</p>

  return (
    <section id="contact" className="mx-auto max-w-6xl px-5 py-20" aria-labelledby="contact-title">
      <div className="grid gap-12 lg:grid-cols-2">
        <Reveal>
          <p className="mb-2 font-mono text-sm text-accent">06 / contact</p>
          <h2 id="contact-title" className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Have a project in mind? Let's build it.</h2>
          <p className="mt-4 text-lg text-muted">I'm currently open to frontend opportunities, internships, freelance projects, and collaborations.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            {profile.email && <Button href={`mailto:${profile.email}`}><Mail size={16} />Email Me</Button>}
            {profile.linkedin && <Button href={profile.linkedin} variant="secondary" external><Linkedin size={16} />LinkedIn</Button>}
            <Button href={profile.github} variant="secondary" external><Github size={16} />GitHub</Button>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <form onSubmit={onSubmit} noValidate className="space-y-5 rounded-xl border border-line bg-surface p-6">
            <div>
              <label htmlFor="name" className="text-sm font-medium text-slate-200">Name</label>
              <input id="name" name="name" value={values.name} onChange={onChange} autoComplete="name" aria-invalid={!!errors.name} aria-describedby={errors.name ? 'name-err' : undefined} className={field} placeholder="Your name" />
              {err('name')}
            </div>
            <div>
              <label htmlFor="email" className="text-sm font-medium text-slate-200">Email</label>
              <input id="email" name="email" type="email" value={values.email} onChange={onChange} autoComplete="email" aria-invalid={!!errors.email} aria-describedby={errors.email ? 'email-err' : undefined} className={field} placeholder="you@example.com" />
              {err('email')}
            </div>
            <div>
              <label htmlFor="message" className="text-sm font-medium text-slate-200">Message</label>
              <textarea id="message" name="message" rows={5} value={values.message} onChange={onChange} aria-invalid={!!errors.message} aria-describedby={errors.message ? 'message-err' : undefined} className={field} placeholder="Tell me about your project or opportunity" />
              {err('message')}
            </div>
            <Button type="submit" className="w-full">Send Message</Button>
            <p role="status" className="min-h-[1.25rem] text-sm text-muted">{status}</p>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
