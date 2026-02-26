const models = [
  {
    name: 'MLP (Pixels)',
    description: 'Fully connected network on raw 48x48 pixel inputs',
    result: 'Baseline performance'
  },
  {
    name: 'MLP (Landmarks)',
    description: 'MLP trained on geometric facial landmark distances',
    result: 'Improved over pixels'
  },
  {
    name: 'CNN',
    description: 'Convolutional network with batch normalization and dropout',
    result: 'Strong spatial feature learning'
  },
  {
    name: 'VGG16 Transfer Learning',
    description: 'Pretrained ImageNet model fine-tuned for emotion classification',
    result: 'Best overall performance'
  },
]

const images = [
  { src: '/emotion/cnn_training.png', alt: 'CNN Training Curves' },
  { src: '/emotion/cnn_confusion_matrix.png', alt: 'CNN Confusion Matrix' },
  { src: '/emotion/model_comparison.png', alt: 'Model Comparison' },
  { src: '/emotion/vgg16_transfer_learning_training.png', alt: 'VGG16 Training' },
]

export default function EmotionDetection() {
  return (
    <main className="max-w-4xl mx-auto px-6 pt-32 pb-20">

      {/* Header */}
      <section className="mb-12">
        <p className="font-mono text-sm mb-2" style={{ color: '#3b82f6' }}>Project 01</p>
        <h1 className="text-4xl font-bold text-white mb-4">FER2013 Emotion Detection</h1>
        <p className="text-gray-400 text-lg leading-relaxed max-w-3xl mb-6">
          A comparative study of 4 deep learning architectures for detecting human emotions 
          from facial images. Built to explore how model complexity affects accuracy — from 
          a simple MLP all the way to VGG16 transfer learning on 35,000+ images.
        </p>
        <div className="flex flex-wrap gap-3 mb-8">
          {['Python', 'TensorFlow', 'Keras', 'CNN', 'VGG16', 'Transfer Learning', 'OpenCV'].map((tech) => (
            <span
              key={tech}
              className="text-xs px-3 py-1 rounded font-mono"
              style={{ backgroundColor: '#1d4ed820', color: '#60a5fa', border: '1px solid #1d4ed8' }}
            >
              {tech}
            </span>
          ))}
        </div>
        
          href="https://github.com/Pratyushpad27/fer2013-emotion-detection"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 rounded-lg font-medium text-white transition-all duration-200 hover:opacity-90"
          style={{ backgroundColor: '#3b82f6' }}
        >
          View on GitHub ↗
        </a>
      </section>

      {/* Problem */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">Problem</h2>
        <p className="text-gray-400 leading-relaxed">
          Human emotion recognition has applications in mental health tech, 
          human-computer interaction, and security systems. The challenge is that 
          facial expressions are subtle and vary significantly across individuals. 
          Human accuracy on FER2013 is only ~65%, making it a genuinely difficult problem.
        </p>
      </section>

      {/* Models */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">Models Compared</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {models.map((model, index) => (
            <div
              key={model.name}
              className="rounded-xl p-5"
              style={{ backgroundColor: '#13131a', border: '1px solid #1e1e2e' }}
            >
              <div className="flex items-center gap-3 mb-2">
                <span
                  className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-mono font-bold"
                  style={{ backgroundColor: '#1d4ed820', color: '#60a5fa', border: '1px solid #1d4ed8' }}
                >
                  {index + 1}
                </span>
                <h3 className="text-white font-semibold">{model.name}</h3>
              </div>
              <p className="text-gray-400 text-sm mb-2">{model.description}</p>
              <p className="text-sm font-mono" style={{ color: '#60a5fa' }}>{model.result}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Results */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">Results</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {images.map((img) => (
            <div
              key={img.alt}
              className="rounded-xl overflow-hidden"
              style={{ border: '1px solid #1e1e2e' }}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full object-cover"
              />
              <p className="text-gray-500 text-xs text-center py-2 font-mono">{img.alt}</p>
            </div>
          ))}
        </div>
      </section>

      {/* What I Learned */}
      <section>
        <h2 className="text-2xl font-bold text-white mb-4">What I Learned</h2>
        <ul className="flex flex-col gap-3">
          {[
            'CNNs outperform flat MLPs on image data by learning spatial features directly',
            'Transfer learning with VGG16 dramatically improves accuracy by reusing ImageNet features',
            'Dropout and batch normalization are essential for preventing overfitting',
            'Geometric landmark features can outperform raw pixels as model inputs',
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