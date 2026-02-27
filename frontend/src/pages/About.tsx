export default function About() {
  return (
    <main className="max-w-4xl mx-auto px-6 pt-32 pb-20">

      <section className="mb-16 flex flex-col md:flex-row gap-12 items-start">
        <img
          src="/Pratyush.png"
          alt="Pratyush Padhy"
          className="w-48 h-48 rounded-2xl object-cover flex-shrink-0"
          style={{ border: '2px solid #3b82f6' }}
        />
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
            conducted RNA-seq research at Stanford iLab, and earned the Presidential Service
            Award for 250+ volunteer hours.
          </p>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-bold text-white mb-6">Education</h2>
        <div
          className="rounded-xl p-6"
          style={{ backgroundColor: '#13131a', border: '1px solid #1e1e2e' }}
        >
          <div className="flex justify-between items-start flex-wrap gap-2">
            <div>
              <h3 className="text-white font-semibold text-lg">University of California, Irvine</h3>
              <p className="text-gray-400">B.S. Computer Science</p>
            </div>
            <div className="text-right">
              <p className="font-mono text-sm" style={{ color: '#60a5fa' }}>GPA: 3.69</p>
              <p className="text-gray-500 text-sm">June 2028</p>
            </div>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {["Data@UCI", "AI@UCI", "Cyber@UCI", "Hack@UCI", "Dean's Honor List"].map((item) => (
              <span
                key={item}
                className="text-xs px-3 py-1 rounded-full font-mono"
                style={{ backgroundColor: '#1d4ed820', color: '#60a5fa', border: '1px solid #1d4ed8' }}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-bold text-white mb-6">Experience</h2>
        <div className="flex flex-col gap-4">
          {[
            {
              role: 'Undergraduate Mentor',
              org: 'Data@UCI',
              period: 'Jan 2026 – Present',
              desc: 'Mentoring 50+ students on data projects, Kaggle datasets, and ML model development using Python and Google Colab.'
            },
            {
              role: 'Research Mentee',
              org: 'iLab Stanford',
              period: 'Dec 2023 – July 2024',
              desc: 'Conducted RNA-seq research on non-small cell lung cancer data under Stanford researchers using R.'
            },
            {
              role: 'Competitor',
              org: 'Berkeley ROAR',
              period: 'June – Aug 2023',
              desc: 'Trained autonomous vehicles using ML and neural networks in Python, placing top 10 out of all competitors.'
            },
          ].map((exp) => (
            <div
              key={exp.role}
              className="rounded-xl p-6"
              style={{ backgroundColor: '#13131a', border: '1px solid #1e1e2e' }}
            >
              <div className="flex justify-between items-start flex-wrap gap-2 mb-2">
                <div>
                  <h3 className="text-white font-semibold">{exp.role}</h3>
                  <p style={{ color: '#60a5fa' }} className="text-sm">{exp.org}</p>
                </div>
                <p className="text-gray-500 text-sm font-mono">{exp.period}</p>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">{exp.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="flex gap-4 flex-wrap">
        
          <a href="https://github.com/Pratyushpad27"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 rounded-lg font-medium text-white transition-all duration-200 hover:opacity-90"
          style={{ backgroundColor: '#3b82f6' }}
        >
          GitHub
        </a>
        
          <a href="https://www.linkedin.com/in/pratyush-padhy-b7017a269/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 rounded-lg font-medium transition-all duration-200 hover:text-white"
          style={{ border: '1px solid #3b82f6', color: '#60a5fa' }}
        >
          LinkedIn
        </a>
      </section>

    </main>
  )
}