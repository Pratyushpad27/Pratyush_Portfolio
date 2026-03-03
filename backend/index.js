const express = require('express')
const cors = require('cors')
const rateLimit = require('express-rate-limit')
require('dotenv').config()

const imageRoute = require('./routes/image')
const captionRoute = require('./routes/caption')

const app = express()
const PORT = process.env.PORT || 3001

// Allow requests from the live Netlify frontend and local dev
const allowedOrigins = [
  'https://pratyush-padhy-portfolio.netlify.app',
  'http://localhost:5173',
]
app.use(cors({ origin: allowedOrigins }))
app.use(express.json())

// Rate limit API routes: 30 requests per minute per IP
const apiLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: 30,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: 'Too many requests, please try again later.' },
})
app.use('/api', apiLimiter)

// Routes
app.use('/api/image', imageRoute)
app.use('/api/caption', captionRoute)

// Health check
app.get('/', (req, res) => {
  res.json({ message: 'Portfolio backend is running!' })
})

// 404 handler for unknown routes
app.use((_req, res) => {
  res.status(404).json({ error: 'Not found' })
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})