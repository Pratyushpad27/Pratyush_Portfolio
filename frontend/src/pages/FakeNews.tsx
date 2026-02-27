const temperatures = [
  {
    temp: '0.2',
    label: 'Conservative',
    output: 'the president announced today that the state of the country was a strong and the party of the election was a former president of the united states...'
  },
  {
    temp: '0.5',
    label: 'Balanced',
    output: 'the president announced comple vate in the has election an was be neworng do the ussistance that the clinton interely is a commenter of the state...'
  },
  {
    temp: '0.7',
    label: 'Creative',
    output: 'the president announced evemipmon to post in o hatimer to consrations. marh rin n a doment that other get a foundateoth, share shick dictrual internet...'
  },
]

export default function FakeNews() {
  return (
    <main className="max-w-4xl mx-auto px-6 pt-32 pb-20">

      <section className="mb-12">
        <p className="font-mono text-sm mb-2" style={{ color: '#3b82f6' }}>Project 02</p>
        <h1 className="text-4xl font-bold text-white mb-4">Character-Level Language Model</h1>
        <p className="text-gray-400 text-lg leading-relaxed max-w-3xl mb-6">
          An RNN and LSTM trained on 200,000 characters of fake news articles to generate
          new text from scratch, one character at a time. Built to understand how language
          models like GPT work at their most fundamental level.
        </p>
        <div className="flex flex-wrap gap-3 mb-8">
          {['Python', 'TensorFlow', 'Keras', 'RNN', 'LSTM', 'NLP', 'Transfer Learning'].map((tech) => (
            <span
              key={tech}
              className="text-xs px-3 py-1 rounded font-mono"
              style={{ backgroundColor: '#1d4ed820', color: '#60a5fa', border: '1px solid #1d4ed8' }}
            >
              {tech}
            </span>
          ))}
        </div>
        
          <a href="https://github.com/Pratyushpad27/char-level-language-model"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 rounded-lg font-medium text-white transition-all duration-200 hover:opacity-90"
          style={{ backgroundColor: '#3b82f6' }}
        >
          View on GitHub
        </a>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">How It Works</h2>
        <div className="flex flex-col gap-4">
          {[
            { step: '01', title: 'Encode', desc: 'Every character in the corpus is converted to a one-hot vector across a 70-character vocabulary.' },
            { step: '02', title: 'Sequence', desc: 'A sliding window of 40 characters creates 66,000+ input/output training pairs.' },
            { step: '03', title: 'Train', desc: 'The LSTM learns to predict the next character by minimizing categorical crossentropy loss.' },
            { step: '04', title: 'Generate', desc: 'Given a seed phrase, the model generates new characters one at a time using temperature sampling.' },
          ].map((item) => (
            <div
              key={item.step}
              className="flex gap-4 rounded-xl p-5"
              style={{ backgroundColor: '#13131a', border: '1px solid #1e1e2e' }}
            >
              <span className="font-mono text-sm font-bold flex-shrink-0 mt-0.5" style={{ color: '#3b82f6' }}>
                {item.step}
              </span>
              <div>
                <h3 className="text-white font-semibold mb-1">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-2">Sample Outputs</h2>
        <p className="text-gray-400 mb-6 text-sm">
          Seed: <span className="font-mono" style={{ color: '#60a5fa' }}>"the president announced today that"</span>
        </p>
        <div className="flex flex-col gap-4">
          {temperatures.map((t) => (
            <div
              key={t.temp}
              className="rounded-xl p-5"
              style={{ backgroundColor: '#13131a', border: '1px solid #1e1e2e' }}
            >
              <div className="flex items-center gap-3 mb-3">
                <span
                  className="text-xs px-2 py-1 rounded font-mono"
                  style={{ backgroundColor: '#1d4ed820', color: '#60a5fa', border: '1px solid #1d4ed8' }}
                >
                  temp={t.temp}
                </span>
                <span className="text-gray-400 text-sm">{t.label}</span>
              </div>
              <p className="font-mono text-sm leading-relaxed" style={{ color: '#9ca3af' }}>
                {t.output}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">Results</h2>
        <div className="flex flex-col gap-4">
          <div
            className="rounded-xl overflow-hidden"
            style={{ border: '1px solid #1e1e2e' }}
          >
            <div className="flex items-center justify-center p-4" style={{ backgroundColor: '#13131a' }}>
              <img src="/fakenews/training_loss.png" alt="Training Loss" className="w-full max-w-lg h-64 object-contain" />
            </div>
            <p className="text-gray-500 text-xs text-center py-2 font-mono" style={{ backgroundColor: '#13131a' }}>Training Loss</p>
          </div>
          <div
            className="rounded-xl overflow-hidden"
            style={{ border: '1px solid #1e1e2e' }}
          >
            <div className="flex items-center justify-center p-4" style={{ backgroundColor: '#13131a' }}>
              <img src="/fakenews/confidence_heatmap.png" alt="Confidence Heatmap" className="w-full h-64 object-contain" />
            </div>
            <p className="text-gray-500 text-xs text-center py-2 font-mono" style={{ backgroundColor: '#13131a' }}>Confidence Heatmap</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">What I Learned</h2>
        <ul className="flex flex-col gap-3">
          {[
            'LSTMs outperform SimpleRNNs on sequence tasks due to their gating mechanism',
            'Temperature sampling controls the creativity vs coherence tradeoff in generation',
            'Transfer learning via pretrained checkpoints dramatically accelerates convergence',
            'Character-level models reveal how modern LLMs like GPT learn language fundamentals',
          ].map((item) => (
            <li key={item} className="flex gap-3 text-gray-400 text-sm leading-relaxed">
              <span style={{ color: '#3b82f6' }} className="mt-0.5 flex-shrink-0">→</span>
              {item}
            </li>
          ))}
        </ul>
      </section>

    </main>
  )
}