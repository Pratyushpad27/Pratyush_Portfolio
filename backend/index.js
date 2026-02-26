const express = require('express')
const cors = require('cors')
require('dotenv').config()

const imageRoute = require('./routes/image')
const captionRoute = require('./routes/caption')

const app = express()
const PORT = process.env.PORT || 3001

app.use(cors())
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