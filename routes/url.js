const router = require('express').Router()
const { shortenUrl, redirectCreatedUrl } = require('../controllers/urlController')

router.post('/api/url/short', (req, res) => shortenUrl(req, res))

router.get('/:urlCode', (req, res) => redirectCreatedUrl(req, res))

module.exports = router