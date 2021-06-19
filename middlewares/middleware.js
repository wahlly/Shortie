const express = require('express')
const path = require('path')

module.exports = (app) => {
    app.use(express.json())
    app.use(express.urlencoded({ extended: false }))
    app.set('view engine', 'ejs')
    app.set('views', path.join(__dirname, '../views'))
    app.use(express.static(path.join(__dirname, '../public')))
}