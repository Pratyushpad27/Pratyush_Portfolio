const { generateCaption } = require('../services/openrouter')

// Handles POST /api/caption
const getCaptionHandler = async (req, res) => {
  try {
    const { query } = req.body

    if (!query) {
      return res.status(400).json({ error: 'Query is required' })
    }

    const caption = await generateCaption(query)
    return res.status(200).json({ caption })

  } catch (error) {
    console.error('Caption error:', error.message)
    return res.status(500).json({ error: 'Failed to generate caption' })
  }
}

module.exports = { getCaptionHandler }