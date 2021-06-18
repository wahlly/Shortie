const config = require('config')
const db = config.get('mongoURI')
const mongoose = require('mongoose')

module.exports = async () => {
    try {
        await mongoose.connect(db, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        })
        console.log('mongodb is connected successfully')
    }
    catch(err) {
        console.error(err.message)
        process.exit(1)
    }
}