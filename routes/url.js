const router = require('express').Router()
const { shortenUrl, redirectCreatedUrl, renderFrontPage } = require('../controllers/urlController')

router.post('/api/url/short', (req, res) => shortenUrl(req, res))

router.get('/:urlCode', (req, res) => redirectCreatedUrl(req, res))

router.get('/shortie/home', (req, res) => renderFrontPage(req, res))

module.exports = router