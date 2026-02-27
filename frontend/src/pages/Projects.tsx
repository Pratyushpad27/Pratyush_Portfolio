import { Link } from 'react-router-dom'

const projects = [
  {
    number: '01',
    title: 'FER2013 Emotion Detection',
    description: 'Built and compared 4 deep learning models — MLP, CNN, and VGG16 transfer learning — to classify facial emotions across 35,000+ images with progressive accuracy improvements.',
    tech: ['Python', 'TensorFlow', 'CNN', 'VGG16', 'Keras', 'OpenCV'],
    path: '/projects/emotion-detection',
    github: 'https://github.com/Pratyushpad27/fer2013-emotion-detection',
  },
  {
    number: '02',
    title: 'Character-Level Language Model',
    description: 'Trained RNN and LSTM models on 200,000 characters of text to generate new writing from scratch — demonstrating how language models like GPT learn at a fundamental level.',
    tech: ['Python', 'TensorFlow', 'RNN', 'LSTM', 'Keras', 'NLP'],
    path: '/projects/fake-news',
    github: 'https://github.com/Pratyushpad27/char-level-language-model',
  },
]

export default function Projects() {
  return (
    <main className="max-w-4xl mx-auto px-6 pt-32 pb-20">
      <p className="font-mono text-sm mb-2" style={{ color: '#3b82f6' }}>My Work</p>
      <h1 className="text-4xl font-bold text-white mb-4">Projects</h1>
      <p className="text-gray-400 mb-12">Deep learning and ML projects I've built from scratch.</p>

      <div className="flex flex-col gap-6">
        {projects.map((project) => (
          <div
            key={project.title}
            className="rounded-xl p-8 transition-all duration-200 group"
            style={{ backgroundColor: '#13131a', border: '1px solid #1e1e2e' }}
          >
            <div className="flex items-start justify-between flex-wrap gap-4 mb-4">
              <div>
                <p className="font-mono text-xs mb-1" style={{ color: '#3b82f6' }}>Project {project.number}</p>
                <h2 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h2>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-8">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs px-3 py-1 rounded font-mono"
                  style={{ backgroundColor: '#1d4ed820', color: '#60a5fa', border: '1px solid #1d4ed8' }}
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="flex gap-4">
              <Link
                to={project.path}
                className="px-5 py-2 rounded-lg font-medium text-white text-sm transition-all duration-200 hover:opacity-90"
                style={{ backgroundColor: '#3b82f6' }}
              >
                Explore Project →
              </Link>
              
                <a href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 rounded-lg font-medium text-sm transition-all duration-200 hover:text-white"
                style={{ border: '1px solid #1e1e2e', color: '#9ca3af' }}
              >
                GitHub ↗
              </a>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}