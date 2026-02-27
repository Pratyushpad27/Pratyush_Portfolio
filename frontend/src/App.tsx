import { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

// Lazy-load pages so each route is its own JS chunk
const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Projects = lazy(() => import('./pages/Projects'))
const EmotionDetection = lazy(() => import('./pages/EmotionDetection'))
const FakeNews = lazy(() => import('./pages/FakeNews'))
const ImageAPI = lazy(() => import('./pages/ImageAPI'))

// AnimatePresence needs to be inside the Router to access location
function AnimatedRoutes() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/emotion-detection" element={<EmotionDetection />} />
        <Route path="/projects/fake-news" element={<FakeNews />} />
        <Route path="/api-demo" element={<ImageAPI />} />
      </Routes>
    </AnimatePresence>
  )
}

function App() {
  return (
    <Router>
      <div className="min-h-screen" style={{ backgroundColor: '#0a0a0f' }}>
        <Navbar />
        <Suspense
          fallback={
            <div
              className="min-h-screen flex items-center justify-center"
              style={{ backgroundColor: '#0a0a0f' }}
            >
              <div
                className="w-8 h-8 rounded-full border-2 animate-spin"
                style={{ borderColor: '#1e1e2e', borderTopColor: '#3b82f6' }}
                aria-label="Loading page"
              />
            </div>
          }
        >
          <AnimatedRoutes />
        </Suspense>
        <Footer />
      </div>
    </Router>
  )
}

export default App
