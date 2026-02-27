const express = require('express')
const cors = require('cors')
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

// Routes
app.use('/api/image', imageRoute)
app.use('/api/caption', captionRoute)

// Health check
app.get('/', (req, res) => {
  res.json({ message: 'Portfolio backend is running!' })
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})