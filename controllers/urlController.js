const UrlService = require('../services/urlService')

module.exports = class urlController{
    static async shortenUrl(req, res) {
        try{
            const url = await UrlService.urlShortener(req.body.longurl)
            if(!url) {
                return res.status(400).json('Invalid url, please check your url and try again')
            }
            return res.status(200).json({
                status: 'success',
                url
            })
        }
        catch(err) {
            return res.status(500).json('Server error, try again later!')
        }
    }

    static async redirectCreatedUrl(req, res) {
        try {
            let url = await UrlService.modifyCreatedUrl(req.params.urlCode)
            if(!url) {
                return res.status(400).json('Bad request!')
            }
            return res.redirect(url.longurl)
        }
        catch(err) {
            return res.status(500).json('server error')
        }
    }
}