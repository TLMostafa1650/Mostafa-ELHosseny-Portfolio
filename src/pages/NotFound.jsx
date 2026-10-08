import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-5 text-center">
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
        <p className="font-mono text-7xl font-bold text-accent">404</p>
        <h1 className="mt-4 text-2xl font-bold text-white">This page doesn't exist.</h1>
        <p className="mt-2 text-muted">The link may be broken or the page may have moved.</p>
        <Link to="/" className="mt-8 inline-block rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-black hover:bg-[#ff746d]">Back to home</Link>
      </motion.div>
    </main>
  )
}
