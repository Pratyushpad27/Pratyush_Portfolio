import { motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'

interface FadeUpProps {
  children: ReactNode
  delay?: number
  className?: string
}

export default function FadeUp({ children, delay = 0, className }: FadeUpProps) {
  const shouldReduce = useReducedMotion()

  return (
    <motion.div
      initial={{ opacity: 0, y: shouldReduce ? 0 : 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
