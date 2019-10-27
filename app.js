const express = require('express')
const logger = require('morgan')
const bodyParser = require('body-parser')

var app = module.exports = express()

const routes = require('./config/routes')

app.use(logger('dev'))
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use('', routes)

app.listen(3000, () => {
})
