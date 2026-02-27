import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer
      className="border-t mt-24 pb-24 md:pb-0"
      style={{ borderColor: 'rgba(255, 255, 255, 0.06)' }}
    >
      <div
        className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6"
      >
        {/* Logo */}
        <Link
          to="/"
          className="font-mono text-lg font-semibold transition-opacity hover:opacity-80"
          style={{ color: '#60a5fa' }}
        >
          pratyush.dev
        </Link>

        {/* Copyright */}
        <p className="text-gray-600 text-xs text-center">
          © 2025 Pratyush Padhy · Built with React, TypeScript &amp; Vite
        </p>

        {/* Social links */}
        <div className="flex gap-6">
          {[
            { label: 'GitHub', href: 'https://github.com/Pratyushpad27' },
            { label: 'LinkedIn', href: 'https://www.linkedin.com/in/pratyush-padhy-b7017a269/' },
          ].map(({ label, href }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm transition-colors"
              style={{ color: '#6b7280' }}
              whileHover={{ color: '#ffffff', y: -1 }}
              transition={{ duration: 0.15 }}
              aria-label={`${label} profile`}
            >
              {label}
            </motion.a>
          ))}
        </div>
      </div>
    </footer>
  )
}
