export default function SectionHeading({ eyebrow, title, id }) {
  return (
    <div className="mb-10">
      <p className="mb-2 font-mono text-sm text-accent">{eyebrow}</p>
      <h2 id={id} className="text-3xl font-bold tracking-tight text-white sm:text-4xl">{title}</h2>
    </div>
  )
}
