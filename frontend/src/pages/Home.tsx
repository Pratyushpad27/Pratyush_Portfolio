import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import PageTransition from '../components/animations/PageTransition'
import GlowCard from '../components/animations/GlowCard'
import FadeUp from '../components/animations/FadeUp'
import StaggerContainer, { staggerItem } from '../components/animations/StaggerContainer'

const projects = [
  {
    title: 'FER2013 Emotion Detection',
    description: 'Compared 4 deep learning architectures — MLP (pixels), MLP (landmarks), CNN, and VGG16 transfer learning — on 35,000+ facial images. VGG16 achieved best accuracy; CNN demonstrated strong spatial feature learning with batch normalization.',
    tech: ['Python', 'TensorFlow', 'CNN', 'VGG16'],
    path: '/projects/emotion-detection',
    github: 'https://github.com/Pratyushpad27/fer2013-emotion-detection',
    number: '01',
  },
  {
    title: 'Character-Level Language Model',
    description: 'Trained RNN and LSTM on 200,000 characters of text with a 70-character vocabulary and 66,000+ training pairs. Temperature sampling controls creativity vs coherence — revealing how modern LLMs learn language fundamentals.',
    tech: ['Python', 'TensorFlow', 'RNN', 'LSTM'],
    path: '/projects/fake-news',
    github: 'https://github.com/Pratyushpad27/char-level-language-model',
    number: '02',
  },
]

const skillGroups: Record<string, string[]> = {
  'Languages': ['Python', 'TypeScript', 'R', 'Java', 'C++'],
  'ML / AI': ['TensorFlow', 'Keras', 'CNNs', 'LSTMs', 'scikit-learn'],
  'Web': ['React', 'Node.js', 'Express', 'Tailwind CSS'],
  'Tools': ['Git', 'Google Colab', 'Vite'],
}

// Staggered hero text — each line animates in with increasing delay
const heroLines = {
  container: { hidden: {}, show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } } },
  item: {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } },
  },
}

export default function Home() {
  return (
    <PageTransition>
      <main id="main-content" className="max-w-6xl mx-auto px-6 pt-28 md:pt-36 pb-28 md:pb-20">

        {/* Hero */}
        <motion.section
          className="mb-28"
          variants={heroLines.container}
          initial="hidden"
          animate="show"
        >
          <motion.p variants={heroLines.item} className="font-mono text-sm mb-3" style={{ color: '#3b82f6' }}>
            Hi, I&apos;m
          </motion.p>
          <motion.h1 variants={heroLines.item} className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight">
            Pratyush <span className="gradient-text">Padhy</span>
          </motion.h1>
          <motion.h2 variants={heroLines.item} className="text-2xl md:text-3xl font-light mb-6" style={{ color: '#60a5fa' }}>
            CS Student &amp; Machine Learning Engineer
          </motion.h2>
          <motion.p variants={heroLines.item} className="text-gray-400 text-lg max-w-2xl mb-8 leading-relaxed">
            First-year Computer Science student at UC Irvine — building deep learning models,
            exploring NLP, and mentoring 50+ students at Data@UCI.
          </motion.p>
          <motion.div variants={heroLines.item} className="flex gap-4 flex-wrap">
            <Link
              to="/projects"
              className="px-6 py-3 rounded-lg font-medium text-white transition-all duration-200 hover:opacity-90 hover:scale-[1.02]"
              style={{ background: 'linear-gradient(135deg, #3b82f6, #6366f1)' }}
            >
              View Projects
            </Link>
            <a
              href="https://github.com/Pratyushpad27"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-lg font-medium transition-all duration-200 hover:text-white hover:border-blue-400"
              style={{ border: '1px solid rgba(59,130,246,0.4)', color: '#60a5fa' }}
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/pratyush-padhy-b7017a269/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-lg font-medium transition-all duration-200 hover:text-white"
              style={{ border: '1px solid rgba(255,255,255,0.08)', color: '#9ca3af' }}
            >
              LinkedIn
            </a>
          </motion.div>
        </motion.section>

        {/* Projects */}
        <FadeUp>
          <section className="mb-28">
            <p className="font-mono text-xs mb-2" style={{ color: '#3b82f6' }}>SELECTED WORK</p>
            <h3 className="text-2xl font-bold text-white mb-2">Projects</h3>
            <p className="text-gray-500 mb-8 text-sm">Deep learning models built from scratch</p>
            <div className="grid md:grid-cols-2 gap-6">
              {projects.map((project, i) => (
                <FadeUp key={project.title} delay={i * 0.1}>
                  <GlowCard className="p-6 h-full flex flex-col">
                    <p className="font-mono text-xs mb-2" style={{ color: '#3b82f6' }}>
                      Project {project.number}
                    </p>
                    <h4 className="text-lg font-semibold text-white mb-3">
                      {project.title}
                    </h4>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-5">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="text-xs px-2 py-1 rounded font-mono"
                          style={{ backgroundColor: 'rgba(29,78,216,0.15)', color: '#60a5fa', border: '1px solid rgba(29,78,216,0.4)' }}
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
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
                      >
                        GitHub ↗
                      </a>
                    </div>
                  </GlowCard>
                </FadeUp>
              ))}
            </div>
          </section>
        </FadeUp>

        {/* Skills — grouped by category with stagger */}
        <FadeUp>
          <section>
            <p className="font-mono text-xs mb-2" style={{ color: '#3b82f6' }}>TECH STACK</p>
            <h3 className="text-2xl font-bold text-white mb-2">Skills</h3>
            <p className="text-gray-500 mb-8 text-sm">Technologies I work with</p>
            <div className="flex flex-col gap-6">
              {Object.entries(skillGroups).map(([category, skills]) => (
                <div key={category}>
                  <p className="text-gray-500 text-xs font-mono mb-3 uppercase tracking-wider">
                    {category}
                  </p>
                  <StaggerContainer className="flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <motion.span
                        key={skill}
                        variants={staggerItem}
                        className="px-4 py-2 rounded-lg text-sm font-mono transition-all duration-200 hover:text-white cursor-default"
                        style={{
                          background: 'rgba(255,255,255,0.03)',
                          border: '1px solid rgba(255,255,255,0.08)',
                          color: '#9ca3af',
                        }}
                        whileHover={{
                          borderColor: 'rgba(59,130,246,0.4)',
                          color: '#ffffff',
                          background: 'rgba(59,130,246,0.08)',
                        }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </StaggerContainer>
                </div>
              ))}
            </div>
          </section>
        </FadeUp>

      </main>
    </PageTransition>
  )
}
