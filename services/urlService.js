const Url = require('../model/url')
const validUrl = require('valid-url')
const shortid = require('shortid')
const config = require('config')

module.exports = class UrlService{
    static async urlShortener(clientUrl) {
        const baseUrl = config.get('baseUrl')
        //check if baseUrl is not a valid url
        if(!validUrl.isUri(baseUrl)) {
            throw new Error('Invalid baseurl!')
        }

        //create the url code
        const urlCode = shortid.generate()

        //check the client's given long url
        if(validUrl.isUri(clientUrl)) {
            try{
                let url = await Url.findOne({ longurl: clientUrl })
                if(url) {
                    return url.shorturl
                }
                const shortUrl = baseUrl + '/' + urlCode
                url = new Url({
                    urlCode: urlCode,
                    longurl: clientUrl,
                    shorturl: shortUrl,
                    date: new Date()
                })
                await url.save()
                return shortUrl
            }
            catch(err){
                console.error(err.message)
            }
        }
        else{
            throw new Error('Invalid url!')
        }
    }

    static async modifyCreatedUrl(urlCode) {
        try{
            return await Url.findOne({ urlCode: urlCode })
        }
        catch(err) {
            console.error(err)
        }
    }
}