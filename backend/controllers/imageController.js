
const { getImage } = require('../services/pixabay')

const getImageHandler = async (req, res) => {


  try {
    const { query } = req.query

    if (!query) {
      return res.status(400).json({ error: 'Query parameter is required' })
    }

    const image = await getImage(query)
    return res.status(200).json(image)

  } catch (error) {
    console.error('Image fetch error:', error.message)
    return res.status(500).json({ error: 'Failed to fetch image' })
  }
}

module.exports = { getImageHandler }