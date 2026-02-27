const axios = require('axios')

const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY

const generateCaption = async (query) => {
  try {
    const response = await axios.post(
      'https://openrouter.ai/api/v1/chat/completions',
      {
        model: 'google/gemma-3-4b-it:free',
        messages: [
          {
            role: 'user',
            content: `Write exactly one short caption (2-3 sentences) for a "${query}" photo. Be specific to ${query}. Do not give options, just write one single caption directly.`
          }
        ]
      },
      {
        headers: {
          'Authorization': `Bearer ${OPENROUTER_API_KEY}`,
          'Content-Type': 'application/json'
        }
      }
    )

    const raw = response.data.choices[0].message.content
    const match = raw.match(/"([^"]{20,})"/)
    const caption = match ? match[1] : raw.split('\n')[0]
    return caption
  } catch (error) {
    console.error('OpenRouter error:', error.response?.data || error.message)
    throw error
  }
}

module.exports = { generateCaption }