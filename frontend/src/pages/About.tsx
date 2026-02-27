import { motion } from 'framer-motion'
import PageTransition from '../components/animations/PageTransition'
import FadeUp from '../components/animations/FadeUp'
import GlowCard from '../components/animations/GlowCard'
import StaggerContainer, { staggerItem } from '../components/animations/StaggerContainer'

const stats = [
  { value: '35K+', label: 'Images trained on' },
  { value: '200K+', label: 'Characters processed' },
  { value: '50+', label: 'Students mentored' },
  { value: 'Top 10', label: 'Berkeley ROAR' },
]

const experiences = [
  {
    role: 'Undergraduate Mentor',
    org: 'Data@UCI',
    period: 'Jan 2026 – Present',
    desc: 'Mentoring 50+ students on data projects, Kaggle datasets, and ML model development using Python and Google Colab.',
  },
  {
    role: 'Research Mentee',
    org: 'iLab Stanford',
    period: 'Dec 2023 – July 2024',
    desc: 'Conducted RNA-seq research on non-small cell lung cancer data under Stanford researchers using R and Bioconductor.',
  },
  {
    role: 'Competitor',
    org: 'Berkeley ROAR',
    period: 'June – Aug 2023',
    desc: 'Trained autonomous vehicles using ML and neural networks in Python, placing top 10 out of all competitors.',
  },
]

const clubs = ["Data@UCI", "AI@UCI", "Cyber@UCI", "Hack@UCI", "Dean's Honor List"]

export default function About() {
  return (
    <PageTransition>
      <main id="main-content" className="max-w-4xl mx-auto px-6 pt-28 md:pt-36 pb-28 md:pb-20">

        {/* Header + Photo */}
        <FadeUp>
          <section className="mb-16 flex flex-col md:flex-row gap-12 items-start">
            {/* Animated gradient glow behind photo */}
            <div className="relative flex-shrink-0 w-48 h-48">
              <motion.div
                className="absolute inset-0 rounded-2xl"
                animate={{
                  background: [
                    'radial-gradient(circle, rgba(59,130,246,0.35) 0%, transparent 70%)',
                    'radial-gradient(circle, rgba(139,92,246,0.35) 0%, transparent 70%)',
                    'radial-gradient(circle, rgba(59,130,246,0.35) 0%, transparent 70%)',
                  ],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                style={{ filter: 'blur(16px)', transform: 'scale(1.3)' }}
                aria-hidden="true"
              />
              <img
                src="/Pratyush.png"
                alt="Pratyush Padhy"
                className="relative w-48 h-48 rounded-2xl object-cover"
                style={{ border: '2px solid rgba(59,130,246,0.5)' }}
              />
            </div>

            <div>
              <p className="font-mono text-sm mb-2" style={{ color: '#3b82f6' }}>About Me</p>
              <h1 className="text-4xl font-bold text-white mb-4">Pratyush Padhy</h1>
              <p className="text-gray-400 leading-relaxed mb-4">
                First-year Computer Science student at UC Irvine with a 3.69 GPA and a passion
                for machine learning and AI. I build deep learning models, explore NLP, and
                mentor 50+ students at Data@UCI on data-focused projects.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Previously placed top 10 at Berkeley ROAR training autonomous vehicles with ML,
                conducted RNA-seq research at Stanford iLab on lung cancer data, and earned the
                Presidential Service Award for 250+ volunteer hours.
              </p>
            </div>
          </section>
        </FadeUp>

        {/* Stats row */}
        <FadeUp delay={0.1}>
          <section className="mb-16">
            <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map(({ value, label }) => (
                <motion.div
                  key={label}
                  variants={staggerItem}
                  className="rounded-xl p-5 text-center"
                  style={{
                    background: 'rgba(255,255,255,0.03)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255,255,255,0.08)',
                  }}
                  whileHover={{
                    borderColor: 'rgba(59,130,246,0.35)',
                    boxShadow: '0 0 30px rgba(59,130,246,0.12)',
                  }}
                >
                  <p className="text-2xl font-bold gradient-text mb-1">{value}</p>
                  <p className="text-gray-500 text-xs">{label}</p>
                </motion.div>
              ))}
            </StaggerContainer>
          </section>
        </FadeUp>

        {/* Education */}
        <FadeUp delay={0.15}>
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-6">Education</h2>
            <GlowCard className="p-6">
              <div className="flex justify-between items-start flex-wrap gap-2 mb-4">
                <div>
                  <h3 className="text-white font-semibold text-lg">University of California, Irvine</h3>
                  <p className="text-gray-400">B.S. Computer Science</p>
                </div>
                <div className="text-right">
                  <p className="font-mono text-sm" style={{ color: '#60a5fa' }}>GPA: 3.69</p>
                  <p className="text-gray-500 text-sm">June 2028</p>
                </div>
              </div>
              <StaggerContainer className="flex flex-wrap gap-2">
                {clubs.map((item) => (
                  <motion.span
                    key={item}
                    variants={staggerItem}
                    className="text-xs px-3 py-1 rounded-full font-mono"
                    style={{ backgroundColor: 'rgba(29,78,216,0.15)', color: '#60a5fa', border: '1px solid rgba(29,78,216,0.4)' }}
                  >
                    {item}
                  </motion.span>
                ))}
              </StaggerContainer>
            </GlowCard>
          </section>
        </FadeUp>

        {/* Experience — Timeline */}
        <FadeUp delay={0.2}>
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-8">Experience</h2>
            <div className="relative">
              {/* Animated vertical line */}
              <motion.div
                className="absolute left-[15px] top-2 bottom-2 w-px"
                initial={{ scaleY: 0, originY: '0%' }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                style={{ background: 'linear-gradient(to bottom, #3b82f6, rgba(59,130,246,0.1))' }}
                aria-hidden="true"
              />

              <div className="flex flex-col gap-6">
                {experiences.map((exp, i) => (
                  <FadeUp key={exp.role} delay={i * 0.1}>
                    <div className="flex gap-6 items-start">
                      {/* Timeline dot */}
                      <div
                        className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 z-10 mt-1"
                        style={{
                          background: 'rgba(59,130,246,0.15)',
                          border: '2px solid rgba(59,130,246,0.5)',
                        }}
                        aria-hidden="true"
                      >
                        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#3b82f6' }} />
                      </div>

                      <GlowCard className="flex-1 p-5">
                        <div className="flex justify-between items-start flex-wrap gap-2 mb-2">
                          <div>
                            <h3 className="text-white font-semibold">{exp.role}</h3>
                            <p style={{ color: '#60a5fa' }} className="text-sm">{exp.org}</p>
                          </div>
                          <p className="text-gray-500 text-sm font-mono">{exp.period}</p>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed">{exp.desc}</p>
                      </GlowCard>
                    </div>
                  </FadeUp>
                ))}
              </div>
            </div>
          </section>
        </FadeUp>

        {/* Links */}
        <FadeUp delay={0.25}>
          <section className="flex gap-4 flex-wrap">
            <a
              href="https://github.com/Pratyushpad27"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-lg font-medium text-white transition-all duration-200 hover:opacity-90 hover:scale-[1.02]"
              style={{ background: 'linear-gradient(135deg, #3b82f6, #6366f1)' }}
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/pratyush-padhy-b7017a269/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-lg font-medium transition-all duration-200 hover:text-white"
              style={{ border: '1px solid rgba(59,130,246,0.4)', color: '#60a5fa' }}
            >
              LinkedIn
            </a>
          </section>
        </FadeUp>

      </main>
    </PageTransition>
  )
}
