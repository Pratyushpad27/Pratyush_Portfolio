
import { Link } from 'react-router-dom'

// Skills list
const skills = [
  'Python', 'TypeScript', 'React', 'TensorFlow', 'Keras',
  'CNNs', 'LSTMs', 'scikit-learn', 'Node.js', 'Express',
  'Git', 'R', 'Java', 'C++', 'Tailwind CSS'
]

// Project cards data
const projects = [
  {
    title: 'FER2013 Emotion Detection',
    description: 'Built and compared 4 deep learning models — MLP, CNN, and VGG16 transfer learning — to classify facial emotions across 35,000+ images with progressive accuracy improvements.',
    tech: ['Python', 'TensorFlow', 'CNN', 'VGG16'],
    path: '/projects/emotion-detection',
    github: 'https://github.com/Pratyushpad27/fer2013-emotion-detection',
  },
  {
    title: 'Character-Level Language Model',
    description: 'Trained RNN and LSTM models on 200,000 characters of text to generate new writing from scratch — demonstrating how language models like GPT learn at a fundamental level.',
    tech: ['Python', 'TensorFlow', 'RNN', 'LSTM'],
    path: '/projects/fake-news',
    github: 'https://github.com/Pratyushpad27/char-level-language-model',
  },
]

export default function Home() {
  return (
    <main className="max-w-6xl mx-auto px-6 pt-32 pb-20">

      {/* Hero Section */}
      <section className="mb-24">
        <p className="font-mono text-sm mb-4" style={{ color: '#3b82f6' }}>
          Hi, I'm
        </p>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight">
          Pratyush Padhy
        </h1>
        <h2 className="text-2xl md:text-3xl font-light mb-6" style={{ color: '#60a5fa' }}>
          CS Student & Machine Learning Engineer
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mb-8 leading-relaxed">
          First-year Computer Science student at UC Irvine building ML models, 
          exploring deep learning, and turning data into meaningful insights.
        </p>
        <div className="flex gap-4 flex-wrap">
          <Link
            to="/projects/emotion-detection"
            className="px-6 py-3 rounded-lg font-medium text-white transition-all duration-200 hover:opacity-90"
            style={{ backgroundColor: '#3b82f6' }}
          >
            View Projects
          </Link>
          
            href="https://github.com/Pratyushpad27"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-lg font-medium transition-all duration-200 hover:text-white"
            style={{ border: '1px solid #3b82f6', color: '#60a5fa' }}
          >
            GitHub
          </a>
          
            href="https://www.linkedin.com/in/pratyush-padhy-b7017a269/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-lg font-medium transition-all duration-200 hover:text-white"
            style={{ border: '1px solid #1e1e2e', color: '#9ca3af' }}
          >
            LinkedIn
          </a>
        </div>
      </section>

      {/* Projects Section */}
      <section className="mb-24">
        <h3 className="text-2xl font-bold text-white mb-2">Projects</h3>
        <p className="text-gray-400 mb-8">Things I've built</p>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="rounded-xl p-6 transition-all duration-200 hover:border-blue-400 group"
              style={{ backgroundColor: '#13131a', border: '1px solid #1e1e2e' }}
            >
              <h4 className="text-lg font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                {project.title}
              </h4>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2 py-1 rounded font-mono"
                    style={{ backgroundColor: '#1d4ed820', color: '#60a5fa', border: '1px solid #1d4ed8' }}
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <Link
                  to={project.path}
                  className="text-sm font-medium transition-colors hover:text-white"
                  style={{ color: '#3b82f6' }}
                >
                  View Project →
                </Link>
                
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
                >
                  GitHub ↗
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section>
        <h3 className="text-2xl font-bold text-white mb-2">Skills</h3>
        <p className="text-gray-400 mb-8">Technologies I work with</p>
        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 rounded-lg text-sm font-mono transition-all duration-200 hover:border-blue-400 hover:text-white"
              style={{ backgroundColor: '#13131a', border: '1px solid #1e1e2e', color: '#9ca3af' }}
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

    </main>
  )
}