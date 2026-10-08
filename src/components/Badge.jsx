export default function Badge({ children, className = '' }) {
  return (
    <span className={`inline-flex items-center rounded-md border border-line bg-bg px-2.5 py-1 font-mono text-xs text-slate-300 ${className}`}>
      {children}
    </span>
  )
}
