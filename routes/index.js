const url = require('./url')

module.exports = (app) => {
    app.use('/', url)
}