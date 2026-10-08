import { motion } from 'framer-motion'

const styles = {
  primary: 'bg-accent text-black hover:bg-[#ff746d]',
  secondary: 'border border-line bg-surface text-slate-100 hover:border-slate-500',
  ghost: 'text-slate-300 hover:text-white',
}

export default function Button({ href, variant = 'primary', className = '', children, external, ...props }) {
  const cls = `inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold transition-colors ${styles[variant]} ${className}`
  const motionProps = { whileHover: { y: -2 }, whileTap: { scale: 0.98 }, transition: { duration: 0.15 } }
  if (href) {
    return (
      <motion.a href={href} className={cls} {...motionProps} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})} {...props}>
        {children}
      </motion.a>
    )
  }
  return <motion.button className={cls} {...motionProps} {...props}>{children}</motion.button>
}
