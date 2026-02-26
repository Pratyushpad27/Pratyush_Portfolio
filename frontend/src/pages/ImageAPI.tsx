import { useState } from 'react'

// Predetermined search queries for random selection
const QUERIES = [
  'nature', 'city', 'ocean', 'mountain', 'forest', 'sunset',
  'technology', 'architecture', 'animals', 'space', 'food',
  'travel', 'abstract', 'sports', 'music', 'art', 'science',
  'winter', 'summer', 'flowers'
]

// Types
interface ImageResult {
  url: string
  query: string
  photographer: string
}

export default function ImageAPI() {
  // State management
  const [image, setImage] = useState<ImageResult | null>(null)
  const [caption, setCaption] = useState<string>('')
  const [loadingImage, setLoadingImage] = useState<boolean>(false)
  const [loadingCaption, setLoadingCaption] = useState<boolean>(false)
  const [error, setError] = useState<string>('')

  // Fetch a random image from backend using a random query
  const fetchImage = async (query: string): Promise<ImageResult> => {
    // 1. Call the backend image endpoint with the query
    // 2. Parse the response JSON
    // 3. Return the image URL and metadata
    const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/image?query=${query}`)
    if (!response.ok) throw new Error('Failed to fetch image')
    const data = await response.json()
    return {
      url: data.url,
      query,
      photographer: data.photographer
    }
  }

  // Generate a caption for the image using Gemini via backend
  const fetchCaption = async (query: string): Promise<string> => {
    // 1. Call the backend caption endpoint with the query
    // 2. Parse the response JSON
    // 3. Return the generated caption string
    const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/caption`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query })
    })
    if (!response.ok) throw new Error('Failed to generate caption')
    const data = await response.json()
    return data.caption
  }

  // Main handler - fetches image then generates caption
  const handleGenerate = async () => {
    // 1. Reset state and set loading
    // 2. Pick a random query from the list
    // 3. Fetch image from Pixabay via backend
    // 4. Display image immediately
    // 5. Fetch caption from Gemini via backend
    // 6. Display caption
    // 7. Handle any errors

    setError('')
    setCaption('')
    setImage(null)
    setLoadingImage(true)

    try {
      // Pick random query
      const query = QUERIES[Math.floor(Math.random() * QUERIES.length)]

      // Fetch image
      const imageResult = await fetchImage(query)
      setImage(imageResult)
      setLoadingImage(false)

      // Fetch caption
      setLoadingCaption(true)
      const generatedCaption = await fetchCaption(query)
      setCaption(generatedCaption)
    } catch (err) {
      setError('Something went wrong. Please try again.')
    } finally {
      setLoadingImage(false)
      setLoadingCaption(false)
    }
  }

  return (
    <main className="max-w-3xl mx-auto px-6 pt-32 pb-20">

      {/* Header */}
      <section className="mb-12">
        <p className="font-mono text-sm mb-2" style={{ color: '#3b82f6' }}>API Demo</p>
        <h1 className="text-4xl font-bold text-white mb-4">Image + AI Caption Generator</h1>
        <p className="text-gray-400 leading-relaxed">
          Click the button to fetch a random image from Pixabay and generate an 
          AI-powered caption using Google Gemini.
        </p>
      </section>

      {/* Generate Button */}
      <button
        onClick={handleGenerate}
        disabled={loadingImage || loadingCaption}
        className="px-8 py-4 rounded-lg font-medium text-white text-lg transition-all duration-200 hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed mb-12"
        style={{ backgroundColor: '#3b82f6' }}
      >
        {loadingImage ? 'Fetching Image...' : loadingCaption ? 'Generating Caption...' : '✨ Generate'}
      </button>

      {/* Error */}
      {error && (
        <div
          className="rounded-lg p-4 mb-8 text-sm"
          style={{ backgroundColor: '#2d1a1a', border: '1px solid #7f1d1d', color: '#fca5a5' }}
        >
          {error}
        </div>
      )}

      {/* Image Display */}
      {image && (
        <div
          className="rounded-xl overflow-hidden mb-6"
          style={{ border: '1px solid #1e1e2e' }}
        >
          <img
            src={image.url}
            alt={image.query}
            className="w-full object-cover max-h-96"
          />
          <div className="p-4 flex justify-between items-center" style={{ backgroundColor: '#13131a' }}>
            <span
              className="text-xs px-2 py-1 rounded font-mono"
              style={{ backgroundColor: '#1d4ed820', color: '#60a5fa', border: '1px solid #1d4ed8' }}
            >
              {image.query}
            </span>
            <span className="text-gray-500 text-xs">Photo by {image.photographer}</span>
          </div>
        </div>
      )}

      {/* Caption Display */}
      {caption && (
        <div
          className="rounded-xl p-6"
          style={{ backgroundColor: '#13131a', border: '1px solid #3b82f6' }}
        >
          <p className="font-mono text-xs mb-3" style={{ color: '#3b82f6' }}>AI Generated Caption</p>
          <p className="text-white leading-relaxed">{caption}</p>
        </div>
      )}

      {/* Loading caption state */}
      {loadingCaption && !caption && (
        <div
          className="rounded-xl p-6 animate-pulse"
          style={{ backgroundColor: '#13131a', border: '1px solid #1e1e2e' }}
        >
          <p className="font-mono text-xs mb-3" style={{ color: '#3b82f6' }}>AI Generated Caption</p>
          <div className="h-4 rounded w-3/4" style={{ backgroundColor: '#1e1e2e' }} />
        </div>
      )}

    </main>
  )
}