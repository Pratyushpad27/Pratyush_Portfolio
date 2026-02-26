const axios = require('axios')

const PIXABAY_API_KEY = process.env.PIXABAY_API_KEY

const getImage = async (query) => {
  try {
    const response = await axios.get('https://pixabay.com/api/', {
      params: {
        key: PIXABAY_API_KEY,
        q: query,
        image_type: 'photo',
        per_page: 20,
        safesearch: true,
      }
    })

    const hits = response.data.hits
    if (!hits || hits.length === 0) {
      throw new Error(`No images found for query: ${query}`)
    }

    const randomIndex = Math.floor(Math.random() * hits.length)
    const image = hits[randomIndex]

    return {
      url: image.webformatURL,
      photographer: image.user
    }
  } catch (error) {
    console.error('Pixabay error:', error.response?.data || error.message)
    throw error
  }
}

module.exports = { getImage }