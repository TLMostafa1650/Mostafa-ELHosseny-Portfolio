export default function Card({ as: Tag = 'div', className = '', children, ...props }) {
  return <Tag className={`rounded-xl border border-line bg-surface p-6 ${className}`} {...props}>{children}</Tag>
}
