import { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'

// Lazy-load pages so each route is only downloaded when visited
const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Projects = lazy(() => import('./pages/Projects'))
const EmotionDetection = lazy(() => import('./pages/EmotionDetection'))
const FakeNews = lazy(() => import('./pages/FakeNews'))
const ImageAPI = lazy(() => import('./pages/ImageAPI'))

function App() {
  return (
    <Router>
      <div className="min-h-screen" style={{ backgroundColor: '#0a0a0f' }}>
        <Navbar />
        <Suspense fallback={<div className="min-h-screen" style={{ backgroundColor: '#0a0a0f' }} />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/emotion-detection" element={<EmotionDetection />} />
            <Route path="/projects/fake-news" element={<FakeNews />} />
            <Route path="/api-demo" element={<ImageAPI />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  )
}

export default App