import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import PageTransition from '../components/animations/PageTransition'
import FadeUp from '../components/animations/FadeUp'
import GlowCard from '../components/animations/GlowCard'
import Lightbox from '../components/Lightbox'

const temperatures = [
  {
    temp: '0.2',
    label: 'Conservative',
    output: 'the president announced today that the state of the country was a strong and the party of the election was a former president of the united states...',
  },
  {
    temp: '0.5',
    label: 'Balanced',
    output: 'the president announced comple vate in the has election an was be neworng do the ussistance that the clinton interely is a commenter of the state...',
  },
  {
    temp: '0.7',
    label: 'Creative',
    output: 'the president announced evemipmon to post in o hatimer to consrations. marh rin n a doment that other get a foundateoth, share shick dictrual internet...',
  },
]

const steps = [
  { step: '01', title: 'Encode', desc: 'Every character in the corpus is converted to a one-hot vector across a 70-character vocabulary.' },
  { step: '02', title: 'Sequence', desc: 'A sliding window of 40 characters creates 66,000+ input/output training pairs.' },
  { step: '03', title: 'Train', desc: 'The LSTM learns to predict the next character by minimizing categorical crossentropy loss.' },
  { step: '04', title: 'Generate', desc: 'Given a seed phrase, the model generates new characters one at a time using temperature sampling.' },
]

const images = [
  { src: '/fakenews/training_loss.png', alt: 'Training Loss' },
  { src: '/fakenews/confidence_heatmap.png', alt: 'Confidence Heatmap' },
]

const techTags = ['Python', 'TensorFlow', 'Keras', 'RNN', 'LSTM', 'NLP', 'Text Generation']

export default function FakeNews() {
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null)
  const [showBack, setShowBack] = useState(false)

  useEffect(() => { document.title = 'Language Model | Pratyush Padhy' }, [])

  useEffect(() => {
    const handleScroll = () => setShowBack(window.scrollY > 200)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <PageTransition>
      <main id="main-content" className="max-w-4xl mx-auto px-6 pt-28 md:pt-36 pb-28 md:pb-20">

        {/* Breadcrumbs */}
        <FadeUp>
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-sm text-gray-500">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link to="/projects" className="hover:text-white transition-colors">Projects</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-gray-300">Character-Level Language Model</li>
            </ol>
          </nav>
        </FadeUp>

        {/* Header */}
        <FadeUp>
          <section className="mb-12">
            <p className="font-mono text-sm mb-2" style={{ color: '#3b82f6' }}>Project 02</p>
            <h1 className="text-4xl font-bold text-white mb-4">Character-Level Language Model</h1>
            <p className="text-gray-400 text-lg leading-relaxed max-w-3xl mb-6">
              An RNN and LSTM trained on 200,000 characters of fake news articles to generate
              new text from scratch, one character at a time. Built to understand how language
              models like GPT work at their most fundamental level.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              {techTags.map((tech) => (
                <span
                  key={tech}
                  className="text-xs px-3 py-1 rounded font-mono"
                  style={{ backgroundColor: 'rgba(29,78,216,0.15)', color: '#60a5fa', border: '1px solid rgba(29,78,216,0.4)' }}
                >
                  {tech}
                </span>
              ))}
            </div>
            <a
              href="https://github.com/Pratyushpad27/char-level-language-model"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 rounded-lg font-medium text-white transition-all duration-200 hover:opacity-90 hover:scale-[1.02]"
              style={{ background: 'linear-gradient(135deg, #3b82f6, #6366f1)' }}
            >
              View on GitHub ↗
            </a>
          </section>
        </FadeUp>

        {/* How it works */}
        <FadeUp delay={0.05}>
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">How It Works</h2>
            <div className="flex flex-col gap-4">
              {steps.map((item) => (
                <GlowCard key={item.step} className="flex gap-4 p-5">
                  <span className="font-mono text-sm font-bold flex-shrink-0 mt-0.5" style={{ color: '#3b82f6' }}>
                    {item.step}
                  </span>
                  <div>
                    <h3 className="text-white font-semibold mb-1">{item.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </GlowCard>
              ))}
            </div>
          </section>
        </FadeUp>

        {/* Sample outputs */}
        <FadeUp delay={0.1}>
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-2">Sample Outputs</h2>
            <p className="text-gray-400 mb-6 text-sm">
              Seed: <span className="font-mono" style={{ color: '#60a5fa' }}>&ldquo;the president announced today that&rdquo;</span>
            </p>
            <div className="flex flex-col gap-4">
              {temperatures.map((t) => (
                <GlowCard key={t.temp} className="p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className="text-xs px-2 py-1 rounded font-mono"
                      style={{ backgroundColor: 'rgba(29,78,216,0.15)', color: '#60a5fa', border: '1px solid rgba(29,78,216,0.4)' }}
                    >
                      temp={t.temp}
                    </span>
                    <span className="text-gray-400 text-sm">{t.label}</span>
                  </div>
                  <p className="font-mono text-sm leading-relaxed" style={{ color: '#9ca3af' }}>
                    {t.output}
                  </p>
                </GlowCard>
              ))}
            </div>
          </section>
        </FadeUp>

        {/* Results — click to expand */}
        <FadeUp delay={0.15}>
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-2">Results</h2>
            <p className="text-gray-500 text-sm mb-6">Click any image to expand</p>
            <div className="grid md:grid-cols-2 gap-4">
              {images.map((img) => (
                <motion.div
                  key={img.alt}
                  className="rounded-xl overflow-hidden cursor-pointer"
                  style={{ border: '1px solid rgba(255,255,255,0.08)' }}
                  whileHover={{ borderColor: 'rgba(59,130,246,0.35)', scale: 1.01 }}
                  transition={{ duration: 0.2 }}
                  onClick={() => setLightbox(img)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && setLightbox(img)}
                  aria-label={`Expand ${img.alt}`}
                >
                  <div className="relative flex items-center justify-center p-4" style={{ backgroundColor: 'rgba(19,19,26,0.8)' }}>
                    <div className="absolute inset-0 animate-pulse" style={{ backgroundColor: 'rgba(30,30,46,0.8)' }} />
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="relative w-full h-64 object-contain"
                      loading="lazy"
                    />
                  </div>
                  <p className="text-gray-500 text-xs text-center py-2 font-mono" style={{ backgroundColor: 'rgba(19,19,26,0.8)' }}>
                    {img.alt}
                  </p>
                </motion.div>
              ))}
            </div>
          </section>
        </FadeUp>

        {/* What I Learned */}
        <FadeUp delay={0.2}>
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-4">What I Learned</h2>
            <ul className="flex flex-col gap-3">
              {[
                'LSTMs outperform SimpleRNNs on sequence tasks due to their gating mechanism',
                'Temperature sampling controls the creativity vs coherence tradeoff in generation',
                'Sliding window tokenization turns raw text into thousands of labeled training sequences',
                'Character-level models reveal how modern LLMs like GPT learn language fundamentals',
              ].map((item) => (
                <li key={item} className="flex gap-3 text-gray-400 text-sm leading-relaxed">
                  <span style={{ color: '#3b82f6' }} className="mt-0.5 flex-shrink-0">→</span>
                  {item}
                </li>
              ))}
            </ul>
          </section>
        </FadeUp>

        {/* Next project */}
        <FadeUp delay={0.25}>
          <div
            className="rounded-xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
            style={{
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.08)',
            }}
          >
            <div>
              <p className="text-gray-500 text-xs font-mono mb-1">NEXT PROJECT</p>
              <p className="text-white font-semibold">FER2013 Emotion Detection</p>
            </div>
            <Link
              to="/projects/emotion-detection"
              className="px-5 py-2.5 rounded-lg font-medium text-white text-sm transition-all duration-200 hover:opacity-90 flex-shrink-0"
              style={{ background: 'linear-gradient(135deg, #3b82f6, #6366f1)' }}
            >
              View Project →
            </Link>
          </div>
        </FadeUp>

      </main>

      {/* Sticky back button */}
      <AnimatePresence>
        {showBack && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed left-4 bottom-24 md:bottom-8 z-40"
          >
            <Link
              to="/projects"
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium text-gray-300 hover:text-white transition-all duration-200"
              style={{
                background: 'rgba(10,10,15,0.9)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(255,255,255,0.1)',
                boxShadow: '0 0 20px rgba(0,0,0,0.5)',
              }}
              aria-label="Back to Projects"
            >
              ← Projects
            </Link>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <Lightbox
            src={lightbox.src}
            alt={lightbox.alt}
            onClose={() => setLightbox(null)}
          />
        )}
      </AnimatePresence>
    </PageTransition>
  )
}
