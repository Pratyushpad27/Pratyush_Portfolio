import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import EmotionDetection from './pages/EmotionDetection'
import FakeNews from './pages/FakeNews'
import ImageAPI from './pages/ImageAPI'

function App() {
  return (
    <Router>
      <div className="min-h-screen" style={{ backgroundColor: '#0a0a0f' }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects/emotion-detection" element={<EmotionDetection />} />
          <Route path="/projects/fake-news" element={<FakeNews />} />
          <Route path="/api-demo" element={<ImageAPI />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App