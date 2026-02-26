const express = require('express')
const { getCaptionHandler } = require('../controllers/captionController')

const router = express.Router()

router.post('/', getCaptionHandler)

module.exports = router