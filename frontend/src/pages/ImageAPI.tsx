import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import PageTransition from '../components/animations/PageTransition'
import FadeUp from '../components/animations/FadeUp'
import GlowCard from '../components/animations/GlowCard'

// Predetermined search queries for random selection
const QUERIES = [
  'nature', 'city', 'ocean', 'mountain', 'forest', 'sunset',
  'technology', 'architecture', 'animals', 'space', 'food',
  'travel', 'abstract', 'sports', 'music', 'art', 'science',
  'winter', 'summer', 'flowers',
]

interface ImageResult {
  url: string
  query: string
  photographer: string
}

export default function ImageAPI() {
  useEffect(() => { document.title = 'API Demo | Pratyush Padhy' }, [])
  const [image, setImage] = useState<ImageResult | null>(null)
  const [caption, setCaption] = useState<string>('')
  const [loadingImage, setLoadingImage] = useState(false)
  const [loadingCaption, setLoadingCaption] = useState(false)
  const [error, setError] = useState<string>('')
  const [copied, setCopied] = useState(false)
  const [history, setHistory] = useState<ImageResult[]>([])

  // 1. Call the backend image endpoint with the query
  // 2. Parse the response JSON
  // 3. Return the image URL, query, and photographer
  const fetchImage = async (query: string): Promise<ImageResult> => {
    const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/image?query=${query}`)
    if (!response.ok) throw new Error('Failed to fetch image')
    const data = await response.json()
    return { url: data.url, query, photographer: data.photographer }
  }

  // 1. Call the backend caption endpoint with the query
  // 2. Parse the response JSON
  // 3. Return the generated caption string
  const fetchCaption = async (query: string): Promise<string> => {
    const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/caption`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query }),
    })
    if (!response.ok) throw new Error('Failed to generate caption')
    const data = await response.json()
    return data.caption
  }

  // Main handler: picks a random query, fetches image, then fetches caption
  const handleGenerate = async () => {
    // 1. Reset state and set loading
    // 2. Pick a random query from the list
    // 3. Fetch image from Pixabay via backend, display immediately
    // 4. Fetch caption from OpenRouter via backend, display when ready
    // 5. Add to history; handle any errors
    setError('')
    setCaption('')
    setImage(null)
    setLoadingImage(true)

    try {
      const query = QUERIES[Math.floor(Math.random() * QUERIES.length)]
      const imageResult = await fetchImage(query)
      setImage(imageResult)
      setLoadingImage(false)

      // Add to history (keep last 5 unique)
      setHistory((prev) => [imageResult, ...prev.filter((h) => h.url !== imageResult.url)].slice(0, 5))

      setLoadingCaption(true)
      const generatedCaption = await fetchCaption(query)
      setCaption(generatedCaption)
    } catch {
      setError('Something went wrong. Please try again.')
    } finally {
      setLoadingImage(false)
      setLoadingCaption(false)
    }
  }

  // Regenerate a new caption for the current image without re-fetching the image
  const handleRegenerate = async () => {
    if (!image) return
    setLoadingCaption(true)
    setCaption('')
    try {
      const newCaption = await fetchCaption(image.query)
      setCaption(newCaption)
    } catch {
      setError('Failed to regenerate caption.')
    } finally {
      setLoadingCaption(false)
    }
  }

  // Copy caption to clipboard with visual feedback
  const handleCopy = () => {
    if (!caption) return
    navigator.clipboard.writeText(caption).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }).catch(() => {
      setError('Could not copy to clipboard.')
    })
  }

  return (
    <PageTransition>
      <main id="main-content" className="max-w-3xl mx-auto px-6 pt-28 md:pt-36 pb-28 md:pb-20">

        {/* Header */}
        <FadeUp>
          <section className="mb-10">
            <p className="font-mono text-xs mb-2" style={{ color: '#3b82f6' }}>API DEMO</p>
            <h1 className="text-4xl font-bold text-white mb-4">Image + AI Caption Generator</h1>
            <p className="text-gray-400 leading-relaxed">
              Click the button to fetch a random image from Pixabay and generate an
              AI-powered caption using OpenRouter.
            </p>
          </section>
        </FadeUp>

        {/* Generate button */}
        <FadeUp delay={0.05}>
          <motion.button
            onClick={handleGenerate}
            disabled={loadingImage || loadingCaption}
            className="px-8 py-4 rounded-xl font-medium text-white text-lg mb-10 disabled:opacity-50 disabled:cursor-not-allowed"
            style={{ background: 'linear-gradient(135deg, #3b82f6, #6366f1)' }}
            whileHover={{ scale: 1.02, opacity: 0.95 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.15 }}
            aria-label="Generate a random image with AI caption"
          >
            {loadingImage ? 'Fetching Image...' : loadingCaption ? 'Writing Caption...' : '✦ Generate'}
          </motion.button>
        </FadeUp>

        {/* Error */}
        <AnimatePresence>
          {error && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="rounded-xl p-4 mb-8 text-sm"
              style={{ backgroundColor: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.2)', color: '#fca5a5' }}
              role="alert"
            >
              {error}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Loading skeleton while image is fetching */}
        <AnimatePresence>
          {loadingImage && !image && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="rounded-xl overflow-hidden mb-6"
              style={{ border: '1px solid rgba(255,255,255,0.08)' }}
              aria-label="Loading image"
              aria-busy="true"
            >
              <div className="animate-pulse" style={{ backgroundColor: 'rgba(19,19,26,0.8)' }}>
                <div className="w-full h-72" style={{ backgroundColor: 'rgba(30,30,46,0.8)' }} />
                <div className="p-4 flex justify-between items-center">
                  <div className="h-5 w-20 rounded-full" style={{ backgroundColor: '#1e1e2e' }} />
                  <div className="h-4 w-32 rounded" style={{ backgroundColor: '#1e1e2e' }} />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Image result — animates in on load */}
        <AnimatePresence>
          {image && (
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="rounded-xl overflow-hidden mb-6"
              style={{ border: '1px solid rgba(255,255,255,0.08)' }}
            >
              <img
                src={image.url}
                alt={image.query}
                className="w-full object-cover max-h-96"
              />
              <div className="p-4 flex justify-between items-center" style={{ backgroundColor: 'rgba(19,19,26,0.9)' }}>
                <span
                  className="text-xs px-2 py-1 rounded font-mono"
                  style={{ backgroundColor: 'rgba(29,78,216,0.15)', color: '#60a5fa', border: '1px solid rgba(29,78,216,0.4)' }}
                >
                  {image.query}
                </span>
                <span className="text-gray-500 text-xs">Photo by {image.photographer}</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Caption skeleton while loading */}
        <AnimatePresence>
          {loadingCaption && !caption && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="rounded-xl p-6 mb-6 animate-pulse"
              style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}
              aria-label="Generating caption"
              aria-busy="true"
            >
              <div className="h-3 w-28 rounded mb-4" style={{ backgroundColor: '#1e1e2e' }} />
              <div className="space-y-2">
                <div className="h-4 rounded w-full" style={{ backgroundColor: '#1e1e2e' }} />
                <div className="h-4 rounded w-4/5" style={{ backgroundColor: '#1e1e2e' }} />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Caption result */}
        <AnimatePresence>
          {caption && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
            >
              <GlowCard
                className="p-6 mb-4"
                style={{ border: '1px solid rgba(59,130,246,0.25)' }}
              >
                <div className="flex items-center justify-between mb-3">
                  <p className="font-mono text-xs" style={{ color: '#3b82f6' }}>AI Generated Caption</p>
                  <div className="flex gap-2">
                    {/* Regenerate */}
                    <motion.button
                      onClick={handleRegenerate}
                      disabled={loadingCaption}
                      className="text-xs px-3 py-1.5 rounded-lg transition-colors disabled:opacity-40"
                      style={{ border: '1px solid rgba(255,255,255,0.1)', color: '#9ca3af' }}
                      whileHover={{ color: '#ffffff', borderColor: 'rgba(255,255,255,0.2)' }}
                      transition={{ duration: 0.15 }}
                      aria-label="Regenerate caption"
                    >
                      ↺ Regenerate
                    </motion.button>
                    {/* Copy */}
                    <motion.button
                      onClick={handleCopy}
                      className="text-xs px-3 py-1.5 rounded-lg transition-colors"
                      style={{
                        border: '1px solid rgba(59,130,246,0.3)',
                        color: copied ? '#4ade80' : '#60a5fa',
                      }}
                      whileHover={{ scale: 1.03 }}
                      transition={{ duration: 0.15 }}
                      aria-label={copied ? 'Copied!' : 'Copy caption'}
                    >
                      {copied ? '✓ Copied' : '⎘ Copy'}
                    </motion.button>
                  </div>
                </div>
                <p className="text-white leading-relaxed">{caption}</p>
              </GlowCard>
            </motion.div>
          )}
        </AnimatePresence>

        {/* History strip */}
        <AnimatePresence>
          {history.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="mt-10"
            >
              <p className="text-gray-500 text-xs font-mono mb-4 uppercase tracking-wider">Recent</p>
              <div className="flex gap-3 overflow-x-auto pb-2" style={{ scrollbarWidth: 'thin' }}>
                {history.map((item, i) => (
                  <motion.div
                    key={`${item.url}-${i}`}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.05 }}
                    className="flex-shrink-0 relative cursor-pointer group"
                    onClick={() => { setImage(item); setCaption('') }}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => e.key === 'Enter' && (setImage(item), setCaption(''))}
                    aria-label={`Load previous ${item.query} image`}
                  >
                    <img
                      src={item.url}
                      alt={item.query}
                      className="w-20 h-20 rounded-lg object-cover transition-opacity group-hover:opacity-80"
                      style={{ border: '1px solid rgba(255,255,255,0.08)' }}
                      loading="lazy"
                    />
                    <span
                      className="absolute bottom-1 left-1 right-1 text-center text-xs rounded font-mono truncate px-1"
                      style={{ backgroundColor: 'rgba(0,0,0,0.7)', color: '#9ca3af' }}
                    >
                      {item.query}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </main>
    </PageTransition>
  )
}
