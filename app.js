const express = require('express')
const app = express()
require('dotenv').config({path: './config/.env'});
const port = process.env.PORT || 5000
const middleware = require('./middlewares/middleware')
const connectDB = require('./config/db')
const routes = require('./routes/index')

middleware(app)
connectDB()
routes(app)


app.listen(port, () => {
    console.log(`server is running on ${port}`)
})