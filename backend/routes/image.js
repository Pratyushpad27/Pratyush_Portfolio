const express = require('express')
const { getImageHandler } = require('../controllers/imageController')

const router = express.Router()

router.get('/', getImageHandler)

module.exports = router